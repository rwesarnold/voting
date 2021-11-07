<template>
  <div>
    <div class = "win">
      <div v-if="numWinning === 1" class = "winner">
        <p>The photo with the highest number of votes is {{winning.name}}, with {{winning.numVotes}} votes.</p>
        <img :src="'/images/'+winning.image">
        <p class="split">Overall Results are shown below:</p>
      </div>
      <div v-else class = "winners">
        <p>There is more than one winner.</p>
      </div>
    </div>
    <Results :photos="photos" />
  </div>
</template>

<script>
import Results from "../components/Results.vue"
export default {
  name: 'Overall_Results',
  components: {
    Results
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    photos() {
      return this.$root.$data.photos.filter(photo => photo.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    },
    numWinning() {
      let num = 1;
      let photo = this.$root.$data.photos[0];
      this.$root.$data.photos.forEach(item => {
        if (photo == item) {
          photo = item;
        }
        else if (photo.numVotes < item.numVotes) {
          photo = item;
          num = 1;
        }
        else if (photo.numVotes == item.numVotes) {
          num++;
        }
      });
      return num;
    },
    winning() {
      let photo = this.$root.$data.photos[0];
      this.$root.$data.photos.forEach(item => {
        if (photo.numVotes < item.numVotes) {
            photo = item;
        }
      });
      return photo;
    }
  },
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

.win {
  width: 100%;
  justify-content: center;
}

.winner {
  font-size: 20px;
  text-align: center;
  justify-content: center;
}

.winners {
  font-size: 20px;
  text-align: center;
}

.winner img {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border: 5px solid #333;
}
</style>
