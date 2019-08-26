<!-- eslint-disable-next-line vue/valid-template-root -->
<template />
<script>
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
export default {
  props: {
    parent: {
      type: String,
      required: true
    }
  },
  created() {
    if (this.parent) {
      nprogress.configure({ parent: this.parent })
    }
    this.$router.beforeEach((to, from, next) => {
      nprogress.start()
      next()
    })
    this.$router.afterEach(() => {
      nprogress.done()
    })
  }
}
</script>
<style lang="scss">
.nprogress-custom-parent #nprogress .spinner,
#nprogress .spinner {
  display: none;
}

.nprogress-custom-parent #nprogress .bar {
  background: white;
}
</style>
