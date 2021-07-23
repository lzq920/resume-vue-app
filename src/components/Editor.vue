<template>
  <div class="editor" ref="dom"></div>
</template>

<script setup>
import { onMounted, defineProps, defineEmits, ref } from 'vue';
import * as monaco from 'monaco-editor';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
self.MonacoEnvironment = {
  getWorker(workerId, label) {
    return new EditorWorker();
  },
};

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const dom = ref();

let instance;

onMounted(() => {
  const markdownModel = monaco.editor.createModel(
    props.modelValue,
    'markdown',
  );

  instance = monaco.editor.create(dom.value, {
    model: markdownModel,
    automaticLayout: true,
    scrollBeyondLastLine: false,
  });

  instance.onDidChangeModelContent(() => {
    const value = instance.getValue();
    emit('update:modelValue', value);
  });
});
</script>

<style scoped>
.editor {
  height: 100vh;
}
</style>