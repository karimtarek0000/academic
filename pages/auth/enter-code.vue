<template>
  <ChangeInformationRegister
    :data="{
      head: 'أدخل كلمة المرور الجديدة',
      desc: 'أدخل الكود المرسل على بريدك الالكتروني لاسترجاع كلمة المرور الخاص بك',
      back: true,
    }"
  >
    <form slot="form">
      <div class="d-flex align-items-center position-relative margin-bottom-10">
        <input
          v-model.trim.number="$v.form.code.$model"
          role="code"
          type="text"
          class="
            padding-start-30
            border-whiteDark-all
            width-100
            padding-y-10
            radius-12
            text-12
          "
          placeholder="الكود"
        />
      </div>
      <AppMessageInputRequired
        v-if="!$v.form.code.required && $v.form.code.$dirty"
      />
      <AppMessageInputError
        v-if="!$v.form.code.numeric && $v.form.code.$dirty"
        type-error="num"
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
import { required, numeric } from 'vuelidate/lib/validators'
export default {
  name: 'EnterCode',
  layout: 'auth',
  meta: {
    image: 2,
  },
  data() {
    return {
      form: {
        code: null,
      },
    }
  },
  validations: {
    form: {
      code: {
        required,
        numeric,
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
      title: 'ادخل الكود',
    }
  },
}
</script>

<style></style>
