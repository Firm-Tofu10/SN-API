const router = require('express').Router();
const thoughtsRoutes = require('./thoughtRoutes');
const usersRoutes = require('./userRoutes');

router.use('./thoughtRoutes.js', thoughtsRoutes);

router.use('./userRoutes.js', usersRoutes);

module.exports = router;