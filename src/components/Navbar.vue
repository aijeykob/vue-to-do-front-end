<template>
  <w-toolbar bg-color="blue-light5" color="blue-dark3" height="5em" class="py0">
    <w-button icon="mdi mdi-home" text lg class="ml3"></w-button>
    <div class="spacer"></div>
    <w-flex align-center justify-end>
      <w-button @click="login.show = true" class="my6">Log in</w-button>
      <w-divider class="mx6" vertical color="pink">OR</w-divider>
      <w-button class="my6">Sign in</w-button>
    </w-flex>
    <w-dialog
        v-model="login.show"
        :width="550">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.<br /><br />
      Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
      dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
      aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.

      <template #actions>
        <div class="spacer" />
        <w-button
            class="mr2"
            @click="login.show = false"
            bg-color="error">
          I disagree
        </w-button>
        <w-button
            @click="login.show = false"
            bg-color="success">
          I agree
        </w-button>
      </template>
    </w-dialog>
  </w-toolbar>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return {
      login:{show:false}
    }
  },
}
</script>

<style scoped>

</style>