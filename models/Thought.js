const { Schema,model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema
(
	{
		thoughtText:{
			type: String,
			required: "thought is mangnitory",
				maxLength: 250,
				minLength: 1
		},
		createdAt:{
			type: Date,
			default: Date.now(),
			get:(timestamp) => dateFormer(timestamp)
		},
		username:[{
		type: String,
		required: true
		}],
		reactions:[
			Reaction
		]
	},
	{
		toJSON: {
      getters: true
    },
    id: false
	},
	);
	let Thought = model("Thought",thoughtschema);
	module.exports = Thought;