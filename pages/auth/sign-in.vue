<template>
  <ChangeInformationRegister
    :data="{
      head: 'مرحبا بك مجددا',
      desc: 'قم بانشاء حساب جديد لتسطيع التسجيل وشراء الدورات',
    }"
  >
    <form slot="form">
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
    </form>
    <template slot="other">
      <!--  -->
      <div
        class="
          col
          d-flex
          justify-content-between
          align-items-center
          margin-top-10
        "
      >
        <Selected
          class="text-coral"
          v-bind="{
            id: 'role',
            selected: remeberMe,
            type: 'checkbox',
            label: 'تذكرني',
            value: 'تذكرني',
            name: 'remeber',
          }"
          @changeSelect="remeberMe = $event"
        />
        <AppBtnGo
          to="auth-forget-password"
          class="text-12 text-coral weight-br-300"
          >هل نسيت كلمة المرور ؟</AppBtnGo
        >
      </div>
      <!--  -->
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
        <p class="text-12 weight-br-300 text-silver">
          أو قم بتسجيل الدخول بـــ
        </p>
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
      >تسجيل الدخول</AppBtn
    >
  </ChangeInformationRegister>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'SignIn',
  layout: 'auth',
  meta: {
    image: 2,
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      remeberMe: '',
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
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
      title: 'تسجيل الدخول',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'تسجيل الدخول لموقع اكاديمي',
        },
      ],
    }
  },
}
</script>

<style></style>
