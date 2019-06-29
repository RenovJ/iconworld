<template>
  <div class="Layout">
    <b-navbar toggleable="lg" type="dark" variant="light" class="navbar">
        <b-navbar-brand href="#/" class="brand">
          <b-img src="./logo_white.png" width=48 fluid alt="logo" style="display:relative; top:-20px;"></b-img>
        ICON World
        </b-navbar-brand>
    
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
        <b-collapse id="nav-collapse" is-nav style="display:none">
          <b-navbar-nav class="navmenu">
            <b-nav-item href="#">
              <span>
              Sample
              </span>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="navmenu" style="display:none">
            <b-nav-item href="#/dApp">
              <span>
              dApps
              </span>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="navmenu" style="display:none">
            <b-nav-item href="#/prep">
              <span>
              P-Reps
              </span>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="navmenu" style="display:none">
            <b-nav-item href="#/eep">
              <span>
              EEPs
              </span>
            </b-nav-item>
          </b-navbar-nav>
          
          <b-navbar-nav v-if="writer === ''" class="ml-auto">
            <b-nav-item>
              <span class="navmenu loginICONexBtn">
                <b-button variant="info" v-on:click="loginICONex" size="lg">
                  <i class='fas fa-sign-in-alt'></i>
                  Connect ICONex
                </b-button>
              </span>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-else class="ml-auto">
            <b-nav-item-dropdown right>
              <template slot="button-content">
                <i class='fas fa-user' style='font-size:24px'></i>
              </template>
              <b-dropdown-item v-on:click="logoutICONex">
                <i class='fas fa-sign-out-alt'></i> Disconnect ICONex
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    
    <router-view></router-view>
    <link href="https://fonts.googleapis.com/css?family=Saira:regular" rel="stylesheet" type="text/css">
    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    msg: String
  },
  methods: {
    iconexEventHandler (event) {
      var type = event.detail.type
      var payload = event.detail.payload
      switch (type) {
        case 'RESPONSE_HAS_ACCOUNT':
          this.isHasAccountICONex = true
          break
        case 'RESPONSE_ADDRESS':
          this.writer = payload
          this.$nextTick(() => {
            // this.getLoginData()
          })
          break
        case 'RESPONSE_JSON-RPC':
          // this.debug = JSON.stringify(payload)
          break
        case 'CANCEL_JSON-RPC':
          break
        default:
      }
    },
    knockICONex () {
      window.dispatchEvent(new CustomEvent('ICONEX_RELAY_REQUEST', {
        detail: {
          type: 'REQUEST_HAS_ACCOUNT'
        }
      }))
    },
    loginICONex () {
      window.dispatchEvent(new CustomEvent('ICONEX_RELAY_REQUEST', {
        detail: {
          type: 'REQUEST_ADDRESS'
        }
      }))
    },
    logoutICONex () {
      this.writer = ''
    }
  },
  data () {
    return {
      isHasAccountICONex: false,
      writer: ''
    }
  },
  mounted () {
    window.addEventListener('ICONEX_RELAY_RESPONSE', this.iconexEventHandler, false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar {
  background-color:#17a2b8!important;
}

.navbar .brand {
  font-size:30px;
  font-weight:800;
  font-family:"Saira",arial,sans-serif;
}

.navbar .navmenu {
  font-size:24px;
  color: #343a40!important;
  font-family:"Saira",arial,sans-serif;
}
</style>
