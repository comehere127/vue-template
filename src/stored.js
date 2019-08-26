import { STORE_KEY_CONFIG_LANG, DEFAULT_LOCALE } from '@/constants'

// lang order: localStorage -> browser language -> default
export const lang = gtCore.storage.get(STORE_KEY_CONFIG_LANG) || DEFAULT_LOCALE
