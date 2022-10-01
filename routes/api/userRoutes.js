const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
  } = require('../../controllers/uController');


router.route('/').get(getAllUsers).post(createUser);

router.route('/:Usersid').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:id/friends/:friendid').post(addFriend).delete(deleteFriend)

module.exports = router; 