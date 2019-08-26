<template>
  <div v-if="getIsDesktop" class="right-header">
    <!-- <router-link to="/promotions" exact>{{ $t('Promotions') }}</router-link> -->
    <router-link to="/faq" exact>{{ $t('NavBarQuestionAndAnswer') }}</router-link>
    <router-link to="/instruction" exact>{{ $t('NavBarInstruction') }}</router-link>
    <router-link to="/smsvt" exact>Viettel SMS</router-link>
  </div>
  <div v-else class="mobile-menu">
    <!-- <router-link to="/faq">{{ $t('NavBarQuestionAndAnswer') }}</router-link>
    <router-link to="/instruction">{{ $t('NavBarInstruction') }}</router-link>-->
    <button :class="show ? 'shape-menu active' : 'shape-menu'" @click="show = !show">
      <span />
      <span />
      <span />
      <div class="rightPanel-background" />
    </button>
    <el-menu :collapse="!show" class="el-menu-vertical-demo">
      <!-- <el-menu-item index="4" @click="redirectTo('/promotions')">{{ $t('Promotions') }}</el-menu-item> -->
      <el-menu-item index="1" @click="redirectTo('/faq')">{{ $t('NavBarQuestionAndAnswer') }}</el-menu-item>
      <el-menu-item index="2" @click="redirectTo('/instruction')">{{ $t('NavBarInstruction') }}</el-menu-item>
      <el-menu-item index="3" @click="redirectTo('/smsvt')">Viettel SMS</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters(['getIsDesktop'])
  },
  watch: {
    show(value) {
      if (value) {
        this.addEventClick()
      }
    }
  },
  methods: {
    redirectTo(url) {
      this.$router.push(url)
    },
    closeSidebar(evt) {
      const parent = evt.target.closest('.active')
      if (!parent) {
        this.show = false
        window.removeEventListener('click', this.closeSidebar)
      }
    },
    addEventClick() {
      window.addEventListener('click', this.closeSidebar)
    }
  }
}
</script>
<style lang="scss">
.rightPanel-background {
  opacity: 1;
  background: rgba($color-white, 0.4);
  width: 0;
  height: 0;
  top: 0;
  left: 0;
  position: fixed;
  z-index: -1;
  margin-top: 60px;
}
.mobile-menu {
  order: 1;
  margin-right: 10px;
  .el-menu-item {
    border-bottom: 1px solid rgba(199, 199, 199, 0.5);
    a {
      color: rgba(0, 0, 0, 0.65);
      &.active {
        color: #22a0ea;
      }
    }
  }
}
.mobileLand,
.tabletLand {
  .el-autocomplete {
    order: 3;
    margin-right: 0;
  }
  .custom-searching-button {
    .el-input-group__append {
      top: 7px;
      background: none;
      .el-input__inner {
        padding-left: 50px;
      }
    }
    .el-input-group {
      > .el-input__inner {
        padding-left: 40px;
        border-radius: 5px;
      }
    }
  }
}
.shape-menu {
  width: 20px;
  height: 20px;
  background: none;
  border: 0;
  outline: none;
  span {
    width: 100%;
    height: 2px;
    background: #fff;
    display: block;
    margin-bottom: 5px;
    transition: all 0.3s;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &.active {
    span {
      &:nth-child(1) {
        transform: rotate(45deg);
        position: relative;
        top: 7px;
      }
      &:nth-child(2) {
        transform: rotate(-45deg);
      }
      &:nth-child(3) {
        opacity: 0;
      }
    }

    .rightPanel-background {
      z-index: 998;
      opacity: 1;
      width: 100%;
      height: 100%;
    }
  }
}
.right-header a {
  text-shadow: #542e2e 2px 2px 4px;
  text-decoration: none;
  color: #fff;
  display: inline-block;
  margin-left: 20px;
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
  }
}
.el-menu--collapse {
  width: 0;
  overflow: hidden;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
}
.headerMB {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  padding: 0 15px;
  position: fixed;
  top: 0;
  background: #22a0ea;
  left: 0;
  z-index: 9999;
  width: 100%;
  box-shadow: #b1b1b1 0px 2px 5px;
  .logoMB {
    display: block;
    width: 100px;
    max-width: 74px;
    order: 2;
    img {
      width: 100%;
    }
  }
  .el-menu {
    position: fixed;
    left: 0;
    top: 60px;
    height: calc(100% - 60px);
    background: #fff;
    z-index: 9999;
    box-shadow: 5px 0 7px hsla(0, 0%, 78%, 0.5);
  }
  .active {
    .el-menu {
      box-shadow: none;
    }
  }
  .el-button {
    font-size: 20px;
    color: #fff;
  }
}
</style>
