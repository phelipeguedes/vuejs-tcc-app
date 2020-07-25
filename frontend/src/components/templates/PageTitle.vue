<template>
    <div class="page-title">
        <h2><i v-if="icon" :class="icon"></i>{{ main }}</h2>
        <h3>{{ subTitle }}</h3>
        <hr>
    </div>
</template>

<script>
    export default {
        name: 'PageTitle',
        props: ['icon', 'main', 'subTitle']
    }
</script>
 
 <style>
     .page-title h1 {
         margin: 0px;
     }

     .page-title h2 {
         color: #777;
         margin-top: 5px;
         font-size: 1.3rem;
     }
 </style> 