<template>
    <q-list bordered separator>
      <q-item v-for="(task, index) in tasks" :key="index" clickable>
        <q-item-section>
          <q-checkbox v-model="task.completed" />
        </q-item-section>
        <q-item-section>{{ task.text }}</q-item-section>
        <q-item-section side>
          <q-btn flat round icon="delete" color="negative" @click="deleteTask(index)" />
        </q-item-section>
      </q-item>
    </q-list>
  </template>
  
  <script>
  export default {
    name: "TaskList",
    props: {
      tasks: {
        type: Array,
        required: true,
      },
    },
    methods: {
      // Méthode pour signaler la suppression d'une tâche
      deleteTask(index) {
        this.$emit("delete-task", index); // Émet un événement au parent avec l'index
      },
    },
  };
  </script>
  