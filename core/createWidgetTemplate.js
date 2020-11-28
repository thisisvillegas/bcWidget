const {
    Logger
} = require('../config/Logger')
const util = require('util')

const BigCommerce = require('../services/bigCommerce')
let bigCommerce = new BigCommerce()

async function createWidgetTemplate() {
    try {
        Logger.info('checking to see if template exists')
        let templateCount = 0
        let creationFlag = true
        let uuid = ''
        let newUuid = ''
        let widgetTemplateArrayResponse = await bigCommerce.getAllTemplates()
        Logger.info(`found ${widgetTemplateArrayResponse.data.length} widget templates`)
        for (let i = 0; i < widgetTemplateArrayResponse.data.length; i++) {
            let template = widgetTemplateArrayResponse.data[i]
            templateCount += 1
            if (template.name === `${process.env.TEMPLATE_NAME}`) {
                Logger.info(`template found ${template.uuid}, skipping creation step`)
                uuid = template.uuid
                creationFlag = false
            } else {
                let widgetTemplateArrayTotal = widgetTemplateArrayResponse.data.length
                if (templateCount === widgetTemplateArrayTotal && creationFlag === true) {
                    Logger.info(`no template found, initializing new widget template`)

                    let data = {
                        "name": `${process.env.TEMPLATE_NAME}`,
                        "schema": [{
                            "type": "array",
                            "label": "Images",
                            "id": "images",
                            "defaultCount": 3,
                            "entryLabel": "Image",
                            "thumbnail": "imageUrl.src",
                            "schema": [{
                                "type": "tab",
                                "label": "Content",
                                "sections": [{
                                    "settings": [{
                                            "type": "imageManager",
                                            "id": "imageUrl",
                                            "default": {
                                                "src": "https://cdn11.bigcommerce.com/s-24o5040vgk/products/77/images/265/foglinenbeigestripetowel3b.1605595073.386.513.jpg?c=1",
                                                "type": "IMAGE_MANAGER"
                                            }
                                        },
                                        {
                                            "label": "Link",
                                            "type": "input",
                                            "id": "link",
                                            "default": "#"
                                        }
                                    ]
                                }]
                            }]
                        }],
                        "template": "{{#each images}}<a href='{{link}}'><img src={{imageUrl.src}} style='width:33.3%'/></a>{{/each}}"
                    }

                    let response = await bigCommerce.createNewTemplate(data)
                    console.log('response', util.inspect(response, false, null, true));
                    newUuid = response.data.uuid

                }
            }
        }
        if (creationFlag === false) {
            return uuid
        } else {
            return newUuid
        }
    } catch (error) {
        console.log('error', error);
    }
}

exports.createWidgetTemplate = createWidgetTemplate;