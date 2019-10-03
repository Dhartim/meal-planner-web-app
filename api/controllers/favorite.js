const Favorite = require("../models").Favorite;
const jwt = require("jsonwebtoken");
const config = require("../config/config.json");

function getUserId (req) {
  const token = req.headers.authorization.split(" ")[1];
  const decode = jwt.verify(token, config.jwt.jwtSecret);
  return decode.user.id
}

function list (req, res) {
  let userid = getUserId(req)
  return Favorite.findAll({ 
    where: {
        userId : userid
      }
    })
      .then(favorites => res.status(200).send(favorites))
      .catch( error => res.status(400).send(error))
}

function add ( req, res ) {
  let userid = getUserId(req)
  return Favorite
    .create({
      userId: userid,
      mealId: req.body.mealId
    })
    .then(favorite => res.status(201).send(favorite))
    .catch(error => res.status(400).send(error))
}

function destroy ( req, res ) {
  return Favorite
    .findByPk( req.params.id)
    .then( favorite => {
      if( !favorite ) {
        return res.status(400).send({
          message: "Could not find favorite to delete"
        })
      }
      return favorite.destroy()
      .then(()=> res.status(204).send())
      .catch(error => res.status(400).send(error))
    })
}
module.exports = {
  list,
  add,
  destroy
}