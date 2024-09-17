<template>
  <div class="hello">
    <div>
    <h1>Lazy Loading com Intersection Observer</h1>
    <button @click="toggleImages">{{ showImages ? 'Esconder' : 'Mostrar' }} Imagens</button>
      <div v-if="showImages">
        <img v-lazy="imageSrc" width="500px" height="300px" alt="Lazy Loaded Image" />
        <img v-lazy="imageSrc2" width="500px" height="300px" alt="Lazy Loaded Image" />
        <img v-lazy="imageSrc3" width="500px" height="300px" alt="Lazy Loaded Image" />
      </div>
  </div>
  </div>
</template>

<script>

export default {

  data (){
    return {
      showImages: false, // Adicione esta linha para definir showImages
      imageSrc: require('@/assets/a.webp'),
      imageSrc2: require('@/assets/b.webp'),
      imageSrc3: require('@/assets/c.webp')
    };
  },
  methods: {
    toggleImages() {
      this.showImages = !this.showImages;
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>