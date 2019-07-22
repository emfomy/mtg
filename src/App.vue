<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>

import Layout from '@/components/layout/layout.vue';

export default {
  name: 'App',
  components: {
    Layout,
  },
};
</script>
