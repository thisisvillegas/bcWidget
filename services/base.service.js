const request = require('request');
const {
	Logger
} = require('../config/Logger');
const expect = require('chai').expect;

//This is mostly used for API Backend work
class BaseService {
	// constructor(userProfile) {
	// 	this.userProfile = userProfile;
	// }

	async request({
		uri,
		method,
		data,
		description,
	}) {
		Logger.info(`${description}...`);
		Logger.debug('Request Info:');
		Logger.debug(JSON.stringify({
			uri,
			method,
			data,
			description,
		}, null, '\t'));
		return new Promise((resolve, reject) => {
			request({
					method,
					uri,
					headers: {
						"X-Auth-Token": `${process.env.ACCESS_TOKEN}`,
						"content-type": "application/json",
						"Accept": "application/json"
					},
					rejectUnauthorized: false,
					body: JSON.stringify(data),
				},
				(error, response, body) => {
					if (error) {
						Logger.error(`Unable to ${description}:\n${error}`);
						reject(new Error(error));
					} else if (typeof body === 'undefined') {
						Logger.error('The response body is undefined');
						reject(body);
					} else {
						Logger.debug(`${description} response (code: ${response.statusCode}): `);
						try {
							Logger.debug(JSON.stringify(JSON.parse(body), null, '\t'));
							resolve(response);
						} catch (e) {
							Logger.debug(body);
							resolve(response);
						}
					}
				}
			);
		});
	}
}

module.exports = BaseService;