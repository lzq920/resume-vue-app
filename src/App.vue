<template>
  <div class="container">
    <Editor v-model="code" />
    <Markdown :md="code" />
  </div>
</template>

<script setup>
import Editor from './components/Editor.vue';
import Markdown from "./components/Markdown.vue";
import { ref } from 'vue'
const code = ref(":::header \n   header\n:::");
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}
.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
