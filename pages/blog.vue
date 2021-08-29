<template>
  <div>
    <div class="datepicker-trigger border-whitedark">
      <input
        id="datepicker-trigger"
        type="text"
        placeholder="MM/DD/YY"
        :value="formatDates(date)"
      />

      <client-only>
        <AirbnbStyleDatepicker
          class="direction-ltr"
          :trigger-element-id="'datepicker-trigger'"
          :mode="'single'"
          :fullscreen-mobile="false"
          :show-shortcuts-menu-trigger="false"
          :months-to-show="1"
          :date-one="date"
          @date-one-selected="
            (val) => {
              date = val
            }
          "
        />
      </client-only>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format'

export default {
  name: 'Blog',
  data() {
    return {
      dateFormat: 'MM/DD/YY',
      date: '',
    }
  },
  methods: {
    formatDates(date) {
      if (date) return format(date, this.dateFormat)
    },
  },
}
</script>
