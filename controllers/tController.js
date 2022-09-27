const { Thoughts, Use, Thought } = require('../models/Thought');

const tController = {
	//Route Controller
//Gets Thoughts
	getThoughts(req, res) {
			Thoughts.find({message:`Can't get Thoughts${req.params.id}`})
				.then((Thoughts) => res.json(Thoughts))
				.catch((err) => res.status(500).json(err));
				},
//Gets single Thought
	getSingleThought(req, res) {
		Thoughts.findOne({ _id: req.params.thoughtsid })
				.select("-__v")
				.then((Thoughts) =>
					!Thoughts
					? res.status(404).json({ message: `Cant get Single Thoughts.`})
					: res.json(Thoughts)
				)
				.catch((err) => res.status(500).json(err));
	},
	//creates a Thought
	createThought(req, res) {
    Thoughts.create(req.body)
      .then((Thoughts) => res.json(Thoughts))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
	
},
//Deletes Thought
deleteThought(req, res) {
	Thoughts.findOneAndDelete({ _id: req.params.ThoughtsId })
		.then((Thoughts) =>
			!Thoughts
				? res.status(404).json({ message: `Cant delete single Thoughts` })
				: Student.deleteMany({ _id: { $in: Thoughts.students } })
		)
		.then(() => res.json({ message: `Thoughts and students deleted!` }))
		.catch((err) => res.status(500).json(err));
},
//Updates Thought
updateThought(req, res) {
	Thoughts.findOneAndUpdate(
		{ _id: req.params.ThoughtsId },
		{ $set: req.body },
		{ runValidators: true, new: true }
	)
		.then((Thoughts) =>
			!Thoughts
				? res.status(404).json({ message: `No Thoughts with this id!` })
				: res.json(Thoughts)
		)
		.catch((err) => res.status(500).json(err));
},
};
module.exports = tController;