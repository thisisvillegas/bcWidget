const {
    Logger
} = require('./config/Logger')
const {
    getData
} = require('./core/getData')
const {
    createWidgetTemplate
} = require('./core/createWidgetTemplate')

require('dotenv').config()


async function main() {

    // await getData().then(async () => {
    //     await createWidgetTemplate()
    // })

    await getData().then(async itemURLData => {
        Logger.info(`following data was mined ${itemURLData.length}`)
        await createWidgetTemplate(itemURLData)
    })

    // var itemURLData = await getData()
    // Logger.info(`following data was mined ${itemURLData.length}`)
    // await createWidgetTemplate(itemURLData)


}


main()