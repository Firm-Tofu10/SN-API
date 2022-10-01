const { User } = require('../models/User');

const uController = {
//Route Controller
//Gets User
	getAllUsers(req, res) {
		User.find({message:`Can't get Users${req.params.id}`})
			.then((Users) => res.json(Users))
			.catch((err) => res.status(500).json(err));
			},
//Gets single User
getSingleUser(req, res) {
	User.findOne({ _id: req.params.Usersid })
			.select("-__v")
			.then((Users) =>
				!Users
				? res.status(404).json({ message: `Cant get Single User.`})
				: res.json(Users)
			)
			.catch((err) => res.status(500).json(err));
},
//creates a User
createUser(req, res) {
	User.create(req.body)
		.then((Users) => res.json(Users))
		.catch((err) => {
			console.log(err);
			return res.status(500).json(err);
		});

},
//Deletes User
deleteUser(req, res) {
	User.findOneAndDelete({ _id: req.params.Usersid })
		.then((Users) =>
			!Users
				? res.status(404).json({ message: `Cant delete single Users` })
				: Student.deleteMany({ _id: { $in: Users.students } })
		)
		.then(() => res.json({ message: `Users and students deleted!` }))
		.catch((err) => res.status(500).json(err));
},
//Updates User
updateUser(req, res) {
	User.findOneAndUpdate(
		{ _id: req.params.Usersid },
		{ $set: req.body },
		{ runValidators: true, new: true }
	)
		.then((Users) =>
			!Users
				? res.status(404).json({ message: `No Users with this id!` })
				: res.json(Users)
		)
		.catch((err) => res.status(500).json(err));
},

addFriend(req, res) {
	User.findOneAndUpdate({ _id: req.params.userId },
		 {$push: {friends: req.params.friendid}},
		 { new: true, runValidators: true })
			.then((user) => {
					if (!user) {
							res.status(404).json({ message: "No Friend ID Found!" });
							return;
					}
					res.json(user);
			})
			.catch((err) => res.status(500).json(err));
},

deleteFriend(req, res) {
	User.findOneAndUpdate({ _id: req.params.userId },
		 { $pull: { friends: req.params.friendid } },
		 { new: true, runValidators: true })
			.then(user => {
					if (!user) {
							res.status(404).json({ message: 'No Friend ID Found!' });
							return;
					}
					res.json(user);
			})
			.catch(err => res.status(400).json(err));
}
};
module.exports = uController;
