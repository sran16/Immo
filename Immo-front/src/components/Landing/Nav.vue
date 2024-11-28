<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <nav class="navbar">
        <ul class="nav-list">
            <li class="nav-item"><a href="#explore">Explore</a></li>
            <li class="nav-item"><a href="#List">List</a></li>
        </ul>
        <div class="nav-brand">Prectigia</div>
        <ul class="nav-list">
            <li class="nav-item">
                <a href="#contact">Contact
                    <i class="fas fa-envelope"></i>
                </a>
            </li>
        </ul>
    </nav>
</template>

<style>
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