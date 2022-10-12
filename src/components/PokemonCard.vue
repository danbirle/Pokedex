<script setup lang="ts">
const props = defineProps({
  name: String,
  weight: Number,
  height: Number,
  abilities: Array,
  sprite: String,
})
</script>

<template>
  <div class="wrapper">
    <div :style="`background-image: url('${props.sprite}')`" class="card">
      <div>{{ props.name }}</div>
      <div><span>Weight: </span><br />{{ props.weight }}hg</div>
      <div><span>Height: </span><br />{{ props.height }}dm</div>
      <div class="abilities">
        <div v-for="ability in props.abilities" v-bind:key="`pokemon_ability_${ability}`">
          {{ ability.ability.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  border-radius: 5px;
  background: linear-gradient(
    150deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}

.card {
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  background-repeat: no-repeat;
  background-position: bottom right;
  min-height: 10rem;
  min-width: 15rem;
  padding: .5rem;
  background-color: rgba(9, 9, 121, .5);
  transition: background-color .25s ease-in-out;
  background-size: 7rem;
  text-transform: capitalize;
}

.card:hover {
  background-color: rgba(0, 212, 255, .25);
  cursor: pointer;
}

.abilities {
  align-self: flex-end;
}

.card span {
  font-size: .75rem;
}
</style>
