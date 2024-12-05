<template>
    <q-page padding>
      <div class="q-pa-md">
        <q-card class="q-ma-md">
          <q-card-section>
            <h2>Formulaire Utilisateur</h2>
          </q-card-section>
          <q-card-section>
            <!-- Utilisation du composant enfant -->
            <name-input @name-updated="updateName" ref="nameInput" />
          </q-card-section>
          <q-card-actions align="right">
            <!-- Boutons d'action -->
            <q-btn label="Sauvegarder" color="primary" @click="save" />
            <q-btn label="Réinitialiser" color="negative" flat @click="reset" />
          </q-card-actions>
        </q-card>
        <q-card class="q-ma-md">
          <q-card-section>
            <h3>Nom actuel : {{ name }}</h3>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
    import NameInput from "src/components/NameInput.vue";

  export default {
    name: "UserForm",
    components: {
        NameInput,
    },
    data() {
      return {
        name: "",
      };
    },
    methods: {
      // Méthode appelée par l'événement personnalisé
      updateName(newName) {
        this.name = newName;
      },
      // Sauvegarde : affichage du nom dans la console
      save() {
        console.log("Nom sauvegardé :", this.name);
      },
      // Réinitialisation
      reset() {
        this.name = "";
        this.$refs.nameInput.reset();
      },
    },
  };
  </script>
  
 
  