const router = require('express').Router();

const Users = require('./user-model.js');

const restricted = require('../auth/restriction.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).json({ message: "The user with the specified id does not exist." });
  } else {
    Users.findById(id)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      res.status(500).json({ message: "The user information could not be retrieved." });
    })
  }
});

router.delete('/:id', restricted, (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).json({ message: "The user with the specified ID does not exist." })
  }
  Users.remove(id)
   .then(user => {
     res.json(user);
   })
    .catch(err => {
      res.status(500).json({ message: "The user could not be removed" });
    })
});

module.exports = router;
