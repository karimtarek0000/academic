<template>
  <main
    role="bank-accounts"
    class="bank-accounts custom-input--object-3 custom-input--object-4"
  >
    <AppPagesHeader>
      <template slot="head">الحساب البنكي</template>
      <template slot="desc">
        الحساب البنكي الخاص بك وبامكانك إضافة حساب اخر</template
      >
    </AppPagesHeader>
    <!--  -->
    <section
      class="custom-container overflow-auto change-scrollbar-x user-select-none"
      style="max-width: 109.8rem"
    >
      <AppDataTable style="min-width: 108.8rem">
        <template slot="head">
          <div
            v-for="head in table.head"
            :key="head"
            class="table__cell"
            v-text="head"
          />
        </template>
        <template slot="body">
          <div class="table__row weight-br-300">
            <p class="table__cell">Ahmed Hamdan</p>
            <p class="table__cell">بنك الراجحي</p>
            <p class="table__cell weight-br-400">25785506000109</p>
            <p class="table__cell weight-br-400">SA8880000487608010416925</p>
            <p class="table__cell">دفع</p>
          </div>
        </template>
      </AppDataTable>
    </section>
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
      @clicked="statusToggleBackDrop = true"
    >
      اضافة حساب بنكي
    </AppBtn>
    <!--  -->
    <BackDrop
      :toggle="statusToggleBackDrop"
      @toggleBackDrop="statusToggleBackDrop = $event"
    >
      <AppModel head="اضافة حساب بنكي" @clicked="statusToggleBackDrop = false">
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
              ref="firstInput"
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
import { focusInput } from '@/mixins/other'
export default {
  name: 'BankAccounts',
  mixins: [focusInput],
  layout: 'site',
  data() {
    return {
      form: {
        name: null,
        bankName: null,
        accountNumber: null,
        IFSCCode: null,
      },
      statusToggleBackDrop: false,
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
  }

  .table {
    &__cell {
      width: calc(108.8rem / 5);
    }
  }
}
</style>
