<template>
  <div class="container">
    <div class="row">
        <div class="col">
            <p class="h3 custom-text fw-bold">Add Player</p>
            <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat saepe ducimus incidunt eum, magnam veniam beatae blanditiis dicta quod? Harum doloremque in corporis expedita hic eius aut earum iusto natus.</p>
        </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
        <div class="col-md-4">
            <form @submit.prevent="submitCreate()">
                <div class="mb-2">
                    <input v-model="player.img_URL" type="text" class="form-control" placeholder="Image URL">
                </div>
                <div class="mb-2">
                    <input v-model="player.name"  type="text" class="form-control" placeholder="Name">
                </div>
                <div class="mb-2">
                    <input v-model="player.age"  type="text" class="form-control" placeholder="Age">
                </div>
                <div class="mb-2">
                    <input v-model="player.currrentClub"  type="text" class="form-control" placeholder="Current Team">
                </div>
                <div class="mb-2">
                    <input v-model="player.nationalTeam"  type="text" class="form-control" placeholder="National Team">
                </div>
                <div class="mb-2">
                    <input v-model="player.price"  type="number" class="form-control" placeholder="Price">
                </div>
                <div class="mb-2">
                    <input  type="submit" class="btn custom-bg text-white" value="Create">
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import PlayerService from "@/services/PlayerService";

export default {
    name: "AddPlayer",
    data: function () {
        return {
            player : {
                id: '',
                img_URL: '',
                name: '',
                age: '',
                gender: '',
                currrentClub: '',
                nationalTeam: '',
                price: ''
            }
        }
    },
   methods : {
    submitCreate: async function () {
        try {
            let response = await PlayerService.createPlayer(this.player);
            if (response){
                return this.$router.push('/')
            }
            else {
                return this.$router.push('/players/add')
            }
        }
        catch (error) {
            console.log(error)
        }
    }
   }
    
}
</script>

<style scoped>

</style>>