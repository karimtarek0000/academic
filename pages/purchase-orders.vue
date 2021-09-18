<template>
  <main role="purchase-orders">
    <AppPagesHeader>
      <template slot="head">طلبات الشراء</template>
      <template slot="desc">الدورات التي قمت بشرائها والفواتير</template>
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
            <div class="table__cell weight-br-400">
              <div class="d-flex align-items-center">
                <figure
                  class="margin-0 radius-12 overflow-hidden flex-shrink-0"
                  style="width: 76px; height: 57px"
                >
                  <img
                    class="resize-img"
                    src="~/assets/images/who-we-are/2.png"
                    alt=""
                  />
                </figure>
                <p>الفرق بين التايبوجرافي و الكاليجرافي وفن التعريب</p>
              </div>
            </div>
            <div class="table__cell">
              <p>23 يناير</p>
            </div>
            <div class="table__cell">
              <p>23 يناير</p>
            </div>
            <div class="table__cell">
              <p>تحويل بنكي</p>
            </div>
            <div class="table__cell text-18 weight-br-400 direction-ltr">
              <p>50 S.R</p>
            </div>
            <div class="table__cell">
              <p>تم الدفع</p>
            </div>
            <div class="table__cell">
              <p
                style="max-width: 9.4rem"
                class="
                  bg-emerald
                  radius-9
                  text-light
                  padding-x-10 padding-y-5
                  margin-x-auto
                "
              >
                الفاتورة
              </p>
            </div>
          </div>
        </template>
      </AppDataTable>
    </section>
  </main>
</template>

<script>
export default {
  name: 'PurchaseOrders',
  data() {
    return {
      table: {
        head: [
          'اسم الدورة',
          'وقت الانضمام',
          'وقت الانتهاء',
          'طريقة الدفع',
          'السعر الكلي',
          'حالة الدفع',
          'العملية',
        ],
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
  head() {
    return {
      title: 'طلبات الشراء',
    }
  },
}
</script>

<style></style>
