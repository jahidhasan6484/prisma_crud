const express = require("express");
const app = express();

app.use(express.json());

const userRouter = require("./src/user/user.route");

app.use("/api/user", userRouter);

app.listen(5000, () => {
  console.log("Prisma server is running on port", 5000);
});
