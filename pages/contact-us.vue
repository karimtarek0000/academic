<template>
  <main class="contact-us custom-input--object-3 custom-input--object-4">
    <!--  -->
    <header class="text-center padding-y-45 border-botton-whiteDark">
      <h1 class="text-30 text-dark margin-bottom-10">اتصل بنا</h1>
      <p class="text-14 text-silver weight-br-300 mx-auto col-lg-4">
        هو أسلوب فني إبداعي يهدف إلى إيصال فكرة معينة إلى الجمهور المستهدف عبر
        تصميم أو مجموعة من التصاميم
      </p>
    </header>
    <!--  -->
    <article class="custom-container">
      <section class="col-lg-10 justify-content-center mx-auto padding-y-45">
        <div class="row g-0 align-items-center">
          <div class="col-12 col-md-5 col-lg-6 d-flex justify-content-center">
            <GSvg
              style="height: 34.4rem"
              name-icon="contact-us"
              title="التواصل معنا"
            />
          </div>
          <div class="col-12 col-md-7 col-lg-6">
            <div
              class="
                d-flex
                flex-column
                align-items-center align-items-md-start
                margin-bottom-30
                md-margin-top-30
              "
            >
              <h2 role="head" class="text-dark text-25">
                نحن جاهزون لمساعدتك !
              </h2>
              <p role="description" class="text-14 text-silver weight-br-300">
                أرسل رسالة لنا للتواصل او لحدوث مشكلة ونحن جاهزون تماما للتعامل
                معها
              </p>
            </div>
            <form @submit.prevent="submit">
              <div
                class="
                  d-flex
                  align-items-center
                  position-relative
                  margin-bottom-10
                "
              >
                <input
                  v-model.trim="$v.form.name.$model"
                  role="name"
                  type="text"
                  class="
                    padding-start-30
                    border-whiteDark-1
                    width-100
                    padding-y-10
                    radius-12
                    text-12
                  "
                  placeholder="الاسم"
                />
                <GSvg
                  :class="[
                    'svg-17 fill-silver position-absolute margin-x-10',
                    { 'fill-dark': form.name },
                  ]"
                  name-icon="user"
                />
              </div>
              <AppMessageInputRequired
                v-if="!$v.form.name.required && $v.form.name.$dirty"
              />
              <div
                class="
                  d-flex
                  align-items-center
                  position-relative
                  margin-bottom-10
                "
              >
                <input
                  v-model.trim="$v.form.email.$model"
                  role="email"
                  type="email"
                  class="
                    padding-start-30
                    border-whiteDark-1
                    width-100
                    padding-y-10
                    radius-12
                    text-12
                  "
                  placeholder="البريد الالكتروني"
                />
                <GSvg
                  :class="[
                    'svg-17 fill-silver position-absolute margin-x-10',
                    { 'fill-dark': form.email },
                  ]"
                  name-icon="mail-2"
                />
              </div>
              <AppMessageInputRequired
                v-if="!$v.form.email.required && $v.form.email.$dirty"
              />
              <AppMessageInputError
                v-if="!$v.form.email.email && $v.form.email.$dirty"
                type-error="email"
              />
              <div
                class="
                  d-flex
                  align-items-center
                  position-relative
                  margin-bottom-10
                "
              >
                <input
                  v-model.trim="$v.form.phone.$model"
                  role="phone"
                  type="text"
                  class="
                    padding-start-30
                    border-whiteDark-1
                    width-100
                    padding-y-10
                    radius-12
                    text-12
                  "
                  placeholder="رقم الجوال"
                />
                <GSvg
                  :class="[
                    'svg-17 fill-silver position-absolute margin-x-10',
                    { 'fill-dark': form.phone },
                  ]"
                  name-icon="smartphone"
                />
              </div>
              <AppMessageInputRequired
                v-if="!$v.form.phone.required && $v.form.phone.$dirty"
              />
              <AppMessageInputError
                v-if="!$v.form.phone.numeric && $v.form.phone.$dirty"
                type-error="num"
              />
              <textarea
                v-model.trim="$v.form.message.$model"
                class="
                  padding-start-15
                  border-whiteDark-1
                  width-100
                  padding-y-10
                  radius-12
                  text-12
                "
                placeholder="الرسالة"
              />
              <AppMessageInputRequired
                v-if="!$v.form.message.required && $v.form.message.$dirty"
              />
              <BtnPrimary
                type="submit"
                style="width: 23.5rem; height: 5.5rem"
                class="
                  btn-voodoo
                  bg-voodoo
                  text-light
                  margin-top-30
                  radius-18
                  text-14
                "
                >ارسال</BtnPrimary
              >
            </form>
          </div>
        </div>
      </section>
      <!--  -->
      <section role="keep-in-touch" class="padding-y-30">
        <h3 role="head" class="text-25 text-dark text-center margin-bottom-50">
          كن على اتصال
        </h3>
        <div
          class="
            row
            align-items-center
            justify-content-center justify-content-lg-between
          "
        >
          <div
            style="min-height: 16.5rem"
            class="
              specific-size
              radius-11
              shadow__card-1
              text-dark text-center
              padding-y-20
              position-relative
              line-over
              lg-margin-bottom-20
            "
          >
            <GSvg class="svg-25" name-icon="map" title="العنوان" />
            <p class="text-16 margin-y-5">العنوان</p>
            <p role="address" class="text-14 padding-x-30 weight-br-300">
              Comapny 12345 South Main Street Anywhere
            </p>
          </div>
          <div
            style="min-height: 16.5rem"
            class="
              specific-size
              radius-11
              shadow__card-1
              text-dark text-center
              padding-y-20
              position-relative
              line-over
              lg-margin-bottom-20
            "
          >
            <GSvg class="svg-25" name-icon="mail" title="البريد الالكتروني" />
            <p class="text-16 margin-y-5">البريد الالكتروني</p>
            <p role="email" class="text-14 padding-x-30 weight-br-300">
              Ibtdi.com@gmail.com
            </p>
          </div>
          <div
            style="min-height: 16.5rem"
            class="
              specific-size
              radius-11
              shadow__card-1
              text-dark text-center
              padding-y-20
              position-relative
              line-over
              lg-margin-bottom-20
            "
          >
            <GSvg class="svg-25" name-icon="mobile" title="رقم التليفون" />
            <p class="text-16 margin-y-5">رقم الجوال</p>
            <p role="phone" class="text-14 padding-x-30 weight-br-300">
              +000000000000
            </p>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators'
export default {
  name: 'ContactUs',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        phone: '',
      },
    }
  },
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        email,
        required,
      },
      phone: {
        numeric,
        required,
      },
      message: {
        required,
      },
    },
  },
  methods: {
    submit() {
      this.$v.$touch()
      // eslint-disable-next-line no-console
      if (!this.$v.$invalid) {
        // eslint-disable-next-line no-console
        console.log('send data')
      }
    },
  },
  head: {
    title: 'تواصل معنا',
  },
}
</script>

<style scoped lang="scss">
.line-over {
  &::after {
    content: '';
    position: absolute;
    width: 90%;
    height: 5px;
    @include position('rt', $moveT: 0, $moveR: '50%');
  }
  &:nth-of-type(1)::after,
  &:nth-of-type(3)::after {
    background-color: var(--chardonnay);
  }
  &:nth-of-type(2)::after {
    background-color: var(--picton);
  }
}
</style>
