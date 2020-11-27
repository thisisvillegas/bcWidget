const {
    Logger
} = require('./config/Logger')
const {
    getData
} = require('./core/getData')
const {
    createWidgetTemplate
} = require('./core/createWidgetTemplate')

// const BigCommerce = require('./services/bigCommerce')

require('dotenv').config()


async function main() {

    let response = await getData()
    console.log('response', response);




}


main()