<script lang="ts">
  import PostsList from './PostsList.svelte';
  import { PostApi } from '../../lib/api';
  import type { Post } from '@dezitter/blog-shared';

  let posts: readonly Post[] = [];

  PostApi.fetchAll().then((results) => {
    posts = results;
  });
</script>

<PostsList posts="{posts}" />
