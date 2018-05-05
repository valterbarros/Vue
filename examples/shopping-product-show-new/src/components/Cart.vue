<template>
  <div class="cart">
    <p>Cart({{ cart.length }})</p>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    cart: {
      type: Array,
      required: false,
      default(){
        return []
      }
    }
  }
};
</script>

<style>
.cart {
  margin-right: 25px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}
</style>
