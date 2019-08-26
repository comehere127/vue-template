<template>
  <div class="firework-ct">
    <div class="coin c1" />
    <div class="coin c2" />
    <div class="coin c3" />
    <div class="coin c4" />
    <div class="coin c5" />
    <div class="fwk fw1" />
    <div class="fwk fw2" />
    <div class="fwk fw3" />
    <div class="body-fw">
      <div class="square" />
      <div class="line" />
      <div class="dym">
        <div class="item-dym" />
        <div class="item-dym" />
        <div class="item-dym" />
        <div class="item-dym" />
        <div class="item-dym" />
        <div class="item-dym" />
        <div class="item-dym" />
        <div class="item-dym" />
        <div class="item-dym" />
        <div class="item-dym" />
      </div>
      <div class="cardfw">
        <img :src="imgUrl" alt>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss">
// tet
.firework-ct {
  width: 142px;
  height: 220px;
  background-size: 100% 100%;
  position: relative;
}
.firework-ct:before {
  content: '';
  position: absolute;
  width: 1px;
  height: 60px;
  left: 76px;
  top: 0;
  background: #ffd11d;
}
.firework-ct .coin {
  background: url(/static/images/tet2019/tien.png) no-repeat center center/100%;
  position: absolute;
  animation: bounce 2s infinite linear;
}
.firework-ct .coin.c1 {
  left: 7px;
  top: 6px;
  width: 17px;
  height: 17px;
}
.firework-ct .coin.c2 {
  left: 34px;
  top: 10px;
  width: 33px;
  height: 33px;
  animation-delay: 0.25s;
}
.firework-ct .coin.c3 {
  left: 82px;
  top: 37px;
  width: 14px;
  height: 14px;
  animation-delay: 0.5s;
}
.firework-ct .coin.c4 {
  right: 12px;
  top: 11px;
  width: 16px;
  height: 16px;
  animation-delay: 0.75s;
}
.firework-ct .fwk {
  background: url(/static/images/tet2019/phao-hoa.png) no-repeat center center/100%;
  position: absolute;
  animation: firework 2s infinite linear;
  opacity: 0;
}
.firework-ct .fwk.fw1 {
  left: 1px;
  top: 23px;
  width: 33px;
  height: 33px;
}
.firework-ct .fwk.fw2 {
  right: 37px;
  top: 1px;
  width: 20px;
  height: 20px;
  animation-delay: 0.5s;
}
.firework-ct .fwk.fw3 {
  right: 20px;
  top: 49px;
  width: 15px;
  height: 15px;
  animation-delay: 1s;
}
.line {
  width: 10px;
  border-left: 2px solid #8c0506;
  height: 100px;
  position: absolute;
  left: 20px;
  right: 0;
  margin: auto;
  top: 87px;
  border-radius: 0 0 0 100%;
  animation: lineWind 4s linear infinite;
}
.dym {
  width: 10px;
  height: 100px;
  position: absolute;
  left: 20px;
  right: 0;
  margin: auto;
  top: 87px;
  border-radius: 0 0 0 100%;
  transform-origin: top center;
  animation: linefire 4s linear infinite;
}
.item-dym {
  background: url(/static/images/tet2019/phao.png) no-repeat center center/contain;
  width: 12px;
  height: 24px;
  transform: rotate(52deg);
  position: absolute;
  left: -18px;
  top: 0px;
}
.dym .item-dym:nth-child(2) {
  transform: rotate(-45deg);
  left: 3px;
  top: 6px;
}
.dym .item-dym:nth-child(3) {
  transform: rotate(40deg);
  left: -14px;
  top: 15px;
}
.dym .item-dym:nth-child(4) {
  transform: rotate(-45deg);
  left: 2px;
  top: 22px;
}
.dym .item-dym:nth-child(5) {
  transform: rotate(63deg);
  left: -14px;
  top: 31px;
}
.dym .item-dym:nth-child(6) {
  transform: rotate(44deg);
  left: -12px;
  top: 44px;
}
.dym .item-dym:nth-child(7) {
  transform: rotate(-61deg);
  left: 6px;
  top: 47px;
}
.dym .item-dym:nth-child(8) {
  transform: rotate(74deg);
  left: -14px;
  top: 56px;
}
.dym .item-dym:nth-child(9) {
  transform: rotate(-31deg);
  left: 5px;
  top: 62px;
}
.dym .item-dym:nth-child(10) {
  transform: rotate(32deg);
  left: -10px;
  top: 68px;
}
.square {
  background: url(/static/images/tet2019/2019.png) no-repeat center center/100%;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 59px;
  top: 55px;
  z-index: 20;
}
.square img {
  width: 100%;
}
.cardfw {
  width: 17px;
  height: 30px;
  position: absolute;
  left: 75px;
  bottom: 12px;
  /*transform: rotate(-8deg) translate(-1px, 1px);*/
  transform-origin: top center;
  animation: rotateSquare 4s linear infinite;
}
.cardfw img {
  width: 100%;
}

// right firework
.right-fw .firework-ct .fwk.fw1{
  left: 32px; top: 1px; width: 20px; height: 20px;
}
.right-fw .firework-ct .fwk.fw2{
  right: 0px; top: 19px; width: 35px; height: 35px;
  animation-delay: 0.5s;
}
.right-fw .firework-ct .fwk.fw3{
  display: none;
}
.firework-ct .coin.c5{
  right: 41px;
    top: 51px;
    width: 10px;
    height: 10px;
  animation-delay: 0.75s;
  display: none;
}
.right-fw .firework-ct .coin.c5{
  display: block;
}
.right-fw .firework-ct .coin.c1{
  left: 4px; top: 4px; width: 15px; height: 15px;
}
.right-fw .firework-ct .coin.c2{
  left: 18px; top: 28px; width: 32px; height: 32px;
  animation-delay: 0.25s;
}
.right-fw .firework-ct .coin.c3{
  left: 72px; top: 15px; width: 24px; height: 24px;
  animation-delay: 0.5s;
}
.right-fw .firework-ct .coin.c4{
  right: 20px; top: 0px; width: 15px; height: 15px;
  animation-delay: 0.75s;
}

@keyframes firework {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  30% {
    transform: scale(0.8);
    opacity: 1;
  }
  60% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.6);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lineWind {
  0% {
    border-radius: 0 0 0 100%;
  }
  50% {
    border-radius: 0 0 0 0%;
  }
  100% {
    border-radius: 0 0 0 100%;
  }
}
@keyframes linefire {
  0% {
    transform: skew(0deg);
  }
  50% {
    transform: skew(-4deg);
  }
  100% {
    transform: skew(0deg);
  }
}
@keyframes rotateSquare {
  0.05% {
    transform: rotate(-8deg) translate(0px, 0px);
  }
  50% {
    transform: rotate(0deg) translate(-8px, 3px);
  }
  100% {
    transform: rotate(-8deg) translate(0px, 0px);
  }
}
</style>
