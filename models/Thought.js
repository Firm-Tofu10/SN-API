const { Schema,model } = require('mongoose');
// const Reaction = require('./Reaction');

const thoughtSchema = new Schema
(
	{
		thoughtText:{
			type: String,
			required: "thought is required",
				maxLength: 280,
				minLength: 1
		},
		createdAt:{
			type: Date,
			default: Date.now(),
			get:(timestamp) => timeStamp(timestamp)
		},
		username:[{
		type: String,
		required: true
		}],
		reactionBody:{
			type: String,
			required: true,
			maxLength: 280,
		},
		// Seems to not be needed and throwing errs
	},
	{
		toJSON: {
      getters: true
    },
    id: false
	},
	);
	
	// Create a virtual property `getTags` that gets the amount of tags associated with an application
	thoughtSchema
.virtual('friendcount')
// Getter
.get(function () {
	return this.friends.length;
});

// Initialize our Application model
const Thought = model('Thought', thoughtSchema);
	
	module.exports = {Thought};