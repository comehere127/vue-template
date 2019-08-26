import { API_BASE_URL, APP_LIST_PATH, SMS_LIST_PATH, PROMOTION_LIST_PATH } from '@/constants'
export function getApplicationList() {
  return new Promise(resolve => {
    gtCore.request.curl(
      'POST',
      API_BASE_URL + APP_LIST_PATH,
      data => {
        resolve(data)
      },
      err => {
        resolve(err)
      }
    )
  })
}
