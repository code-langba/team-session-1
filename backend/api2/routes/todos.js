const router = require('express').Router();

router.route('/todos').get((req, res) => {
	res.send('todos');
});
router.route('/yahallo').get((req, res) => {
	res.send('yahallo');
});

module.exports = router;
