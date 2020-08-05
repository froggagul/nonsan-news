import { CreateMessage, SendReply } from "./components/index";
import { urls } from "./config";

(async() => {
  urls.forEach(async (url: string) => {
    const { message, title } = await CreateMessage(url);
    if (message != '' && title != '') {
      console.log(title + '\n' + message);
    } else {
      console.log('no news!');
    }
  });
  SendReply();
})();