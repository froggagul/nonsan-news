import { CreateMessage, GetReply, sendMessage } from "./components/index";
import { urls } from "./config";

(async() => {
  urls.forEach(async (url: string) => {
    const { message, title } = await CreateMessage(url);
    if (message != '' && title != '') {
      sendMessage(title+ ' 4분대 이은서', message);
    } else {
      console.log('no news!');
    }
  });
  GetReply();
})();