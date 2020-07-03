import { Jungang, SportsChosun, SportsDonga } from "./components/index";

console.log('Hello world!');
// SportsChosun();
// SportsDonga();

(async() => {
  const message = await Jungang();
  console.log(message);
})();