<template>
  <aside role="filter" class="aside-filter bg-light">
    <!--  -->
    <div class="row flex-column">
      <!--  -->
      <AccordionAnimate
        :toggle-status="accordion1"
        class="col margin-bottom-30"
        title="الاقسام"
        @click="accordion1 = !accordion1"
      >
        <div
          v-for="i in 4"
          :key="i"
          class="text-14 weight-br-300 padding-y-5 padding-x-10"
        >
          ويب ديزاين
        </div>
      </AccordionAnimate>
      <!--  -->
      <AccordionAnimate
        class="col margin-bottom-30"
        :toggle-status="accordion2"
        title="السعر"
        @click="accordion2 = !accordion2"
      >
        <Radio
          class="margin-y-5"
          v-bind="{
            id: 'one',
            selected: priceSelected,
            label: 'مجاني',
            value: 'مجاني',
            name: 'price',
          }"
          @changeSelect="priceSelected = $event"
        />
        <Radio
          class="margin-y-5"
          v-bind="{
            id: 'two',
            selected: priceSelected,
            label: 'مدفوعة',
            value: 'مدفوعة',
            name: 'price',
          }"
          @changeSelect="priceSelected = $event"
        />
      </AccordionAnimate>
      <!--  -->
      <AccordionAnimate
        class="col margin-bottom-30"
        title="اللغة"
        :toggle-status="accordion3"
        @click="accordion3 = !accordion3"
      >
        <Radio
          class="margin-y-5"
          v-bind="{
            id: 'three',
            selected: languageSelected,
            label: 'عربي',
            value: 'عربي',
            name: 'lang',
          }"
          @changeSelect="languageSelected = $event"
        />
        <Radio
          class="margin-y-5"
          v-bind="{
            id: 'four',
            selected: languageSelected,
            label: 'انجليزي',
            value: 'انجليزي',
            name: 'lang',
          }"
          @changeSelect="languageSelected = $event"
        />
      </AccordionAnimate>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'AsideFilter',
  data() {
    return {
      priceSelected: '',
      languageSelected: '',
      accordion1: true,
      accordion2: true,
      accordion3: true,
    }
  },
}
</script>

<style lang="scss">
@media only screen and (max-width: 577px) {
  .aside-filter {
    position: fixed;
    top: 0;
    right: 0;
    // transform: translateX(50%);
    width: 220px;
    min-height: 100vh;
    padding: 10px 20px;
    z-index: 9999;
  }
}
</style>
