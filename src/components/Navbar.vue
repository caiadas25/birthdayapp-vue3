<template>
  <div class="navbar-wrapper">
    <router-link
      class="navbar-item"
      :key="route.name"
      :to="route.path"
      v-for="route in routes">
      {{ route.name }}
    </router-link>
  </div>
</template>
<script lang="ts">

import store from "@/store";
import { Navigation } from "@/types/Navigation";
import { Vue } from "vue-class-component";
import { RouteRecordRaw } from "vue-router";
import { State, Action } from "vuex-class";

export default class Navbar extends Vue {
  @State("availableRoutes") routes!: Navigation[];

  @Action("getAvailableRoutes") getAvailableRoutes!: RouteRecordRaw[];

  mounted() {
    store.dispatch('getAvailableRoutes', this.$router);
  }

  get availableRoutes() {
    return this.routes;
  }
}
</script>

<style scoped>
.highlighted {
  background: #f5f5f5;
  font-weight: bolder;
}

.navbar-wrapper {
  display: flex;
  justify-content: center;
}

.navbar-item {
  padding: 20px;
}
</style>