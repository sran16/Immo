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

        <section v-if="!isLoading && announcement" class="details-section">
            <!-- <h2>Détails de l'annonce</h2> -->
            <p><i class="fas fa-door-open"></i> Nombre de pièces: {{ announcement.nombre_pieces }}</p>
            <p><i class="fas fa-bed"></i> Nombre de chambres: {{ announcement.nombre_chambres }}</p>
            <p><i class="fas fa-bath"></i> Nombre de salles de bain: {{ announcement.nombre_salles_bain }}</p>
            <p><i class="fas fa-couch"></i> Meublé: {{ announcement.meuble ? 'Oui' : 'Non' }}</p>
        </section>

        <section v-if="!isLoading && nearbyCommerces.length > 0" class="commerces-section">
            <h2>Commerces à proximité</h2>
            <div v-for="commerce in nearbyCommerces" :key="commerce.id" class="commerce-item">
                <p>{{ commerce.nom }}</p>
                <p>Distance: {{ commerce.distance }} km</p>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data() {
        return {
            announcement: null,
            nearbyCommerces: [],
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


                if (this.announcement && this.announcement.geo) {
                    await this.fetchNearbyCommerces(this.announcement.geo.lat, this.announcement.geo.lon);
                }
            } catch (error) {
                this.error = "Impossible de charger les détails de l'annonce.";
                console.error('Erreur lors de la récupération des détails de l\'annonce:', error);
            } finally {
                this.isLoading = false;
            }
        },

        /**
         * Fetches the nearby commerces based on the given latitude and longitude.
         * @param {number} lat - The latitude of the announcement location.
         * @param {number} lon - The longitude of the announcement location.
         */
        async fetchNearbyCommerces(lat, lon) {
            try {
                const response = await axios.get(`http://localhost:3000/v1/commerces/nearby?lat=${lat}&lon=${lon}`);
                this.nearbyCommerces = response.data;
            } catch (error) {
                console.error('Erreur lors de la récupération des commerces à proximité:', error);
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

.details-section {
    padding: 40px;
    margin: 50px;
    border: 1px solid #FFF;
    width: fit-content;
    color: #FEFEFE;
    border-radius: 10px;
    margin-top: 20px;
}

/* .commerces-section {
    padding: 40px;
    text-align: center;
    background-color: #f4f4f4;
    border-radius: 10px;
    margin-top: 20px;
}

.commerces-section h2 {
    color: #333;
    font-family: "Abhaya Libre";
    font-size: 32px;
    text-align: center;
    margin-bottom: 20px;
}

.commerce-item {
    background-color: style
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.commerce-item p {
    font-family: "Abhaya Libre";
    font-size: 18px;
    margin: 5px 0;
} */
</style>
