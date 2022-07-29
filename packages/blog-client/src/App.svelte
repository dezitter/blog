<script lang="ts">
  import HomePage from './pages/home';
  import PostPage from './pages/post';
  import { Router, Route } from './lib/routing';
  import Layout from './pages/Layout.svelte';
</script>

<Router>
  <Layout>
    <Route path="/">
      <HomePage />
    </Route>

    <Route path="/post/:slug" let:params>
      <PostPage params="{params}" />
    </Route>
  </Layout>
</Router>
