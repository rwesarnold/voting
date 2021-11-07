<template>
<div class="wrapper">
  <div class="photos">
    <div class="photo" v-for="photo in photos" :key="photo.id">
      <div class="vote">
        <button @click="voteForPhoto(photo)">Vote for this Photo</button>
      </div>
      <div class="info">
        <h1>Photo Name: {{photo.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/images/'+photo.image">
      </div>
      <div class="info">
        <p>Photographer: {{photo.photographer}}</p>
        <p>Location: {{photo.location}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Voting',
  props: {
    photos: Array
  },
  methods: {
    voteForPhoto(photo) {
      photo.numVotes++;
    }
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

button {
  height: 40px;
  background: purple;
  color: white;
  border: 2px solid #333;
  margin-left: 60px;
  font-size: 20px;
}

.vote {
  width: 300px;
  margin-bottom: 20px;
}
</style>
