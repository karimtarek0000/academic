<template>
  <section role="pay-with-card" class="confirm-the-pay custom-input--object-3">
    <div class="row padding-y-30 justify-content-center">
      <!--  -->
      <ul class="col-12 list-unstyled d-flex justify-content-center">
        <li style="width: 8.8rem; height: 5.1rem" class="margin-end-10">
          <img
            class="resize-img"
            src="~/assets/images/global/icons/mastercard.svg"
            alt="mastercard"
          />
        </li>
        <li style="width: 8.8rem; height: 5.1rem" class="margin-end-10">
          <img
            class="resize-img"
            src="~/assets/images/global/icons/visa.svg"
            alt="visa"
          />
        </li>
        <li style="width: 8.8rem; height: 5.1rem" class="margin-end-10">
          <img
            class="resize-img"
            src="~/assets/images/global/icons/mada.svg"
            alt="mada"
          />
        </li>
      </ul>
      <!--  -->
      <form class="col col-lg-9 margin-top-20">
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
          placeholder="اسم صاحب الكارت"
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
          placeholder="رقم الكارت"
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
          placeholder="CCV"
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
          placeholder="MM/YY"
        />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PayWithCard',
}
</script>

<style lang="scss">
.confirm-the-pay {
  & input {
    &::placeholder {
      font-weight: 300;
      color: var(--silver);
    }
  }
}
</style>
