import { CreateMessage, GetReply, sendMessage } from "./components/index";
import { urls } from "./config";

(async() => {
  urls.forEach(async (url: string) => {
    const { message, title } = await CreateMessage(url);
    if (message != '' && title != '') {
      sendMessage(title+ ' - 26연대 최동혁', message);
    } else {
      console.log('no news!');
    }
  });
  GetReply();
})();