<script>
import Filter from '@/components/Landing/Filter.vue';
import Cta from '@/components/Landing/Cta.vue';
import Box from '@/components/Landing/Box.vue';

export default {
    components: {
        Filter,
        Cta,
        Box
    }
};
</script>
<template>
    <div class="home-page">
        <div class="home-container">
            <div class="home-content">
                <h1>P</h1>
                <img src="@/assets/home.png" class="home" />
                <img src="@/assets/grouparrow.png" class="arrow" />
                <p class="bottom-paragraph">Empower your expertise with the timeless elegance of our properties</p>
            </div>
        </div>

    </div>
    <section>
        <div class="white-sec">
            <Filter />

        </div>
    </section>
    <section>
        <Cta />
    </section>
    <!-- <section>
        <Box />
    </section> -->
</template>

<style scoped>
.home-page,
.home-container,
.home-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
}

.home {
    max-width: 100%;
    z-index: 0;
}


h1 {
    position: absolute;
    top: 10%;
    z-index: 1;
    color: #FFF;
    font-family: "Abhaya Libre";
    font-size: 146.278px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.arrow {
    position: absolute;
    z-index: 1;
    left: 95%;
}

.bottom-paragraph {
    position: absolute;
    bottom: 10%;
    z-index: 1;
    color: var(--white, #FEFEFE);
    text-align: center;
    font-family: "Abhaya Libre";
    font-size: 35.107px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 505px;
    height: 101px;
    flex-shrink: 0;
}

.white-sec {
    height: 30vh;
    border-top: 3px solid #AD8C72;
    border-bottom: 3px solid #AD8C72;
    background: #F1EEE9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
}
</style>
