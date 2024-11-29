<template>
    <div class="container-pub">
        <Descriptive />
    </div>
    
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps();

import Descriptive from '@/components/Publication/Descriptive.vue';
</script>

<style>
.container-pub {
    text-align: center;
}
</style>
