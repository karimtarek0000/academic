import Vue from 'vue'
import StarsRatings from 'vue-star-rating'
import VueSmoothScroll from 'vue2-smooth-scroll'
import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr.js'
import 'vue-plyr/dist/vue-plyr.css'
//
Vue.component('StarsRatings', StarsRatings)
Vue.use(VuePlyr, {
  plyr: {},
})
Vue.use(VueSmoothScroll, {
  duration: 200,
  updateHistory: false,
})
