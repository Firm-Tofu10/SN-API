const { Schema,Types } = require('mongoose');

const ReactionSchema = new Schema
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
			get:(timestamp) = timestamp.toLocalString()
		}],
		updatedAt:{
			type: Date,
			default: Date.now(),
			get:(timestamp) = timestamp.toLocalString()
		}
	},
	{
		toJSON: {
      getters: true
    },
    id: false
	},
	);
	let Reaction = ReactionSchema;
	module.exports = Reaction;