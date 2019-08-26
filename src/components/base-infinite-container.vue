<template>
  <div v-scroll="handleScroll" :class="className">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    processing: {
      type: Boolean,
      required: true
    },
    className: {
      type: String,
      required: true
    },
    isLoadmore: {
      type: Boolean,
      required: true
    },
    handler: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleScroll(event) {
      const windowHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.body.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      )
      const scrollHeight = Math.min(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.body.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      )
      const scrollPosition = window.scrollY || window.pageYOffset || event.srcElement.body.scrollTop + (document.documentElement && (document.documentElement.scrollTop || 0))
      this.$emit('scroll', scrollPosition)
      if (this.isLoadmore && windowHeight < scrollPosition + scrollHeight + 100) {
        if (!this.processing) {
          this.handler()
        }
      }
    }
  }
}
</script>
