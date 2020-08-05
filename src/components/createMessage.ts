import rssParser from 'rss-parser';
import { keywords } from '../config';
const parser = new rssParser({
  headers: {
    Accept: 'text/xml, application/xml'
  },
});
 
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

const filterContent = (content: string): string => {
  return content.replace(/<\/?[^>]+(>|$)/g, "").replace(/\s\s+/g, ' ');
};
const isIncluded = (keywords: string[], content: string): boolean => {
  let result = false;
  keywords.forEach((keyword) => {
    result = result || content.includes(keyword);
  });
  return result;
};

const getMessage = async (url: string):Promise<{
  message: string;
  title: string;
}> => {
  const feed = await parser.parseURL(url)
    .catch((err: any) => {
      console.log(err);
    });
  // console.log('feed', feed);
  if (feed) {
    const items = feed.items;
    let message = '';
    items?.forEach((item: any) => {
      const title = item.title;
      const content = filterContent(item.content || '');
      if (isIncluded(keywords, content)) {
        message = `-${title}\n ${content}\n${message}`;
      } else {
        message = `${message}-${title}\n ${content}\n`;
      }
    });
    const title = `${feed.title || ''} ${todayDate()}`;
    return {
      message: message.slice(0, 1470),
      title: title
    };
  }
  return {
    message: '',
    title: ''
  };
};
export default getMessage;