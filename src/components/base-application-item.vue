<template>
  <el-card :body-style="{padding: 0,cursor: 'pointer'}" shadow="never" class="box-card">
    <div v-show="!isLoading">
      <div @click="clickBanner">
        <h3>{{ title }}</h3>
        <div :style="{backgroundImage: 'url('+imgUrl+')'}" class="thumb-img" />
        <span v-show="label.some(item => item === 'promotion')" class="promotion">
          <img v-imgSrc="'badge-promotion.svg'" alt>
        </span>
        <span v-show="label.some(item => item === 'new')" class="promotion">
          <img v-imgSrc="'badge-new.svg'" alt>
        </span>
      </div>
      <el-button
        type="primary"
        round
        size="small"
        @click="clickBannerButton"
      >{{ $t('ApplicationButton') }}</el-button>
    </div>
    <div v-show="isLoading" class="el-loading">
      <div />
      <div />
      <div />
    </div>
  </el-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    appId: {
      type: String,
      default: ''
    },
    label: {
      type: Array,
      default: () => {
        return []
      }
    },
    imgUrl: {
      type: String,
      default: ''
    },
    webpayUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isLoading: true
    }
  },
  created() {
    const img = new Image()
    img.src = this.imgUrl
    img.onload = this.handleLoadedImage
  },
  methods: {
    clickBanner() {
      this.$store.dispatch('application/setUserDemand', {
        appId: this.appId,
        redirectUrl: this.webpayUrl
      })
    },
    clickBannerButton() {
      this.$store.dispatch('application/setUserDemand', {
        appId: this.appId,
        redirectUrl: this.webpayUrl
      })
    },
    handleLoadedImage() {
      this.isLoading = false
    }
  }
}
</script>
<style lang="scss">
.el-card {
  border: 0;
  margin-bottom: 30px;
  position: relative;
}
.thumb-img {
  width: 100%;
  min-height: 160px;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5));
    left: 0;
    bottom: 0;
    border-radius: 0 0 5px 5px;
  }
}
.el-card img {
  width: 100%;
}
.el-card h3 {
  font-weight: 700;
  color: #505050;
  padding: 0;
  font-size: 16px;
  margin-bottom: 15px;
}
.el-card .el-button {
  font-weight: 700;
  font-size: 14px;
  position: absolute;
  right: 10px;
  bottom: 15px;
}
.el-card__body {
  min-height: 200px;
}
.el-loading {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  div {
    width: 100%;
    background: -webkit-gradient(linear, left top, right top, from(rgba(207, 216, 220, 0.2)), color-stop(rgba(207, 216, 220, 0.4)), to(rgba(207, 216, 220, 0.2)));
    background: -webkit-linear-gradient(left, rgba(207, 216, 220, 0.2), rgba(207, 216, 220, 0.4), rgba(207, 216, 220, 0.2));
    background: linear-gradient(90deg, rgba(207, 216, 220, 0.2), rgba(207, 216, 220, 0.4), rgba(207, 216, 220, 0.2));
    -webkit-animation: card-loading 1.4s ease infinite;
    animation: card-loading 1.4s ease infinite;
    background-size: 600% 600%;
    &:nth-child(1) {
      height: 40px;
      margin-bottom: 15px;
    }
    &:nth-child(2) {
      height: 160px;
    }
    &:nth-child(3) {
      height: 32px;
      width: 86px;
      border-radius: 30px;
      box-shadow: #fff 0 0 0 5px;
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
}
@-webkit-keyframes card-loading {
  0%,
  to {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes card-loading {
  0%,
  to {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
