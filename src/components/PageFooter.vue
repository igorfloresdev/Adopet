<template>
  <div class="main row justify-content-center">
    <div v-if="showIlustration" class="ilustration row col-12 pt-4">
      <img class="col-12" src="@/assets/ilustracao.png">
    </div>
    <div class="footer col-12">
      <p class="font1 py-5 text-center text-white">2022 - Desenvolvido por Igor Flores.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageFooter',
  props: {
    showIlustration: Boolean
  }
})

</script>
<style scoped>
  .ilustration {
    margin-bottom: -20px;
    max-width: 346px;
  }

  .footer {
    background-color: var(--green);
  }
</style>
