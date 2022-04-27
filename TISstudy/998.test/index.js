const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;

// app.get("/goods/list", (req, res) => {
//   res.send("상품 목록 페이지");
// });
// app.get("/goods/detail", (req, res) => {
//   res.send("상품 상세 페이지");
// });
// app.get("/user/login", (req, res) => {
//   res.send("로그인 페이지");
// });
// app.get("/user/register", (req, res) => {
//   res.send("회원가입 페이지");
// });

const goodsRouter = require("./routers/goods");
app.use("/api", [goodsRouter]);
const mongoose = require("mongoose");

app.get("/mongodb", async (req, res) => {
  await mongoose.connect("mongodb://localhost/voyage", {
    useNewUrlParser: true,
    ignoreUndefined: true,
    // 아래는 최신버전에선 호환되지 않는 명령어라고함
    // useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true,
  });
  const { Schema } = mongoose;
  const goodsSchema = new Schema({
    goodsId: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    thumbnailUrl: {
      type: String,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
    },
  });
  let Goods = mongoose.model("Goods", goodsSchema);
  await Goods.create({
    goodsId: 1,
    name: "맛있는 저녁",
    thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRQ3NDs5bjulPr3JaXJzP7DH3Y-71WX9wzQ7N8XD9KLUHjT6L&us",
    category: "food",
    price: 15000,
  });
  res.send("ok");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
