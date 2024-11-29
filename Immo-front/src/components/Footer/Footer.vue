<template>
    <footer class="footer">
        <p>Prestige Immobilier</p>
        <div class="footer-links">
            <a href="#">Ajouter une annonce</a>
            <a href="#">Consulter nos annonces</a>
            <a href="#">Contactez-nous</a>
        </div>
        <div class="social-media">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
};
</script>

<style>
.footer {
    border-top: 3px solid #AD8C72;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    color: #fff;
    justify-content: space-around;
    align-items: center;
}

.footer-links {
    display: flex;
    flex-direction: column;
}

.footer-links a {
    color: #aaa;
    margin: 0 1rem;
    text-decoration: none;
}

.footer-links a:hover {
    color: #fff;
}


.social-media i {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    cursor: pointer;
}
</style>