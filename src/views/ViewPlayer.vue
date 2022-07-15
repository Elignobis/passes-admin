<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 custom-text fw-bold">View Player</p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          magnam nesciunt quidem sequi perspiciatis voluptatum impedit. Officiis
          odit, iure minus exercitationem quod mollitia ut est.
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img
          src="https://i.postimg.cc/8PBwf5kL/christiano.jpg"
          alt=""
          class="player-img-big"
        />
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">Name: <span class="fw-bold">Cristiano Ronaldo</span></li>
          <li class="list-group-item">Age: <span class="fw-bold"></span></li>
          <li class="list-group-item">
            Current Club: <span class="fw-bold"></span>
          </li>
          <li class="list-group-item">
            National Team: <span class="fw-bold"></span>
          </li>
          <li class="list-group-item">Price: <span class="fw-bold"></span></li>
        </ul>
      </div>
    </div>
  <div class="row mt-3">
    <div class="col">
        <router-link to="/" class="btn custom-bg text-white"><i class="fa fa-arrow-alt-circle-left"></i>Back</router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "ViewPlayer",
};
</script>

<style scoped></style>
>
