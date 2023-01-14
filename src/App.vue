<template>
  <div id="app">
   <Navbar />
   <div class="mx-4">
    <router-view></router-view>
   </div>
  </div>
</template>

<script>
import Navbar from "./views/NavbarMain.vue";
import "./views/Common.css";

import "../src/main.css";

export default {
  name: 'App',
  components: {
    Navbar,
   
  }
}
</script>


