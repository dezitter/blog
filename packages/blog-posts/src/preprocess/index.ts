import * as path from 'path';
import { writeFile } from 'fs/promises';
import { findAllMarkdownFiles } from './findAllMarkdownFiles';
import { parseMarkdownFile } from './parseMarkdownFile';
import type { MarkdownFilename, MarkdownFilepath } from './isMarkdownFile';

export async function preprocess(
  srcFolder: string,
  outFile: string,
): Promise<void> {
  const encoding = 'utf-8';
  const buildFullpath = (filename: MarkdownFilename): MarkdownFilepath =>
    path.join(srcFolder, filename) as MarkdownFilepath;

  return findAllMarkdownFiles(srcFolder)
    .then((filenames) => filenames.map(buildFullpath))
    .then((filepaths) => Promise.all(filepaths.map(parseMarkdownFile)))
    .then((results) =>
      writeFile(outFile, JSON.stringify(results), { encoding }),
    );
}
