const {
    Logger
} = require('../config/Logger')
const util = require('util')

const BigCommerce = require('../services/bigCommerce')
let bigCommerce = new BigCommerce()

async function createWidget(uuid, imageURL) {
    try {
        Logger.info(`updating data payload with new image URLs`)

        let data = {
            "name": `${process.env.WIDGET_NAME}`,
            "widget_configuration": {
                "images": []
            },
            "widget_template_uuid": `${uuid}`
        }

        for (let i = 0; i < 3; i++) {
            data.widget_configuration.images.push({
                "imageUrl": {
                    "src": imageURL[i].url_standard,
                    "type": "IMAGE_MANAGER"
                },
                "link": "#"

            })
        }
        Logger.info(`creating widget with UUID: ${uuid}`)
        // console.log('data', data.widget_configuration);

        let widgetCreationResponse = await bigCommerce.createNewWidget(data)

        console.log('widgetCreationResponse.data', util.inspect(widgetCreationResponse.data, false, null, true));


    } catch (error) {
        console.log('error', error);
    }
}

exports.createWidget = createWidget;