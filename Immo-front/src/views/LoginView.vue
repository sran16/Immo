<template>
  <div class="login-page">
    <div class="login-container">
      <div class="logo">
        <h1>Prestigia</h1>
      </div>
      <form class="login-form" @submit.prevent="handleLogin">
        <p>Enter your badge number and password to log in:</p>
        <input type="text" placeholder="Badge number" v-model="badgeNumber" />
        <input type="password" placeholder="Password" v-model="password" />
        <button type="submit">Login</button>
      </form>
    </div>
    <div class="background-image">
      <img src="@/assets/background1.png" alt="Background" />
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

const baseURL = 'http://localhost:3000';

export default {
  setup() {
    const router = useRouter();
    return { router };
  },
  data() {
    return {
      badgeNumber: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      const badgeNumberInt = parseInt(this.badgeNumber, 10);

      if (isNaN(badgeNumberInt)) {
        alert("Please enter a valid badge number.");
        return;
      }

      fetch(`${baseURL}/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          badge_number: badgeNumberInt,
          password: this.password,
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === "Login successful") {
            this.router.push('/');
          } else {
            alert("Login failed: " + data.message);
          }
        })
        .catch(error => {
          alert("Error during login: " + error.message);
        });
    },
  },
};

</script>

<style scoped>
.login-page {
  display: flex;
  height: fit-content;
  margin: 0;
  padding: 0;
}

.login-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #ffffff;
}

.logo {
  text-align: center;
  margin-bottom: 30px;
}

.logo h1 {
  font-family: "Bodoni Moda", serif;
  font-size: 2rem;
  color: #d4a373;
  margin-top: 10px;
}

.login-form {
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.login-form p {
  margin-bottom: 20px;
  color: #928B84;
}

.login-form input {
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  outline: none;
}

.login-form input::placeholder {
  color: #aaa;
}

.login-form button {
  padding: 10px;
  font-size: 1rem;
  background-color: #d4a373;
  color: #1c1c1c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.login-form button:hover {
  background-color: #b58860;
}

.background-image img {
  width: 100%;
  height: 100vh;
}
</style>
