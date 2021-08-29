import Vue from 'vue'
import StarsRatings from 'vue-star-rating'
import VueSmoothScroll from 'vue2-smooth-scroll'
import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr.js'
import 'vue-plyr/dist/vue-plyr.css'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'
//
Vue.component('StarsRatings', StarsRatings)
Vue.use(VuePlyr, {
  plyr: {},
})
//
const datepickerOptions = {
  colors: {
    selected: '#452b4e',
    inRangeBorder: '#452b4e',
  },
}
Vue.use(AirbnbStyleDatepicker, datepickerOptions)
Vue.use(VueSmoothScroll, {
  duration: 200,
  updateHistory: false,
})
