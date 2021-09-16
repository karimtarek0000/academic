<template>
  <ChangeInformationRegister
    :data="{
      head: 'أدخل كلمة المرور الجديدة',
      desc: 'أدخل كلمة المرور الجديدة وقم بتأكيدها',
      back: true,
    }"
  >
    <form slot="form">
      <div class="d-flex align-items-center position-relative margin-bottom-10">
        <input
          v-model.trim="$v.form.oldPassword.$model"
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
          placeholder="كلمة المرور القديمة"
        />
        <GSvg
          :class="[
            'svg-17 fill-silver position-absolute margin-x-10',
            { 'fill-dark': form.oldPassword },
          ]"
          name-icon="key-2-line"
        />
      </div>
      <AppMessageInputRequired
        v-if="!$v.form.oldPassword.required && $v.form.oldPassword.$dirty"
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
          placeholder="كلمة المرور الجديدة"
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
    </form>
    <AppBtn
      slot="submit"
      style="width: 25.6rem; height: 5.5rem"
      class="radius-21 text-14 bg-voodoo btn-voodoo text-light margin-x-auto"
      type="submit"
      @clicked="submit"
      >تأكيد استرجاع كلمة المرور</AppBtn
    >
  </ChangeInformationRegister>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { password } from '~/mixins/validation.js'
export default {
  name: 'EnterNewPassword',
  mixins: [password],
  layout: 'auth',
  meta: {
    image: 2,
  },
  data() {
    return {
      form: {
        password: null,
        oldPassword: null,
      },
    }
  },
  validations: {
    form: {
      oldPassword: {
        required,
      },
      ...password.validations,
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
