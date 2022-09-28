const router = require('express').Router();
const thoughtsRoutes = require('./thoughtRoutes');
const usersRoutes = require('./userRoutes');

router.use('/thoughtRoutes', thoughtsRoutes);

router.use('/thoughtRoutes', usersRoutes);

module.exports = router;