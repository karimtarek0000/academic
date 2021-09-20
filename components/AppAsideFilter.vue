<template>
  <aside role="filter" class="aside-filter bg-light">
    <slot />
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
        <Selected
          class="margin-y-5"
          v-bind="{
            id: 'one',
            selected: priceSelected,
            label: 'مجاني',
            value: 'مجاني',
            name: 'price',
            type: 'checkbox',
          }"
          @changeSelect="priceSelected = $event"
        />
        <Selected
          class="margin-y-5"
          v-bind="{
            id: 'two',
            selected: priceSelected,
            label: 'مدفوعة',
            value: 'مدفوعة',
            name: 'price',
            type: 'checkbox',
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
        <Selected
          class="margin-y-5"
          v-bind="{
            id: 'three',
            selected: languageSelected,
            label: 'عربي',
            value: 'عربي',
            name: 'lang',
            type: 'checkbox',
          }"
          @changeSelect="languageSelected = $event"
        />
        <Selected
          class="margin-y-5"
          v-bind="{
            id: 'four',
            selected: languageSelected,
            label: 'انجليزي',
            value: 'انجليزي',
            name: 'lang',
            type: 'checkbox',
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
.aside-filter {
  @media only screen and (max-width: 576px) {
    position: fixed;
    z-index: 11000;
    @include position('lt', $moveT: 0, $moveL: 0);
  }

  &__close {
    @include position('rt', $moveT: '10px', $moveR: '-20%');
    border-radius: 50%;
    background-color: var(--light);
    width: 4rem;
    height: 4rem;
    position: absolute;
  }
}
</style>
