<template>
    <div class="container">
        <div class="relative">
            <div class="image-container">
                <img src="@/assets/housing-.png" alt="luxury house">
            </div>
            <div class="title">
                All types of luxury properties
            </div>
        </div>
        <div class="announcement-container">
            <div class="announcement-card">
                <img src="@/assets/home.png" alt="luxury house">
                <div class="announcement-text" @click="navigateToPublication">
                    Add an announcement
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
            <div class="announcement-card">
                <img src="@/assets/home.png" alt="luxury house">
                <div class="announcement-text" @click="navigateToAllAnnonces">
                    View announcements
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
    </div>

</template>
<script>

export default {
    methods: {
        navigateToPublication() {
            this.$router.push('/publication');
        },
        navigateToAllAnnonces() {
            this.$router.push('/announcements');
        }
    }
}


</script>

<style scoped>
.container {
    padding: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: fit-content;
}

.image-container,
.announcement-container,
.title {
    flex: 1;
    margin: 10px;
}

.image-container img {
    width: 80%;
    height: 80%;
    object-fit: cover;
}

.announcement-container {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.announcement-card {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    padding: 10px;
    border-radius: 20px;
    background: var(--f-1-eee-9, #F1EEE9);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    width: 80%;
    height: fit-content;

}

.announcement-card img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 10px;
}

.announcement-text {
    display: flex;
    flex: 1;
    align-content: space-between;
    flex-wrap: nowrap;
    justify-content: space-around;
}

.relative {
    position: relative;
}

.title {
    position: absolute;
    bottom: 2%;
    right: -62%;
    z-index: 999999999;
    white-space: nowrap;
    color: var(--white, #FEFEFE);
    text-align: center;
    font-family: "Abhaya Libre";
    font-size: 57.1px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>