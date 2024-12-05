<template>
    <q-page class="q-pa-md">
      <!-- Formulaire pour ajouter des tâches -->
      <TaskForm @add-task="addTask" />
  
      <!-- Liste des tâches -->
      <TaskList :tasks="tasks" @delete-task="removeTask" />
    </q-page>
  </template>
  
  <script>
  import TaskForm from "../components/TaskForm.vue";
  import TaskList from "../components/TaskList.vue";
  
  export default {
    name: "TaskPage",
    components: {
      TaskForm,
      TaskList,
    },
    data() {
      return {
        tasks: [], // État des tâches
      };
    },
    methods: {
      // Ajouter une tâche
      addTask(task) {
        this.tasks.push({ text: task, completed: false });
      },
      // Supprimer une tâche
      removeTask(index) {
        this.tasks.splice(index, 1);
      },
    },
    watch: {
      // Surveillance des changements dans 'tasks' pour la persistance
      tasks: {
        handler(newTasks) {
          localStorage.setItem("tasks", JSON.stringify(newTasks));
        },
        deep: true,
      },
    },
    mounted() {
      // Récupération des tâches depuis le LocalStorage au montage du composant
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
    },
  };
  </script>
  