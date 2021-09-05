<template>
  <section role="bank-transfer" class="confirm-the-pay custom-input--object-3">
    <div class="row padding-y-30 padding-x-20 justify-content-center">
      <div class="col border-botton-whiteDark padding-x-30 padding-bottom-20">
        <div class="row align-items-center">
          <div class="col-8 col-sm-3 sm-margin-bottom-10">
            <figure class="margin-bottom-0">
              <img
                class="resize-img"
                src="~/assets/images/global/bank.png"
                alt=""
              />
            </figure>
          </div>
          <div class="col-12 col-sm-9">
            <div class="d-flex align-items-center">
              <span class="text-bombay weight-br-300 margin-end-5"
                >اسم البنك:</span
              >
              <span class="text-12">NCB Bank</span>
            </div>
            <div class="d-flex align-items-center">
              <span class="text-bombay weight-br-300 margin-end-5"
                >رقم الحساب:</span
              >
              <span class="text-12">25785506000109</span>
            </div>
            <div class="d-flex align-items-center">
              <span class="text-bombay weight-br-300 margin-end-5"
                >رقم الايبان:</span
              >
              <span class="text-12">SA8880000487608010416925</span>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <form class="col-12 col-lg-9 margin-top-40">
        <input
          role="name"
          type="text"
          class="
            padding-start-30
            border-whiteDark-1
            width-100
            padding-y-10
            radius-12
            text-13
            margin-bottom-10
          "
          placeholder="اسم البنك"
        />
        <input
          role="name"
          type="text"
          class="
            padding-start-30
            border-whiteDark-1
            width-100
            padding-y-10
            radius-12
            text-13
            margin-bottom-10
          "
          placeholder="اسم المرسل"
        />
        <input
          role="name"
          type="text"
          class="
            padding-start-30
            border-whiteDark-1
            width-100
            padding-y-10
            radius-12
            text-13
            margin-bottom-10
          "
          placeholder="مبلغ التحويل"
        />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BankTransfer',
}
</script>

<style></style>
