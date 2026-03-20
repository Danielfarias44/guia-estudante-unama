<<<<<<< Updated upstream
<template>
  <PagPrincipal />
</template>

<script>
import PagPrincipal from './views/PagPrincipal.vue'
export default {
  components: { PagPrincipal }
}
</script>
=======

<script setup>
import { ref } from 'vue'
import AppHeader from '/Páginas/Pag-Livro/AppHeader.vue'
import BookList from '/Páginas/Pag-Livro/BookList.vue'

import programadorImg from '/src/assets/Programador.jpeg'
import useCabecaImg from '/src/assets/Csharp.jpeg'
import javascriptImg from '/src/assets/91z1xY4ppaL._AC_UF1000,1000_QL80_.jpg'
import sistemasImg from '/src/assets/tanebaum.jpeg'
import metamorfoseImg from '/src/assets/Kafka.png'
import scrumImg from '/src/assets/Scrum.jpeg'
const livrosDisponiveis = ref([
  {
    titulo: 'O Programador Pragmático',
    autor: 'Andrew Hunt',
    img: programadorImg
  },
  {
    titulo: 'Use a Cabeça!',
    autor: 'Andrew Stellman',
    img: useCabecaImg
  },
  {
    titulo: 'JavaScript: O Guia Definitivo',
    autor: 'David Flanagan',
    img: javascriptImg
  }
])

const continueLendo = ref([
  {
    titulo: 'Sistemas Operacionais modernos',
    autor: 'Tanenbaum',
    img: sistemasImg
  },
  {
    titulo: 'A Metamorfose',
    autor: 'Franz Kafka',
    img: metamorfoseImg
  },
  {
    titulo: 'SCRUM A arte de fazer o dobro do trabalho na metade do tempo',
    autor: 'Jeff Sutherland e J.J. Sutherland',
    img: scrumImg
  },
])

const handleViewMore = () => {
  console.log('Clicou em ver mais')
}
</script>

<template>
  <div class="Unama">
    <AppHeader />
    <BookList 
      title="Livros Disponíveis"
      :books="livrosDisponiveis"
      @view-more="handleViewMore"
    />
    <BookList 
      title="Continue Lendo >"
      :books="continueLendo"
      @view-more="handleViewMore"
    />
  </div>
</template>

<style scoped>
.Unama {
  max-width: 2000px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  background-color: #8FC1B5;
}
</style>
>>>>>>> Stashed changes
