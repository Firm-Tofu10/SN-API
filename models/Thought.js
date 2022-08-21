const { DateTypes } = require('sequelize');
const { Schema,model } = require('mongoose');
const sequelize = require('../config/connection.js');
const thought = require('./Thought')

const userSchema = new Schema
(
	{
		thoughtText:{
			type: DateTypes.STRING,
			required: {true,maxLength: 20},
			
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
	});
	let User = model("user",userSchema);
	module.exports = User;