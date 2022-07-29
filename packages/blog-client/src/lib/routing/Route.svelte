<script lang="ts">
  import page from 'page';
  import { onDestroy } from 'svelte';
  import { getRoutingContext } from './contexts';
  import type { Context as PageContext } from 'page';

  export let path: string;

  let activated: boolean = false;
  let routeParams: object = {};
  const identifier = Symbol(path);
  const context = getRoutingContext();
  const unsubscribe = context.activeRoute.subscribe((route) => {
    activated = route === identifier;
  });

  page(path, ({ params }: PageContext) => {
    routeParams = params;
    context.activeRoute.set(identifier);
  });

  onDestroy(unsubscribe);
</script>

{#if activated}
  <slot params="{routeParams}" />
{/if}
