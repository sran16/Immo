<template>
    <div class="container-box ">
        <div class="image-container">
            <img src="@/assets/home.png" alt="cta" />
        </div>
        <div class="announcement-container">
            <div class="listing">
                <div class="details">
                    <h2>Château</h2>
                    <ul>
                        <li>Number of rooms: </li>
                        <li>Number of square metres: </li>
                        <li>Status: </li>
                        <li>Price: €</li>
                    </ul>
                    <button @click="">En Savoir Plus</button>
                </div>
            </div>
        </div>
    </div>


</template>

<style>
.container-box {
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: fit-content;
    border: 1px solid #ccc;
    max-width: 80%;
    max-height: fit-content;
    margin: 0 auto;
}

.image-container{
    flex: 1;
   display: flex    ;
   justify-content: end;
}
.image-container img {
    width: 80%;
    object-fit: cover;
}

.listing {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid #ccc;
    padding: 10px;
    width: 25vw;
    height: 100%;
    background-color: #1F2324;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    position: relative;
    right: 25%;
}

.listing img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 20px;
}

.details {
    text-align: center;
    color: white;
    width: 100%;

}

.details ul {
    list-style: none;
    padding: 0;
}

.details li {
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
}

.details button {
    padding: 5px 50px;
    border-radius: 10px;
    background: #FFF;
    color: #AD8C72;
    ;
    border: 1px solid #AD8C72;
    cursor: pointer;
}

.details button:hover {
    background: #AD8C72;
    color: #FFF;
}
</style>