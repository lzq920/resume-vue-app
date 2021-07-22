<template>
    <div class="md" v-html="htmlResult"></div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import marked from 'marked'
const props = defineProps({
    md: String
})
const htmlResult = computed(() => {
    return marked(props.md)
})
</script>

<style scoped>
.md {
    height: 100vh;
}
</style>