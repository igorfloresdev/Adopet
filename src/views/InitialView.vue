<template>
  <div class="login">
    <div class="container-fluid">
      <div class="row">
        <PageHeader />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/PageHeader.vue'

export default defineComponent({
  name: 'InitialView',
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
