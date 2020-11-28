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

	async getAllTemplates() {
		const response = await this.request({
			uri: `${process.env.API_PATH}content/widget-templates`,
			method: 'GET',
			description: `get all templates`,
		})
		return JSON.parse(response.body);
	}

	async createNewTemplate(data) {
		const response = await this.request({
			uri: `${process.env.API_PATH}content/widget-templates`,
			method: 'POST',
			description: `create new templates`,
			data: data
		})
		return JSON.parse(response.body);
	}

	async getAllWidget() {
		const response = await this.request({
			uri: `${process.env.API_PATH}content/widgets`,
			method: 'GET',
			description: `get all widgets`,
		})
		return JSON.parse(response.body);
	}

	async createNewWidget(data) {
		const response = await this.request({
			uri: `${process.env.API_PATH}content/widgets`,
			method: 'POST',
			description: `create new widget`,
			data: data
		})
		return JSON.parse(response.body);
	}

}

module.exports = BigCommerce;