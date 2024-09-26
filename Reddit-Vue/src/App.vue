<script setup>



</script>



<template>
<div class="flex-container">
<!-- <header> -->
  <div class="topnav">
  <a class="active" href="/">Hot</a>
  <a href="addPost">New</a>
  <a href="contact">Rising</a>
  <a href="about">Top</a>
  

</div>
<!-- </header> -->
<!-- <RouterLink to="/addPost">New</RouterLink> -->

<RouterView/>
 

</div>

</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}
header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
}
.topnav {
    background-color: rgb(125, 190, 240);
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: start;
    /* height: 40px;
    display: flex;
    flex-direction: row; */
    /* justify-content: center; */
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}



</style>
