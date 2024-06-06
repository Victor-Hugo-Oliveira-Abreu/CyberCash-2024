const Account = require('../models/accountModel');
const Transaction = require('../models/transactionModel');

exports.deposit = async (req, res) => {
    const { amount } = req.body;
    try {
        const account = await Account.findOne({ user: req.user._id });
        if (!account) return res.status(400).send('Account not found');

        account.balance += amount;
        await account.save();

        const transaction = new Transaction({
            account: account._id,
            amount,
            type: 'deposit'
        });
        await transaction.save();

        res.send(transaction);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.withdrawal = async (req, res) => {
    const { amount } = req.body;
    try {
        const account = await Account.findOne({ user: req.user._id });
        if (!account) return res.status(400).send('Account not found');
        if (account.balance < amount) return res.status(400).send('Insufficient funds');

        account.balance -= amount;
        await account.save();

        const transaction = new Transaction({
            account: account._id,
            amount,
            type: 'withdrawal'
        });
        await transaction.save();

        res.send(transaction);
    } catch (err) {
        res.status(400).send(err);
    }
};
