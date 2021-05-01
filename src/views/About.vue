<template>
  <hr />
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Peregrine</h3>
        <p class="card-text">
          Peregrine (aka Peregrine PH) is a 4 piece indie-rock / indie-pop band
          based in Zamboanga City, Philippines. Founded by two high school
          friends Janssen Bailio (Vocals/guitars) and Jaiton Pagayonan
          (Vocal/lead guitars) then later on recruited Ryan Covarrubias
          (Bass/backing vocals) and Juan Ibarra Vargas (Drums) to complete the
          band’s roster.
        </p>
      </div>
      <img src="./julugs.jpg" class="card-img-top" alt="..." />
    </div>
    <hr>
    <div class="card">
      <img src="./performance3.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
          Peregrine is heavily influenced by bands like Hippo Campus, Arctic
          Monkeys, Emarosa, The 1975, The Beatles, Pierce The Veil and etc.
          which gives them their distinct sound of dance-able, heavy-yet-groovy
          guitar riffs/solos, heart-piercing songwriting and also the kick-ass
          visual aesthetics.
        </p>
      </div>
    </div>
    <hr>
    <div class="card">
      <div class="card-body">
        <p class="card-text">
          The band made their debut on Vans Musicians Wanted 2019 placing 3rd
          out of hundreds of entries and six short listed bands with their
          second single “Coffee In The Evening (Adrienne)” as their entry
          piece..
        </p>
      </div>
      <img src="./performance2.jpg" class="card-img-top" alt="..." />
    </div>
    <hr>
    <router-link to="/">
    <a target="_blank" href="https://melt-records.com/"><img class="melt" src="./peregrine_logo_white.png" alt=""></a>
    </router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a target="_blank" href="https://melt-records.com/"><img class="melt" src="./melt.png" alt=""></a>
  </div>
  <hr />
</template>

<script>
import Welcome from "../components/welcome/Welcome.vue";
export default {
  components: {
    Welcome,
  },
};
</script>

<style scoped>
.card {
  background: none;
}
h3 {
  padding-bottom: 20px;
  color: white;
}
p:hover {
  transition: 0.5s;
}
p {
  line-height: 2;
  font-size: 1.2rem;
  color: white;
}
.melt {
  width: 20%;
}
</style>