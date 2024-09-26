<script setup>
// import { response } from 'express';

import { ref } from "vue";
const props = defineProps(["redditposts"]);

const clicked = ref(false);
const votes = ref(props.redditposts.votes);

function like() {
  // clicked.value = true

  votes.value = votes.value + 1;

  changeVotes();
}

function dislike() {
   votes.value = votes.value - 1;

  changeVotes();
}

function changeVotes() {
    
  fetch(`http://localhost:3000/reddit/${props.redditposts.id}`, {
    method: "PUT",
    headers: {
      Accept: "applications,json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ votes: votes.value }),
  })
    .then((response) => response.json())

    .then((data) => {
      console.log(data);
    });
}

//     const params = {

//         method: 'PUT',
//         body: JSON.stringify({votes: votes.value}),
//         headers: {

//             "Content-Type": "application/json"
//         }
//     }
// fetch(`http://localhost:3000/post/${props.post.id}`, params)
// .then(response => {return response.json()})
// then(data =>{
//     if(data) {
//         votes.value = data.votes
//     }
// })
</script>

<template>
  <div class="flex-container">
    <div class="card">
      <div class="votes">
        <img
          @click="like()"
          alt="upvote"
          class="arrows"
          src="https://as1.ftcdn.net/v2/jpg/02/99/82/44/1000_F_299824459_FjVsGc6qkEpr0gv2Ow8Qso1UXq8Ti62n.jpg"
        />
        <p>{{ redditposts.votes }}</p>
        <img
          @click="dislike()"
          class="arrows"
          src="https://as2.ftcdn.net/v2/jpg/02/99/82/43/1000_F_299824355_l94dffFXFQrESQEFi5R3pWxyp5geK6mw.jpg"
        />
      </div>
      <div class="title">
        <p>{{ redditposts.title }}</p>
      </div>
      <div class="image">
        <img :src="redditposts.image" />
      </div>

      <div class="author">
        <p>{{ redditposts.author }}</p>
      </div>
      <div class="subreddit">
        <p>{{ redditposts.subreddit }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  margin-top: 5px;
  margin-left: -200px;
  /* margin-left:30px; */
}

.card {
  display: flex;
  flex-direction: row;
  margin: 30px;
}

.image {
  width: 50px;
}

.title {
  padding-left: 30px;
}

.author {
  padding: 30px;
}

/* .subreddit {

} */

.votes {
  font-size: 30px;
  margin-right: 10px;
}

.arrows {
  height: 30px;
  margin-top: -20px;
}

.uparrow {
  height: 10px;
}
</style>
