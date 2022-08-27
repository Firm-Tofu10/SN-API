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
	
	// Create a virtual property `getTags` that gets the amount of tags associated with an application
	thoughtSchema
.virtual('friendcount')
// Getter
.get(function () {
	return this.friends.length;
});

// Initialize our Application model
const Thought = model('Thought', thoughtSchema);
	
	module.exports = Thought;