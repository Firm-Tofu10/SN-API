const { DateTypes } = require('sequelize');
const { Schema,model } = require('mongoose');
const sequelize = require('../config/connection.js');
const thought = require('./Thought')

const userSchema = new Schema
(
	{
		Username:{
			type: DateTypes.STRING,
			allowUnique: true,
			required:  [true, 'Username is required'],
			trim: true,
		},
		email:{
			type: DateTypes.STRING,
			required: [true, 'Email is required'],
			allowUnique: true,
			validate: [validateEmail, 'Please fill a valid email address'],
		},
		thought:[{
		type: Schema.Types.ObjectId,
		ref:"Thought"
		}],
		friends:[{
			type: Schema.Types.ObjectId,
			ref:"user"
		}]
	},
	{
		toJSON: {
      virtuals: true,
    },
    timestamps: true,
    id: false,
	},
	);
	let User = model("user",userSchema);
	module.exports = User;
