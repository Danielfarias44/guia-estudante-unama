<template>
  <div class="livro-card">
    <div 
      class="background-img-container" 
      :style="{ backgroundImage: `url(${livro.img})` }"
    ></div>
    <h4 class="livro-titulo">{{ livro.titulo }}</h4>
    <p class="livro-autor">{{ livro.autor }}</p>
  </div>
</template>

<script setup>
defineProps({
  livro: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.livro-card {
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.livro-card:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.livro-titulo {
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0 5px;
  color: #000000;
}

.livro-autor {
  font-size: 14px;
  color: #666;
  margin: 0 0 10px;
}

.background-img-container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 200px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
}
</style>