<template>
  <div
    class="invoice-paper change-scrollbar-x"
    style="max-width: 100%; overflow-x: auto"
  >
    <div
      style="width: 72rem"
      class="
        row
        col-7
        flex-column
        align-items-center
        custom-container
        bg-light
        margin-x-auto
        padding-y-30 padding-x-30
        radius-18
      "
    >
      <!-- 1 -->
      <div
        class="
          col
          d-flex
          flex-column
          align-items-center
          border-bottom-whiteDark
          padding-bottom-15
        "
      >
        <div class="margin-x-auto">
          <Logo color="text-dark" />
        </div>
        <div
          class="
            col-6
            d-flex
            align-items-center
            justify-content-between
            text-13
            weight-br-300
            margin-top-20
          "
        >
          <div>
            <span> رقم الطلب:</span>
            <span>#145854848</span>
          </div>
          <div>
            <span> تاريخ الطلب :</span>
            <span>11/2/2021</span>
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div class="col padding-y-20 border-bottom-whiteDark">
        <div class="row">
          <div class="col text-13 weight-br-300">
            <h6 class="d-block margin-bottom-15 text-13 weight-br-400">من :</h6>
            <div class="d-flex align-items-start margin-bottom-10">
              <span class="text-silver flex-shrink-0">العنوان :</span>
              <p class="margin-start-10">
                Comapny 12345 South Main Street Anywhere Rajasthan, INDIA
              </p>
            </div>
            <div class="d-flex align-items-start margin-bottom-10">
              <span class="text-silver flex-shrink-0">رقم الجوال :</span>
              <p class="margin-start-10">+966 547 548 545</p>
            </div>
            <div class="d-flex align-items-start margin-bottom-10">
              <span class="text-silver flex-shrink-0">البريد الالكتروني :</span>
              <p class="margin-start-10">Ibtdi.com@ibtdi.com</p>
            </div>
          </div>
          <div class="col text-13 weight-br-300">
            <h6 class="d-block margin-bottom-15 text-13 weight-br-400">
              الى :
            </h6>
            <div class="d-flex align-items-start margin-bottom-10">
              <span class="text-silver flex-shrink-0">العنوان :</span>
              <p class="margin-start-10">
                Comapny 12345 South Main Street Anywhere Rajasthan, INDIA
              </p>
            </div>
            <div class="d-flex align-items-start margin-bottom-10">
              <span class="text-silver flex-shrink-0">رقم الجوال :</span>
              <p class="margin-start-10">+966 547 548 545</p>
            </div>
            <div class="d-flex align-items-start margin-bottom-10">
              <span class="text-silver flex-shrink-0">البريد الالكتروني :</span>
              <p class="margin-start-10">Ibtdi.com@ibtdi.com</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div class="col padding-y-20">
        <h6 class="text-13">معلومات الطلب</h6>
        <div
          class="
            col-8
            margin-top-10
            weight-br-300
            border-whiteDark-all
            radius-18
            margin-top-15
          "
        >
          <div
            class="
              row
              g-0
              justify-content-center
              text-13
              border-bottom-whiteDark
            "
          >
            <p
              class="
                col
                text-silver
                padding-y-10
                text-center
                border-whiteDark-left
              "
            >
              رقم التحويل
            </p>
            <p class="col-9 text-center padding-y-10">
              PAYID-L4OAZSA6W495966LG4457106
            </p>
          </div>
          <div
            class="
              row
              g-0
              justify-content-center
              text-13
              border-bottom-whiteDark
            "
          >
            <p
              class="
                col
                text-silver
                padding-y-10
                text-center
                border-whiteDark-left
              "
            >
              طريقة الدفع
            </p>
            <p class="col-9 text-center padding-y-10">طريقة الدفع</p>
          </div>
          <div
            class="
              row
              g-0
              justify-content-center
              text-13
              border-bottom-whiteDark
            "
          >
            <p
              class="
                col
                text-silver
                padding-y-10
                text-center
                border-whiteDark-left
              "
            >
              العملة
            </p>
            <p class="col-9 text-center padding-y-10">S.R</p>
          </div>
          <div
            class="
              row
              g-0
              justify-content-center
              text-13
              border-bottom-whiteDark
            "
          >
            <p
              class="
                col
                text-silver
                padding-y-10
                text-center
                border-whiteDark-left
              "
            >
              حالة الدفع
            </p>
            <p class="col-9 text-center padding-y-10">تم الدفع</p>
          </div>
          <div class="row g-0 justify-content-center text-13">
            <p
              class="
                col
                text-silver
                padding-y-10
                text-center
                border-whiteDark-left
              "
            >
              وقت الانضمام
            </p>
            <p class="col-9 text-center padding-y-10">يناير 2020</p>
          </div>
        </div>
      </div>
      <!-- 4 -->
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInvoicePaper',
}
</script>

<style></style>
