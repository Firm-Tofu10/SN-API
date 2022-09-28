const router = require('express').Router();
const thoughtsRoutes = require('./thoughtRoutes');
const usersRoutes = require('./userRoutes');

router.use('/thought', thoughtsRoutes);

router.use('/user', usersRoutes);

module.exports = router;