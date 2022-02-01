<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Add Person view!"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class AddPerson extends Vue {}
</script>
