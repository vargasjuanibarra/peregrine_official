<template>
  <!-- <div v-html="scripts"></div> -->
  <div class="container">
    <div class="card" style="width: 100%">
      <img src="./t.jpg" class="card-img-top" alt="..." />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // scripts:
        // "<div id='my-store-13580081'></div><div><script type='text/javascript' data-cfasync='false' src='https://app.ecwid.com/script.js?13580081' charset='utf-8'><\/script><script type='text/javascript'> xProductBrowser('categoriesPerRow=3','views=grid(20,3) list(60) table(60)','categoryView=grid','searchView=list','id=my-store-13580081');<\/script></div>",
    };
  },
  mounted() {
    this.scripts;
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>