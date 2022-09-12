const mongoose = require ('mongoose');

const url = 'Fiorellamongodb+srv://Fiorella:OM48Q9dsquEM9oyS@biofio1.er8fl8t.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url, {}, () => {
    console.log ('---')
    console.log ('conexion hecha')
    console.log ('---')
})

module.exports = mongoose 