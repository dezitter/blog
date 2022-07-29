<script lang="ts">
  import { hasSlug } from './utils/hasSlug';
  import { PostApi } from '../../lib/api';
  import type { Post } from '@dezitter/blog-shared';

  export let params: object;

  let post: Post | null = null;

  if (hasSlug(params)) {
    PostApi.fetchOne(params.slug).then((result) => {
      post = result;
    });
  }
</script>

{#if post !== null}
  <article>
    <h1>{post.title}</h1>
    {@html post.html}
  </article>
{/if}
