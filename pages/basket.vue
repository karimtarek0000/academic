<template>
  <main class="basket">
    <h1
      role="head"
      class="text-30 text-dark text-center padding-y-30 border-botton-whiteDark"
    >
      السلة
    </h1>
    <section>
      <h2 class="custom-container padding-y-20">
        <span class="text-20 text-dark margin-end-5">السلة</span>
        <span class="text-16 text-silver weight-br-300">(كورس 3)</span>
      </h2>
      <!--  -->
      <div class="bg-alabaster radius-12 padding-y-45">
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
            <div class="row row-cols-lg-1 gx-5 gy-4">
              <div
                v-for="i in 6"
                :key="i"
                class="col"
                style="min-height: 19.6rem"
              >
                <div class="row bg-light padding-10 radius-12">
                  <div class="col-12 col-md-4 padding-5 align-self-stretch">
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
                  <div class="col-12 col-md-8 padding-10">
                    <h3 role="head" class="text-15 text-dark truncut-text">
                      الفرق بين التايبوجرافي و الكاليجرافي وفن التعريب
                    </h3>
                    <div class="col d-flex align-items-center margin-y-10">
                      <!--  -->
                      <figure
                        style="width: 3.2rem; height: 3.2rem"
                        class="flex-shrink-0 margin-0 rounded-circle"
                      >
                        <img
                          class="resize-img"
                          src="~/assets/images/home/other/avatar.png"
                          alt=""
                        />
                      </figure>
                      <!--  -->
                      <span class="margin-start-5 text-dark text-10"
                        >أحمد حمدان</span
                      >
                    </div>
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
                    <!--  -->
                    <div class="d-flex align-items-center margin-top-10">
                      <BtnPrimary
                        class="padding-y-5 padding-x-0 margin-end-15"
                        @clicked="favi"
                      >
                        <template>
                          <GSvg
                            class="svg-20 fill-silver"
                            name-icon="heart-fill"
                            title="المفضلة"
                          />
                          <span
                            class="
                              text-silver text-11
                              weight-br-300
                              margin-start-5
                            "
                            >إضافة الى المفضلة</span
                          >
                        </template>
                      </BtnPrimary>
                      <BtnPrimary
                        class="padding-y-5 padding-x-0"
                        @clicked="delet"
                      >
                        <template>
                          <GSvg
                            class="svg-20 fill-silver"
                            name-icon="delete"
                            title="ازالة"
                          />
                          <span
                            class="
                              text-silver text-11
                              weight-br-300
                              margin-start-5
                            "
                            >ازالة</span
                          >
                        </template>
                      </BtnPrimary>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <OrderSummary>
            <form class="margin-bottom-40 padding-x-10 position-relative">
              <input
                type="text"
                placeholder="أدخل كود الكوبون"
                class="
                  padding-start-15
                  border-whiteDark-1
                  width-100
                  padding-y-10
                  radius-12
                  text-12
                "
              />
              <BtnPrimary
                class="
                  text-light
                  radius-10
                  btn-voodoo
                  bg-voodoo
                  text-11
                  padding-y-5
                  position-absolute
                "
                @clicked="activate"
              >
                تفعيل
              </BtnPrimary>
            </form>
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
              اتمام الشراء
            </BtnPrimary>
          </OrderSummary>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Basket',
  methods: {
    favi() {
      // eslint-disable-next-line no-console
      console.log('favorit')
    },
    delet() {
      // eslint-disable-next-line no-console
      console.log('delet')
    },
    done() {
      // eslint-disable-next-line no-console
      console.log('اتمام الشراء')
    },
    activate() {
      // eslint-disable-next-line no-console
      console.log('تفعيل')
    },
  },
  head: {
    title: 'السلة',
  },
}
</script>

<style lang="scss" scoped>
.basket {
  form {
    & input {
      &::placeholder {
        font-weight: 300;
        color: var(--silver);
      }
    }

    button {
      @include position('rt', $moveT: '50%', $moveR: '1.5rem');
      width: 9rem;
    }
  }
}
</style>
