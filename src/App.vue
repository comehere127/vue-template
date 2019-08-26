<template>
  <div id="app-main">
    <n-progress parent="#app-main" />
    <router-view :key="$route.fullPath" />
    <Footer v-if="getIsDesktop" />
  </div>
</template>
<script>
import { UpdateLocale } from '@/locales'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getIsDesktop'])
  },
  created() {
    UpdateLocale(gtCore.locales)
  }
}
</script>
<style lang="scss">
html,
body {
  height: 100%;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: $color-gray;
}
::-webkit-scrollbar-button ::-webkit-scrollbar-track {
  display: none;
  ::-webkit-scrollbar-thumb {
    background-color: $color-silver-light;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: $color-black-exact-light;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Muli', sans-serif;
}
a:visited,
a:focus,
a:active,
a:hover,
a {
  color: #22a0ea;
  text-decoration: none;
}
#app-main {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // box-shadow: inset #22a0ea 0px 60px, inset #b1b1b1 0px 62px 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.pcVer {
  flex: 1 0 auto;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.contain-page {
  width: 100%;
  max-width: 960px;
  margin: auto;
  margin-bottom: 50px;
}
.pcVer {
  .contain-page {
    padding-top: 90px;
  }
}

.custom-tab .el-tabs--right .el-tabs__header.is-right {
  width: 290px;
}
.custom-tab .el-tabs__content {
  width: calc(100% - 340px);
}
.custom-tab .el-tabs__item {
  font-size: 16px;
  color: #000;
  font-weight: bold;
  margin-bottom: 0;
  border-bottom: 1px dashed #c8c8c8;
  padding: 15px 0;
  height: auto;
}

.content-faq {
  font-size: 14px;
  color: #454545;
  padding-top: 15px;
  line-height: 22px;
}
.content-faq .titleFaq {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 36px;
}

.custom-tab .el-tabs__active-bar,
.custom-tab .el-tabs__nav-wrap::after {
  display: none;
}
.custom-tab .el-tabs__item.is-active {
  color: #409eff;
  transition: all 0.3s;
}

.el-tab-pane {
  animation: fade 0.5s 1;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.custom-collapse {
  padding: 0 15px;
  .el-collapse {
    border: unset;
    .el-collapse-item__wrap {
      border: unset;
    }
    .el-collapse-item__header {
      height: auto;
      line-height: unset;
      padding: 12px 0;
      padding-right: 20px;
      font-size: 16px;
      color: #000;
      font-weight: 700;
      position: relative;
      &.is-active {
        color: #22a0ea;
        .el-collapse-item__arrow {
          color: #22a0ea;
        }
      }
      .el-collapse-item__arrow {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        display: table;
        vertical-align: middle;
      }
    }
  }
}
.forColl.el-popper[x-placement^='bottom'] .popper__arrow {
  display: none;
}

.forColl.el-select-dropdown.el-popper {
  min-width: 300px !important;
  width: 100%;
  border-radius: 0 0 4px 4px;
  left: 0 !important;
  top: 108px !important;
  .el-select-dropdown__list {
    padding: 0;
    .el-select-dropdown__item {
      border-bottom: 1px solid #e5e5e5;
      height: 45px;
      line-height: 45px;
    }
    .el-select-dropdown__item:last-child {
      border: unset;
    }
  }
}
.mbVer {
  padding-top: 60px;
}
.alertContainer {
  top: 60px;
}
</style>
