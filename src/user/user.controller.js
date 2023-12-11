const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const signUp = async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        first_name: "Jahid",
        last_name: "Hasan",
        age: 23,
      },
    });

    res.send(newUser);
  } catch (error) {
    console.log(error.message);
    res.send({
      message: "Server error",
    });
  }
};

const allUsers = async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany();

    res.send(allUsers);
  } catch (error) {
    res.send({
      message: "Server error",
    });
  }
};

module.exports = {
  signUp,
  allUsers,
};
