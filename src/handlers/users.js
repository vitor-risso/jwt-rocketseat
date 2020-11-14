const userService = require('../services/user')

const getAllUsers = async ctx => {
  ctx.body = await userService.getUsers()
}

const createUser = async ctx => {
  console.log(ctx.state)
  ctx.body = await userService.createUser(ctx.request.body)
}

module.exports = {
  getAllUsers,
  createUser,
}
