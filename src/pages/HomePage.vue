<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-card>
        <q-card-section>
          <div class="text-h6">Bienvenue sur votre première page Quasar !</div>
          <div>Cliquer sur le bouton ci-dessous pour afficher un message.</div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Cliquez moi" @click="afficherMessage" color="primary" />
        </q-card-actions>
      </q-card>

      <!-- Message affiché après le clic -->
      <q-banner v-if="messageVisible" dense>
        <template v-slot:avatar>
          <q-icon name="thumb_up" color="green" />
        </template>
        <span>{{ message }}</span>
      </q-banner>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      messageVisible: false,
      message: "Merci d'avoir cliqué !"
    }
  },
  methods: {
    afficherMessage () {
      this.messageVisible = true;
    }
  }
}
</script>

<style scoped>
.text-h6 {
  margin-bottom: 10px;
}
</style>