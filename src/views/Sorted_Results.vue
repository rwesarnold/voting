<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <p>Sort by Location</p>
    <ul class="pure-menu-list-L">
      <li class="pure-menu-item"><a @click="select('United States')" href="#" class="pure-menu-link">United States</a></li>
      <li class="pure-menu-item"><a @click="select('Canada')" href="#" class="pure-menu-link">Canada</a></li>
      <li class="pure-menu-item"><a @click="select('Greenland')" href="#" class="pure-menu-link">Greenland</a></li>
      <li class="pure-menu-item"><a @click="select('Antarctica')" href="#" class="pure-menu-link">Antarctica</a></li>
    </ul>

    <p>Sort by Photographer</p>
    <ul class="pure-menu-list-L">
      <li class="pure-menu-item"><a @click="select('Jason Borne')" href="#" class="pure-menu-link">Jason Borne</a></li>
      <li class="pure-menu-item"><a @click="select('Mike Wazowski')" href="#" class="pure-menu-link">Mike Wazowski</a></li>
      <li class="pure-menu-item"><a @click="select('Wesley Arnold')" href="#" class="pure-menu-link">Wesley Arnold</a></li>
    </ul>
  </div>
  <Results :photos="photos" />
</div>
</template>

<script>
import Results from "../components/Results.vue"
export default {
  name: 'Sorted_Results',
  components: {
    Results
  },
  data() {
    return {
      location: '',
      photographer: '',
    }
  },
  computed: {
    photos() {
      let photos = "";
      if (this.locaiton != "") {
        photos = this.$root.$data.photos.filter(photo => photo.location === this.location);
      }
      if (this.photographer != "") {
        photos = this.$root.$data.photos.filter(photo => photo.photographer === this.photographer);
      }
      return photos;
    }
  },
  methods: {
    select(x) {
      this.location = "";
      this.photographer = "";
      if (x == "United States") {
        this.location = x;
      }
      if (x == "Canada") {
        this.location = x;
      }
      if (x == "Greenland") {
        this.location = x;
      }
      if (x == "Antarctica") {
        this.location = x;
      }
      if (x == "Jason Borne") {
        this.photographer = x;
      }
      if (x == "Mike Wazowski") {
        this.photographer = x;
      }
      if (x == "Wesley Arnold") {
        this.photographer = x;
      }
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

form {
  display: table;
  width: 100%;
}

{
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

p {
  font-size: 20px;
  text-align: center;
  width: 100%;
}

ul {
  font-size: 18;
  display: table;
  margin: 0 auto;
}

li {
  font-size: 18px;
}
</style>
