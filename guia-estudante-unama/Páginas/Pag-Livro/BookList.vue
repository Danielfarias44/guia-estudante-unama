<template>
  <section class="book-list-section">
    <div class="section-header">
      <h3>{{ title }}</h3>
      <span class="view-more" @click="$emit('view-more')">></span>
    </div>

    <div class="livros-container">
      <BookCard 
        v-for="livro in books" 
        :key="livro.titulo" 
        :livro="livro"
      />
    </div>
  </section>
</template>

<script setup>
import BookCard from './BookCard.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  books: {
    type: Array,
    required: true
  }
})

defineEmits(['view-more'])
</script>

<style scoped>
.book-list-section {
  margin-bottom: 40px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.section-header h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

.view-more {
  font-size: 20px;
  color: #616161;
  cursor: pointer;
}

.livros-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .livros-container {
    grid-template-columns: 1fr;
  }
}
</style>