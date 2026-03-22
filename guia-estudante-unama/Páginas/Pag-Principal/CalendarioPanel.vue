<template>
  <div class="calendario">
    <div class="cal-topo">
      <span class="cal-mes">Março 2026</span>
    </div>
    <div class="cal-grid">
      <span v-for="d in diasSemana" :key="d" class="cal-label">{{ d }}</span>
      <button
        v-for="celula in celulas"
        :key="celula.chave"
        class="cal-dia"
        :class="{
          apagado: !celula.doMes,
          hoje: celula.hoje,
          selecionado: celula.dia === diaSelecionado && celula.doMes
        }"
        @click="celula.doMes && selecionar(celula.dia)"
      >{{ celula.dia }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarioPanel',

  emits: ['dia-selecionado'],

  data() {
    return {
      diasSemana: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
      diaSelecionado: null,
    }
  },

  computed: {
    celulas() {
      const primeiroDia = new Date(2026, 2, 1).getDay()
      const hoje = new Date()
      const lista = []

      for (let i = 0; i < primeiroDia; i++)
        lista.push({ chave: `v${i}`, dia: '', doMes: false, hoje: false })

      for (let d = 1; d <= 31; d++)
        lista.push({
          chave: `d${d}`, dia: d, doMes: true,
          hoje: hoje.getFullYear() === 2026 && hoje.getMonth() === 2 && hoje.getDate() === d,
        })

      return lista
    },
  },

  methods: {
    selecionar(dia) {
      this.diaSelecionado = dia
      // avisa o componente pai qual dia foi clicado
      this.$emit('dia-selecionado', dia)
    },
  },
}
</script>

<style scoped>
.calendario {
  background: var(--branco);
  border-radius: var(--r);
  padding: 15px;
  border: 1px solid var(--borda);
}
.cal-topo { text-align: center; margin-bottom: 10px; }
.cal-mes { font-size: 14px; font-weight: 600; color: var(--verde); }

.cal-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px; text-align: center;
}
.cal-label { font-size: 10px; font-weight: 600; color: var(--muted); padding: 3px 0; }
.cal-dia {
  padding: 6px 2px; font-size: 12px; border-radius: 7px; border: none;
  background: transparent; cursor: pointer;
  font-family: 'DM Sans', sans-serif; transition: background .12s;
}
.cal-dia:hover      { background: var(--verde-pale); }
.cal-dia.apagado    { color: #c8d8d2; pointer-events: none; }
.cal-dia.hoje       { background: var(--verde); color: #fff; font-weight: 700; }
.cal-dia.selecionado { background: var(--verde-mid); color: #fff; }
</style>