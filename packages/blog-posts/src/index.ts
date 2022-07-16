import * as path from 'path';
import { preprocess } from './preprocess';

const srcFolder = path.join(
  process.cwd(),
  'packages',
  'blog-posts',
  'src',
  'assets',
  'posts',
);
const outFile = path.join(
  process.cwd(),
  'packages',
  'blog-posts',
  'dist',
  'assets',
  'posts.json',
);

console.info('Preprocessing started.');

preprocess(srcFolder, outFile)
  .then(() => {
    console.info('Preprocessing done!');
  })
  .catch((reason) => {
    console.info('Preprocessing failed!', reason);
    process.exit(1);
  });
