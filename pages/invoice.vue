<template>
  <main role="invoice">
    <AppPagesHeader>
      <template slot="head">الفاتورة</template>
      <template slot="desc">فاتورة ما تم شراءه من الكورسات</template>
    </AppPagesHeader>
    <!--  -->
    <section
      role="invoice-content"
      class="bg-alabaster radius-12 padding-y-67 user-select-none"
    >
      <AppInvoicePaper id="paper">
        <AppDataTable />
      </AppInvoicePaper>
      <!-- Print and download invoice -->
      <div class="margin-top-40 row g-0 col col-md-7 col-xl-4 margin-x-auto">
        <div class="col d-flex justify-content-center justify-content-md-end">
          <AppBtn
            style="width: 16.5rem; height: 5.5rem"
            class="bg-voodoo btn-voodoo text-light text-14 radius-18"
            @clicked="print"
            >طباعة</AppBtn
          >
        </div>
        <div class="col d-flex justify-content-center justify-content-md-end">
          <AppBtn
            style="width: 16.5rem; height: 5.5rem"
            class="
              btn-voodoo-outline
              text-voodoo text-14
              radius-18
              margin-x-auto
            "
            @clicked="download"
            >تحميل</AppBtn
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Invoice',
  validate({ params }) {
    // Must be params number not string and params exsist.
    return /^\d+$/.test(params.id) && params.id
  },
  data() {
    return {
      table: {
        head: ['الدورة', 'المدرب', 'العملة', 'السعر الكلي'],
        body: [
          'الفرق بين التايبوجرافي و الكاليجرافي وفن التعريب',
          'Ibtdi.com@ibtdi.com',
          'S.R',
          '50',
        ],
      },
    }
  },
  provide() {
    return {
      table: this.table,
    }
  },
  methods: {
    async print() {
      const el = document.getElementById('paper')
      const output = await this.$html2canvas(el, { type: 'dataURL' })
      //
      setTimeout(this.initPrint(output), 10)
    },
    initPrint(src) {
      const pwa = window.open()
      pwa.document.open()
      pwa.document.write(this.ImagetoPrint(src))
      pwa.document.close()
    },
    ImagetoPrint(source) {
      return (
        '<html><head><scri' +
        'pt>function step1(){\n' +
        "setTimeout('step2()', 10);}\n" +
        'function step2(){window.print();window.close()}\n' +
        '</scri' +
        "pt></head><body onload='step1()'>\n" +
        "<img style='width: 100%; height: 100%; object-fit: cover; max-width: 100%; max-height: 100%' src='" +
        source +
        "' /></body></html>"
      )
    },
    download() {
      // eslint-disable-next-line no-console
      console.log('download')
    },
  },
  head() {
    return {
      title: 'الفاتورة',
    }
  },
}
</script>

<style lang="scss">
.invoice-paper {
  @media print {
    width: 100%;
    background-color: red;
  }
}
</style>
