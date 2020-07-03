import rssParser from 'rss-parser';
const parser = new rssParser({
  headers: {
    Accept: 'text/xml',
  },
});
 
const getMessage = async () => {
  const url = 'https://rss.joins.com/joins_news_list.xml';
  const feed = await parser.parseURL(url)
    .catch((err) => {
      console.log(err);
    });
  // console.log('feed', feed);
  if (feed) {
    const items = feed.items;
    let message = '';
    items?.forEach((item) => {
      const title = item.title;
      const content = item.content;
      message = `${message}-${title}\n ${content}\n`;
    });
    return {
      message: message.slice(0, 2000),
      title: feed.title || ''
    };
  }
};
export default getMessage;