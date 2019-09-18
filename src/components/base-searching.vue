<template>
  <el-autocomplete
    v-model="dataInput"
    :placeholder="$t('SearchingPlaceholder')"
    :fetch-suggestions="querySearch"
    :trigger-on-focus="false"
    :autofocus="true"
    class="inline-input custom-searching-button"
    @blur="blurAction"
    @keydown.enter.native="handleEnter"
    @focus="focusAction"
    @select="handleSelect"
  >
    <i slot="prefix" class="el-input__icon el-icon-search" />
    <template slot-scope="{item}">
      <span
        style="float: left;text-overflow: ellipsis;white-space: nowrap;overflow: hidden !important;width: calc(100% - 50px);"
      >{{ item.appName }}</span>
      <span style="float: right;color: #828282; font-size: 12px;">{{ item.platform }}</span>
    </template>
  </el-autocomplete>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    dataSource: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      dataInput: '',
      appSelected: null
    }
  },
  computed: {
    ...mapGetters(['getIsDesktop'])
  },
  methods: {
    focusAction() {
      this.$el.classList.add('isFocus')
    },
    blurAction() {
      this.$el.classList.remove('isFocus')
    },
    querySearch(queryString, cb) {
      var dataSource = this.dataSource.map(item => ({
        ...item,
        value: item.appName
      }))
      var results = queryString ? dataSource.filter(item => gtCore.common.slugData(item.appName).indexOf(gtCore.common.slugData(queryString)) >= 0) : dataSource
      if (!gtCore.common.isInvalid(this.appSelected)) {
        this.appSelected = null
      }
      cb(results)
    },
    handleSelect(item) {
      this.dataInput = item.appName
      this.appSelected = item
      this.$store.dispatch('application/setUserDemand', {
        appId: this.appSelected.appId,
        redirectUrl: this.appSelected.payUrl
      })
    },
    handleEnter() {
      if (gtCore.common.isInvalid(this.appSelected) || gtCore.common.slugData(this.appSelected.appName) !== gtCore.common.slugData(this.dataInput)) {
        this.$message.error(this.$t('SearchingSubmitError'))
      } else {
        this.$store.dispatch('application/setUserDemand', {
          appId: this.appSelected.appId,
          redirectUrl: this.appSelected.payUrl
        })
      }
    }
  }
}
</script>
<style lang="scss">
.custom-searching-button .el-input__prefix {
  font-size: 25px;
  left: 15px;
  top: -2px;
}
.el-autocomplete-suggestion.el-popper {
  background: rgb(255, 255, 255);
  padding: 10px 0px;
  .el-scrollbar {
    border-radius: 10px;
  }
  .el-autocomplete-suggestion__wrap {
    border: 0;
  }
}
.custom-searching-button .el-input-group__append {
  background: none;
  color: #828282;
  border: 0;
  font-size: 20px;
  position: absolute;
  left: 0;
  top: 15px;
  span {
    font-weight: 700;
  }
}
.mobileLand,
.tabletLand {
  .custom-searching-button .el-input-group__append {
    padding: 0 10px;
  }
  .el-autocomplete {
    width: calc(100% - 170px);
    transition: all 0.3s;
    position: absolute;
    right: 10px;
    &.isFocus {
      width: calc(100% - 55px);
      z-index: 11;
    }
  }

  .custom-searching-button .el-input__prefix {
    font-size: 20px;
    left: 5px;
  }
}
</style>
