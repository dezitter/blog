import * as fs from 'fs/promises';
import MarkdownIt from 'markdown-it';
import frontmatter from 'front-matter';
import { InvalidPostMetadata } from './InvalidPostMetadata';
import type {
  BasePost,
  RawPost,
  Post,
  Markdown,
  Html,
} from '@dezitter/blog-shared';
import type { MarkdownFilepath } from './isMarkdownFile';

const md = new MarkdownIt();

const isValidFrontmatter = (value: unknown): value is BasePost => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'slug' in value &&
    'title' in value &&
    'excerpt' in value &&
    'publicationDate' in value
  );
};

export const parseMarkdownFile = (
  filepath: MarkdownFilepath,
): Promise<Post> => {
  const encoding = 'utf-8';

  return fs
    .readFile(filepath, encoding)
    .then(frontmatter)
    .then<RawPost>(({ attributes, body }) => {
      if (!isValidFrontmatter(attributes)) {
        throw new InvalidPostMetadata(filepath, attributes);
      }

      return { ...attributes, markdown: <Markdown>body };
    })
    .then<Post>((rawPost) => {
      const html = md.render(rawPost.markdown);
      return { ...rawPost, html: <Html>html };
    });
};
