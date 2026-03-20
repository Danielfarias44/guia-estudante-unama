<script setup>
import { ref } from 'vue'
import programadorImg from '/src/assets/Programador.jpeg'
import useCabecaImg from '/src/assets/Csharp.jpeg'
import javascriptImg from '/src/assets/91z1xY4ppaL._AC_UF1000,1000_QL80_.jpg'
import sistemasImg from '/src/assets/tanebaum.jpeg'
import metamorfoseImg from '/src/assets/Kafka.png'
import scrumImg from '/src/assets/Scrum.jpeg'

const count = ref(0)

const livrosDisponiveis = ref([
  {
    titulo: 'O Programador Pragmático',
    autor: 'Andrew Hunt',
    descricao: 'Aprenda a programar com o livro!',
    img: programadorImg
  },
  {
    titulo: 'Use a Cabeça!',
    autor: 'Andrew Stellman',
    descricao: 'Use a cabeça para aprender a programar',
    img: useCabecaImg
  },
  {
    titulo: 'JavaScript: O Guia Definitivo',
    autor: 'David Flanagan',
    descricao: 'JavaScript: O Guia Definitivo',
    img: javascriptImg
  }
])

const continueLendo = ref([
  {
    titulo: 'Sistemas Operacionais modernos',
    autor: 'Tanenbaum',
    descricao: 'Sistemas operacionais modernos',
    img: sistemasImg
  },
  {
    titulo: 'A Metamorfose',
    autor: 'Franz Kafka',
    descricao: 'A Metamorfose',
    img: metamorfoseImg
  },
  {
    titulo: 'SCRUM A arte de fazer o dobro do trabalho na metade do tempo',
    autor: 'Jeff Sutherland e J.J. Sutherland',
    descricao: 'SCRUM A arte de fazer o dobro do trabalho na metade do tempo',
    img: scrumImg
  },
])
</script>

<template>
  <div style="background-color: white;" class="Unama">
    <header class="header">
      <h1>Unama</h1>
    </header>

    <section class="livros-section">
      <div class="section-header">
        <h3>Livros Disponíveis</h3>
        <span class="view-more">></span>
      </div>

      <div class="livros-container">
        <div v-for="livro in livrosDisponiveis" 
             :key="livro.titulo" 
             class="livro-card">
          <div class="background-img-container" 
               :style="{ backgroundImage: 'url(' + livro.img + ')' }">
          </div>
          <h4 class="livro-titulo">{{ livro.titulo }}</h4>
          <p class="livro-autor">{{ livro.autor }}</p>
        </div>
      </div>
    </section>

    <section class="continue-lendo-section">
      <h3>Continue Lendo ></h3>

      <div class="livros-container">
        <div v-for="livro in continueLendo" 
             :key="livro.titulo" 
             class="livro-card">
          <div class="background-img-container" 
               :style="{ backgroundImage: 'url(' + livro.img + ')' }">
          </div>
          <h4 class="livro-titulo">{{ livro.titulo }}</h4>
          <p class="livro-autor">{{ livro.autor }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.Unama {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
}

.header {
  margin-bottom: 30px;
}

.header h1 {
  font-size: 24px;
  font-weight: 500;
  margin: 0;
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

.livros-section {
  margin-bottom: 40px;
}

.continue-lendo-section h3 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
}

.livros-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

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

@media (max-width: 768px) {
  .livros-container {
    grid-template-columns: 1fr;
  }
}
</style>