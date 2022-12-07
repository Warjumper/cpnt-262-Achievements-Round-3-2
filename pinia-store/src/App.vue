<script setup lang="ts">


import { storeToRefs, mapActions } from "pinia";
import { useCounterStore } from "./store/useCounter"

const main = useCounterStore();

const { counter, name, doubleCount } = storeToRefs(main);

// const { addOne } = mapActions(useCounterStore, ["addOne"]);

const { addOne } = main;

function add(value: number){
  main.$patch((state)=> {
    state.counter+= value
  }
  );
}


function clear (){
  main.$state = {counter: 123, name: 'bob'};

}

main.$subscribe((mutation, state) => {
  console.log("mutation", mutation);
  console.log("state", state);
});
</script>

<template>
  <h3>Hello {{ name }}</h3>
  <h4>{{ counter }}</h4>
  <h4>{{ doubleCount }}</h4>
  <button @click="add(15)">Click Me</button>
  <button @click="clear">Clear</button>
</template>

<style>
#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
