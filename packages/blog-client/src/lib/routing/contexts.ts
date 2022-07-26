import { getContext, setContext } from 'svelte';
import type { Writable } from 'svelte/store';

const ROUTING_CONTEXT = Symbol();
type RoutingContext = Readonly<{
  activeRoute: Writable<symbol | undefined>;
}>;

export const getRoutingContext = (): RoutingContext =>
  getContext<RoutingContext>(ROUTING_CONTEXT);

export const setRoutingContext = (value: RoutingContext): RoutingContext =>
  setContext<RoutingContext>(ROUTING_CONTEXT, value);
