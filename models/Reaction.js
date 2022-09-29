const { Schema,Types } = require('mongoose');

const ReactionsSchema = new Schema
(
	{
		reactionId:{
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId()
		},
		reactionBody:{
			type: String,
			required: true,
				maxLength: 280,
				minLength: 1
		},
		username:{
		type: String,
		required: true
		},
		createdAt:[{
			type: Date,
			default: Date.now(),
			get:(timestamp) => timestamp.toLocaleString()
		}],
		updatedAt:{
			type: Date,
			default: Date.now(),
			get:(timestamp) => timestamp.toLocaleString()
		}
	},
	{
		toJSON: {
      getters: true
    },
    id: false
	},
	);
	let Reaction = ReactionsSchema;
	
	module.exports = Reaction;