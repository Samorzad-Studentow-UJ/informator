<template>
  <article class='fill-height'>
    <div id='pdf-page' class='fill-height'></div>
  </article>
</template>

<script>
import PDFObject from 'pdfobject';

export default {
  name: 'PdfView',
  props: {
    url: {
      type: String,
      required: true
    }
  },
  mounted() {
    const options = {
      pdfOpenParams: {
        navpanes: 1,
        toolbar: 1,
        statusbar: 1,
        pagemode: 'none',
        view: 'FitH'
      },
    }
    PDFObject.embed(this.url, '#pdf-page', options)
  }
}
</script>

