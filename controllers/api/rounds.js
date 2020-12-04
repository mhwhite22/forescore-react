const Round = require('../../models/round');
//const { default: RoundForm } = require('../../src/Components/RoundForm/RoundForm');

module.exports = {
    create,
    index
}

async function create(req, res) {
    const round = await Round.create(req.body);
    res.status(201).json(round);
}

async function index(req, res) {
    const rounds = await Round.find({});
    res.status(200).json(rounds);
}