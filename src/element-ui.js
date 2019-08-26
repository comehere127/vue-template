import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Autocomplete,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Button,
  Tabs,
  TabPane,
  Loading,
  Row,
  Col,
  Spinner,
  Message,
  Card,
  Icon,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Collapse,
  CollapseItem,
  Select,
  Option,
  Carousel,
  CarouselItem,
  Scrollbar,
  Dialog
} from 'element-ui'

Vue.component(Scrollbar.name, Scrollbar)
Vue.component(Autocomplete.name, Autocomplete)
Vue.component(Input.name, Input)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(RadioButton.name, RadioButton)
Vue.component(Button.name, Button)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Spinner.name, Spinner)
Vue.component(Card.name, Card)
Vue.component(Icon.name, Icon)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Collapse.name, Collapse)
Vue.component(CollapseItem.name, CollapseItem)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(Dialog.name, Dialog)
Vue.use(Loading.directive)

try {
  var b = Message
  Vue.prototype.$loading = Loading.service
  Vue.prototype.$message = {
    success: function(message, conf = {}) {
      b({
        customClass: 'alertContainer',
        type: 'success',
        message,
        showClose: !!+conf.showClose,
        center: !!+conf.center
      })
    },
    error: function(message, conf = {}) {
      b({
        customClass: 'alertContainer',
        type: 'error',
        message,
        showClose: !!+conf.showClose,
        center: !!+conf.center
      })
    },
    warning: function(message, conf = {}) {
      b({
        customClass: 'alertContainer',
        type: 'warning',
        message,
        showClose: !!+conf.showClose,
        center: !!+conf.center
      })
    }
  }
} catch (e) {
  console.log(e)
} finally {
  //
}
