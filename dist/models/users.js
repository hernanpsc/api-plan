"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: "Soy la descripcion"
    }
}, {
    timestamps: true,
    versionKey: false,
});
const UserModel = (0, mongoose_1.model)('users', UserSchema);
exports.default = UserModel;
//# sourceMappingURL=users.js.map