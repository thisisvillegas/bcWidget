const axios = require('axios')
const {
    Logger
} = require('../config/Logger')


async function createWidgetTemplate(itemURLData) {

    Logger.info('initiating widget template')
    Logger.info(itemURLData)

    let data = {
        headers: {
            "X-Auth-Token": "5koshygkmuxtzunx3nxdiaatzr5fmu6",
            "content-type": "application/json",
            "Accept": "application/json"
        }

    }
    let uuid = ''
    try {
        return new Promise(function (resolve, reject) {
            Logger.info('checking to see if template exists')
            axios.get(`${process.env.API_PATH}content/widget-templates`, data).then(res => {
                let widgetTemplateArray = res.data.data
                let templateCount = 0
                let creationFlag = true
                widgetTemplateArray.forEach(template => {
                    templateCount += 1
                    if (template.name === 'Header Images') {
                        Logger.info(`template found ${template.uuid}, skipping creation step`)
                        uuid = template.uuid
                        creationFlag = false
                        resolve(uuid)
                    } else {
                        let widgetTemplateArrayTotal = widgetTemplateArray.length
                        if (templateCount === widgetTemplateArrayTotal && creationFlag === true) {
                            Logger.info(`no template found, initializing new widget template`)
                            let newData = {
                                data: {
                                    "name": "Header Images2",
                                    "template": "{{#each images}}<a href='{{image_url}}'><img src={{image_source}} style='width:33.3%'/></a>{{/each}}"
                                }
                            }
                            let newTarget = Object.assign(data, newData)
                            console.log('newTarget', newTarget);


                            //This still needs to be flushed out but would be a nice to have
                            Logger.info('sending out POST to create widget template')
                            // axios.post(`${process.env.API_PATH}content/widget-templates`, newTarget).then(res => {
                            //     console.log('res', res);
                            // })
                        }
                    }
                });

            })
        })
    } catch (error) {
        console.log('error', error);
    }
}

exports.createWidgetTemplate = createWidgetTemplate;