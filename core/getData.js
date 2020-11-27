const axios = require('axios')
const {
    Logger
} = require('../config/Logger')

const BigCommerce = require('../services/bigCommerce')
let bigCommerce = new BigCommerce()

async function getData() {

    Logger.info('starting to gather data')
    let itemIDArray = []
    let imageURL = []

    try {

        Logger.info('looking up items')
        let itemIDArrayResponse = await bigCommerce.getAllProducts()

        for (let i = 0; i < itemIDArrayResponse.data.length; i++) {
            itemIDArray.push({
                "id": itemIDArrayResponse.data[i].id,
                "name": itemIDArrayResponse.data[i].name,
            })
        }
        Logger.info(`found ${itemIDArray.length} items`)
        Logger.info('using product ids to find image URLs')

        for (let i = 0; i < itemIDArray.length; i++) {
            let imageURLResponse = await bigCommerce.getImageUrlByItem(itemIDArray[i].id)
            for (let j = 0; j < imageURLResponse.data.length; j++) {
                const element = imageURLResponse.data[j];
                imageURL.push({
                    "product_id": imageURLResponse.data[j].product_id,
                    "id": imageURLResponse.data[j].id,
                    "url_standard": imageURLResponse.data[j].url_standard
                })
            }
        }

        Logger.info(`found ${imageURL.length} URLs`)
        // console.log('imageURL', imageURL);
        return imageURL

    } catch (error) {
        console.log('error', error);
    }
}

exports.getData = getData;