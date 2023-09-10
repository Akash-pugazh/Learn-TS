"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var URL = 'https://jsonplaceholder.typicode.com/posts/1';
axios_1.default.get(URL).then(function (res) {
    var response = res.data;
    var USERID = response.userId;
    var ID = response.id;
    var TITLE = response.title;
    getPost(USERID, ID, TITLE);
});
var getPost = function (userId, id, title) {
    console.log("\n  UserID: ".concat(userId, "\n  Id: ").concat(id, "\n  Title: ").concat(title, "\n  "));
};
