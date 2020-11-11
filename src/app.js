"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3000;
app.use(express_1.default.json());
app.get('/', function (req, res) { return res.json({ message: 'Hello World' }); });
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
