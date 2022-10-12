<template>
  <header>
    <button>
      &lt;
    </button>
    <div>
      <span>Page size: </span>
      <select>
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
    <div>
      <label for="filter-input">Filter: </label>
      <input id="filter-input" type="text" />
    </div>
    <button>&gt;</button>
  </header>
</template>
