const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tanksSchema = new Schema({
    name: { type: String },
});

const Tanks = mongoose.model('Tanks', tanksSchema);

module.exports = Tanks;