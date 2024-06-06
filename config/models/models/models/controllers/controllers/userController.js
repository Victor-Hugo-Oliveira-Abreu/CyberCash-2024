const User = require('../models/userModel');
const Account = require('../models/accountModel');

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.send(user);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.createAccount = async (req, res) => {
    const account = new Account({
        user: req.user._id
    });

    try {
        const savedAccount = await account.save();
        res.send(savedAccount);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getAccount = async (req, res) => {
    try {
        const account = await Account.findOne({ user: req.user._id });
        res.send(account);
    } catch (err) {
        res.status(400).send(err);
    }
};
