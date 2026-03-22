<template>
  <div class="eventos">
    <p class="eventos-titulo">Eventos</p>
    <div v-if="eventosHoje.length">
      <div v-for="ev in eventosHoje" :key="ev.id" class="evento">
        <span>{{ ev.nome }}</span>
        <span class="evento-hora">{{ ev.hora }}</span>
      </div>
    </div>
    <p v-else class="sem-evento">Nenhum evento neste dia.</p>
  </div>
</template>

<script>
export default {
  name: 'EventosPanel',

  props: {
    // dia selecionado vindo do CalendarioPanel via PagPrincipal
    diaSelecionado: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      eventosDoMes: {
        10: [{ id: 1, nome: 'Prova — Arquitetura',                    hora: '08:00' }],
        19: [{ id: 2, nome: 'Entrega da Atividade — Machine Learning', hora: '23:59' }],
        25: [{ id: 3, nome: 'Seminário — Web Programming',             hora: '14:00' }],
      },
    }
  },

  computed: {
    eventosHoje() {
      return this.diaSelecionado
        ? (this.eventosDoMes[this.diaSelecionado] || [])
        : []
    },
  },
}
</script>

<style scoped>
.eventos { background: var(--verde-pale); border-radius: var(--r); padding: 14px; }
.eventos-titulo {
  font-size: 11px; font-weight: 700; letter-spacing: .8px;
  text-transform: uppercase; color: var(--verde); margin-bottom: 8px;
}
.evento {
  background: var(--branco); border-radius: 8px; padding: 9px 11px; margin-bottom: 7px;
  border-left: 3px solid var(--verde-mid);
  display: flex; flex-direction: column; gap: 2px;
  font-size: 12px; font-weight: 600; color: var(--verde);
}
.evento:last-child { margin-bottom: 0; }
.evento-hora { font-size: 11px; color: var(--muted); font-weight: 400; }
.sem-evento { font-size: 12px; color: var(--muted); text-align: center; padding: 6px 0; }
</style>