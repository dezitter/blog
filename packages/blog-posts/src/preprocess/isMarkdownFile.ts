import type { Brand } from '@dezitter/blog-shared';

export type MarkdownFilename = Brand<string, 'markdown-filename'>;
export type MarkdownFilepath = Brand<string, 'markdown-filepath'>;

export const isMarkdownFilename = (
  filename: string,
): filename is MarkdownFilename => filename.toString().endsWith('.md');
