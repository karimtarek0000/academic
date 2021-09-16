<template>
  <ChangeInformationRegister
    :data="{
      head: 'هل نسيت كلمة المرور',
      desc: ' اكتب بريدك الالكتروني لارسال كود لاسترجاع كلمة المرور الخاصه بك',
      back: true,
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
    </form>
    <AppBtn
      slot="submit"
      style="width: 25.6rem; height: 5.5rem"
      class="radius-21 text-14 bg-voodoo btn-voodoo text-light margin-x-auto"
      type="submit"
      @clicked="submit"
      >ارسال رابط إعادة تعيين كلمة المرور</AppBtn
    >
  </ChangeInformationRegister>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'ForgetPassword',
  layout: 'auth',
  meta: {
    image: 2,
  },
  data() {
    return {
      form: {
        email: null,
      },
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
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
      title: 'نسيت كلمة المرور',
    }
  },
}
</script>

<style></style>
