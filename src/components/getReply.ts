import Axios from 'axios';
import dotenv from 'dotenv';
import key from '../key.json';
import { sendMessage } from '.';
dotenv.config();

const backUrl = 'http://api.armply.com';
const todayDate = () => {
  const d = new Date();
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) 
    month = '0' + month;
  if (day.length < 2) 
    day = '0' + day;
  return [year, month, day].join('-');
};

async function gatherReply(posts: any[]) {
  const maxLen = 1470;
  const messages: string[] = [];
  let message = '';
  const ids: any[] = [];
  posts?.forEach((post) => {
    let m = `${post.author.username}님의 댓글: ${post.content}\n`;
    if (m.length + message.length < maxLen) {
      ids.push(post._id);
      message = message + m;
    } else {
      messages.push(message);
      message = m;
    }
  });
  messages.push(message);
  Axios.request({
    url: `${backUrl}/send/sended`,
    method: "post",
    headers: {
      Cookie: key.cookie
    },
    data: {
      ids
    }
  })
    .then((res) => {
      const title = `${todayDate()}일자 친구들의 편지`;
      messages.forEach((m) => {
        sendMessage(title, message);
      });
    })
    .catch((err) => {
      console.dir(err);
    })
}

async function getReply() {
  Axios.request({
    url: `${backUrl}/send/last`,
    method: "get",
    headers: {
      Cookie: key.cookie
    }
  })
    .then((res: any) => {
      gatherReply(res.data.result.posts);
    })
    .catch((err: any) => {
      console.dir(err);
    })
}

export default getReply;