const getters = {
  routeLoadingStatus: state => state.route.loading,
  getApplicationList: state => state.application.applicationData,
  getUserDemand: state => state.application.userDemand,
  getCurrentDevice: state => state.globalConfig.device,
  getIsMobile: state => state.globalConfig.isMobile,
  getIsDesktop: state => state.globalConfig.isDesktop,
  getIsTablet: state => state.globalConfig.isTablet
}
export default getters
