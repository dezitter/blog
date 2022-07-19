<script lang="ts">
  import type { Post } from '@dezitter/blog-shared';

  export let posts: readonly Post[] = [];

  $: console.log(posts);
</script>

<ul>
  {#each posts as post}
    <li>
      <a href="post/{post.slug}">
        <div class="font-bold">{post.title}</div>
        <div>
          <span class="text-neutral-500">{post.excerpt}</span>
          <span class="italic">{post.publicationDate}</span>
        </div>
      </a>
    </li>
  {/each}
</ul>
