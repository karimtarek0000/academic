<template>
  <ChangeInformationRegister
    :data="{
      head: 'مرحبا بك في أكاديمي',
      desc: 'قم بانشاء حساب جديد لتسطيع التسجيل وشراء الدورات',
    }"
  >
    <form slot="form">
      <div class="row">
        <div class="col-12 col-sm-6">
          <div
            class="d-flex align-items-center position-relative margin-bottom-10"
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
            class="d-flex align-items-center position-relative margin-bottom-10"
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
      <div class="d-flex align-items-center position-relative margin-bottom-10">
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
      <div class="d-flex align-items-center position-relative margin-bottom-10">
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
      <div class="d-flex align-items-center position-relative margin-bottom-10">
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
        <span class="text-13">يجب ادخال على الاقل 10 ادخالات تحتوي على</span>
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
      <div class="d-flex align-items-center position-relative margin-bottom-10">
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
    <template slot="other">
      <div class="col d-flex align-items-center margin-top-10">
        <Selected
          v-bind="{
            id: 'role',
            selected: agree,
            type: 'checkbox',
            label: '',
            value: 'موافق',
            name: 'role',
          }"
          @changeSelect="agree = $event"
        />
        <div class="d-flex align-items-center text-12 text-coral">
          <span class="text-dark">اوافق على</span>
          <AppBtnGo
            to="terms"
            class="text-12 underline__hover text-coral padding-y-0 padding-x-5"
            >الشروط و الاحكام</AppBtnGo
          >
          <span class="text-dark">,</span>
          <AppBtnGo
            to="privacy"
            class="text-12 underline__hover text-coral padding-y-0 padding-x-5"
            >سياسة الخصوصية</AppBtnGo
          >
        </div>
      </div>
      <div
        class="
          col
          padding-0
          d-flex
          flex-column
          align-items-center
          margin-top-15
        "
      >
        <p class="text-12 weight-br-300 text-silver">أو قم بانشاء حسابك بـــ</p>
        <div class="d-flex align-items-center margin-top-10">
          <AppBtn>
            <GSvg class="svg-37" name-icon="facebook-color" />
          </AppBtn>
          <AppBtn>
            <GSvg class="svg-37" name-icon="twitter-color" />
          </AppBtn>
          <AppBtn>
            <GSvg class="svg-37" name-icon="google-2" />
          </AppBtn>
        </div>
      </div>
    </template>
    <AppBtn
      slot="submit"
      style="width: 23.5rem; height: 5.5rem"
      class="radius-21 text-14 bg-voodoo btn-voodoo text-light margin-x-auto"
      type="submit"
      @clicked="submit"
      >انشاء حساب</AppBtn
    >
  </ChangeInformationRegister>
</template>

<script>
import { required, email, numeric, sameAs } from 'vuelidate/lib/validators'
import { password } from '~/mixins/validation.js'
export default {
  name: 'SignUp',
  mixins: [password],
  layout: 'auth',
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
      agree: '',
    }
  },
  meta: {
    image: 1,
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
      ...password.validations,
      confirmPassword: {
        sameAsPassword: sameAs('password'),
      },
    },
  },
  methods: {
    submit() {
      this.$v.$touch()
    },
  },
  head() {
    return {
      title: 'تسجيل جديد',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'تسجيل لموقع اكاديمي',
        },
      ],
    }
  },
}
</script>

<style></style>
