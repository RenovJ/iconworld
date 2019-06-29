<template>
  <div class="EEPList">
    <div class="page">
      <div class="list_header">
        <h2>EEP</h2>
        <h5>
        Ecosystem Expansion Projects that aim to grow the ICON Ecosystem, and lastly ICONists, who contribute to the network through delegating their stake to another entity.
        </h5>
      </div>
      <div class="list">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'EEPList',
  props: {
    msg: String
  },
  methods: {
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.EEPList {
  background-color:#17a2b8;
}

.page {
  width:90%;
  margin:auto;
}

.list {
  //margin:auto;
  display:flex;
  flex-wrap: wrap;
}

.list_header {
  color: #fff;
  text-align:center;
  padding: 40px 0 40px 0;
  font-family:"Saira",arial,sans-serif;
}

.list .item {
  vertical-align: top;
  justify-content: space-around;
}


a:link {text-decoration: none; color: #666666;}
a:visited {text-decoration: none; color: #666666;}
a:active {text-decoration: none; color: #666666;}
a:hover {text-decoration: none; color: #333333;}

</style>
