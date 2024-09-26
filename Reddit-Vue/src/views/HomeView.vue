<script setup>
import Reddit from '@/components/Reddit.vue'
import { reactive } from 'vue'

const addPostArray = reactive([])

fetch('http://localhost:3000/reddit')
.then(response => {
  return response.json()
})
.then(post =>{
  console.log(post)
  addPostArray.push(...post)
  
})
</script>


<template>

  <div class="that-container">
    <Reddit v-for="allPosts in addPostArray" :redditposts = "allPosts"></Reddit>
  </div>
  

  <div></div>
  
</template>


<style scoped>
.that-container {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
}

</style>
