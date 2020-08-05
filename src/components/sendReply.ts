import Axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();


async function sendReply() {
  const backUrl = 'http://api.armply.com';
  Axios.post(`${backUrl}/auth/login`, {
      email: process.env.ADMIN_ID,
      password: process.env.ADMIN_PW
  })
    .then((res: any) => {
        if (res.data.success) {
            console.log('success');
        }
    })
}

export default sendReply;