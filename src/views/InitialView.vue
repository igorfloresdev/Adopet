<template>
  <div class="login container-fluid d-flex flex-row">
    <div class="row">
      <div class="header align-self-start">
        <PageHeader />
      </div>
      <div class="mid">
        <PageMainInit />
      </div>
      <div class="footer align-self-end">
        <PageFooter :showIlustration="true" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import PageMainInit from '@/components/PageMainInit.vue'

export default defineComponent({
  name: 'InitialView',
  components: {
    PageHeader,
    PageFooter,
    PageMainInit
  }
})
</script>
<style scoped>
  .login {
    height: 100vh;
    background: var(--blue) url('@/assets/background/mid-form.svg') no-repeat right top 20%;
  }
</style>
