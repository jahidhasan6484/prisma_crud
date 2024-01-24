const prisma = require("../../prisma/config");

const signUp = async (req, res) => {
  try {
    const newUser = await prisma.user.create({ data: req.body });
    res.send(newUser);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

module.exports = {
  signUp,
};
