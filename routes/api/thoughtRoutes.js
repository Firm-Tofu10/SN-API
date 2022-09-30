const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought
  // addReaction,
  // removeReaction,
} = require('../../controllers/tController.js')

router.route('/').get(getThoughts).post(createThought);

// router.route('/:thoughtsid/reactions')
// .post(updateRection)
// .delete(deleteRection);

router.route('/:thoughtsid')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// router.route('/:thoughtId/reactions').post(addReaction);

// router.route('/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;