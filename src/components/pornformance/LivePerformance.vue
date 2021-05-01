<template>
  <div class="live-performances">
    <div class="col-sm-6 col-md-4">
      <div class="card" style="width: 20rem">
        <iframe
          :src="performance.link"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="card-body">
          <p class="card-text">
            {{ performance.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["performance"],
};
</script>

<style scoped>
.live-performances {
  padding: 10px;
  margin: 0 auto;
}
.card {
  transition: 0.3s;
  background-color: rgba(255, 255, 255, 0.336);
}
p {
  color: black;
}
.card:hover {
  background-color: rgb(255, 255, 255);
  transition: 0.3s;
}

</style>