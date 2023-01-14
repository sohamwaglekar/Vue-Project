<template>
   <div class=" bg-black">
  <b-navbar toggleable="lg"  class=" py-4" >
    <div class="pl-12 w-1/4">
    <b-navbar-brand @click="handleClick('home')">
      
    </b-navbar-brand>
    </div>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto w-3/4">
          <div class="flex  ">
       
       
        <b-nav-item class="navbarhead px-12 cursor-pointer text-white" @click="handleClick('todolist')">Todo-List</b-nav-item>
       
         <b-nav-item class="navbarhead px-12 cursor-pointer text-white" @click="handleClick('register')">Registration</b-nav-item>
         <b-nav-item class="navbarhead px-12 cursor-pointer text-white" v-if="!isLoggedIn" @click="handleClick('login')">Login</b-nav-item>
         <div v-else class="px-12">
          <b-nav-item-dropdown text="Profile" right>
          
          <b-nav-item class="px-6 cursor-pointer text-black" @click="handleLogout"><p class="text-black text-base">Logout</p></b-nav-item>
          
        </b-nav-item-dropdown>
         </div>
         
          </div>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
     
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  methods:{
  handleClick(name){
this.$router.push({name:name})
},
async handleLogout(){
 try {
  await axios.post('http://localhost:8000/api/logout')
  
  this.$store.commit('auth/SET_USER',{})
  window.location.reload()
  
 } catch (error) {
  console.log(error)
 }

}
  },
  computed: {
    ...mapState('auth',['user']), 
    isLoggedIn() {
      console.log(this.user);
      if(this.user && Object.keys(this.user).length>1){
        return true
      }else{
        return false
      }
    }
  },
}
</script>