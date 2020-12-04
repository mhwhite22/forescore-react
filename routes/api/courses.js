const express = require('express');
const router = express.Router();
const coursesCtrl = require('../../controllers/api/courses');

router.use(require('../../config/auth'));

router.post('/', coursesCtrl.create);
router.get('/', coursesCtrl.index);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized'});
}

module.exports = router;