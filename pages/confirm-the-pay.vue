<template>
  <main class="confirm-the-pay">
    <AppPagesHeader class="border-bottom-whiteDark">
      <template slot="head">اتمام الشراء</template>
      <template slot="desc">
        حدد طريقة دفع مناسبة لك لتأكيد اشتراكك في هذه الدورة وتمتع بتجربة
        فريدة</template
      >
    </AppPagesHeader>
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
                        <span>S.R</span> <span class="margin-x-2">50</span>
                      </p>
                      <del
                        role="discount"
                        class="d-flex text-silver text-14 weight-br-300"
                      >
                        <span>S.R</span>
                        <span class="margin-x-2">50</span>
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
              <div class="row row-cols-1 row-cols-sm-2 gx-4">
                <div class="col sm-margin-bottom-10">
                  <AppBtn
                    :class="[
                      'bg-light width-100 overflow-hidden custom-button text-14 radius-14 weight-br-300',
                      {
                        'bg-voodoo text-light pointer-event-none':
                          isPayWithCard,
                      },
                      {
                        'text-voodoo': !isPayWithCard,
                      },
                    ]"
                    style="height: 5.9rem"
                    @clicked="changeComp('PayWithCard', 1)"
                  >
                    <GSvg
                      :class="[
                        'svg-20 fill-voodoo margin-end-5',
                        { 'fill-light': isPayWithCard },
                      ]"
                      name-icon="bank-card"
                    />
                    <span>الدفع باستخدام كارت البنك</span>
                  </AppBtn>
                </div>
                <div class="col">
                  <AppBtn
                    :class="[
                      'bg-light width-100 overflow-hidden custom-button text-14 radius-14 weight-br-300',
                      {
                        'bg-voodoo text-light pointer-event-none':
                          isBankTransfer,
                      },
                      {
                        'text-voodoo': !isBankTransfer,
                      },
                    ]"
                    style="height: 5.9rem"
                    @clicked="changeComp('BankTransfer', 2)"
                  >
                    <GSvg
                      :class="[
                        'svg-20 margin-end-5 fill-voodoo',
                        { 'fill-light': isBankTransfer },
                      ]"
                      name-icon="bank"
                    />
                    <span>التحويل البنكي</span>
                  </AppBtn>
                </div>
              </div>
              <!--  -->
              <div
                class="margin-top-20 bg-light radius-12 overflow-hidden"
                style="min-height: 38.4rem"
              >
                <transition :name="dirctionAnimate" mode="out-in">
                  <component :is="comp" @data="getData">
                    <PayWithCard />
                    <BankTransfer />
                  </component>
                </transition>
              </div>
            </div>
          </div>
          <!--  -->
          <OrderSummary>
            <AppBtn
              style="height: 6rem"
              class="
                width-100
                text-light
                radius-18
                btn-emerald
                bg-emerald
                text-14
              "
              :disabled="disabled"
              @clicked="done"
            >
              تأكيد الطلب
            </AppBtn>
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
      data: null,
      disabled: true,
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
  watch: {
    comp() {
      this.data = null
      this.disabled = true
    },
  },
  methods: {
    getData(data) {
      this.data = data.form
      this.disabled = data.statusDisabled
    },
    done() {
      // eslint-disable-next-line no-console
      console.log('التاكيد')
    },
    changeComp(comp, numComp) {
      this.comp = comp
      this.numComp = numComp
    },
  },
  head() {
    return {
      title: 'اتمام الشراء',
    }
  },
}
</script>

<style lang="scss">
.confirm-the-pay {
  .custom-button {
    &:hover {
      background-color: var(--voodoo);
      color: var(--light);
      svg {
        fill: var(--light);
      }
    }
  }
}
</style>
