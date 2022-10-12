<script setup lang="ts">
import { usePokemon } from '@/logic/use-pokemon'

const {
  nextPage,
  previousPage,
  currentPage,
  pageSize,
  setPageSize,
  loading,
  isLastPage,
  getPokemon,
} = usePokemon()

function changePageSize(event) {
  setPageSize(event.target.value)
  getPokemon()
}

</script>

<template>
  <header>
    <button :disabled="currentPage === 0 || loading" @click="previousPage">
      &lt;
    </button>
    <div>
      <span>Page size: </span>
      <select :value="pageSize" @change="changePageSize">
        <option>10</option>
        <option>20</option>
        <option>50</option>
      </select>
    </div>
    <div>
      Sort: 
      <select>
        <option>id</option>
        <option>name</option>
        <option>height</option>
        <option>weight</option>
      </select>
      <select>
        <option>ascending</option>
        <option>dscending</option>
      </select>
    </div>
    <div class="input-wrapper">
      <label for="filter-input">Filter: </label>
      <input id="filter-input" type="text" />
    </div>
    <button :disabled="isLastPage || loading" @click="nextPage">&gt;</button>
  </header>
</template>

<style scoped lang="scss">
header {
  border-bottom: 5px solid rgb(2, 0, 36);
  gap: 1rem;
  align-items: center;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(4, auto);
  justify-items: space-between;
  width: 100%;
  background: #181818;
  padding: .5rem 1rem;
  
  & > button {
    grid-row: span 2;
    height: 100%;
    padding: 0 .5rem;
  }

  .input-wrapper {
    display: flex;
    gap: .5rem;
    grid-row: 2;
    grid-column: 2 / span 2;

    input {
      flex-shrink: 2;
      width: 100%;
      max-width: 100%;
    }
  }
}
</style>
