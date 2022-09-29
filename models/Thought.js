const { Schema,model } = require('mongoose');
const ReactionsSchema = require('./Reaction');

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
			get:(timestamp) => timestamp.toLocaleString()
		},
		username:[{
		type: String,
		required: true
		}], 
		//casuing issues
		reactions:[
			ReactionsSchema
		],
		
	},
	{
		toJSON: {
      getters: true
    },
    id: false
	},
	);
	
	// Create a virtual property `getTags` that gets the amount of tags associated with an application
	thoughtSchema.virtual('reactionsCount').get(function () {
	return this.reactions.length;
});

// Initialize our Application model
const Thought = model('Thought', thoughtSchema);
	
	module.exports = {Thought};