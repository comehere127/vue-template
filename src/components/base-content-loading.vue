<template>
  <transition name="content-loading">
    <div v-show="show" class="content-loading flex flex-main-center flex-cross-center">
      <div class="loader-inner">
        <div />
        <div />
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<style lang="scss">
// @import '../assets/css/variable';
// @import '../assets/css/animate';

.content-loading {
  margin-top: 10px;

  .loader-inner {
    position: relative;
    > div {
      position: absolute;
      left: 0;
      top: 0;
      width: 35px;
      height: 35px;
      border: 2px solid $color-primary;
      border-bottom-color: transparent;
      border-top-color: transparent;
      border-radius: 100%;
      animation: rotate 1s 0s linear infinite;
      animation-fill-mode: both;

      &:last-child {
        display: inline-block;
        left: 10px;
        top: 10px;
        width: 15px;
        height: 15px;
        animation-duration: 0.5s;
        border-color: $color-primary transparent $color-primary transparent;
        animation-direction: reverse;
      }
    }
  }
}
</style>
