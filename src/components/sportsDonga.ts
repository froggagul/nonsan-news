import rssParser from 'rss-parser';
const parser = new rssParser({
  headers: {
    Accept: 'application/rss+xml, application/xml',
  },
});
 
const getMessage = async () => {
  const url = 'https://rss.donga.com/total.xml';
  const feed = await parser.parseURL(url)
    .catch((err) => {
      console.log(err);
    });
  console.log('feed', feed);
};
export default getMessage;