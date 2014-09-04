'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	platenumber: {
		type: String,
		required: 'License Plate cannot be blank',
		trim: true
	},
	platenumbercheck: {
		type: Boolean,
		default: false
	},
	plateorigin: {
		type: String
	},
	plateorigincheck: {
		type: Boolean,
		default: false
	},
	vehicletype: {
		type: String
	},
	vehicletypecheck: {
		type: Boolean,
		default: false
	},
	vehiclemake: {
		type: String
	},
	vehiclemakecheck: {
		type: Boolean,
		default: false
	},
	driversex: {
		type: String
	},
	formwhen: {
		type: Date
	},
	formwhere: {
		type: String
	},
	formwhere: {
		type: String
	},
	message: {
		type: String,
		required: 'Message cannot be blank',
		trim: true
	},
	formanonymous: {
		type: Boolean,
		default: false
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Article', ArticleSchema);