var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/*------------------------------------------------------------------------------------ */
//Front End = getAllMB.js - for the Show moodboards page
router.get("/", async (req, res, next) => {
  try {
    const results = await db(
      "SELECT m.*, e.* FROM moodboards AS m RIGHT JOIN elements AS e ON m.id = e.boardId;"
    );
    res.send(results.data);
  } catch (error) {
    res.status(500).send({ error: err.message });
  }
});

/*------------------------------------------------------------------------------------ */
//Front End = FetchMB.js - refreshes in edit mode, shows in preview mode
router.get("/:id", async (req, res, next) => {
  const moodboardId = req.params.id;
  try {
    const results = await db(
      `SELECT m.*, e.* FROM moodboards AS m RIGHT JOIN elements AS e ON m.id = e.boardId WHERE m.id = ${moodboardId}`
    );
    console.log(results.data);
    if (results.data.length >= 1) {
      res.send(results.data);
    } else {
      res.status(404).send("Moodboard not found.");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

/*------------------------------------------------------------------------------------ */
//Front End = CreateMoodboard.js - new moodboard
router.post("/", async (req, res) => {
  const { name} = req.body;

  try {
    //creating a new board
    await db(`INSERT INTO moodboards (name) VALUES ('${name}')`);
    //getting the id of the new board
    const results = await db(
      `SELECT id FROM moodboards ORDER BY id DESC LIMIT 1`
    );
    const boardId = results.data[0].id;

    // for (const element of elements) {
    //   await db(
    //     `INSERT INTO elements (boardId, value, type, top, \`left\`) VALUES (${boardId}, '${element.value}', '${element.type}', '${element.top}', '${element.left}')`
    //   );
    // }
    res.send(results.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

/*------------------------------------------------------------------------------------ */
//Front End = PostElement.js - to add new elements to existing Moodboard
router.post("/:id", async (req, res) => {
  let id = req.params.id;
  const {boardId, value, type, top, left,} = req.body;

  try {
    const results = await db(
        `INSERT INTO elements (boardId, value, type, top, \`left\`) VALUES (${boardId}, '${value}', '${type}', '${top}', '${left}')`
      );
    res.send(results.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

/*------------------------------------------------------------------------------------ */
//Front End = UpdateElement.js - to edit elements
router.put("/:id/:eid", async (req, res) => {
  const moodboardId = req.params.id;
  const elementId = req.params.eid;
  const {column, data} = req.body;
  let sql = `
      UPDATE elements SET '${column}'= '${data}'
      WHERE id = ${elementId}
     `;
  try {
    await db(sql);
    let result = await db(`SELECT m.*, e.* FROM moodboards AS m RIGHT JOIN elements AS e ON m.id = e.boardId WHERE m.id = ${moodboardId}`);
    res.send(result.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

/*------------------------------------------------------------------------------------ */
//Front End = UpdateName.js - to edit background and board name
router.put("/:id", async (req, res) => {
  const moodboardId = req.params.id;
  const {name} = req.body;
  let sql = `
      UPDATE moodboards SET name= '${name}'
      WHERE id = ${moodboardId}
     `;
  try {
    await db(sql);
    let result = await db(`SELECT m.*, e.* FROM moodboards AS m RIGHT JOIN elements AS e ON m.id = e.boardId WHERE m.id = ${moodboardId}`);
    res.send(result.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


/*------------------------------------------------------------------------------------ */
//Front End = DeleteElement.js - to remove elements
router.delete("/:id/:eid", async (req, res) => {
  const moodboardId = req.params.id;
  const elementId = req.params.eid;
  let sql = `
      DELETE FROM elements
      WHERE id = ${elementId}
     `;
  try {
    await db(sql);
    let result = await db(`SELECT m.*, e.* FROM moodboards AS m RIGHT JOIN elements AS e ON m.id = e.boardId WHERE m.id = ${moodboardId}`);
    res.status(201).send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});
module.exports = router;
