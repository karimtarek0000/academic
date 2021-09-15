<template>
  <section>
    <div class="row g-0">
      <div class="col-12 padding-0">
        <h2 role="welcome" class="text-22 text-dark">مرحبا بك في أكاديمي</h2>
        <p role="description" class="text-12 text-silver weight-br-300">
          قم بانشاء حساب جديد لتسطيع التسجيل وشراء الدورات
        </p>
      </div>
      <div class="col-12 margin-top-50">
        <form>
          <div class="row">
            <div class="col-12 col-sm-6">
              <div
                class="
                  d-flex
                  align-items-center
                  position-relative
                  margin-bottom-10
                "
              >
                <input
                  v-model.trim="$v.form.firstName.$model"
                  role="first-name"
                  type="text"
                  class="
                    padding-start-30
                    border-whiteDark-all
                    width-100
                    padding-y-10
                    radius-12
                    text-12
                  "
                  placeholder="الاسم الاول"
                />
                <GSvg
                  :class="[
                    'svg-17 fill-silver position-absolute margin-x-10',
                    { 'fill-dark': form.firstName },
                  ]"
                  name-icon="user"
                />
              </div>
              <AppMessageInputRequired
                v-if="!$v.form.firstName.required && $v.form.firstName.$dirty"
              />
            </div>
            <div class="col-12 col-sm-6">
              <div
                class="
                  d-flex
                  align-items-center
                  position-relative
                  margin-bottom-10
                "
              >
                <input
                  v-model.trim="$v.form.lastName.$model"
                  role="last-name"
                  type="text"
                  class="
                    padding-start-10
                    border-whiteDark-all
                    width-100
                    padding-y-10
                    radius-12
                    text-12
                  "
                  placeholder="الاسم الاخير"
                />
              </div>
              <AppMessageInputRequired
                v-if="!$v.form.lastName.required && $v.form.lastName.$dirty"
              />
            </div>
          </div>
          <div
            class="d-flex align-items-center position-relative margin-bottom-10"
          >
            <input
              v-model.trim="$v.form.email.$model"
              role="email"
              type="email"
              class="
                padding-start-30
                border-whiteDark-all
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
            class="d-flex align-items-center position-relative margin-bottom-10"
          >
            <input
              v-model.trim="$v.form.phone.$model"
              role="phone"
              type="text"
              class="
                padding-start-30
                border-whiteDark-all
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
          <AppMessageInputError
            v-if="!$v.form.phone.numeric && $v.form.phone.$dirty"
            type-error="num"
          />
          <div
            class="d-flex align-items-center position-relative margin-bottom-10"
          >
            <input
              v-model.trim="$v.form.password.$model"
              role="password"
              type="password"
              class="
                padding-start-30
                border-whiteDark-all
                width-100
                padding-y-10
                radius-12
                text-12
              "
              placeholder="كلمة المرور"
            />
            <GSvg
              :class="[
                'svg-17 fill-silver position-absolute margin-x-10',
                { 'fill-dark': form.password },
              ]"
              name-icon="key-2-line"
            />
          </div>
          <AppMessageInputRequired
            v-if="!$v.form.password.required && $v.form.password.$dirty"
          />
          <div v-if="$v.form.password.$invalid && $v.form.password.$dirty">
            <span class="text-13"
              >يجب ادخال على الاقل 10 ادخالات تحتوي على</span
            >
            <ul class="list-unstyled weight-br-300 text-12">
              <li class="d-flex align-items-center">
                <GSvg
                  :name-icon="checkNumbers ? 'done' : 'wrong'"
                  class="svg-18 fill-coral"
                />
                <span>ارقام</span>
              </li>
              <li class="d-flex align-items-center">
                <GSvg
                  :name-icon="checkLowerCase ? 'done' : 'wrong'"
                  class="svg-18 fill-coral"
                />
                <span>حروف صغيرة</span>
              </li>
              <li class="d-flex align-items-center">
                <GSvg
                  :name-icon="checkUpperCase ? 'done' : 'wrong'"
                  class="svg-18 fill-coral"
                />
                <span>حروف كبيرة</span>
              </li>
              <li class="d-flex align-items-center">
                <GSvg
                  :name-icon="checkCharacters ? 'done' : 'wrong'"
                  class="svg-18 fill-coral"
                />
                <span>ادخال على الاقل واحد مثل @#%^*&</span>
              </li>
            </ul>
          </div>
          <div
            class="d-flex align-items-center position-relative margin-bottom-10"
          >
            <input
              v-model.trim="$v.form.confirmPassword.$model"
              role="confirm-password"
              type="password"
              class="
                padding-start-30
                border-whiteDark-all
                width-100
                padding-y-10
                radius-12
                text-12
              "
              placeholder="تأكيد كلمة المرور"
            />
            <GSvg
              :class="[
                'svg-17 fill-silver position-absolute margin-x-10',
                { 'fill-dark': form.confirmPassword },
              ]"
              name-icon="key-2-line"
            />
          </div>
          <AppMessageInputError
            v-if="
              !$v.form.confirmPassword.sameAsPassword &&
              $v.form.confirmPassword.$dirty
            "
            type-error="match"
          />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import {
  required,
  email,
  numeric,
  minLength,
  sameAs,
  helpers,
} from 'vuelidate/lib/validators'
const numbers = helpers.regex('numbers', /[0-9]/)
const lowerCase = helpers.regex('lowerCase', /[a-z]/)
const upperCase = helpers.regex('upperCase', /[A-Z]/)
const char = helpers.regex('char', /[@#%^*&]/)
export default {
  name: 'SignUp',
  layout: 'auth',
  meta: {
    image: 1,
  },
  data() {
    return {
      form: {
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
    }
  },
  validations: {
    form: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      phone: {
        required,
        numeric,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        numbers,
        lowerCase,
        upperCase,
        char,
        minLength: minLength(10),
      },
      confirmPassword: {
        sameAsPassword: sameAs('password'),
      },
    },
  },
  computed: {
    checkNumbers() {
      return (
        this.$v.form.password.numbers &&
        this.$v.form.password.required &&
        this.$v.form.password.$dirty
      )
    },
    checkLowerCase() {
      return (
        this.$v.form.password.lowerCase &&
        this.$v.form.password.required &&
        this.$v.form.password.$dirty
      )
    },
    checkUpperCase() {
      return (
        this.$v.form.password.upperCase &&
        this.$v.form.password.required &&
        this.$v.form.password.$dirty
      )
    },
    checkCharacters() {
      return (
        this.$v.form.password.char &&
        this.$v.form.password.required &&
        this.$v.form.password.$dirty
      )
    },
  },
}
</script>

<style></style>
