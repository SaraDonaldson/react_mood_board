var express = require("express");
var router = express.Router();
const db = require("../model/helper");
const bcrypt = require("bcrypt"); 
const saltRounds = 10;



router.post("/", async (req, res) => {
    const {
        firstName, 
        secondName, 
        email,
        password
    } = req.body;
  
    try {
      let sql= `INSERT INTO users (firstName, secondName, email) VALUES ("${firstName}","${secondName}", "${email}" );
      `;
      await db(sql);
      let results = await db(`SELECT id FROM users WHERE email = "${email}"`)
      let userId = results.data[0].id;
      
      //   Hashing

        const userPassword = password
        // const hashedPassword= await bcrypt.hash(userPassword, saltRounds, function(err, hash) { });
        const hashedPassword= await bcrypt.hash(password, saltRounds)
        await db(`
        INSERT INTO userCredentials (userId, password)
        VALUES ("${userId}", "${hashedPassword}")
        `);

      res.send("new user success", userId);

    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });

  /*---------------------------------------------------------------------------------------------- */
// login with hashing
  
  router.post("/login", async (req, res) => {
    let {email, password } = req.body;
  
    try {
      let sql = `SELECT id FROM users WHERE email = '${email}'`;
  
      let results = await db(sql);
  
      if (results.data.length === 0) {
        res.status(401).send({ Error: `User doesn't exist` });
      } 
        else {
        let userId = results.data[0].id;
        let dbCredentials = await db(`SELECT password FROM userCredentials WHERE userId = "${userId}"`)
        let dbPassword = dbCredentials.data[0].password

        let passwordsMatch = await bcrypt.compare(password, dbPassword);
  
        if (passwordsMatch) {
          res.send({
            message: "Login success", userId
          });
        } else {
          res.status(401).send({ Error: `Login Failed` });
        }
      }
    } catch (err) {
      res.status(500).send({ err: err.message });
    }
  });

// -------------------------------------------------------
// For testing purposes only


  router.get("/", async (req, res) => {
   
    try {
      let sql= `SELECT * FROM userCredentials`;
 
      let results = await db(sql)

      res.send(results.data);

    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });




module.exports = router;