<script setup>
// import { reactive } from "vue";
import router from '@/router'
// import {Reddit} from 'vue'
// const addPostArray = reactive([])

let damnvotes = ""
let damnimage = ""
let damntitle = ""
let damnauthor = ""
let damnsubreddit = ""

function addItem() {
    let redditdata = {
            "votes": damnvotes,
            "image": damnimage,
            "title": damntitle,
            "author": damnauthor,
            "subreddit": damnsubreddit
        }

        const params = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },

            body: JSON.stringify(redditdata),
       
    };

    fetch('http://localhost:3000/addPost', params)
    .then(response => response.json())
    .then(() => {
        router.push('/')
        
    })
}

    // .then(addPost => {
    //     addPostArray.push(...addPost)
    // })
    



</script>


<template>
<div class="create">
        <div class="addItem">
            <label for="votes">Votes</label>
            <br>
            <input name="votes" type="text"  v-model="damnvotes">
            <br>
            <label for="imageLink" >Image:</label>
      <br>
      <input name="image" type="text" v-model="damnimage">
      <br>
        </div>
        <label for="title">Title:</label>
      <br>
      <input name="title" type="text" v-model="damntitle">
      <br>
      <label for="author">Author:</label>
      <br>
      <input name="author" type="text"  v-model="damnauthor">
      <br>
      <label for="subreddit">/r:</label>
      <br>
      <input name="subreddit" type="text"  v-model="damnsubreddit">
      <br>
      <button @click="addItem()">Submit!</button>

</div>

</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  background-color: blue;
}

.addItem {
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  font-weight: 600;  
  justify-content: center;

}

.create {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


</style>