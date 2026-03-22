<template>
  <section class="horarios">
    <p class="secao-titulo">Quadro de Horários</p>
    <div class="grade">
      <div></div>
      <div v-for="d in dias" :key="d" class="grade-dia">{{ d }}</div>
      <template v-for="h in horarios" :key="h">
        <div class="grade-hora">{{ h }}</div>
        <div
          v-for="d in dias"
          :key="d"
          class="grade-celula"
          :class="{ aula: !!getAula(d, h) }"
        >
          <template v-if="getAula(d, h)">
            <span class="aula-nome">{{ getAula(d, h).materia }}</span>
            <span class="aula-prof">{{ getAula(d, h).prof }}</span>
          </template>
          <span v-else class="vazio">–</span>
        </div>
      </template>
    </div>
    <div class="legenda">
      <span><span class="bolinha verde"></span> Aula normal</span>
      <span><span class="bolinha cinza"></span> Sem aula</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HorariosGrade',

  data() {
    return {
      dias:     ['Seg','Ter','Qua','Qui','Sex'],
      horarios: ['07:30','09:10','11:00','13:00'],

      aulas: {
        'Seg|07:30': { materia: 'Sist. Operacionais', prof: 'Bruno Brasil da Silva' },
        'Seg|09:10': { materia: 'Sist. Operacionais', prof: 'Bruno Brasil da Silva' },
        'Seg|11:00': { materia: 'Sist. Operacionais', prof: 'Bruno Brasil da Silva' },
        'Ter|07:30': { materia: 'Arq. de Software',   prof: 'Bruno Brasil da Silva' },
        'Ter|09:10': { materia: 'Arq. de Software',   prof: 'Bruno Brasil da Silva' },
        'Qua|07:30': { materia: 'Web Programming',    prof: 'Camila Bomfim'         },
        'Qua|09:10': { materia: 'Machine Learning',   prof: 'Daniel Farias'         },
        'Qua|11:00': { materia: 'Machine Learning',   prof: 'Daniel Farias'         },
        'Qui|07:30': { materia: 'Redes',              prof: 'Felipe Mota Damasceno' },
        'Qui|09:10': { materia: 'Redes',              prof: 'Felipe Mota Damasceno' },
        'Sex|07:30': { materia: 'Dev. Mobile',        prof: 'Letícia Monteiro'      },
        'Sex|09:10': { materia: 'Dev. Mobile',        prof: 'Letícia Monteiro'      },
        'Sex|13:00': { materia: 'Web Programming',    prof: 'Camila Bomfim'         },
      },
    }
  },

  methods: {
    getAula(dia, hora) {
      return this.aulas[`${dia}|${hora}`] || null
    },
  },
}
</script>

<style scoped>
.horarios {
  grid-column: 1; grid-row: 2;
  background: var(--branco);
  border-radius: var(--r);
  padding: 18px;
  border: 1px solid var(--borda);
}
.secao-titulo {
  font-size: 11px; font-weight: 700; letter-spacing: .9px;
  text-transform: uppercase; color: var(--muted); margin-bottom: 12px;
}
.grade {
  display: grid;
  grid-template-columns: 56px repeat(5, 1fr);
  gap: 5px;
}
.grade-dia {
  font-size: 11px; font-weight: 700; text-transform: uppercase;
  color: var(--muted); text-align: center; padding: 4px 0;
}
.grade-hora { font-size: 10px; color: var(--muted); display: flex; align-items: center; }
.grade-celula {
  min-height: 56px; border-radius: 8px; background: #eef7f3;
  border: 1px solid var(--borda);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center; gap: 2px; padding: 5px;
}
.grade-celula.aula { background: var(--verde-card); border-color: var(--verde-card); }
.aula-nome { font-size: 10px; font-weight: 700; color: #fff; text-transform: uppercase; }
.aula-prof { font-size: 9px; color: rgba(255,255,255,.55); }
.vazio { font-size: 13px; color: #c0d4cc; }

.legenda {
  display: flex; gap: 14px; margin-top: 12px;
  font-size: 11px; color: var(--muted); align-items: center;
}
.legenda span { display: flex; align-items: center; gap: 5px; }
.bolinha { display: inline-block; width: 9px; height: 9px; border-radius: 50%; }
.bolinha.verde { background: var(--verde-card); }
.bolinha.cinza { background: #c0d4cc; }
</style>