<template>
  <div id="app">
    <router-view/>
    
    <div class="footer">
      <p>Draicon Ball</p>
      <p>Icon p-rep Draicon Ball team's official TG channel</p>
      <p><a href="https://t.me/TeamDraiconBall"><img src="https://dajaba.info/wp-content/uploads/2018/12/telegram.png" width="24"/> Draicon Ball</a></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color:#17a2b8;
}

.footer {
  margin-top: 100px;
  background-color: #222;
  padding: 40px 0 40px 0;
  color: #ccc;
  text-align: center;
  text-size: 30px;
}
</style>
