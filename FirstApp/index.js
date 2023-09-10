"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const URL = 'https://jsonplaceholder.typicode.com/posts/1';
axios_1.default.get(URL).then(res => {
    const response = res.data;
    const USERID = response.userId;
    const ID = response.id;
    const TITLE = response.title;
    getPost(USERID, ID, TITLE);
});
const getPost = (userId, id, title) => {
    console.log(`
  UserID: ${userId}
  Id: ${id}
  Title: ${title}
  `);
};
