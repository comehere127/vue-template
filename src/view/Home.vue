<template>
  <div>
    <Header :data-source="ApplicationListData" :is-home-page="true" />
    <div :class="className">
      <div
        v-if="getIsDesktop"
        class="banner"
        style="background-image: url('__STATIC_PATH__cover-payment.jpg');"
      >
        <div class="search">
          <div class="contain-box">
            <h2>{{ $t('HeaderTitle') }}</h2>
            <h3>{{ $t('HeaderDedscription') }}</h3>
            <Searching :data-source="ApplicationListData" />
          </div>
        </div>
      </div>
      <!-- <div class="tet-contain">
        <div v-if="getIsDesktop" id="firework" class="firework">
          <div class="left-fw">
            <firework img-url="__STATIC_PATH__tet2019/tan-tai.png"/>
          </div>
          <div class="right-fw">
            <firework img-url="__STATIC_PATH__tet2019/tan-loc.png"/>
          </div>
        </div>
        <div v-else class="fw-mb">
          <firework img-url="__STATIC_PATH__tet2019/tan-loc.png"/>
        </div>
      </div>-->
      <div class="container">
        <Filtering :filter-changed="handleFiltering" />
        <infinite-container
          :handler="handleLoadmore"
          :processing="processing"
          :is-loadmore="isLoadmore"
          :class-name="'list-card'"
          @scroll="handleScroll"
        >
          <el-row :gutter="30">
            <el-col
              v-for="app in dataSource"
              :key="app.appId"
              :span="panSize"
              class="animationCustom"
            >
              <application-item
                :app-id="app.appId"
                :webpay-url="app.payUrl"
                :label="app.highlights"
                :title="app.appName"
                :img-url="app.imageItem"
              />
            </el-col>
          </el-row>
          <content-loading :show="processing" />
        </infinite-container>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { toInteger, difference, keys, sortBy, reverse, concat, find, filter } from 'lodash'
import { MOBILE, DESKTOP, TABLET } from '@/constants'
// import Firework from 'components/firework'
export default {
  // components: { Firework },
  page: {
    title: 'Pay.zing.vn - Cổng thanh toán game chính thức của VNG',
    meta: [{ name: 'description', content: 'Pay.zing.vn - Cổng thanh toán game chính thức của VNG' }]
  },
  data() {
    return {
      isSetGreater: false,
      isSetLess: false,
      dataSource: [],
      pageSize: 9,
      spanSize: 8,
      className: '',
      currentPage: 1,
      isLoadmore: false,
      currentFilter: '',
      processing: false,
      ApplicationListData: []
    }
  },
  computed: {
    ...mapGetters(['getApplicationList', 'getUserDemand', 'getIsMobile', 'getIsDesktop', 'getIsTablet', 'getCurrentDevice'])
  },
  created() {
    if (this.getIsMobile) {
      this.pageSize = 5
      this.panSize = 24
      this.className = 'landingMB'
    } else if (this.getIsTablet) {
      this.pageSize = 12
      this.panSize = 12
      this.className = 'landingTL'
    } else {
      this.pageSize = 9
      this.panSize = 8
      this.className = 'landing'
    }
    this.currentFilter = this.getCurrentDevice
    this.reqApplicationList().then(() => {
      this.getUserDemandStored().then(() => {
        let userDemand = this.getUserDemand
        let appData = this.getApplicationList
        if (userDemand !== false) {
          userDemand = keys(userDemand).sort((a, b) => (toInteger(userDemand[a]) > toInteger(userDemand[b]) ? -1 : 1))
          const arrDiff = reverse(sortBy(difference(appData.map(x => x.appId), userDemand).map(x => find(appData, i => i.appId === x)), ['point']))
          userDemand = filter(userDemand.map(x => find(appData, i => i.appId === x)), item => item !== null && item !== undefined)
          appData = concat(userDemand, arrDiff)
        } else {
          appData = reverse(sortBy(appData, ['point']))
        }
        this.ApplicationListData = appData
        this.doHidePreloader(false)
        this.handleDataSource(this.currentFilter, this.ApplicationListData)
      })
    })
  },
  methods: {
    ...mapActions(['reqApplicationList', 'getUserDemandStored', 'doHidePreloader']),
    handleFiltering(val) {
      this.currentFilter = val
      this.currentPage = 1
      this.handleDataSource(val, this.ApplicationListData)
    },
    handleScroll(pos) {
      if (pos >= 400 && !this.isSetGreater) {
        this.isSetGreater = true
        this.isSetLess = false
        gtCore.common.ClassElementUtil('firework', 'sticky').add()
      } else if (pos < 400 && !this.isSetLess) {
        this.isSetGreater = false
        this.isSetLess = true
        gtCore.common.ClassElementUtil('firework', 'sticky').remove()
      }
    },
    handleDataSource(filter, appList) {
      let dataSource
      let isLoadmore
      switch (filter) {
        case MOBILE:
        case TABLET:
          dataSource = appList.filter(item => item.platform === MOBILE)
          break
        case DESKTOP:
          dataSource = appList.filter(item => item.platform === DESKTOP)
          break
        default:
          dataSource = appList
          break
      }

      if (this.pageSize * this.currentPage >= dataSource.length) {
        isLoadmore = false
      } else {
        isLoadmore = true
        dataSource = dataSource.slice(0, this.pageSize * this.currentPage)
      }
      this.dataSource = dataSource
      this.isLoadmore = isLoadmore
    },
    handleLoadmore() {
      this.currentPage = this.currentPage + 1
      this.processing = true
      setTimeout(() => {
        this.handleDataSource(this.currentFilter, this.ApplicationListData)
        this.processing = false
      }, 300)
    }
  }
}
</script>
<style lang="scss">
// .el-carousel__container{
//   height: 400px;
// }
.fw-mb {
  position: absolute;
  right: 0;
  top: 60px;
  .firework-ct {
    transform-origin: right top;
    transform: scale(0.5);
  }
}
.firework {
  width: 1264px;
  height: 220px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 400px;
  &.sticky {
    position: fixed;
    top: 0;
  }
  .left-fw {
    position: absolute;
    left: 0;
    top: 0;
  }
  .right-fw,
  .fw-mb {
    position: absolute;
    right: 0;
    top: 0;
    transform: rotateY(180deg);
    .square,
    .cardfw img {
      transform: rotateY(180deg);
    }
    .square {
      left: 52px;
    }
    .line {
      left: 5px;
    }
    .dym {
      left: 10px;
    }
    .cardfw {
      left: 68px;
    }
    .firework-ct:before {
      left: 69px;
    }
  }
}
.landingTL {
  width: 100%;
  max-width: 640px;
  margin: auto;
  padding: 0 15px;
  padding-top: 80px;
  .button-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
}
.landingMB {
  padding: 0 15px;
  max-width: 320px;
  margin: auto;
  padding-top: 60px;
  .custom-radio-button {
    .el-radio-button {
      margin-left: 0;
      margin-right: 7px;
    }
  }
  .el-radio-button--mini {
    .el-radio-button__inner {
      padding: 7px 10px;
    }
  }
  .button-groupMB {
    margin: 30px 0;
    margin-bottom: 50px;
    h3 {
      margin-bottom: 15px;
    }
  }
}
.el-loading-mask {
  border-color: rgba(37, 37, 37, 0.9);
}
.banner {
  width: 100%;
  position: relative;
  height: 400px;
  margin-bottom: 50px;
  background-size: cover;
  background-position: center center;
}
.banner::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.26), rgba(106, 4, 4, 0.26));
}
.banner > img {
  width: 100%;
}
.banner .search {
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.search .el-autocomplete {
  width: 960px;
}
.search .contain-box h2 {
  font-size: 48px;
  color: #fff;
  font-weight: bold;
}
.search .contain-box h3 {
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
}
.search .el-autocomplete .el-input__inner {
  height: 70px;
  line-height: 70px;
  font-size: 20px;
  padding-left: 50px;
  border-radius: 10px;
}
.container {
  width: 100%;
  max-width: 960px;
  margin: auto;
}
.list-card {
  margin-bottom: 50px;
}
.animationCustom {
  animation: fadedin 1s 1 forwards;
}
</style>
