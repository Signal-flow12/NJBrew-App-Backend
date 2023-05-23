const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true;
            unique: true
        },
    },
    {
        timestamps: true,
    }
)

const Users = mongoose.model("User, userSchema")

module.exports = Users