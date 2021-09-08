<template>
  <main role="bank-accounts" class="bank-accounts">
    <header class="text-center padding-y-45 margin-bottom-50">
      <h1 class="text-30 text-dark margin-bottom-10">الحساب البنكي</h1>
      <p class="text-14 text-silver weight-br-300">
        الحساب البنكي الخاص بك وبامكانك إضافة حساب اخر
      </p>
    </header>
    <!--  -->
    <section class="custom-container overflow-auto" style="max-width: 109.8rem">
      <TableData style="min-width: 108.8rem" />
    </section>
  </main>
</template>

<script>
export default {
  name: 'BankAccounts',
  validate({ params }) {
    // Must be params number not string and params exsist.
    return /^\d+$/.test(params.id) && params.id
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
    @include scrollBar(5px, $alabaster, $Voodoo) {
      border-radius: 20px;
    }
    &::-webkit-scrollbar {
      height: 5px;
    }
  }
}
</style>
