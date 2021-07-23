<template>
    <div class="md" v-html="htmlResult"></div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import MarkdownIt from "markdown-it"
import MarkdownItContainer from "markdown-it-container"
const md = new MarkdownIt();
md.use(MarkdownItContainer, 'spoiler', {
    validate: function (params) {
        return params.trim().match(/^spoiler\s+(.*)$/);
    },
    render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
        if (tokens[idx].nesting === 1) {
            return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
        } else {
            return '</details>\n';
        }
    }
})
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