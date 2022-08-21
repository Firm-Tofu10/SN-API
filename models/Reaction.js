const { DateTypes } = require('sequelize');
const { Schema,model } = require('mongoose');
const sequelize = require('../config/connection.js');

const ReactionSchema = new Schema
(
	{
		reactionId:{
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId,
		},
		reactionBodyt:{
			type: DateTypes.String,
			required: true,
				maxLength: 280,
		},
		username:{
		type: DateTypes.STRING,
		required: true,
		},
		createdAt:[{
			type: Date,
			default: Date.now(),
			get:(timestamp) = timestamp.toLocalString(),
		}],
		updatedAt:{
			type: Date,
			default: Date.now(),
			get:(timestamp) = timestamp.toLocalString(),
		}
	},
	{
		toJSON: {
      getters: true,
      virtuals: true,
    },
    timestamps: true,
    id: false,
	},
	);
	let Reaction = ReactionSchema;
	module.exports = Reaction;