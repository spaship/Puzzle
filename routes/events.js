const { Router } = require('express');
const events = require('../controllers/events');
const auth = require('../middlewares/auth');
const router = new Router();

/**
 * @internal webhook for gitlab
 */
router.post('/comment', events.post);

module.exports = router;
