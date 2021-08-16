<template>
  <aside role="filter" class="aside-filter bg-light">
    <!--  -->
    <div class="row flex-column">
      <!--  -->
      <SelectBoxUpDown class="col margin-bottom-30" title="الاقسام">
        <div
          v-for="i in 4"
          :key="i"
          class="text-14 weight-br-300 padding-y-5 padding-x-10"
        >
          ويب ديزاين
        </div>
      </SelectBoxUpDown>
      <!--  -->
      <SelectBoxUpDown class="col margin-bottom-30" title="السعر">
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
      </SelectBoxUpDown>
      <!--  -->
      <SelectBoxUpDown class="col margin-bottom-30" title="اللغة">
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
      </SelectBoxUpDown>
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
    }
  },
}
</script>

<style lang="scss">
@media only screen and (max-width: 567px) {
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
