<template>
    <div class="px-20">
        <p class="text30 text-center pt-8">Register Yourself</p>
        <form @submit.prevent='submit'>
       
        <div class="mb-4 form-group">
            <p class="mb-2 text-white text-lg">Enter First Name</p>
            <b-form-input v-model="fname" type="text" placeholder="Enter your First Name"></b-form-input>
        </div>
        <div class="mb-4 form-group">
            <p class="mb-2 text-white text-lg">Enter Last Name</p>
            <b-form-input v-model="lname" type="text" placeholder="Enter your Last Name"></b-form-input>
        </div>
          <div class="mb-4 form-group">
            <p class="mb-2 text-white text-lg">Enter Email</p>
            <b-form-input v-model="email" type="text" placeholder="Enter your Email"></b-form-input>
        </div>
         
        <div class="mb-4 form-group">
            <p class="mb-2 text-white text-lg">Password</p>
            <b-form-input v-model="password" type="password" placeholder="Enter Password"></b-form-input>
        </div>
        
         <div class="flex justify-center mt-8">
            <b-button variant="danger" type="submit" class="font-bold text-prime">Submit</b-button>
        </div>
        </form>
    </div>
</template>


<script>

import axios from 'axios'
export default {
 data(){
   return {
    
  
            fname:"",
            lname:"",
            email:"",
            password:"",
           
           
  };
 },

methods: {
   async submit() {
        let payload = {
            fname:this.fname,
            lname:this.lname,
            email:this.email,
            password:this.password
        }
        try {
            
            await axios.post('http://localhost:8000/api/register',payload)
            alert('success')
        } catch (error) {
            console.log(error);
        }
        
    }
},
 
}
</script>