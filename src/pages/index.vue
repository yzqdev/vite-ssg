<template>
这是index

<p> <a href="/passage">查看passage</a></p>
<p> <a href="/ps"> 查看markdown</a></p>
<p> <a href="/md"> 查看md-editor-v3</a></p>
</template>

<script setup lang="ts"></script>

<style lang="scss">

p{
    padding:0.5rem 1rem;
    a{
    text-decoration: none;
    transition: all 0.3s;
    &:hover{
        color:cyan;
    }
    }
}
</style>