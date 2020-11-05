import Vue from 'vue'
import App from './App.vue'
import VeeValidate from "vee-validate";
import es from 'vee-validate/dist/locale/es';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VeeValidate, {
	classes: true,
	classNames: {
		valid: "is-valid",
		invalid: "is-invalid",
	},
	events: "change|blur",
});

VeeValidate.Validator.localize("es", es);

const dictionary = {
  es: {
    attributes: {
      name: 'nombre',
      phone: 'teléfono',
      subject: 'asunto',
    }
  }
};

VeeValidate.Validator.localize(dictionary);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
