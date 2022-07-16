import * as fs from 'fs/promises';
import { isMarkdownFilename } from './isMarkdownFile';
import type { PathLike } from 'fs';
import type { MarkdownFilename } from './isMarkdownFile';

const encoding = 'utf-8';

export const findAllMarkdownFiles = (
  folder: PathLike,
): Promise<readonly MarkdownFilename[]> => {
  return fs
    .readdir(folder, { encoding })
    .then((filenames) => filenames.filter(isMarkdownFilename));
};
