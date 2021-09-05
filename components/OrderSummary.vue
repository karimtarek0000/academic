<template>
  <!--  -->
  <div
    style="max-width: 33rem"
    class="
      col
      margin-bottom-20
      lg-margin-start-0
      margin-start-20
      order-0 order-lg-1
      align-self-start
      padding-y-10
      bg-light
      radius-12
    "
  >
    <h4 class="text-16 text-center padding-y-15 border-botton-whiteDark">
      ملخص الطلب
    </h4>
    <!--  -->
    <div class="padding-y-10 padding-x-20 border-botton-whiteDark">
      <div
        role="total"
        class="d-flex align-items-center justify-content-between"
      >
        <span class="text-13 weight-br-300">المجموع الجزئي</span>
        <span class="text-14 direction-ltr">700 S.R</span>
      </div>
      <div
        role="discount"
        class="d-flex align-items-center justify-content-between padding-y-5"
      >
        <span class="text-13 weight-br-300">الخصم</span>
        <span class="text-14 direction-ltr">300 S.R</span>
      </div>
      <div
        role="discount percent"
        class="d-flex align-items-center justify-content-between"
      >
        <span class="text-13 weight-br-300">نسبة الخصم</span>
        <div class="d-flex align-items-center">
          <span class="text-14">50%</span>
          <span class="text-10 padding-start-5 weight-br-300">خصم</span>
        </div>
      </div>
    </div>
    <div class="padding-y-10 padding-x-20">
      <div
        role="total"
        class="d-flex align-items-center justify-content-between padding-y-10"
      >
        <span class="text-13">المجموع الاجمالي</span>
        <span class="text-15 direction-ltr">40 S.R</span>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'OrderSummary',
}
</script>

<style></style>
