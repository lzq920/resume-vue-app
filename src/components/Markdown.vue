<template>
    <div class="md" v-html="htmlResult"></div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import md from "../plugins/markdown"
const props = defineProps({
    md: String
})
const htmlResult = computed(() => {
    return md.render(props.md)
})
</script>

<style scoped>
.md {
    height: 100vh;
}
</style>