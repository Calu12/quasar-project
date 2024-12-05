<template>
    <div class="q-mb-md">
      <q-input v-model="newTask" label="Nouvelle tâche" outlined />
      <q-btn color="primary" label="Ajouter" @click="submitTask" class="q-ml-sm" />
    </div>
  </template>
  
  <script>
  export default {
    name: "TaskForm",
    data() {
      return {
        newTask: "", // Champ pour la nouvelle tâche
      };
    },
    methods: {
      // Méthode pour soumettre une tâche
      submitTask() {
        if (this.newTask.trim() !== "") {
          this.$emit("add-task", this.newTask); // Envoie la nouvelle tâche au parent
          this.newTask = ""; // Réinitialise le champ après ajout
        }
      },
    },
  };
  </script>
  