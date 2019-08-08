module.exports = {
	prompts: {
		name: {
			type: 'string',
			required: 'true',
			message: 'Project name'
		},
		type: {
			type: 'string',
			required: 'true',
			message: 'web site or web app'
		},
		description: {
			type: 'string',
			required: 'false',
			message: '',
			default: 'My Awesome project'
		},
		author: {
			type: 'string',
			message: 'Author'
		},
		extra: {
			type: 'string',
			message: 'Extra Messaging!'
		},
		ask: {
			type: 'string',
			message: "That's it (Yup/No)? "
		}},
	completeMessage: 'Project Complete!'
};