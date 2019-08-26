import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { merge, lowerCase } from 'lodash'
import { lang } from '@/stored'
import { DEFAULT_LOCALE } from '@/constants'

import vi from './vi'
import en from './en'
import eleVi from 'element-ui/lib/locale/lang/vi'
import eleEn from 'element-ui/lib/locale/lang/en'

const locales = {
  vi: merge(vi, eleVi),
  en: merge(en, eleEn)
}

Vue.use(VueI18n)

Vue.config.lang = lang
Vue.config.fallbackLang = DEFAULT_LOCALE

export function UpdateLocale(localeObj) {
  if (gtCore.common.isObject(localeObj)) {
    Object.keys(localeObj).forEach(country => {
      if (gtCore.common.isObject(locales[lowerCase(country)])) {
        merge(locales[lowerCase(country)], localeObj[country])
      }
    })
  }

  Object.keys(locales).forEach(lang => {
    Vue.locale(lang, locales[lang])
  })
}
