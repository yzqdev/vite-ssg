<script setup>
    import { h, ref } from  'vue'
    import CssDemo from './CssDemo.vue'
    let cssList= ref([
{'box-shadow': `red 10px 5px 5px `},
        {'box-shadow': `teal 60px -16px`},
        {'box-shadow': `rgba(0, 0, 255, .2) 12px 12px 2px 1px`},
  {'box-shadow': `rgba(149, 157, 165, 0.2) 0px 8px 24px` },
  {'box-shadow': `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`},
  {'box-shadow': `rgba(0, 0, 0, 0.25) 0px 54px 55px,
   rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
   rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`},
  {'box-shadow': `rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px`},
  {'box-shadow': `rgb(38, 57, 77) 0px 20px 30px -10px`},
])
 
import { useHead } from '@vueuse/head'

 
 
    useHead({
      title: 'Hello',
      meta: [
        {
          name: 'description',
          content: 'Website description',
        },
      ],
      style: [
        {
          children: 'body {color: #567839}',
        },
      ],
    })
  
 
</script>

<template>
<CssDemo :css-list='cssList' />
  <p>Hello I am B</p>
  <img src="../assets/test.jpg" alt="">
</template>
