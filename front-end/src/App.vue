<template>
<div id="app">
  <div id="menu">
    <div id="center">
      <router-link to="/">
        <div class="menu-item">
          <p>Voting Poll</p>
        </div>
      </router-link>
      <router-link to="/Overall_Results">
        <div class="menu-item">
          <p>Overall Results</p>
        </div>
      </router-link>
      <router-link to="/Photos">
        <div class="menu-item">
          <p>Add a Photo!</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <div class="gitlink">
    <a id="gitlink_text" href="https://github.com/rwesarnold/Voting_Poll"><i>github</i></a>
  </div>
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

#menu {
  display: grid;
  grid-column-gap: 5px;
  margin-bottom: 30px;
  font-size: 20px;
  background: black;
  height: 80px;
}

#menu a {
  color: white;
}

#center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 10px;
}

.gitlink {
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  background-color: black;
  padding: 5px;
  position: fixed;
}

#gitlink_text {
  color: white;
}
</style>
