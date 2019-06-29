<template>
  <div class="dAppList">
    <div class="page">
      <div class="list_header">
        <h2>ICON dApps</h2>
        <h5>
        connected with icon mainnet
        </h5>
      </div>
      <div class="options">
        <b-dropdown id="categoryFilterDropdown" :text="categoryFilter" variant="info" class="m-md-2">
          <b-dropdown-item href="#" @click="changeCategoryFilter(DAPP_CATEGORY_ALL)">All</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#" @click="changeCategoryFilter(DAPP_CATEGORY_GAME)">Game</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeCategoryFilter(DAPP_CATEGORY_GAMBLING)">Gambling</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeCategoryFilter(DAPP_CATEGORY_SOCIAL)">Social</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeCategoryFilter(DAPP_CATEGORY_FINANCE)">Finance</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeCategoryFilter(DAPP_CATEGORY_DEVELOPMENT)">Development</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeCategoryFilter(DAPP_CATEGORY_MEDIA)">Media</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeCategoryFilter(DAPP_CATEGORY_WALLET)">Wallet</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeCategoryFilter(DAPP_CATEGORY_MARKET)">Market</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeCategoryFilter(DAPP_CATEGORY_SECURITY)">Security</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeCategoryFilter(DAPP_CATEGORY_GOVERNANCE)">Governance</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeCategoryFilter(DAPP_CATEGORY_INDUSTRY)">Industry</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeCategoryFilter(DAPP_CATEGORY_EXCHANGE)">Exchange</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeCategoryFilter(DAPP_CATEGORY_FOR_FUN)">For fun</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeCategoryFilter(DAPP_CATEGORY_OTHERS)">Others</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="list">
        <b-button variant="light"
          v-for="dapp in dapps"
          v-bind:key="dapp.id"
          v-if="categoryFilter === DAPP_CATEGORY_ALL || dapp.category === categoryFilter"
          @click="openDAppPage( dapp.id )"
          style="width: 18rem; display:inline-block; margin:20px;"
          class="item">
            <div style="height:9rem; width:15rem; overflow: hidden;"
              class="mx-auto">
              <img :src="dapp.thumbnail" style="height:9rem; width:15rem; object-fit:cover; border-radius:4px;"/>
            </div>
            <b-card-title class="mt-2" @click="openDAppPage( dapp.id )">
              <b-img :src="dapp.icon" alt="ic" style="height:24px; width:24px; overflow: hidden;"></b-img>
              {{ dapp.title }}
            </b-card-title>
            <div>
              <div @click="openDAppPage( dapp.id )">
              {{ dapp.comment }}
              </div>
              <div class="mt-2" style="color:#666; display:flex;">
                <span>
                {{ dapp.category }}
                </span>
                <span class="ml-auto">
                  <i class='far fa-thumbs-up'></i> {{ dapp.voted }}
                </span>
              </div>
            </div>
            <div class="mt-3">
              <b-badge class="mr-1" v-if="dapp.tags.new" variant="warning">New</b-badge>
              <b-badge class="mr-1" v-if="dapp.tags.hot" variant="danger">Hot</b-badge>
              <b-badge class="mr-1" v-if="dapp.tags.opened_recent" variant="primary">Opened recently</b-badge>
              <b-badge class="mr-1" v-if="dapp.tags.comming_soon" variant="success">Comming soon {{ dapp.open_date }}</b-badge>
              <b-badge class="mr-1" v-if="dapp.tags.on_token_sale" variant="info">On token sale</b-badge>
              <b-badge class="mr-1" v-if="dapp.tags.updated" variant="info">Updated</b-badge>
            </div>
        </b-button>
        
        <b-button variant="light"
          style="width: 18rem; display:inline-block; margin:20px; min-height:400px;"
          v-on:click="addDApp">
          <i class='fas fa-plus-circle' style="font-size:72px; color:#999;"></i>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
const DAPP_CATEGORY_ALL = 'All'
const DAPP_CATEGORY_GAME = 'Game'
const DAPP_CATEGORY_GAMBLING = 'Gambling'
const DAPP_CATEGORY_SOCIAL = 'Social'
const DAPP_CATEGORY_FINANCE = 'Finance'
const DAPP_CATEGORY_DEVELOPMENT = 'Development'
const DAPP_CATEGORY_MEDIA = 'Media'
const DAPP_CATEGORY_WALLET = 'Wallet'
const DAPP_CATEGORY_MARKET = 'Market'
const DAPP_CATEGORY_SECURITY = 'Security'
const DAPP_CATEGORY_GOVERNANCE = 'Governance'
const DAPP_CATEGORY_INDUSTRY = 'Industry'
const DAPP_CATEGORY_EXCHANGE = 'Exchange'
const DAPP_CATEGORY_FOR_FUN = 'For fun'
const DAPP_CATEGORY_OTHERS = 'Others'
const DAPP_STATUS_ACTIVE = 'Active'
const DAPP_STATUS_INACTIVE = 'Inactive'
const DAPP_STATUS_PREPARING = 'Preparing'
const ADD_DAPP_URL = 'https://docs.google.com/forms/d/1-QFhnKHnZE3JtaKUsfdmVm47MD8rnHSyy7ihPhR7OGQ'

export default {
  name: 'dAppList',
  props: {
    msg: String
  },
  methods: {
    openDAppPage (dAppId) {
      window.location.href = '#/dApp/' + dAppId
    },
    addDApp () {
      window.open(ADD_DAPP_URL, '_blank')
    },
    changeCategoryFilter (category) {
      this.categoryFilter = category
    }
  },
  data () {
    return {
      DAPP_CATEGORY_ALL: DAPP_CATEGORY_ALL,
      DAPP_CATEGORY_GAME: DAPP_CATEGORY_GAME,
      DAPP_CATEGORY_GAMBLING: DAPP_CATEGORY_GAMBLING,
      DAPP_CATEGORY_SOCIAL: DAPP_CATEGORY_SOCIAL,
      DAPP_CATEGORY_FINANCE: DAPP_CATEGORY_FINANCE,
      DAPP_CATEGORY_DEVELOPMENT: DAPP_CATEGORY_DEVELOPMENT,
      DAPP_CATEGORY_MEDIA: DAPP_CATEGORY_MEDIA,
      DAPP_CATEGORY_WALLET: DAPP_CATEGORY_WALLET,
      DAPP_CATEGORY_MARKET: DAPP_CATEGORY_MARKET,
      DAPP_CATEGORY_SECURITY: DAPP_CATEGORY_SECURITY,
      DAPP_CATEGORY_GOVERNANCE: DAPP_CATEGORY_GOVERNANCE,
      DAPP_CATEGORY_INDUSTRY: DAPP_CATEGORY_INDUSTRY,
      DAPP_CATEGORY_EXCHANGE: DAPP_CATEGORY_EXCHANGE,
      DAPP_CATEGORY_FOR_FUN: DAPP_CATEGORY_FOR_FUN,
      DAPP_CATEGORY_OTHERS: DAPP_CATEGORY_OTHERS,
      DAPP_STATUS_ACTIVE: DAPP_STATUS_ACTIVE,
      DAPP_STATUS_INACTIVE: DAPP_STATUS_INACTIVE,
      DAPP_STATUS_PREPARING: DAPP_STATUS_PREPARING,
      ADD_DAPP_URL: ADD_DAPP_URL,
      categoryFilter: 'All',
      dapps: [
        {
          id: 1,
          title: "ICONex",
          thumbnail: "https://lh3.googleusercontent.com/Wg3HzZkMwNdKZJVwwC6GMvfm7uKjuUXIcXuufT13Ig3FQckWsSn8MP88aKER-m4ljfjRGH-MyA=w640-h400-e365",
          icon: "https://lh3.googleusercontent.com/9m8rWGn73N3zhVIWQbaEL80V1yS2DzYpYAlRmMzAtoM_NEqVFBS3LXXsjkr8isknMxk68K47Sw=w128-h128-e365",
          comment: "ICON wallet on Chrome extension providing authentication and asset management",
          category: DAPP_CATEGORY_WALLET,
          voted: 932,
          tx_amount_per_24h: 232,
          active_user_per_24h: 107,
          icx_volume_per_24h: 342432421,
          open_date: "2019-06-03",
          status: DAPP_STATUS_ACTIVE,
          tags: {
              new: false,
              hot: true,
              opened_recent: false,
              comming_soon: false,
              on_token_sale: false,
              updated: true
          }
        },
        {
          id: 2,
          title: "ICON Tracker",
          thumbnail: "https://cdn-images-1.medium.com/max/1600/1*eZ_DAYUoX4ku_FBPY0PMDw.png",
          icon: "https://lh3.googleusercontent.com/9m8rWGn73N3zhVIWQbaEL80V1yS2DzYpYAlRmMzAtoM_NEqVFBS3LXXsjkr8isknMxk68K47Sw=w128-h128-e365",
          comment: "An blockchain explorer displaying status of blocks, transactions and scores on ICON network.",
          category: DAPP_CATEGORY_OTHERS,
          voted: 405,
          tx_amount_per_24h: 232,
          active_user_per_24h: 107,
          icx_volume_per_24h: 342432421,
          open_date: "2019-06-03",
          status: DAPP_STATUS_ACTIVE,
          tags: {
              new: false,
              hot: true,
              opened_recent: false,
              comming_soon: false,
              on_token_sale: false,
              updated: false
          }
        },
        {
          id: 3,
          title: "ICON Wish Board",
          thumbnail: "./wishboard_src1.png",
          icon: "https://www.iconwish.com/favicon.ico",
          comment: "Post your wishes or any funny things, and get rewards!",
          category: DAPP_CATEGORY_FOR_FUN,
          voted: 593,
          tx_amount_per_24h: 232,
          active_user_per_24h: 107,
          icx_volume_per_24h: 342432421,
          open_date: "2019-06-03",
          status: DAPP_STATUS_ACTIVE,
          tags: {
              new: true,
              hot: true,
              opened_recent: true,
              comming_soon: false,
              on_token_sale: false,
              updated: false
          }
        },
        {
          id: 4,
          title: "Dragonball Super",
          thumbnail: "./db_thumb.png",
          icon: "./db_ic.jpg",
          comment: "Let's go on an adventure to find seven Dragonballs",
          category: DAPP_CATEGORY_GAME,
          voted: 802,
          tx_amount_per_24h: 232,
          active_user_per_24h: 107,
          icx_volume_per_24h: 342432421,
          open_date: "2029-08-01",
          status: DAPP_STATUS_ACTIVE,
          tags: {
              new: true,
              hot: false,
              opened_recent: false,
              comming_soon: true,
              on_token_sale: false,
              updated: false
          }
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dAppList {
  //background-color:#17a2b8;
}

.page {
  width:90%;
  margin:auto;
}

.options {
  margin-left:13px;
}

.list {
  //margin:auto;
  display:flex;
  flex-wrap: wrap;
}

.list_header {
  text-align:center;
  padding: 40px 0 0px 0;
  font-family:"Saira",arial,sans-serif;
}

.list .item {
  vertical-align: top;
  justify-content: space-around;
  padding: 20px;
  text-align: left;
}


a:link {text-decoration: none; color: #666666;}
a:visited {text-decoration: none; color: #666666;}
a:active {text-decoration: none; color: #666666;}
a:hover {text-decoration: none; color: #333333;}

</style>
