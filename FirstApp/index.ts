import axios from 'axios';

const URL: string = 'https://jsonplaceholder.typicode.com/posts/1';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

axios.get(URL).then(res => {
  const response = res.data as Post;

  const USERID: number = response.userId;
  const ID: number = response.id;
  const TITLE: string = response.title;

  getPost(USERID, ID, TITLE);
});

const getPost = (userId: number, id: number, title: string) => {
  console.log(`
  UserID: ${userId}
  Id: ${id}
  Title: ${title}
  `);
};
