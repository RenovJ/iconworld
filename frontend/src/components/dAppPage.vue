<template>
  <div class="dAppPage">
    <div class="page">
      <h2>
        <b-img :src="dapp.icon" alt="ic" style="height:48px; width:48px; overflow: hidden;"></b-img>
        {{ dapp.title }}
        <span style="font-size:24px;">
          <b-badge class="mr-1" v-if="dapp.tags.new" variant="warning">New</b-badge>
          <b-badge class="mr-1" v-if="dapp.tags.hot" variant="danger">Hot</b-badge>
        </span>
      </h2>
      
        <div style="display:flex;">
          <span>
            <ul style="display:inline-block">
              <li>Category <b-badge variant="outline-dark">{{ dapp.category }}</b-badge></li>
              <li>Since <b-badge variant="outline-dark">{{ dapp.open_date }}</b-badge></li>
              <li>Status <b-badge variant="outline-dark">{{ dapp.status }}</b-badge></li>
              <li>Total transactions <b-badge variant="outline-dark">{{ dapp.tx_amount_total }}</b-badge></li>
              <li>Total wishes <b-badge variant="outline-dark">63</b-badge></li>
            </ul>
          </span>
          <span style="padding:0px; vertical-align:top; display:inline-block" class="ml-auto">
              <b-button squared variant="info" class="" v-b-modal.modalVote>
                <i class='far fa-thumbs-up'></i> {{ dapp.voted }}
              </b-button>
              <b-button squared variant="info" class="ml-2"
                v-if="dapp.dapp_page" v-on:click="moveToDappPage">
                <i class='fas fa-external-link-alt'></i> Launch dApp
              </b-button>
              <b-button squared variant="info" class="ml-2"
                v-if="dapp.website" v-on:click="moveToWebsite">
                <i class='fas fa-external-link-alt'></i> View website
              </b-button>
              <b-button squared variant="info" class="ml-2 mr-auto"
                v-if="dapp.score" v-on:click="moveToScore">
                <i class='far fa-file-code'></i> View score
              </b-button>
          </span>
        </div>
      
      <b-modal id="modalVote" hide-header hide-footer size="lg">
        <h2>Staking your icx and voting dApp</h2>
        (description of what is voting and what profit from, how to vote)
      </b-modal>
      
      <div>
        <b-carousel
          id="carousel1"
          style="text-shadow: 1px 1px 2px #333; max-width:1000px;"
          controls
          indicators
          background="#fff"
          :interval="4000"
          class="mx-auto mb-5 mt-2"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            v-for="item in dapp.slide"
            v-bind:key="item.url"
            style=""
          >
            <img
              v-if="item.type === 'image'"
              slot="img"
              class="img-fluid mx-auto"
              height=500
              :src="item.url"
            />
            <iframe
              v-else-if="item.type === 'movie'"
              width="900"
              height="506"
              src="item.url"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
              </iframe>
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div>
        <h3>Description</h3>
        <p class="descriptions">{{ dapp.description }}</p>
      </div>
      <div>
        <h3>How to use</h3>
        <p class="descriptions">{{ dapp.howtouse }}</p>
      </div>
      <div>
        <h3>News & updates</h3>
        <p class="descriptions">{{ dapp.news }}</p>
      </div>
      
      
      <div style="display:none;">
        <h3>Statistics</h3>
        <b-container>
          <b-row>
            <b-col>
              <h5>Transaction amount</h5>
              <ul>
                <li>Total:        <b-badge variant="light">{{ dapp.tx_amount_total }}</b-badge></li>
                <li>Recent 7d:    <b-badge variant="light">{{ dapp.tx_amount_recent_7d }}</b-badge></li>
                <li>Recent 24hr:  <b-badge variant="light">{{ dapp.tx_amount_recent_24hr }}</b-badge></li>
              </ul>
            </b-col>
            <b-col>
              <h5>Active users</h5>
              <ul>
                <li>Total:        <b-badge variant="light">{{ dapp.active_user_total }}</b-badge></li>
                <li>Recent 7d:    <b-badge variant="light">{{ dapp.active_user_recent_7d }}</b-badge></li>
                <li>Recent 24hr:  <b-badge variant="light">{{ dapp.active_user_recent_24hr }}</b-badge></li>
              </ul>
            </b-col>
            <b-col>
              <h5>ICX volume</h5>
              <ul>
                <li>Total:        <b-badge variant="light">{{ dapp.icx_volume_total }}</b-badge></li>
                <li>Recent 7d:    <b-badge variant="light">{{ dapp.icx_volume_recent_7d }}</b-badge></li>
                <li>Recent 24hr:  <b-badge variant="light">{{ dapp.icx_volume_recent_24hr }}</b-badge></li>
              </ul>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:regular" rel="stylesheet" type="text/css">
    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>
    
  </div>
</template>

<script>
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

export default {
  name: 'dAppList',
  props: {
    msg: String
  },
  methods: {
    moveToDappPage () {
      window.open(this.dapp.dapp_page, '_blank');
    },
    moveToWebsite () {
      window.open(this.dapp.website, '_blank');
    },
    moveToScore () {
      window.open('https://tracker.icon.foundation/contract/' + this.dapp.score, '_blank');
    },
    openVoteModal () {
    
    },
    setTransactionAmountTotal (response) {
      this.dapp.tx_amount_total = response.data.data.txCount
    }
  },
  created: function () {
    this.dapp.id = this.$route.params.dappid
    this.dapp.tx_amount_total =
    
    this.$http.get('https://tracker.icon.foundation/v3/contract/info', {
        params: {
          addr: this.dapp.score
        }
      })
      .then(this.setTransactionAmountTotal)
      .catch(function (error) {
        alert(error)
      });
  },
  data () {
    return {
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
      dapp: {
        id: 1,
        title: "ICON Wish",
        thumbnail: "./iconwishboard_scr.png",
        icon: "https://www.iconwish.com/favicon.ico",
        slide: [
          {
            type: "image",
            url: "./wishboard_src1.png"
          },
          {
            type: "image",
            url: "./wishboard_src2.png"
          }
        ],
        comment: "ICON Wish Board provides a posting feature for users to share their wishes.",
        description: "Everyone has a wish. A wish can be spiritual or materialistic. Icon Wish Board is a service for Iconists to permanently record their wishes on blockchain and to share them with the community. Furthermore, it allows ICONists to weight their wishes with ICX and earn rewards based on the likes they receive and their weighting. As an Iconist, you can record your wish whether it is personal or for the Icon world. We wish that each and every wish of all Iconists comes true. Happy wishing!",
        howtouse: "The board is so simple to use. Just press [New] button to write a wish then move around your wish to register it in a place of your liking. Then a wish you wrote is shared with others. In addition, you can give a 'like' with [thumb up] button to other user’s wish. There is a fee to post a wish. The default fee is 1 icx for 40 characters. If you want to write a longer wish, increase the weight to more than 1 icx. The earnings from posting fees are distributed to the users with most liked wishes, users who posted the most weight, and a user with the last wish registered within the time limit. You need to install and connect to ICONex wallet to post a new wish and to give a thumbs up. If you’d like to try without connecting to ICONex at this time, don't worry, you can try with a default account to post something for free!",
        news: "None",
        score: "cxc1d5ca6d7daede82e59b616ea6908807d7bea3b8",
        website: "https://www.iconwish.com",
        dapp_page: "https://www.iconwish.com",
        category: DAPP_CATEGORY_FOR_FUN,
        voted: 593,
        tx_amount_total: 23019,
        tx_amount_recent_7d: 232,
        tx_amount_recent_24hr: 232,
        active_user_total: 107,
        active_user_recent_7d: 107,
        active_user_recent_24hr: 107,
        icx_volume_total: 3232,
        icx_volume_recent_7d: 341,
        icx_volume_recent_24hr: 321,
        open_date: "2019-06-03",
        status: DAPP_STATUS_ACTIVE,
        tags: {
            new: true,
            hot: true,
            opened_recent: true,
            comming_soon: true,
            on_token_sale: true
        },
        comments: [
          { no: 0, writer: '', message: '', datetime: 0 }
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dAppPage {
  padding-top:50px;
  padding-bottom:40px;
  color:#333;
}

.page {
  width:80%;
  margin: auto;
  border-radius:20px;
  background-color:#fff;
  padding:40px;
}

.descriptions {
  white-space:pre-wrap;
}

</style>
