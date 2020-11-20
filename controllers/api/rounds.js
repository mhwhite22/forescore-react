const Day = require('../../models/round');
const { default: RoundForm } = require('../../src/Components/RoundForm/RoundForm');

module.exports = {
    create
}

async function create(req, res) {
    const round = await RoundForm.create(req.body);
    res.status(201).json(round);
}