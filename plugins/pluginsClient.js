import Vue from 'vue'
import StarsRatings from 'vue-star-rating'
import VueSmoothScroll from 'vue2-smooth-scroll'
import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr.js'
import 'vue-plyr/dist/vue-plyr.css'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'
import VueHtml2pdf from 'vue-html2pdf'
import VueHtml2Canvas from 'vue-html2canvas'

// Vue datepicker
const datepickerOptions = {
  colors: {
    selected: '#452b4e',
    inRangeBorder: '#452b4e',
  },
}

// Vue smooth
const optionsVueSmooth = {
  duration: 200,
  updateHistory: false,
}

// Vue plyr
const optionsVuePlyr = {
  plyr: {},
}

//
Vue.component('StarsRatings', StarsRatings)
//
Vue.use(VuePlyr, optionsVuePlyr)
Vue.use(AirbnbStyleDatepicker, datepickerOptions)
Vue.use(VueSmoothScroll, optionsVueSmooth)
Vue.use(VueHtml2pdf)
Vue.use(VueHtml2Canvas)
