import { CreateMessage } from "./components/index";
import { urls } from "./config";

(async() => {
  const { message, title } = await CreateMessage(urls[1]);
  if (message != '' && title != '') {
    console.log(title + '\n' + message);
  }
})();