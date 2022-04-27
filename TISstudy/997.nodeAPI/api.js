const express = require("express");
const app = express();

const server = app.listen(3000, () => {
  console.log("Start Server : localhost:3000");
});

app.get("/api/users/:type", async (req, res) => {
  // res.send("connect.");
  let { type } = req.params;

  console.log(type);

  if (type == "seoul") {
    let data = [
      { name: "홍길동", city: "seoul" },
      { name: "박지형", city: "seoul" },
    ];
    res.send(data);
  } else if (type == "jeju") {
    let data = [
      { name: "김철수", city: "jeju" },
      { name: "윤규빈", city: "jeju" },
    ];
    res.send(data);
  } else {
    res.send("Type is not correct.");
  }
  res.send("ok");
});
