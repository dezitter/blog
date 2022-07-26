<script lang="ts">
  import HomePage from './pages/home';
  import { Router, Route } from './lib/routing';
  import Layout from './pages/Layout.svelte';
</script>

<Router>
  <Layout>
    <Route path="/">
      <HomePage />
    </Route>

    <Route path="/post/:slug">
      <p>MATCH POST!</p>
    </Route>
  </Layout>
</Router>
