<template>
  <main
    role="bank-accounts"
    class="bank-accounts custom-input--object-3 custom-input--object-4"
  >
    <header class="text-center padding-y-45 margin-bottom-20">
      <h1 class="text-30 text-dark margin-bottom-10">الحساب البنكي</h1>
      <p class="text-14 text-silver weight-br-300">
        الحساب البنكي الخاص بك وبامكانك إضافة حساب اخر
      </p>
    </header>
    <!--  -->
    <section class="custom-container overflow-auto" style="max-width: 109.8rem">
      <AppDataTable style="min-width: 108.8rem" />
      <!--  -->
      <AppBtn
        style="width: 33.2rem; height: 6.2rem"
        class="
          btn-voodoo
          text-light
          margin-y-50
          radius-18
          text-14
          mx-auto
          d-block
        "
        @clicked="toggle = true"
      >
        اضافة حساب بنكي
      </AppBtn>
    </section>
    <!--  -->
    <BackDrop :toggle="toggle" @toggleBackDrop="toggle = $event">
      <AppModel head="اضافة حساب بنكي" @clicked="toggle = false">
        <template>
          <h3
            slot="head"
            role="head"
            class="text-16 text-center padding-y-15 text-dark"
          >
            اضافة حساب بنكي
          </h3>
          <form class="col-10 mx-auto margin-top-30" @submit.prevent="submit">
            <input
              v-model="$v.form.name.$model"
              role="name"
              type="text"
              class="
                padding-start-15
                border-whiteDark-all
                width-100
                padding-y-10
                radius-12
                text-12
              "
              placeholder="اسم صاحب الحساب"
            />
            <AppMessageInputRequired
              v-if="!$v.form.name.required && $v.form.name.$dirty"
              class="margin-bottom-5"
            />
            <input
              v-model="$v.form.bankName.$model"
              role="bank-name"
              type="text"
              class="
                padding-start-15
                border-whiteDark-all
                width-100
                padding-y-10
                radius-12
                text-12
                margin-top-10
              "
              placeholder="اسم البنك"
            />
            <AppMessageInputRequired
              v-if="!$v.form.bankName.required && $v.form.bankName.$dirty"
              class="margin-bottom-10"
            />
            <input
              v-model="$v.form.accountNumber.$model"
              role="account-number"
              type="text"
              class="
                padding-start-15
                border-whiteDark-all
                width-100
                padding-y-10
                radius-12
                text-12
                margin-top-10
              "
              placeholder="رقم الحساب"
            />
            <AppMessageInputRequired
              v-if="
                !$v.form.accountNumber.required && $v.form.accountNumber.$dirty
              "
              class="margin-bottom-10"
            />
            <AppMessageInputError
              v-if="
                !$v.form.accountNumber.numeric && $v.form.accountNumber.$dirty
              "
              type-error="num"
            />
            <input
              v-model="$v.form.IFSCCode.$model"
              role="IFSC-code"
              type="text"
              class="
                padding-start-15
                border-whiteDark-all
                width-100
                padding-y-10
                radius-12
                text-12
                margin-top-10
              "
              placeholder="IFSC Codes"
            />
            <AppMessageInputRequired
              v-if="!$v.form.IFSCCode.required && $v.form.IFSCCode.$dirty"
              class="margin-bottom-10"
            />
            <AppMessageInputError
              v-if="!$v.form.IFSCCode.numeric && $v.form.IFSCCode.$dirty"
              type-error="num"
            />
            <AppBtn
              type="submit"
              style="width: 13.6rem; height: 4.2rem"
              class="
                btn-voodoo
                bg-voodoo
                text-light
                margin-top-30 margin-bottom-20
                mx-auto
                radius-18
                text-14
                d-block
              "
              >اضافة</AppBtn
            >
          </form>
        </template>
      </AppModel>
    </BackDrop>
  </main>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators'
export default {
  name: 'BankAccounts',
  data() {
    return {
      form: {
        name: null,
        bankName: null,
        accountNumber: null,
        IFSCCode: null,
      },
      toggle: false,
      table: {
        head: ['الاسم', 'اسم البنك', 'رقم الحساب', 'IFSC Codes', 'العملية'],
        body: [
          'Ahmed Hamdan',
          'بنك الراجحي',
          '25785506000109',
          'SA8880000487608010416925',
          'دفع',
        ],
      },
    }
  },
  provide() {
    return {
      table: this.table,
    }
  },
  validations: {
    form: {
      name: {
        required,
      },
      bankName: {
        required,
      },
      accountNumber: {
        required,
        numeric,
      },
      IFSCCode: {
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
      title: 'الحساب البنكي',
    }
  },
}
</script>

<style lang="scss">
.bank-accounts {
  section {
    position: relative;
    z-index: 4000;
    @include scrollBar(5px, $alabaster, $voodoo) {
      border-radius: 20px;
    }
    &::-webkit-scrollbar {
      height: 5px;
    }
  }

  .table {
    &__cell {
      width: calc(108.8rem / 5);
    }

    &__body .table__row {
      border-bottom: 2px solid var(--whiteDark);
    }
  }
}
</style>
