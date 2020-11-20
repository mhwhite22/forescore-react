const express = require('express');
const router = express.Router();
const roundsCtrl = require('../../controllers/api/rounds');

router.use(require('../../config/auth'));

router.post('/', roundsCtrl.create);
router.get('/', roundsCtrl.index);


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized'});
}

module.exports = router;