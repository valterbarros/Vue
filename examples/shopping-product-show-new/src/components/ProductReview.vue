<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <p class="error" v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </p>

    <p>
      <label for="name">Name:</label>
      <input id="name" v-model="name">
    </p>
    
    <p>
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>
    </p>
    
    <p>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </p>

    <p> Would you recommend this product: </p>
    
    <label> 
      Yes
      <input type="radio" v-model="recommend" value="yes">
    </label>

    <label> 
      No
      <input type="radio" v-model="recommend" value="no">
    </label>
        
    <p>
      <input type="submit" value="Submit">  
    </p>    
  </form>
</template>

<script>
export default {
  name: "ProductReview",
  data(){
    return {
      errors: [],
      name: null,
      review: null,
      rating: null,
      recommend: false
    }
  },
  methods: {
    onSubmit(){
      this.errors = []
      if(this.name && this.review && this.rating && this.recommend) {
        const reviewProduct = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend
        }

        this.name = null
        this.review = null
        this.rating = null
        this.recommend = null
  
        this.$emit('add-new-review', reviewProduct)
      } else {
        if(!this.name) this.errors.push("Name cant be blank")
        if(!this.review) this.errors.push("Review cant be blank")
        if(!this.rating) this.errors.push("Rating cant be blank")
        if(!this.recommend) this.errors.push("Recommend cant be blank")
      }
    }
  }
}
</script>