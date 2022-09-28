const { Schema,model } = require('mongoose');
// const thought = require('./Thought')

const userSchema = new Schema
(
	{
		username:{
			type: String,
			unique: true,
			required:  [true, 'Username is required'],
			trim: true
		},
		email:{
			type: String,
			required: [true, 'Email is required'],
			unique: true,
			validate: [/.+@.+\..+/, 'Please fill a valid email address']
		},
		thoughts:[{
		type: Schema.Types.ObjectId,
		ref:"Thought"
		}],
		friends:[{
			type: Schema.Types.ObjectId,
			ref:"User"
		}]
	},
	{
		toJSON: {
      virtuals: true,
    },
    id: false
	},
	);
	userSchema.virtual("fiendCount").get(function() {
		return this.friends.length;
	});
	let User = model("User",userSchema);
	
	module.exports = {User};
