<template>
    <div>
        <p v-if="isLoading">Chargement en cours...</p>

        <p v-if="error">{{ error }}</p>

        <section v-if="!isLoading && announcement" class="hero-section"
            :style="{ backgroundImage: 'url(' + announcement.img_bien + ')' }">
            <div class="hero-content">
                <h1>{{ announcement.titre }}</h1>
            </div>
        </section>

        <section v-if="!isLoading && announcement && announcement.description" class="description-section">
            <h2>Description</h2>
            <p>{{ announcement.description }}</p>
        </section>
    </div>
</template>



<script>
import axios from 'axios';

export default {
    data() {
        return {
            announcement: null,
            isLoading: true,
            error: null
        };
    },
    mounted() {
        this.fetchAnnouncementDetail();
    },
    methods: {
        async fetchAnnouncementDetail() {
            try {
                const response = await axios.get(`http://localhost:3000/v1/annonce/announcements/${this.$route.params.id}`);
                this.announcement = response.data;
            } catch (error) {
                this.error = "Impossible de charger les détails de l'annonce.";
                console.error('Erreur lors de la récupération des détails de l\'annonce:', error);
            } finally {
                this.isLoading = false;
            }
        }
    }
};


</script>

<style scoped>
.hero-section {
    height: 400px;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
}

.hero-content h1 {
    font-size: 50px;
    margin: 0;
    align-items: center;
    color: rgba(254, 254, 254, 0.75);
    text-align: center;
    font-family: Merriweather;
}


.description-section {
    padding: 40px;
    text-align: center;
    border-radius: 10px;
    border: 3px solid #FFF;
    width: fit-content;
    margin: 50px;
    margin-top: 20px;


}

.description-section h2 {
    color: #FFF;
    font-family: "Abhaya Libre";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-bottom: 20px;
}

.description-section p {
    color: #FEFEFE;
    font-family: "Abhaya Libre";
    font-size: 18px;
    font-style: normal;
    text-align: center;
    margin: 0;
}
</style>
