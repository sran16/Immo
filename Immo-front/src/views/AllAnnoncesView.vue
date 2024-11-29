<template>
    <div class="all-annonces">
        <h1>Toutes les annonces</h1>
        <div class="annonces-grid">
            <Box v-for="annonce in annonces" :key="annonce.id" :announcement="annonce"></Box>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Box from "@/components/Landing/Box.vue";

export default {
    name: "AllAnnonces",
    components: {
        Box,
    },
    data() {
        return {
            annonces: [], 
        };
    },
    mounted() {
        this.fetchAllAnnonces();
    },
    methods: {
        async fetchAllAnnonces() {
            try {
                const response = await axios.get("http://localhost:3000/v1/annonce/announcements");
                this.annonces = response.data; 
            } catch (error) {
                console.error("Erreur lors de la récupération des annonces :", error);
            }
        },
    },
};
</script>


<style scoped>
.all-annonces {
    padding: 20px;
    background-color: #1f2324;
    color: #fff;
}

.all-annonces h1 {
    text-align: center;
    margin-bottom: 20px;
}

.annonces-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}
</style>
