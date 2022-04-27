const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;
const fs = require("fs");

app.get("/", (req, res) => {
  res.send("connect.");
});

// json파일 읽기
// fs.readFile("../patient.json", "utf-8", (error, jsonFile) => {
//   if (error) return console.log(error);
//   // console.log(jsonFile);

//   const jsonData = JSON.parse(jsonFile);
//   console.log(jsonFile);

//   // const patient = jsonData.patient;
//   // patient.forEach((patient) => {
//   //   console.log(patient);
//   // });
// });

//patient
app.get("/api/:type", (req, res) => {
  let { type } = req.params;
  console.log(type);
  if (type === "patient") {
    fs.readFile("../patient.json", "utf-8", (error, jsonFile) => {
      if (error) return console.log(error);
      const jsonData = JSON.parse(jsonFile);
      res.send(jsonData);
    });
  } else {
    res.send("type mismatch!");
  }
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
