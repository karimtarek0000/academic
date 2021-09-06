<template>
  <section role="pay-with-card" class="confirm-the-pay custom-input--object-3">
    <div class="row justify-content-center padding-y-30">
      <!--  -->
      <ul class="col-12 list-unstyled d-flex justify-content-center">
        <li style="width: 8.8rem; height: 5.1rem" class="margin-end-10">
          <img
            class="resize-img"
            src="~/assets/images/global/icons/mastercard.svg"
            alt="mastercard"
          />
        </li>
        <li style="width: 8.8rem; height: 5.1rem" class="margin-end-10">
          <img
            class="resize-img"
            src="~/assets/images/global/icons/visa.svg"
            alt="visa"
          />
        </li>
        <li style="width: 8.8rem; height: 5.1rem" class="margin-end-10">
          <img
            class="resize-img"
            src="~/assets/images/global/icons/mada.svg"
            alt="mada"
          />
        </li>
      </ul>
      <!--  -->
      <form class="col col-lg-9 margin-top-20">
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
            text-13
            margin-bottom-10
          "
          placeholder="اسم صاحب الكارت"
        />
        <p
          v-if="!$v.form.name.required && $v.form.name.$dirty"
          role="require"
          class="text-13 margin-y-5"
        >
          هذا الحقل مطلوب ادخاله
        </p>
        <input
          v-model.trim="$v.form.numCard.$model"
          role="card-number"
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
          placeholder="رقم الكارت"
        />
        <p
          v-if="!$v.form.numCard.required && $v.form.numCard.$dirty"
          role="require"
          class="text-13 margin-y-5"
        >
          هذا الحقل مطلوب ادخاله
        </p>
        <p
          v-if="!$v.form.numCard.numeric && $v.form.numCard.$dirty"
          role="not-correct"
          class="text-13 margin-y-5"
        >
          يجب ادخال ارقام فقط
        </p>
        <input
          v-model.trim="$v.form.ccv.$model"
          role="ccv"
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
          placeholder="CCV"
        />
        <p
          v-if="!$v.form.ccv.required && $v.form.ccv.$dirty"
          role="require"
          class="text-13 margin-y-5"
        >
          هذا الحقل مطلوب ادخاله
        </p>
        <p
          v-if="!$v.form.ccv.numeric && $v.form.ccv.$dirty"
          role="not-correct"
          class="text-13 margin-y-5"
        >
          يجب ادخال ارقام فقط
        </p>
        <input
          v-model.trim="$v.form.date.$model"
          role="date"
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
          placeholder="MM/YY"
        />
        <p
          v-if="!$v.form.date.required && $v.form.date.$dirty"
          role="require"
          class="text-13 margin-y-5"
        >
          هذا الحقل مطلوب ادخاله
        </p>
        <p
          v-if="!$v.form.date.isUnique && $v.form.date.$dirty"
          role="not-correct"
          class="text-13 margin-y-5"
        >
          يجب ادخال التاريخ بشكل صحيح
        </p>
      </form>
    </div>
  </section>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators'
export default {
  name: 'PayWithCard',
  data() {
    return {
      form: {
        name: null,
        numCard: null,
        ccv: null,
        date: null,
      },
    }
  },
  computed: {
    statusData() {
      return !this.$v.$invalid
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
  validations: {
    form: {
      name: {
        required,
      },
      numCard: {
        numeric,
        required,
      },
      ccv: {
        numeric,
        required,
      },
      date: {
        required,
        isUnique(value) {
          const regEx = /^(0?[1-9]|1[012])[/]{1}[0-9][0-9]$/
          if (regEx.test(value)) return true
          return false
        },
      },
    },
  },
}
</script>

<style lang="scss">
.confirm-the-pay {
  & input {
    &::placeholder {
      font-weight: 300;
      color: var(--silver);
    }
  }
}
</style>
