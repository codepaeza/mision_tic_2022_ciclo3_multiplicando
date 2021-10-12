const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let repasarSchema = new Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: Number,
        },
    },
    {
        collection: "students",
    }
);

module.exports = mongoose.model("Repasar", repasarSchema);
