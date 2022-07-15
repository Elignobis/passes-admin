<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 custom-text fw-bold">Player Manager</p>
          <router-link to="/players/add" class="btn custom-bg text-white btn-sm"><i class="fa fa-plus-circle"></i> New</router-link>
        <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facilis minus quibusdam sit possimus laboriosam perspiciatis officia quae animi similique! Ipsum voluptates nostrum minus quis! Qui tempora dolor labore voluptatum.</p>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="col-md-6">
              <input type="text" class="from-control" placeholder="Search Player">
            </div>
            <div class="col-md-4">
              <input type="submit" class="btn custom-bg text-white" value="Search">
            </div>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  </div>
  
  <div v-if="!loading && errorMessage">
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="h3 text-danger fw-bold">{{errorMessage}}</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="container mt-3" v-if="players.length > 0">
    <div class="row">
      <div class="col-md-6" v-for="player of players" :key="player">
        <div class="card my-2 list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img :src="player.img_URL" alt="" class="player-img">
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">Name: <span class="fw-bold">{{ player.name }}</span></li>
                  <li class="list-group-item">Age: <span class="fw-bold">{{ player.age }}</span></li>
                  <li class="list-group-item">Current Club: <span class="fw-bold">{{ player.currrentClub }}</span></li>
                  <li class="list-group-item">National Team: <span class="fw-bold">{{ player.nationalTeam }}</span></li>
                  <li class="list-group-item">Price: <span class="fw-bold">R{{ player.price }}</span></li>
                </ul>
              </div>
              <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                <router-link to="/players/view/:playerId" class="btn btn-warning my-1">
                  <i class="fa fa-eye"></i>
                </router-link>
                <router-link to="/players/edit/:playerId" class="btn btn-primary my-1">
                  <i class="fa fa-pen"></i>
                </router-link>
                <button class="btn btn-danger my-1">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerService from "@/services/PlayerService";

export default {
    name: "PlayerManager",
    data : function () {
      return {
        loading: false,
        players: [{ "id": "1", "img_URL": "https://i.postimg.cc/8PBwf5kL/christiano.jpg", "name": "Cristiano Ronaldo", "age": "37", "gender": "Male", "currrentClub": "Manchester United F.C.", "nationalTeam": "Portugal", "price": "100, 000, 000" },
        { "id": "2", "img_URL": "https://i.postimg.cc/q7JSH4FX/frenkie.jpg", "name": "Frenkie de Jong", "age": "25", "gender": "Male", "currrentClub": "Barcelona", "nationalTeam": "Netherlands", "price": "60, 000, 000" },
        { "id": "3", "img_URL": "https://i.postimg.cc/rw3jQckw/harryM.jpg", "name": "Harry Maguire", "age": "29", "gender": "Male", "currrentClub": "Manchester United F.C.", "nationalTeam": "England", "price": "-2" },
        { "id": "4", "img_URL": "https://i.postimg.cc/vTTxJg7F/lukaku2.jpg", "name": "Romelu Lukaku", "age": "29", "gender": "Male", "currrentClub": "Inter Milan", "nationalTeam": "Belgium", "price": "44, 000, 000" },
        { "id": "5", "img_URL": "https://i.postimg.cc/901570sM/timo.jpg", "name": "Timo Werner", "age": "26", "gender": "Male", "currrentClub": "Chelsea F.C.", "nationalTeam": "Germany", "price": "66, 000, 000" },
        { "id": "6", "img_URL": "https://i.postimg.cc/dQrbCHGC/harryK.jpg", "name": "Harry Kane", "age": "28", "gender": "Male", "currrentClub": "Tottenham Hotspur F.C.", "nationalTeam": "England", "price": "77, 000, 000" },
        { "id": "7", "img_URL": "https://i.postimg.cc/RhZwvbBY/kevin.jpg", "name": "Kevin De Bruyne", "age": "31", "gender": "Male", "currrentClub": "Manchester City F.C.", "nationalTeam": "Belgium", "price": "78, 000, 000" },
        { "id": "8", "img_URL": "https://i.postimg.cc/m2rKnb0Y/vivianne.jpg", "name": "Vivianne Miedema", "age": "25", "gender": "Female", "currrentClub": "Arsenal W.F.C.", "nationalTeam": "Netherlands", "price": "20, 000, 000" },
        { "id": "9", "img_URL": "https://i.postimg.cc/nM8V3C01/marta.jpg", "name": "Marta Vieira da Silva", "age": "36", "gender": "Female", "currrentClub": "Orlando Pride", "nationalTeam": "Brazil", "price": "25, 000, 000" },
        { "id": "10", "img_URL": "https://i.postimg.cc/BQgQTQ22/sam.jpg", "name": "Sam Kerr", "age": "28", "gender": "Female", "currrentClub": "Chelsea W.F.C", "nationalTeam": "Australia", "price": "30, 000, 000" },
        { "id": "11", "img_URL": "https://i.postimg.cc/SsTJfSBZ/maria.jpg", "name": "Maria Leon", "age": "27", "gender": "Female", "currrentClub": "F.C. Barcelona Femeni", "nationalTeam": "Spain", "price": "21, 000, 000" },
        { "id": "12", "img_URL": "https://i.postimg.cc/rFLKGP32/sakina.jpg", "name": "Sakina Karchaoui", "age": "26", "gender": "Female", "currrentClub": "Paris Saint-Germain Féminine", "nationalTeam": "France", "price": "33, 000, 000" }],
        errorMessage: null
      }
    },
    created : async function (){
       try {
        this.loading = true;
        let response = await PlayerService.getAllPlayers();
        this.players = response.data;
        this.loading = false
       }
       catch(error) {
        this.errorMessage - error;
        this.loading = false; 
       }
    },
    methods: {
      
    }
    }

</script>

<style scoped>

</style>>

