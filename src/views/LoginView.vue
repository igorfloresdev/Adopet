<template>
  <div>
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
