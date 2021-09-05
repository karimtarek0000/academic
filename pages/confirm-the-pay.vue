<template>
  <main class="confirm-the-pay">
    <header class="text-center padding-y-45">
      <h1 class="text-30 text-dark margin-bottom-10">اتمام الشراء</h1>
      <p class="text-14 text-silver weight-br-300 mx-auto col-lg-3">
        حدد طريقة دفع مناسبة لك لتأكيد اشتراكك في هذه الدورة وتمتع بتجربة فريدة
      </p>
    </header>
    <section>
      <!--  -->
      <div class="bg-alabaster radius-12 padding-y-20">
        <h2 class="custom-container padding-y-20">تفاصيل الطلب</h2>
        <!--  -->
        <div
          class="
            row
            custom-container
            justify-content-center justify-content-lg-between
          "
        >
          <!--  -->
          <div class="col-12 col-lg-8 order-1 order-lg-0 padding-0">
            <!--  -->
            <div class="row row-cols-lg-1 gx-5 gy-2">
              <div
                v-for="i in 1"
                :key="i"
                class="col"
                style="min-height: 13.1rem"
              >
                <div class="row bg-light padding-10 radius-12">
                  <div class="col-12 col-md-2 padding-5 align-self-stretch">
                    <figure
                      class="margin-0 overflow-hidden radius-12 height-100"
                    >
                      <img
                        class="resize-img"
                        src="~/assets/images/who-we-are/2.png"
                        alt=""
                      />
                    </figure>
                  </div>
                  <div class="col-12 col-md-10 padding-10">
                    <h3 role="head" class="text-15 text-dark truncut-text">
                      الفرق بين التايبوجرافي و الكاليجرافي وفن التعريب
                    </h3>
                    <div class="d-flex align-items-center">
                      <p
                        role="new-price"
                        class="d-flex text-18 text-dark margin-0 margin-end-10"
                      >
                        <span>S.R</span> <span class="m-s-2">50</span>
                      </p>
                      <del
                        role="discount"
                        class="d-flex text-silver text-14 weight-br-300"
                      >
                        <span>S.R</span>
                        <span class="m-s-2">50</span>
                      </del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="row justify-content-center">
              <h3 class="padding-y-20 text-18">حدد طريقة الدفع</h3>
              <!--  -->
              <div class="row row-cols-1 row-cols-md-2 gx-3">
                <div class="col">
                  <BtnPrimary
                    :class="[
                      'bg-light width-100 overflow-hidden custom-button text-14 radius-14 weight-br-300',
                      {
                        'bg-Voodoo text-light pointer-event-none':
                          isPayWithCard,
                      },
                      {
                        'text-Voodoo': !isPayWithCard,
                      },
                    ]"
                    style="height: 5.9rem"
                    @clicked="changeComp('PayWithCard', 1)"
                  >
                    <GSvg
                      :class="[
                        'svg-20 fill-Voodoo margin-end-5',
                        { 'fill-light': isPayWithCard },
                      ]"
                      name-icon="bank-card"
                    />
                    <span>الدفع باستخدام كارت البنك</span>
                  </BtnPrimary>
                </div>
                <div class="col">
                  <BtnPrimary
                    :class="[
                      'bg-light width-100 overflow-hidden custom-button text-14 radius-14 weight-br-300',
                      {
                        'bg-Voodoo text-light pointer-event-none':
                          isBankTransfer,
                      },
                      {
                        'text-Voodoo': !isBankTransfer,
                      },
                    ]"
                    style="height: 5.9rem"
                    @clicked="changeComp('BankTransfer', 2)"
                  >
                    <GSvg
                      :class="[
                        'svg-20 margin-end-5 fill-Voodoo',
                        { 'fill-light': isBankTransfer },
                      ]"
                      name-icon="bank"
                    />
                    <span>التحويل البنكي</span>
                  </BtnPrimary>
                </div>
              </div>
              <!--  -->
              <div
                class="margin-top-20 bg-light radius-12 overflow-hidden"
                style="min-height: 38.4rem"
              >
                <transition :name="dirctionAnimate" mode="out-in">
                  <component :is="comp">
                    <PayWithCard />
                    <BankTransfer />
                  </component>
                </transition>
              </div>
            </div>
          </div>
          <!--  -->
          <OrderSummary>
            <BtnPrimary
              style="height: 6rem"
              class="
                width-100
                text-light
                radius-18
                btn-emerald
                bg-emerald
                text-14
              "
              @clicked="done"
            >
              تأكيد الطلب
            </BtnPrimary>
          </OrderSummary>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { setDirectionAnim } from '@/mixins/other'
export default {
  name: 'ConfirmThePay',
  mixins: [setDirectionAnim],
  data() {
    return {
      comp: 'PayWithCard',
    }
  },
  computed: {
    isBankTransfer() {
      return this.comp === 'BankTransfer'
    },
    isPayWithCard() {
      return this.comp === 'PayWithCard'
    },
  },
  methods: {
    done() {
      // eslint-disable-next-line no-console
      console.log('التاكيد')
    },
    changeComp(comp, numComp) {
      this.comp = comp
      this.numComp = numComp
    },
  },
  head: {
    title: 'اتمام الشراء',
  },
}
</script>

<style lang="scss">
.confirm-the-pay {
  .custom-button {
    &:hover {
      background-color: var(--Voodoo);
      color: var(--light);
      svg {
        fill: var(--light);
      }
    }
  }
}
</style>
