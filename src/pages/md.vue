<template>
 <md-editor v-model="text" preview-only />

</template>

<script setup>
 
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
let modules=` #  发发发
`
let text=$ref(modules)
</script>