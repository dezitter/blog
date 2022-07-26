<script lang="ts">
  import { Link } from '../../lib/routing';
  import type { Post } from '@dezitter/blog-shared';

  export let posts: readonly Post[] = [];

  $: console.log(posts);
</script>

<ul>
  {#each posts as post}
    <li>
      <Link href="/post/{post.slug}">
        <div class="font-bold">{post.title}</div>
        <div>
          <span class="text-neutral-500">{post.excerpt}</span>
          <span class="italic">{post.publicationDate}</span>
        </div>
      </Link>
    </li>
  {/each}
</ul>
