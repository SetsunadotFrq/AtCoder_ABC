"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");

var input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

var A = Number(input[0]);
var B = Number(input[1]);
var X = Number(input[2]);
if (A <= X && X <= A + B) {
    console.log("YES");
}
else {
    console.log("NO");
}
