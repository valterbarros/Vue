// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Product from './components/Product'
import Cart from './components/Cart'

Vue.config.productionTip = false

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  components: { Product, Cart },
  template: `
    <div> 
      <Cart :cart='cart'/> 
      <Product @add-to-cart='updateCart' @remove-from-cart="removeCart"/> 
    </div>
  `,
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    removeCart(id) {
      let newArray = []
      for (let i = 0; i < this.cart.length; i++) {
        const element = this.cart[i]
        if (id !== element) {
          newArray.push(id);
        }
      }

      this.cart = newArray
    }
  }
})
