const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let multiplicacionSchema = new Schema(
    {
        multiplicando: {
            type: Number,
        },
        multiplicador: {
            type: Number,
        },
        resultado: {
            type: String,
        },
        producto: {
            type: Number,
        },
    },
    {
        collection: "multiplicaciones",
    }
);

module.exports = mongoose.model("Multiplicacion", multiplicacionSchema);
