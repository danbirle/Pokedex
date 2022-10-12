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
    <div>
      <div>{{ props.name }}</div>
      <div><span>Weight: </span><br />{{ props.weight }}hg</div>
      <div><span>Height: </span><br />{{ props.height }}dm</div>
      <div class="abilities">
        <div v-for="ability in props.abilities" v-bind:key="`pokemon_ability_${ability}`">
          {{ ability }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
