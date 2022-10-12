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
  sort,
  setSortCriteria,
  setSortOrder,
  sortByCriteria,
  sortOrder,
} = usePokemon()

function changePageSize(event) {
  setPageSize(event.target.value)
  getPokemon()
}

function changeSortCriteria(event) {
  setSortCriteria(event.target.value)
  sort()
}

function changeSortOrder(event) {
  setSortOrder(event.target.value)
  console.log('@R should sort')
  sort()
}

</script>

<template>
  <header class="navbar">
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
    <div class="selects-wrapper">
      Sort: 
      <select :value="sortByCriteria" @change="changeSortCriteria">
        <option>id</option>
        <option>name</option>
        <option>height</option>
        <option>weight</option>
      </select>
      <select :value="sortOrder" @change="changeSortOrder">
        <option>ascending</option>
        <option>descending</option>
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
  top: 0;
  white-space: nowrap;

  select {
    height: 1.6rem;
  }
  
  & > button {
    grid-row: span 2;
    height: 100%;
    padding: 0 .5rem;

    &:first-child {
      margin-right: auto;
    }

    &:last-child {
      margin-left: auto;
    }
  }

  .selects-wrapper {
    display: flex;
    width: 100%;
    max-width: 13rem;

    & > select {
      width: 100%;
      min-width: 2rem;
      max-width: 10rem;

      &:first-child {
        margin-left: .5rem;
        max-width: 4.5rem;
      }
    }
  }

  .input-wrapper {
    display: flex;
    gap: .5rem;
    grid-row: 2;
    grid-column: 2 / span 2;

    input {
      height: 1.6rem;
      flex-shrink: 2;
      width: 100%;
      max-width: 100%;
    }
  }
}

@media screen and (min-width: 580px) {
  header {
    display: flex;
    justify-content: center;
  }

  .resize > input {
    max-width: 12rem;
  }
}

@media screen and (max-width: 360px) {
  header div span {
    display: none;
  }
}
</style>
