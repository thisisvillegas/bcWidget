const BaseService = require('./base.service');

class BigCommerce extends BaseService {
	// constructor(userProfile) {
	// 	super(userProfile);
	// 	this.apiURL = `${this.userProfile.hosts.apibodhi}`;
	// }

	async getAllProducts() {
		const response = await this.request({
			uri: `${process.env.API_PATH}catalog/products`,
			method: 'GET',
			description: `get all products`,
		});
		return JSON.parse(response.body);
	}

	async getImageUrlByItem(itemID) {
		const response = await this.request({
			uri: `${process.env.API_PATH}catalog/products/${itemID}/images`,
			method: 'GET',
			description: `get images by item id`,
		})
		return JSON.parse(response.body);
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