<template>
  <div class="main-container">
    <h1>
      <Strong class="strongh1">Creation</Strong> <br />
      of an announcement
    </h1>
    <div class="form-container">
      <form @submit.prevent="submitForm">

        <div v-if="step === 1">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.titre" />
            </div>
            <div class="form-group">
              <label for="price">Price</label>
              <input type="number" id="price" v-model="form.prix" />
            </div>
          </div>

          <div class="form-group">
            <label for="description">Description</label>
            <textarea id="description" v-model="form.description"></textarea>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="type">Type de Bien</label>
              <input type="number" id="type" v-model="form.type_bienId" />
            </div>
            <div class="form-group">
              <label for="surface">Surface</label>
              <input type="number" id="surface" v-model="form.surface" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="city">Ville</label>
              <input type="number" id="city" v-model="form.villeId" />
            </div>
            <div class="form-group">
              <label for="nom_vendeur">Vendeur </label>
              <input type="text" id="nom_vendeur" v-model="form.nom_vendeur" />
            </div>
          </div>
          <div class="form-actions">
            <button type="button" @click="nextStep">Suivant</button>
          </div>

        </div>

        <!-- 2 -->
        <div v-if="step === 2">
          <div class="form-row">
            <div class="form-group">
              <label for="nombre_pieces">Nombres de Pièces</label>
              <input type="number" id="nombre_pieces" v-model="form.nombre_pieces" />
            </div>
            <div class="form-group">
              <label for="nombre_chambre">Nombres de Chambres</label>
              <input type="number" id="nombre_chambres" v-model="form.nombre_chambres" />

            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="nombre_salles_bain">Nombres de salle de bain</label>
              <input type="number" id="nombre_salles_bain" v-model="form.nombre_salles_bain" />
            </div>
            <div class="form-group">
              <label for="meuble">Meubles</label>
              <input type="text" id="meuble" v-model="form.meuble" />
            </div>
          </div>
          <div class="form-actions">
            <button type="submit">Deposer L’annonce </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

const baseURL = 'http://localhost:3000';

export default {
  data() {
    return {
      step: 1,
      form: {
        titre: "",
        prix: null,
        description: "",
        type_bienId: null,
        nombre_pieces: null,
        nombre_chambres: null,
        nombre_salles_bain: null,
        surface: null,
        meuble: "",
        villeId: null,
        nom_vendeur: "",
        img_bien: null
      },
    };
  },
  methods: {
    async submitForm() {
      if (this.validateStep()) {
        try {
          if (this.form.prix === null || this.form.prix === "") {
            this.form.prix = 0; 
          } else {
            this.form.prix = Number(this.form.prix);
          }
          if (this.form.date_publication) {
            const date = new Date(this.form.date_publication);
            const formattedDate = date.toISOString().split('T')[0];
            this.form.date_publication = formattedDate;
          }
          if (!this.form.img_bien || this.form.img_bien.trim() === "") {
            this.form.img_bien = "default-image-path.jpg";
          }

          console.log("Submitting form:", this.form);
          const response = await fetch(`${baseURL}/v1/annonce/announcements`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.form),
          });

          if (response.ok) {
            alert("Publication créée avec succès !");
            this.resetForm();
          } else {
            const errorData = await response.json();
            console.error("Erreur:", response.status, errorData);
            alert(`Erreur: ${errorData.message}`);
          }
        } catch (error) {
          console.error(error);
          alert('Une erreur est survenue lors de la création de la publication.');
        }
        console.log("Formulaire envoyé :", this.form);

      }
    },
    resetForm() {
      this.step = 1;
      this.form = {
        titre: "",
        prix: null,
        description: "",
        type_bienId: null,
        nombre_pieces: null,
        nombre_chambres: null,
        nombre_salles_bain: null,
        surface: null,
        meuble: "",
        villeId: null,
        nom_vendeur: "",
        img_bien: null
      };
    },

    validateStep() {
      const errors = [];

      if (this.step === 1) {
        if (!this.form.titre.trim()) errors.push("Le titre est requis.");
        if (this.form.prix <= 0) errors.push("Le prix doit être supérieur à 0.");
        if (!this.form.description.trim()) errors.push("La description est requise.");
        if (!this.form.type_bienId) errors.push("Le type de bien est requis.");
        if (this.form.surface <= 0) errors.push("La surface doit être supérieure à 0.");
        if (!this.form.villeId) errors.push("La ville est requise.");
      } else if (this.step === 2) {
        if (this.form.nombre_pieces <= 0) errors.push("Le nombre de pièces est requis.");
        if (this.form.nombre_chambres < 0) errors.push("Le nombre de chambres est requis.");
        if (this.form.nombre_salles_bain < 0) errors.push("Le nombre de salles de bain est requis.");
        if (!this.form.meuble.trim()) errors.push("Le meuble est requis.");
      }

      if (errors.length > 0) {
        alert(
          "Veuillez corriger les erreurs suivantes :\n\n" + errors.join("\n")
        );
        return false;
      }

      return true;
    },
    nextStep() {
      if (this.validateStep()) {
        this.step++;
      }
    }


  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12%;
}

h1 {
  padding: 0px 10px;
  margin: 10px 0;
  color: rgba(255, 255, 255, 0.29);
  font-family: 'Abhaya Libre';
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-size: 50px;
}

.form-container {
  padding: 30px;
  border-radius: 10px;
  width: 450px;
  margin: auto;
  font-family: Arial, sans-serif;
  margin: 30px auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #aaa;
  text-align: start;
}

input,
textarea,
button {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  font-size: 14px;
}

input,
textarea {
  background-color: transparent;
  color: #fff;
  outline: none;
  border-bottom: 1px solid #fff;
}

textarea {
  resize: none;
  height: 60px;
}

button {
  width: 100px;
  height: fit-content;
  color: #000;
  cursor: pointer;
  border: 1px solid #fff;
  font-size: 14px;
  text-transform: uppercase;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 20px;
  background: #FEFEFE;
}

button:hover {
  background-color: #444;
  color: #fff;
}

.form-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.form-row .form-group {
  flex: 1;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}

.strongh1 {
  color: rgba(255, 255, 255, 0.68);
  ;
}
</style>
