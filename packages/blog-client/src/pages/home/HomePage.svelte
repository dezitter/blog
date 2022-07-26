<script lang="ts">
  import PostsList from './PostsList.svelte';
  import type { DateISO, Html, Post, Slug } from '@dezitter/blog-shared';

  const basePost: Post = {
    slug: 'foo' as Slug,
    title: 'Foo',
    excerpt: 'This is foo!',
    publicationDate: '2022-07-19T12:00:00.000Z' as DateISO,
    tags: [],
    html: '' as Html,
  };
  const posts: readonly Post[] = [
    { ...basePost, title: 'Foo', slug: 'foo' as Slug },
    { ...basePost, title: 'Bar', slug: 'bar' as Slug },
    { ...basePost, title: 'Quz', slug: 'quz' as Slug },
  ];
</script>

<PostsList posts="{posts}" />
