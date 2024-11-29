<template>
    <section>
        <div class="white-sec">
            <Filter @search="performSearch" />
        </div>
    </section>
    <div>
        <h1>Résultats de la recherche</h1>
        <div v-if="announcements.length" class="search-results">
            <Box v-for="announcement in announcements" :key="announcement.id" :announcement="announcement" />
        </div>
        <div v-else>
            <p>Aucun résultat trouvé.</p>
        </div>
    </div>
</template>

<script setup>
import Filter from '@/components/Landing/Filter.vue';
import Box from '@/components/Landing/Box.vue';
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const announcements = ref([]);
const route = useRoute();
const router = useRouter();

const fetchData = async (params) => {
    try {
        const response = await axios.get('http://localhost:3000/v1/annonce/search', { params });
        announcements.value = response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des annonces:', error);
    }
};

onMounted(() => {
    fetchData(route.query);
});

watch(() => route.query, (newQuery) => {
    fetchData(newQuery);
});

const performSearch = (searchParams) => {
    console.log('Recherche effectuée avec :', searchParams);
    router.push({ path: '/search', query: searchParams });
};
</script>

<style scoped>


.white-sec {
    height: 25vh;
    border-top: 1px solid #AD8C72;
    border-bottom: 3px solid #AD8C72;
    background: #F1EEE9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
}




</style>
