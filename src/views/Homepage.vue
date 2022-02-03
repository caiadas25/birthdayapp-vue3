<template>
  <div class="homepage">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to the BirthDay App!"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

@Options({
  components: {
    HelloWorld,
    Navbar,
  },
})
export default class Homepage extends Vue {}
</script>
