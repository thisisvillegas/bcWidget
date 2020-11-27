const axios = require('axios')
const {
    Logger
} = require('../config/Logger')


async function getData() {

    Logger.info('starting to gather data')

    let data = {
        headers: {
            "X-Auth-Token": "5koshygkmuxtzunx3nxdiaatzr5fmu6",
            "content-type": "application/json",
            "Accept": "application/json"
        }
    }
    try {
        return new Promise(function (resolve, reject) {
            let itemIDArray = []
            let imageURL = []
            Logger.info('looking up products')
            axios.get(`${process.env.API_PATH}catalog/products`, data).then(res => {
                for (let i = 0; i < res.data.data.length; i++) {
                    itemIDArray.push({
                        "id": res.data.data[i].id,
                        "name": res.data.data[i].name,
                    })
                }
                console.log('itemIDArray', itemIDArray);
                // return itemIDArray
            }).then(() => {
                Logger.info('using product ids to find image URLs')
                for (let i = 0; i < 3; i++) {
                    let itemID = itemIDArray[i].id
                    axios.get(`${process.env.API_PATH}catalog/products/${itemID}/images`, data).then(res => {

                        for (let i = 0; i < res.data.data.length; i++) {
                            imageURL.push({
                                "product_id": res.data.data[i].product_id,
                                "id": res.data.data[i].id,
                                "url_standard": res.data.data[i].url_standard
                            })
                            // console.log(res.data.data[i].url_standard);
                        }
                        console.log('imageURL', imageURL)
                    })

                }
                resolve(imageURL)
            })
        })
    } catch (error) {
        console.log('error', error);
    }
}

exports.getData = getData;