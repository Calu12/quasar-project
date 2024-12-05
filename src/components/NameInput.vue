<template>
    <q-card class="q-ma-md">
      <q-card-section>
        <q-input
          filled
          label="Nom"
          v-model="inputValue"
          @input="onInput"
          placeholder="Entrez un nom"
        />
      </q-card-section>
    </q-card>
  </template>
  
  <script>

  export default {
    name: "NameInput",
    data() {
      return {
        inputValue: "",
      };
    },
    methods: {
      // Émet un événement personnalisé
      onInput() {
        console.log("Nouveau nom :", this.inputValue);
        this.$emit("name-updated", this.inputValue);
      },
      // Réinitialise le champ de saisie
      reset() {
        this.inputValue = "";
        this.$emit("name-updated", "");
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  