const { DateTypes } = require('sequelize');
const { Schema,model } = require('mongoose');
const sequelize = require('../config/connection.js');
const Reaction = require('./Reaction');

const userSchema = new Schema
(
	{
		thoughtText:{
			type: DateTypes.STRING,
			required: true,
				maxLength: 20,
		},
		createdAt:{
			type: Date,
			default: Date.now(),
			get:(timestamp) = timestamp.toLocalString(),
		},
		username:[{
		type: DateTypes.STRING,
		required: true,
		}],
		reactions:[{
			type: Schema.Types.ObjectId,
			ref:"reactions",
		}]
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
	let Thought = model("thought",ThoughtSchema);
	module.exports = Thought;