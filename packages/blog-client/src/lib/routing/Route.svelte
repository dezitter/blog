<script lang="ts">
  import page from 'page';
  import { onDestroy } from 'svelte';
  import { getRoutingContext } from './contexts';

  export let path: string;

  let activated: boolean = false;
  const identifier = Symbol(path);
  const context = getRoutingContext();
  const unsubscribe = context.activeRoute.subscribe((route) => {
    activated = route === identifier;
  });

  page(path, () => {
    context.activeRoute.set(identifier);
  });

  onDestroy(unsubscribe);
</script>

{#if activated}
  <slot />
{/if}
