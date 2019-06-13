import express from 'express';
import cors from 'cors';
import { getContent } from './get-content';
import * as streamers from './streamers.json';

// Duplicated in client.. maybe move this into its own file?
interface Content {
  type: string,
  videoId: string,
  title: string,
  thumbnailUrl: string,
  creatorName: string,
  createdAt: string,
  embedLink: string,
  viewCount?: number,
  redditInfo?: object,
  videoClipInfo?: object,
  upvotes?: number
};

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 1337;

/*
  https://github.com/axios/axios/issues/1414
  https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
*/
app.use(cors());

app.get('/', (req, res) => {
  res.send('I am alive! 🎉🎉🎉');
});

let content: Content[] = [];

console.log('Retrieving initial content for server startup..');
getContent().then((res) => {
  content = res;
  console.log('Retrieval complete!');
});

setInterval(async () => {
  content = await getContent();
  console.log('Content Updated!');
}, 1800000); // <--- 30 minutes...

app.get('/content', async (req, res) => {
  // const content = await getContent();
  res.send({ "content": content});
});

app.get('/streamers', async (req, res) => {
  res.send(streamers);
});

app.listen(port, () => {
  console.log(`Application is listening on port ${port}!!`);
});

/* 
  https://github.com/BrianDGLS/express-ts
  https://expressjs.com/en/starter/hello-world.html
*/