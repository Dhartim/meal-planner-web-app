//models
const UserModel = require("../models").User

//libraries
const Sequelize = require("sequelize")
const bcrypt = require("bcryptjs")

const findUserById = req => {UserModel.findById(req.params.userid)}
const notFound = {message: 'User Not Found'}

function create(req, res) {
  UserModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password)
  })
  .then(user=> res.status(201).send(user))
  .catch(error => res.status(400).send(error));
}

function update(req, res) {
  return findUserById(req)
  .then(user => {
    if (!user) {
      return res.status(200).send(notFound)
    }
    return UserModel.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password)
    })
    .then(() => res.status(200).send(user))
    .catch(error => res.status(400).send(error))
  })
  .catch(error => res.status(400).send(error))
}

function getById(req, res) {
  return findUserById(req)
  .then(user => {
    return user ? res.status(200).send(user) : res.status(200).send(notFound)
  })
  .catch(error => res.status(400).send(error))
}

module.exports = {
  create,  
  update, 
  getById
};