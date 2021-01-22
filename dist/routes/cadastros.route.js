"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var uuidv4_1 = require("uuidv4");
var cadastrosUser = express_1.Router();
var cadastros = [];
cadastrosUser.post('/', function (request, response) {
    var _a = request.body, name = _a.name, username = _a.username, email = _a.email;
    var cadastro = {
        id: uuidv4_1.uuid(),
        name: name,
        username: username,
        email: email,
    };
    cadastros.push(cadastro);
    return response.json({ message: 'post ok' });
});
exports.default = cadastrosUser;
