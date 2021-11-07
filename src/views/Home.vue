<template>
  <div>
    <Voting :photos="photos" />
  </div>
</template>

<script>
import Voting from "../components/Voting.vue"
export default {
  name: 'Home',
  components: {
    Voting
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    photos() {
      return this.$root.$data.photos.filter(photo => photo.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
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
</style>
