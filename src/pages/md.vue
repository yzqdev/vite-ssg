<template>
 <md-editor v-model="text" preview-only />

</template>

<script setup lang="ts">

import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
 let md=import.meta.glob('./a.txt',{eager:true,as:'raw'})
 console.log(md);
let modules= md['./a.txt'] 
let text=$ref(modules)
</script>