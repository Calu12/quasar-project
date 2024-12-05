<template>
    <q-layout>
        <q-header reveal elevated class="bg-light-green-7">
            <q-toolbar>
                <q-toolbar-title>Header</q-toolbar-title>
                <q-btn @click="$router.replace('/')" icon-right="home"></q-btn>
                <q-btn @click="$router.replace('/todo')" icon-right="list"></q-btn>
                <q-btn @click="$router.replace('/test')" >Test</q-btn>
            </q-toolbar>
        </q-header>
        <q-page-container>
            <router-view />
        </q-page-container>
        <q-footer reveal elevated class="bg-light-green-7">
            <q-toolbar>
                <q-toolbar-title>Footer</q-toolbar-title>
            </q-toolbar>
        </q-footer>
    </q-layout>
</template>

<script>
    export default {
        name: "CustomLayout"
    }
</script>



