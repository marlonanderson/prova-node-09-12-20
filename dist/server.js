"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cadastroUser = express_1.default();
cadastroUser.get('/', function (request, response) {
    return response.json({ message: "ok!" });
});
cadastroUser.listen(3333, function () {
    console.log('server star port 3333');
});
