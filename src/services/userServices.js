const User =require( "../models/userModel")

const loginService = async (email) => User.findOne({
    where: {email}
})

module.exports = loginService
