const ComLink = require('../models/comlink_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllPost = (req, res) => {
  ComLink.find()
    .then((allPost) => {
      res.json({ ComLink: allPost });
    })
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err });
    });
};

const findUserbyEmail = (req, res) => {
  ComLink.findOne({ p_email: req.params.pemail })
    .then((ComLink) => {
      res.json({ ComLink });
    })
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err });
    });
};

const findUserbyPass = (req, res) => {
  ComLink.findOne({ p_cpass: req.params.pcpass })
    .then((ComLink) => {
      res.json({ ComLink });
    })
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err });
    });
};

const findUser = (req, res) => {
  const pemail = req.params.pemail;
  const pcpass = req.params.pcpass;

  ComLink.findOne({ p_email: pemail, p_cpass: pcpass })
    .then((ComLink) => {
      if (ComLink) {
        res.json({ ComLink });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Something went wrong', error: err });
    });
};

const newAccount = (req, res) => {
  ComLink.create(req.body)
    .then((newAccount) => {
      res.json({ newAccount: newAccount, status: 'successfully inserted' });
    })
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err });
    });
};

const newPost = (req, res) => {
  ComLink.create(req.body)
    .then((newPost) => {
      res.json({ newPost: newPost, status: 'successfully posted' });
    })
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err });
    });
};

const findPostByID = (req, res) => {
  ComLink.findById({ _id: req.params.pid })
    .then((ComLink) => {
      res.json({ ComLink });
    })
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err });
    });
};

const findPostByIDandUpdate = (req, res) => {
  ComLink.findByIdAndUpdate({ _id: req.params.pid }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((uPost) => {
      res.json({ uPost: uPost, status: 'successfully updated the post' });
    })
    .catch((err) => {
      console.error(err);
      res.json({ message: 'Something went wrong', error: err });
    });
};

const findPostByIdDelete = (req, res) => {
  ComLink.findByIdAndDelete({ _id: req.params.pid })
    .then((deletedPost) => {
      res.json({
        ComLink: deletedPost,
        message: 'Successfully deleted the post',
      });
    })
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err });
    });
};

module.exports = {
  newAccount,
  newPost,
  findPostByID,
  findUser,
  findAllPost,
  findPostByIDandUpdate,
  findUserbyEmail,
  findUserbyPass,
  findPostByIdDelete,
};
