<template>
  <div class="banner">
    <div class="col-12">
      <div class="card text-white">
        <a target="_blank" :href="banner.url">
          <img :src="banner.img" class="card-img" alt="..." />
        </a>
      </div>
    </div>
  </div>

  <!-- <div class="col-12">
      <div class="card">
      <a target="_blank" href="https://www.youtube.com/watch?v=zkPyIhXyVkc&list=PLH_XzFX7rAUKZFS3qM6aGh5sxMAceM8JE"><img src="./images/cite.jpg" class="card-img-top" alt="..." /></a>
      <a target="_blank" href="https://www.youtube.com/watch?v=dxJ20KN9t1g&list=PLH_XzFX7rAUKZFS3qM6aGh5sxMAceM8JE"><img src="./images/cumming.jpg" class="card-img-top" alt="..." /></a>
      <a target="_blank" href="https://www.youtube.com/watch?v=5jpn8OlkYYM&list=PLH_XzFX7rAUKZFS3qM6aGh5sxMAceM8JE"><img src="./images/ftftft.jpg" class="card-img-top" alt="..." /></a>
      <a target="_blank" href="https://www.youtube.com/watch?v=bNVgToMWmUw&list=PLH_XzFX7rAUKZFS3qM6aGh5sxMAceM8JE"><img src="./images/iwontstay.jpg" class="card-img-top" alt="..." /></a>
    </div>
    </div> -->
</template>

<script>
export default {
  props: ["banner"],
};
</script>

<style scoped>
.container {
  margin: 0 auto;
}
img {
  width: 100%;
  margin-bottom: 10px;
  transition: 0.3s;
}
img:hover {
  opacity: 0.6;
  transition: 0.3s;
}
.card {
  background: none;
  width: 100%;
}
</style>