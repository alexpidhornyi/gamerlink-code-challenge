import User from '../models/user';
import Post from '../models/post';
import usersData from '../data'


export function getUsers(req, res) {
  User.find({}).exec((err, users) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ users });
  });
}

export function getUser(req, res) {
  User.findOne({ displayName: req.params.name }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user });
  });
}

export function populateDatabase(req, res) {
  for (var i = 0; i < usersData.length; i++) {
    var currentUser = usersData[i];
    insertUser(currentUser);
  }
  function insertUser(user) {
    User.findOne( {displayName: user.displayName}, function (err, result) {
      if (!result) {
        var newUser = new User(user);
        newUser.save((err, saved) => {
          if (err) {
            console.log('err', err);
          }
        });
      }
    });
  }
  res.send('done');  
}

