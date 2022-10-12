<script setup lang="ts">
import { usePokemon } from '@/logic/use-pokemon'

const {
  nextPage,
  previousPage,
  isLastPage,
  currentPage,
  loading,
} = usePokemon()

</script>

<template>
  <footer class="navbar">
    <button :disabled="currentPage === 0 || loading" @click="previousPage">
      &lt;
    </button>
    <button :disabled="isLastPage || loading" @click="nextPage">&gt;</button>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  border-top: 5px solid rgb(2, 0, 36);
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
</style>
