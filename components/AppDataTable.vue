<template>
  <div class="table">
    <!-- Table head -->
    <div class="table__head text-13 overflow-hidden">
      <div class="table__row">
        <slot name="head" />
      </div>
    </div>
    <!-- Table body -->
    <div class="table__body text-12">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDataTable',
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
    background-color: $alabaster;
    //
    .table__cell:first-child {
      border-radius: 0 1rem 1rem 0;
    }
    .table__cell:last-child {
      border-radius: 1rem 0 0 1rem;
    }
  }
  &__cell {
    display: table-cell;
    padding: 2rem 0;
    max-width: 10rem;
    text-align: center;
  }
  &__row {
    display: table-row;
    overflow: hidden;

    &:not(:last-child) {
      border-bottom: 1px solid var(--whiteDark);
    }
  }
  &__body {
    display: table-row-group;
  }
}
</style>
