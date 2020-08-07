import { CreateMessage, GetReply, sendMessage } from "./src/components/index";
import { urls } from "./src/config";

(async() => {
  urls.forEach(async (url: string) => {
    const { message, title } = await CreateMessage(url);
    if (message != '' && title != '') {
        console.log(message);
      // sendMessage(title+ ' 4분대 이은서', message);
    } else {
      console.log('no news!');
    }
  });
  // GetReply();
})();