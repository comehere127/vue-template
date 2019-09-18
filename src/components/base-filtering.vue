<template>
  <div :class="className +' custom-radio-button'">
    <h3 class="home-title">{{ $t('FilteringGameList') }}</h3>
    <el-radio-group
      v-model="gameType"
      :size="getIsDesktop ? 'small' : 'mini'"
      @change="filterChanged"
    >
      <el-radio-button label="all">{{ $t('FilteringAllGame') }}</el-radio-button>
      <el-radio-button label="mobile">{{ $t('FilteringMobileGame') }}</el-radio-button>
      <el-radio-button label="pc">{{ $t('FilteringPCGame') }}</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    filterChanged: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      gameType: '',
      className: ''
    }
  },
  computed: {
    ...mapGetters(['getIsMobile', 'getIsDesktop', 'getIsTablet'])
  },
  created() {
    // this.gameType = this.getIsDesktop ? DESKTOP : MOBILE
    this.gameType = 'all'
    this.className = this.handleDetectClassName()
  },
  methods: {
    handleDetectClassName() {
      if (this.getIsMobile) {
        return 'button-groupMB'
      } else if (this.getIsTablet) {
        return 'button-group'
      } else if (this.getIsDesktop) {
        return 'list-game-title'
      }
      return 'button-group'
    }
  }
}
</script>
<style lang="scss">
.home-title {
  font-size: 24px;
  color: #454545;
  margin-bottom: 20px;
  font-weight: 700;
}
.list-game-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.custom-radio-button {
  .el-radio-button {
    border-radius: 50px;
    margin-left: 10px;
    border: 1px solid #c8c8c8;
    transition: all 0.3s;
    &.is-active {
      border-color: #22a0ea;
      background: #22a0ea;
    }
    &:hover {
      border-color: #22a0ea;
      color: #22a0ea;
    }
  }

  .el-radio-button__inner,
  .el-radio-button__inner:last-child,
  .el-radio-button__inner:first-child {
    box-shadow: none;
    border: 0;
    border-color: #22a0ea;
    border-radius: 50px;
  }

  .el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled) {
    box-shadow: none;
  }
}
</style>
