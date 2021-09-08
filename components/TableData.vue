<template>
  <div class="table">
    <!-- Table head -->
    <div class="table__head text-13 overflow-hidden">
      <div class="table__row">
        <div class="table__cell bg-alabaster text-center">الاسم</div>
        <div class="table__cell bg-alabaster text-center">اسم البنك</div>
        <div class="table__cell bg-alabaster text-center">رقم الحساب</div>
        <div class="table__cell bg-alabaster text-center">IFSC Codes</div>
        <div class="table__cell bg-alabaster text-center">العملية</div>
      </div>
    </div>
    <!-- Table body -->
    <div class="table__body">
      <div class="table__row text-12 border-botton-whiteDark">
        <div class="table__cell">Ahmed Hamdan</div>
        <div class="table__cell">بنك الراجحي</div>
        <div class="table__cell">25785506000109</div>
        <div class="table__cell">SA8880000487608010416925</div>
        <div class="table__cell">دفع</div>
      </div>
      <div class="table__row text-12 border-botton-whiteDark">
        <div class="table__cell">Ahmed Hamdan</div>
        <div class="table__cell">بنك الاهلي</div>
        <div class="table__cell">25785506000109</div>
        <div class="table__cell">SA8880000487608010416925</div>
        <div class="table__cell">دفع</div>
      </div>
      <div class="table__row text-12 border-botton-whiteDark">
        <div class="table__cell">Ahmed Hamdan</div>
        <div class="table__cell">بنك الراجحي</div>
        <div class="table__cell">25785506000109</div>
        <div class="table__cell">SA8880000487608010416925</div>
        <div class="table__cell">دفع</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableData',
}
</script>

<style lang="scss">
.table {
  display: table;
  font-size: 20px;
  border-collapse: collapse;
  width: 100%;

  &__head {
    display: table-header-group;

    .table__cell:first-child {
      border-radius: 0 1rem 1rem 0;
    }
    .table__cell:last-child {
      border-radius: 1rem 0 0 1rem;
    }
  }

  &__row {
    display: table-row;
    vertical-align: middle;
    text-align: center;
  }

  &__cell {
    display: table-cell;
    padding: 2rem 0;
    width: calc(108.8rem / 5);
  }

  &__body {
    display: table-row-group;
  }
}
</style>
