import Vue from 'vue'

Vue.directive('imgSrc', {
  inserted: function(el, binding) {
    el.src = '__STATIC_PATH__' + binding.value
  }
})

Vue.directive('scroll', {
  inserted: function(el, binding) {
    const f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})
