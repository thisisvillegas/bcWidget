const {
    Logger
} = require('./config/Logger')
const {
    getData
} = require('./core/getData')
const {
    createWidgetTemplate
} = require('./core/createWidgetTemplate')
const {
    createWidget
} = require('./core/createWidget')

// const BigCommerce = require('./services/bigCommerce')

require('dotenv').config()


async function main() {

    let imageURL = await getData()

    let uuid = await createWidgetTemplate()

    let response3 = await createWidget(uuid, imageURL)





}


main()