<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <nav class="navbar">
        <ul class="nav-list">
            <li class="nav-item"><router-link to="/publication">Explore</router-link></li>
            <li class="nav-item"><router-link to="/announcements">List</router-link></li>
        </ul>
        <div class="nav-brand">Prectigia</div>
        <ul class="nav-list">
            <li class="nav-item">
                <router-link to="#contact">Contact
                    <i class="fas fa-envelope"></i>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink
  }
}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    color: #AD8C72;
    padding-left: 3%;
    padding-right: 3%;
}

.nav-list {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.nav-item {
    margin: 0 1rem;
}

.nav-item a {
    color: #AD8C72;
    text-decoration: none;
}

.nav-item a:hover {
    text-decoration: underline;
}

.nav-brand {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>