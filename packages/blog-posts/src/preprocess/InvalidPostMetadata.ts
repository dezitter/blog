import type { MarkdownFilepath } from './isMarkdownFile';

export class InvalidPostMetadata extends Error {
  constructor(public filepath: MarkdownFilepath, public attributes: unknown) {
    super(
      `Invalid post metadata for "${filepath}, got ${JSON.stringify(
        attributes,
      )}`,
    );
  }
}
