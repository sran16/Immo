<template>
<div class="filter-container">
    <div class="filter-bar">
        <div class="filter-item">
            <label for="city">Ville/City</label>
            <input id="city" v-model="selectedCity" type="text" placeholder="Entrez la ville">
        </div>
        <div class="filter-item">
            <label for="propertyType">Type de bien</label>
            <input id="propertyType" v-model="selectedPropertyType" type="text" placeholder="Entrez le type de bien">
        </div>
        <div class="filter-item">
            <label for="equipment">Équipement</label>
            <input id="equipment" v-model="selectedEquipment" type="text" placeholder="Entrez l'équipement">
        </div>
        <button class="search-button" @click="search">
            Rechercher
            <i class="fas fa-search"></i>
        </button>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const selectedCity = ref('');
const selectedPropertyType = ref('');
const selectedEquipment = ref('');

const search = () => {
    console.log('Searching with:', {
        city: selectedCity.value,
        propertyType: selectedPropertyType.value,
        equipment: selectedEquipment.value,
    });
};
</script>

<style>
.filter-container {
    padding: 0 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
}

.filter-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.3); 
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 15vh;
    backdrop-filter: blur(10px); 
}

.filter-item {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    flex: 1;
}

.filter-item label {
    font-size: 12px;
    color: #AD8C72;
    margin-bottom: 5px;
}

.filter-item input {
    padding: 8px;
    border: 1px solid #d3b3b3;
    border-radius: 5px;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    width: 100%;
}

.filter-item input:focus {
    outline: none;
    border-color: #a05b5b;
}

.search-button {
    padding: 10px 15px;
    background-color: #AD8C72;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
}

.search-button i {
    margin-left: 5px;
}

.search-button:hover {
    background-color: #a05b5b;
}
</style>
