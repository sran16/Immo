<template>

    <Nav />
    <Home />
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps();
import Nav from '@/components/Landing/Nav.vue';
import Home from '@/components/Landing/Home.vue';

import { h } from 'vue';

</script>