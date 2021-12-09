<template>
<div class="wrapper">
  <div class="photos">
    <div class="photo" v-for="photo in photos" :key="photo.id">
      <div class="info">
        <h1>Photo Name: {{photo.title}}</h1>
      </div>
      <div class="image">
        <img :src="photo.path" />
      </div>
      <div class="info">
        <h1>Votes: {{photo.numVotes}}</h1>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Voting',
  data() {
    return {
     photos: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.photos = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.photos {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.photo {
  margin: 30px;
  margin-top: 50px;
  width: 300px;
}

.photo img {
  border: 2px solid #333;
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.photo .image {
  display: flex;
  justify-content: center;
}

.info {
  background: black;
  color: white;
  padding: 10px 30px;
  height: 50px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 12px;
}

.split {
  margin-top: 80px;
}
</style>
