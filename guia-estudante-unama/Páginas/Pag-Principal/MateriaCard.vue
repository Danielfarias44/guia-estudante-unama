<template>
  <div class="card">
    <p class="card-nome">{{ materia.nome }}</p>
    <p class="card-prof">{{ materia.professor }}</p>
    <div class="barra-row">
      <span>Freq.</span>
      <div class="barra">
        <div class="barra-fill" :style="{ width: materia.frequencia + '%' }"></div>
      </div>
      <span>{{ materia.frequencia }}%</span>
    </div>
    <div class="barra-row">
      <span>Nota</span>
      <div class="barra">
        <div class="barra-fill amarelo" :style="{ width: (materia.nota / 10) * 100 + '%' }"></div>
      </div>
      <span>{{ materia.nota }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MateriaCard',
  props: {
    materia: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card {
  background: var(--verde-card);
  border-radius: var(--r);
  padding: 15px; color: #fff;
  transition: transform .18s; cursor: pointer;
}
.card:hover { transform: translateY(-2px); }
.card-nome { font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 3px; }
.card-prof { font-size: 10px; color: rgba(255,255,255,.5); margin-bottom: 10px; }

.barra-row {
  display: flex; align-items: center;
  gap: 7px; margin-bottom: 5px;
  font-size: 9px; color: rgba(255,255,255,.5);
}
.barra {
  flex: 1; height: 5px; border-radius: 99px;
  background: rgba(255,255,255,.15); overflow: hidden;
}
.barra-fill { height: 100%; border-radius: 99px; background: rgba(255,255,255,.7); }
.barra-fill.amarelo { background: var(--amarelo); }
</style>