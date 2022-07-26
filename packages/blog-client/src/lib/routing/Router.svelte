<script lang="ts">
  import page from 'page';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { setRoutingContext } from './contexts';

  let activeRoute = writable<symbol>();
  setRoutingContext({ activeRoute });

  onMount(() => {
    page.start({
      click: true,
      popstate: true,
      dispatch: true,
      hashbang: false,
    });
  });
</script>

<slot />
