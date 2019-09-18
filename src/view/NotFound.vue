<template>
  <div class="notfound">
    <h1>Đã có lỗi xảy ra</h1>
    <div class="ghost">
      <div class="body-g">
        <div class="face-g">
          <div class="eye-g" />
          <div class="eye-g ri" />
          <div class="mouth-g" />
        </div>
        <div class="left-hand" />
        <div class="right-hand" />
        <div class="rim-g">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div class="left-ground" />
        <div class="right-ground" />
      </div>
    </div>
    <!-- ghost -->
    <p class="text-err">Yêu cầu kết nối đến server của bạn không thực hiện được</p>
    <router-link to="/" exact class="back-home">Quay về trang chủ</router-link>
  </div>
</template>
<script>
export default {
  page: {
    title: 'Pay.zing.vn - Cổng thanh toán game chính thức của VNG',
    meta: [{ name: 'description', content: 'Pay.zing.vn - Cổng thanh toán game chính thức của VNG' }]
  },
  created() {
    this.$store.dispatch('globalConfig/doHidePreloader', true)
  }
}
</script>
<style lang="scss">
.notfound {
  width: 100%;
  max-width: 450px;
  margin: auto;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 345px;
  padding: 0 15px;
}
.ghost {
  width: 200px;
  height: 200px;
  margin: auto;
  position: relative;
  padding-top: 41px;
}
.body-g {
  border: 3px solid #c8c8c8;
  height: 110px;
  width: 100px;
  margin: auto;
  border-radius: 50px 50px 0 0;
  position: relative;
  left: 0px;
  /*animation: head 0.3s linear infinite;*/
}
.face-g {
  width: 50px;
  height: 50px;
  margin: auto;
  margin-top: 30px;
  position: relative;
}
.eye-g {
  width: 12px;
  height: 12px;
  background: #ededed;
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 0;
  animation: eye-rotate 0.75s linear infinite;
}
.eye-g:before {
  content: '';
  width: 18px;
  height: 3px;
  background: #c8c8c8;
  display: block;
  position: absolute;
  left: -3px;
  top: 4px;
  transform: rotate(45deg);
  border-radius: 5px;
}
.eye-g:after {
  content: '';
  width: 18px;
  height: 3px;
  background: #c8c8c8;
  display: block;
  position: absolute;
  left: -3px;
  top: 4px;
  transform: rotate(-45deg);
  border-radius: 5px;
}
.eye-g.ri {
  position: absolute;
  right: 0;
  top: 0;
  left: inherit;
}
.mouth-g {
  width: 100%;
  border-top: 3px solid #c8c8c8;
  position: absolute;
  top: 30px;
  left: 0;
}
.mouth-g:before {
  content: '';
  width: 15px;
  height: 17px;
  border-radius: 0 0 15px 15px;
  display: block;
  position: absolute;
  right: 0px;
  top: 0px;
  border: 3px solid #c8c8c8;
  border-top: 0;
  animation: mount1 1s linear infinite;
}
.mouth-g:after {
  content: '';
  width: 3px;
  height: 12px;
  background: #c8c8c8;
  border-radius: 0 0 15px 15px;
  display: block;
  position: absolute;
  right: 9px;
  top: 0px;
  animation: mount2 1s linear infinite;
}
.left-hand {
  width: 22px;
  height: 26px;
  border-radius: 0 0 15px 15px;
  display: block;
  position: absolute;
  left: -1px;
  top: 55px;
  border: 3px solid #c8c8c8;
  border-top: 0;
  transform: rotate(45deg);
  background: #fff;
  transform-origin: left top;
  animation: rotate1 0.3s 0.1s linear infinite;
}
.right-hand {
  width: 22px;
  height: 26px;
  border-radius: 0 0 15px 15px;
  display: block;
  position: absolute;
  right: -1px;
  top: 55px;
  border: 3px solid #c8c8c8;
  border-top: 0;
  transform: rotate(-45deg);
  background: #fff;
  transform-origin: right top;
  animation: rotate2 0.3s linear infinite;
}
.rim-g {
  position: absolute;
  bottom: -12px;
  left: 0;
  width: calc(100% + 3px);
  background: #fff;
  display: flex;
}
.rim-g > div {
  flex: 1;
  border: 3px solid #c8c8c8;
  height: 14px;
  border-radius: 0 0 15px 15px;
  border-top: 0;
  margin-left: -3px;
  background: #fff;
  position: relative;
  padding-bottom: 3px;
  animation: rim-run 0.3s linear infinite;
}
.rim-g > div:before {
  content: '';
  width: 100%;
  height: 100%;
  border-bottom: 3px solid #ededed;
  border-radius: 0 0 15px 15px;
  animation: rim-run 0.3s linear infinite;
  display: block;
}
.left-ground {
  width: 20px;
  height: 5px;
  background: #c8c8c8;
  position: absolute;
  right: 107px;
  bottom: 0%;
  border-radius: 5px;
  animation: mount3 1s linear infinite;
}
.left-ground:before {
  content: '';
  width: 42px;
  height: 5px;
  background: #c8c8c8;
  position: absolute;
  right: 15px;
  top: 10px;
  border-radius: 5px;
}
.left-ground:after {
  content: '';
  width: 10px;
  height: 5px;
  background: #c8c8c8;
  position: absolute;
  right: 0px;
  top: 10px;
  border-radius: 5px;
}
.right-ground {
  width: 20px;
  height: 5px;
  background: #c8c8c8;
  position: absolute;
  left: 112px;
  bottom: 0%;
  border-radius: 5px;
  animation: mount4 1s linear infinite;
}
.right-ground:before {
  content: '';
  width: 42px;
  height: 5px;
  background: #c8c8c8;
  position: absolute;
  left: -6px;
  top: 10px;
  border-radius: 5px;
}
.text-err {
  font-size: 14px;
  color: #ac0022;
  margin-bottom: 25px;
}
.back-home {
  display: block;
  background: #22a0ea;
  height: 60px;
  width: 100%;
  line-height: 60px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  color: #fff !important;
  transition: all 0.3s;
}
.back-home:hover {
  background: #0066a2;
}
@keyframes rim-run {
  0% {
    border-radius: 0 0 40px 15px;
  }
  50% {
    border-radius: 0 0 15px 15px;
  }
  100% {
    border-radius: 0 0 40px 15px;
  }
}
@keyframes head {
  0% {
    border-radius: 50px 50px 0 0;
  }
  50% {
    border-radius: 50px 70px 0 0;
  }
  100% {
    border-radius: 50px 50px 0 0;
  }
}
@keyframes rotate1 {
  0% {
    transform: rotate(75deg);
  }
  50% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(75deg);
  }
}
@keyframes rotate2 {
  0% {
    transform: rotate(-75deg);
  }
  50% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(-75deg);
  }
}
@keyframes eye-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes mount1 {
  0% {
    right: 0px;
  }
  50% {
    right: 29px;
  }
  100% {
    right: 0px;
  }
}
@keyframes mount2 {
  0% {
    right: 7px;
  }
  50% {
    right: 38px;
  }
  100% {
    right: 7px;
  }
}
@keyframes mount3 {
  0% {
    right: 107px;
  }
  50% {
    right: 127px;
  }
  100% {
    right: 107px;
  }
}
@keyframes mount4 {
  0% {
    left: 112px;
  }
  50% {
    left: 132px;
  }
  100% {
    left: 112px;
  }
}
</style>
