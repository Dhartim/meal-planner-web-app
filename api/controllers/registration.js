//models
const UserModel = require("../models").User

//libraries
const Sequelize = require("sequelize")
const bcrypt = require("bcryptjs")


function create(req, res){
  UserModel.create({
    
  });
}

function getOne(req, res){

}

function update(req, res){

}

module.exports = {
  create, getOne, update
};