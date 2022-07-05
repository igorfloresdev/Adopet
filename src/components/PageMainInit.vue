<template>
<div class="main row justify-content-center">
  <PageLogo class="col-12" />
  <h3 class="col-12 text-center text-white">Boas-vindas!</h3>
  <p class="col-8 font1 text-center text-white">Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
  <div class="row justify-content-center pt-4">
    <button class="btn col-8 ">
      <h4 class="text-white">Já tenho conta</h4>
    </button>
  </div>
  <div class="row justify-content-center pt-3">
    <button class="btn col-8">
      <h4 class="text-white">Quero me cadastrar</h4>
    </button>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PageLogo from '@/components/PageLogo.vue'

export default defineComponent({
  name: 'PageMainInit',
  components: {
    PageLogo
  }
})
</script>
<style scoped>
  .btn {
    background-color: var(--coral);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #FC7071;
  }
</style>
