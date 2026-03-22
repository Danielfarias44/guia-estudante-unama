<template>
  <section class="materias">
    <MateriaCard v-for="m in materias" :key="m.id" :materia="m" />
  </section>
</template>

<script>
import MateriaCard from './MateriaCard.vue'

export default {
  name: 'MateriasList',
  components: { MateriaCard },

  data() {
    return {
      materias: [
        { id: 1, nome: 'Arquitetura de Software', professor: 'Profº Bruno Brasil da Silva',  frequencia: 82, nota: 8.5 },
        { id: 2, nome: 'Machine Learning',         professor: 'Profº Daniel Farias',          frequencia: 90, nota: 9.0 },
        { id: 3, nome: 'Desenvolvimento Mobile',   professor: 'Profª Letícia Monteiro',       frequencia: 75, nota: 7.8 },
        { id: 4, nome: 'Redes de Computadores',    professor: 'Profº Felipe Mota Damasceno',  frequencia: 68, nota: 6.5 },
        { id: 5, nome: 'Web Programming',          professor: 'Profª Camila Bomfim',          frequencia: 88, nota: 9.2 },
        { id: 6, nome: 'Sistemas Operacionais',    professor: 'Profº Bruno Brasil da Silva',  frequencia: 95, nota: 8.0 },
      ],
    }
  },
}
</script>

<style scoped>
.materias {
  grid-column: 1;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 11px;
}
</style>