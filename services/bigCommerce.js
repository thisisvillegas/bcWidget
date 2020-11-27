const BaseService = require('./base.service');

class BigCommerce extends BaseService {
	// constructor(userProfile) {
	// 	super(userProfile);
	// 	this.apiURL = `${this.userProfile.hosts.apibodhi}`;
	// }

	async getAllProducts() {
		const response = await this.request({
			uri: `${process.env.API_PATH}/catalog/products`,
			method: 'GET',
			headers: {
				"X-Auth-Token": "5koshygkmuxtzunx3nxdiaatzr5fmu6",
				"content-type": "application/json",
				"Accept": "application/json"
			},
			description: `get all products`,
			expectedStatus,
		});
		return response;
	}

	// async getConcepts({
	// 	namespace
	// }) {
	// 	const description = 'get concepts';
	// 	const response = await this.request({
	// 		uri: `${this.apiURL}/${namespace}/controllers/vertx/hotschedules/getConcepts`,
	// 		method: 'GET',
	// 		description,
	// 	});
	// 	return response;
	// }

	// async getGroups(namespace, concept) {
	// 	const response = await this.request({
	// 		uri: `${this.apiURL}/${namespace}/controllers/vertx/hotschedules/${concept}/getGroups`,
	// 		method: 'GET',
	// 		description: `get groups with conceptID ${concept}`,
	// 	});
	// 	return response;
	// }
}

module.exports = BigCommerce;