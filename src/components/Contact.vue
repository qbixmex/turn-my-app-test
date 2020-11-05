<template>
<div class="container">
  <h1>{{ message }}</h1>

  <div class="row justify-content-center">
    <div class="col-10 col-md-6">
      <div id="app">
        <!-- Mostrar los errores si existen -->
        <div
          class="alert alert-danger alert-dismissible fade show"
          v-show="errors.all().length"
          role="alert"
        >
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <p>Revisa los siguientes errores:</p>
          <ul>
            <li v-for="(error, i) in errors.all()" :key="i">{{ error }}</li>
          </ul>
        </div>

        <form
          id="form"
          @submit.prevent="processForm"
          method="POST"
          novalidate="true"
        >
          <div class="form-group">
            <label for="name">Nombre</label>
            <input
              id="name"
              type="text"
              class="form-control"
              name="name"
              autocomplete="off"
              v-model="contact.name"
              v-validate="'required|min:3|max:100'"
            />

            <p class="invalid-feedback mt-2">
              {{ errors.first("name") }}
            </p>
          </div>

          <div class="form-group">
            <label for="phone">Teléfono</label>
            <input
              id="phone"
              type="text"
              class="form-control"
              name="phone"
              autocomplete="off"
              v-model="contact.phone"
              v-validate="'required|min:8|max:100'"
            />

            <p class="invalid-feedback mt-2">
              {{ errors.first("phone") }}
            </p>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              class="form-control"
              name="email"
              autocomplete="off"
              v-model="contact.email"
              v-validate="'required|email|max:100'"
            />

            <p class="invalid-feedback mt-2">
              {{ errors.first("email") }}
            </p>
          </div>

          <div class="form-group">
            <label for="subject">Asunto</label>

            <textarea
              id="subject"
              class="form-control"
              rows="5"
              name="subject"
              v-model="contact.subject"
              v-validate="'required|min:8|max:100'"
            ></textarea>

            <p class="invalid-feedback mt-2">
              {{ errors.first("subject") }}
            </p>
          </div>

          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "Form",
  data() {
    return {
      contact: {
        name: null,
        phone: null,
        email: null,
        subject: null,
      },
    };
  },
  props: { message: String },
  methods: {
    processForm() {
      this.$validator.validate().then(isValid => {
        if (isValid) {
          const contact = this.contact;

          this.axios.post("https://localhost:3000/api/contact", {
              headers: {
                "x-auth-token": "token code",
                'Content-type': 'application/json',
              },
              body: this.contact
            })
            .then(response => console.log(response))
            .catch(error => {
              this.errorMessage = error.message;
              console.error("There was an error!", error);
            });
        }
      });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>
