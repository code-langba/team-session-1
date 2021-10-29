const router = require('express').Router();

router.route('/user').get((req, res) => {
	res.send('user');
});
router.route('/address').get((req, res) => {
	res.send('address');
});

module.exports = router;
