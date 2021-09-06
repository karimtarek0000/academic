<template>
  <section role="bank-transfer" class="confirm-the-pay custom-input--object-3">
    <div class="row padding-y-30 padding-x-45 justify-content-center">
      <div class="col border-botton-whiteDark padding-x-30 padding-bottom-20">
        <div class="row align-items-center">
          <div class="col-8 col-sm-3 sm-margin-bottom-10">
            <figure class="margin-bottom-0">
              <img
                class="resize-img"
                src="~/assets/images/global/bank.png"
                alt=""
              />
            </figure>
          </div>
          <div class="col-12 col-sm-9">
            <div class="d-flex align-items-center">
              <span class="text-bombay weight-br-300 margin-end-5"
                >اسم البنك:</span
              >
              <span class="text-12">NCB Bank</span>
            </div>
            <div class="d-flex align-items-center">
              <span class="text-bombay weight-br-300 margin-end-5"
                >رقم الحساب:</span
              >
              <span class="text-12">25785506000109</span>
            </div>
            <div class="d-flex align-items-center">
              <span class="text-bombay weight-br-300 margin-end-5"
                >رقم الايبان:</span
              >
              <span class="text-12">SA8880000487608010416925</span>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <form class="col-12 col-lg-9 margin-top-40">
        <input
          v-model.trim="$v.form.nameBank.$model"
          role="bank-name"
          type="text"
          class="
            padding-start-30
            border-whiteDark-1
            width-100
            padding-y-10
            radius-12
            text-13
            margin-bottom-10
          "
          placeholder="اسم البنك"
        />
        <p
          v-if="!$v.form.nameBank.required && $v.form.nameBank.$dirty"
          role="require"
          class="text-13 margin-y-5"
        >
          هذا الحقل مطلوب ادخاله
        </p>
        <input
          v-model.trim="$v.form.senderName.$model"
          role="name-sendar"
          type="text"
          class="
            padding-start-30
            border-whiteDark-1
            width-100
            padding-y-10
            radius-12
            text-13
            margin-bottom-10
          "
          placeholder="اسم المرسل"
        />
        <p
          v-if="!$v.form.senderName.required && $v.form.senderName.$dirty"
          role="require"
          class="text-13 margin-y-5"
        >
          هذا الحقل مطلوب ادخاله
        </p>
        <input
          v-model.trim="$v.form.mount.$model"
          role="mount"
          type="text"
          class="
            padding-start-30
            border-whiteDark-1
            width-100
            padding-y-10
            radius-12
            text-13
            margin-bottom-10
          "
          placeholder="مبلغ التحويل"
        />
        <p
          v-if="!$v.form.mount.required && $v.form.mount.$dirty"
          role="require"
          class="text-13 margin-y-5"
        >
          هذا الحقل مطلوب ادخاله
        </p>
        <p
          v-if="!$v.form.mount.numeric && $v.form.mount.$dirty"
          role="not-correct"
          class="text-13 margin-y-5"
        >
          يجب ادخال ارقام فقط
        </p>
        <!--  -->
        <UploadFile
          accept="image/*"
          class="margin-top-10 ml-auto col-3"
          @uploadFile="form.file = $event"
        >
          <template>
            <div class="d-flex align-items-center">
              <GSvg
                class="svg-25 margin-end-5"
                name-icon="upload"
                title="رفع الحوالة"
              />
              <span class="text-coral text-13">صورة الحوالة</span>
            </div>
          </template>
        </UploadFile>
        <p
          v-if="form.file"
          role="name-file"
          class="margin-top-10 margin-start-10"
          v-text="form.file.name"
        />
      </form>
    </div>
  </section>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators'
export default {
  name: 'BankTransfer',
  data() {
    return {
      form: {
        nameBank: null,
        senderName: null,
        mount: null,
        file: null,
      },
    }
  },
  validations: {
    form: {
      nameBank: {
        required,
      },
      senderName: {
        required,
      },
      mount: {
        required,
        numeric,
      },
    },
  },
  computed: {
    statusData() {
      return !!(!this.$v.$invalid && this.form.file)
    },
  },
  watch: {
    statusData(value) {
      if (value) {
        return this.$emit('data', {
          form: this.form,
          statusDisabled: false,
        })
      }
      this.$emit('data', {
        form: null,
        statusDisabled: true,
      })
    },
  },
}
</script>

<style></style>
