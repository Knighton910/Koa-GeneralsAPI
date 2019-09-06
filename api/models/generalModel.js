const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeneralSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the name of the General'
    },
    empire: {
        type: String,
        require: 'Enter the empire of this general'
    }
});

module.exports = general = mongoose.model('General', GeneralSchema)
