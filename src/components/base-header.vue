<template>
  <div v-if="getIsDesktop" :class="className">
    <div class="navHeader">
      <router-link to="/" exact>
        <img v-imgSrc="'zing-logo.png'" alt="zing-logo">
      </router-link>
      <nav-bar />
    </div>
  </div>
  <div v-else-if="getIsTablet" :class="className">
    <div class="headerMB">
      <router-link class="logoMB" to="/" exact>
        <img v-imgSrc="'zing-logo.png'" alt="zing-logo">
      </router-link>
      <Searching v-show="isHomePage" :data-source="dataSource" />
      <nav-bar />
    </div>
    <!-- <div v-show="isHomePage" class="fw-mb">
      <firework img-url="/static/images/tet2019/tan-loc.png"/>
    </div>-->
  </div>
  <div v-else :class="className">
    <div class="headerMB">
      <router-link class="logoMB" to="/" exact>
        <img v-imgSrc="'zing-logo.png'" alt="zing-logo">
      </router-link>
      <Searching v-show="isHomePage" :data-source="dataSource" />
      <nav-bar />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Firework from '@/components/firework'
export default {
  // components: { Firework },
  props: {
    isHomePage: {
      type: Boolean,
      default: false
    },
    dataSource: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      className: ''
    }
  },
  computed: {
    ...mapGetters(['getIsMobile', 'getIsDesktop', 'getIsTablet'])
  },
  created() {
    this.className = this.handleDetectClassName()
  },
  methods: {
    handleDetectClassName() {
      if (this.getIsMobile) {
        if (this.isHomePage) {
          return 'mobileLand'
        } else {
          return ''
        }
      } else if (this.getIsTablet) {
        if (this.isHomePage) {
          return 'tabletLand'
        } else {
          return ''
        }
      } else if (this.getIsDesktop) {
        if (this.isHomePage) {
          return 'header'
        } else {
          return 'header notH'
        }
      }
      return 'header'
    }
  }
}
</script>
<style lang="scss">
.header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  padding: 0 15px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
  .navHeader {
    max-width: 1600px;
    margin: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  &.notH {
    background: #22a0ea;
    box-shadow: #b1b1b1 0px 2px 5px;
  }
}
.header a {
  color: #fff !important;
  font-weight: 700;
}
/* .logo{
    display: block;
    width: 100px;
  } */
.logo img,
.header img {
  display: block;
  width: 100px;
}
</style>
