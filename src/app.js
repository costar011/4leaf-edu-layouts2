import express from "express";
import path from "path"; // 현재 위치를 구하는 아이

// PORT
const PORT = 3000;

// app 이라는 변수를 만듬
const app = express();

// view engine 으로 pug를 보여준다.
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "/assets")));

// "/" 를 get해서 사용자에게 보여주는 웹페이지
app.get("/", (req, res) => {
  res.render("");
});

app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
