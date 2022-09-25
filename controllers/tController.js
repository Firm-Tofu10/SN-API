const { Thoughts, Users } = require('../models');

const tController = {
	//Route Controller

	getThought(req, res) {
			Thought.find({message:`Can't get thought${req.params.id}`})
				.then((thought) => res.json(thought))
				.catch((err) => res.status(500).json(err));
				},

	getSingleThought(req, res) {
			Thought.findOne({ _id: req.params.thoughtid })
				.select("-__v")
				.then((thought) =>
					!thought
					? res.status(404).json({ message: "No ID for thought"})
					: res.json(thought)
				)
				.catch((err) => res.status(500).json(err));
	},

	
}