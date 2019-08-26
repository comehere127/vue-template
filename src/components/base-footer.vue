<template>
  <div :class="className">
    <div>
      <p>© VNG Corporation 2018</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      className: null
    }
  },
  computed: {
    ...mapGetters(['getIsMobile'])
  },
  created() {
    this.className = this.handleDetectClassName()
  },
  methods: {
    handleDetectClassName() {
      if (this.getIsMobile) {
        return 'footerMB'
      }
      return 'footerLand'
    }
  }
}
</script>
<style lang="scss">
.footerLand > div {
  display: -ms-flexbox;
  display: flex;
  align-items: flex-end;
  width: 545px;
  justify-content: center;
}
.footerLand {
  height: 50px;
  border-top: 1px solid #ebebeb;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  flex-shrink: 0;
}
.footerLand > div p {
  font-size: 12px;
  color: #919191;
  margin: 0;
}
.footerMB > div {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 27px 35px;
  padding-bottom: 20px;
  border-top: 1px solid #ebebeb;
}
.footerMB > div p {
  font-size: 12px;
  color: #919191;
  text-align: center;
  margin: 0;
}
</style>
