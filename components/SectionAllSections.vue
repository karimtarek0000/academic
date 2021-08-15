<template>
  <section
    role="all-sctions"
    class="
      row
      bg-Voodoo
      radius-60
      margin-top-90
      section-height
      xxlg-padding-x-89
      padding-y-61 padding-x-20
    "
  >
    <div
      class="
        col-lg-12 col-xl-2
        xlg-margin-bottom-20
        margin-end-76 margin-top-50
        text-align-center
      "
    >
      <h4 role="title" class="text-16 text-chardonnay">الاقسام</h4>
      <h3 role="question" class="text-30 text-light">جميع المجالات</h3>
    </div>
    <!--  -->
    <div class="col col-lg-12 col-xl-9">
      <Slider v-if="data.length" :add-settings="settings">
        <div
          v-for="item in data"
          :key="item.id"
          class="col padding-10 text-right text-align-center"
        >
          <GSvg class="svg-70" :name-icon="item.icon" :title="item.title" />
          <h4
            role="title"
            class="text-20 margin-top-20 text-light"
            v-text="item.title"
          />
          <p
            role="description"
            class="text-14 text-snuff margin-top-10 weight-br-300"
            v-text="item.decription"
          />
        </div>
      </Slider>
    </div>
  </section>
</template>

<script>
import sliderSetting from '@/mixins/sliderSetting.js'
export default {
  name: 'SectionAllSections',
  mixins: [sliderSetting],
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.section-height {
  @media only screen and (min-width: 1200px) {
    height: 40.6rem;
  }
}
</style>
