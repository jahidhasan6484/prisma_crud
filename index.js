const express = require("express");
const app = express();

app.use(express.json());

const userRoute = require("./src/user/user.route");

app.use("/api/user", userRoute);

app.listen(5000, () => {
  console.log("Prisma server running on port 5000");
});
