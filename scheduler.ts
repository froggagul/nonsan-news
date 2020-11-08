import { CreateMessage, GetReply, sendMessage } from "./src/components/index";
import { urls } from "./src/config";

(async() => {
  urls.forEach(async (url: string) => {
    const { message, title } = await CreateMessage(url);
    if (message != '' && title != '') {
        console.log(message);
      sendMessage(title+ ' - 26연대 최동혁', message);
    } else {
      console.log('no news!');
    }
  });
  GetReply();
})();