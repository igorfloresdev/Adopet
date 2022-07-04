<template>
  <div class="login">
    <PageHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/PageHeader.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    PageHeader
  }
})
</script>
<style scoped>
  .login {
    width:100vw;
    height: 100vh;
    background-color: #3772FF;
  }
</style>
