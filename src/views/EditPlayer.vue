<template>
  <div class="container mt-3">
    <div class="row">
        <div class="col">
            <p class="h3 custom-text fw-bold">Edit Player</p>
            <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aperiam amet id. At dolores voluptatem, fugiat nesciunt illo amet mollitia.</p>
        </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
        <div class="col-md-4">
            <form>
                <div class="mb-2">
                    <input type="text" class="form-control" placeholder="Image URL">
                </div>
                <div class="mb-2">
                    <input type="text" class="form-control" placeholder="Name">
                </div>
                <div class="mb-2">
                    <input type="text" class="form-control" placeholder="Age">
                </div>
                <div class="mb-2">
                    <input type="text" class="form-control" placeholder="Current Team">
                </div>
                <div class="mb-2">
                    <input type="text" class="form-control" placeholder="National Team">
                </div>
                <div class="mb-2">
                    <input type="number" class="form-control" placeholder="Price">
                </div>
                <div class="mb-2">
                    <input type="submit" class="btn custom-bg text-white" value="Update">
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "EditPlayer"
}
</script>

<style scoped>

</style>>