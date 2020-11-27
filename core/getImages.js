const axios = require('axios')
const {
    Logger
} = require('../config/Logger')

async function getImages(item) {
    Logger.info('gathering images with the item IDs')

    let data = {
        headers: {
            "X-Auth-Token": "5koshygkmuxtzunx3nxdiaatzr5fmu6",
            "content-type": "application/json",
            "Accept": "application/json"
        }
    }

    let id = 0
    try {
        for (let i = 0; i < item.length; i++) {
            id = item[0];
            console.log('item[0]', item[0]);
            axios.get(`${process.env.API_PATH}/catalog/products/${id}/images`, data).then(res => {
                for (let i = 0; i < res.data.data.length; i++) {
                    console.log('res.data', res.data);
                    // itemIDArray.push({
                    //     "id": res.data.data[i].id,
                    //     "name": res.data.data[i].name,
                    // })
                }
                // console.log('itemIDArray in getItemsID', itemIDArray);
                return itemIDArray
            })
        }
        // let itemIDArray = []

    } catch (error) {
        console.log('error', error);
    }




    let array2 = [{
        'id': '77',
        'name': '[Sample] Fog Linen Chambray Towel - Beige Stripe'
    }]
    return array2
}

exports.getImages = getImages