<template>
  <div class="table">
    <!-- Table head -->
    <div class="table__head text-13 overflow-hidden">
      <div class="table__row">
        <div
          v-for="head in table.head"
          :key="head"
          class="table__cell bg-alabaster text-center"
          v-text="head"
        />
      </div>
    </div>
    <!-- Table body -->
    <div class="table__body">
      <div class="table__row text-12">
        <div
          v-for="body in table.body"
          :key="body"
          class="table__cell"
          v-text="body"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDataTable',
  inject: ['table'],
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
    max-width: 10rem;
  }

  &__body {
    display: table-row-group;
  }
}
</style>
