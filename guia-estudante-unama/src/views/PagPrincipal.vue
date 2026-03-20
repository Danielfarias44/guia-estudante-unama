<template>
  <div class="layout">

    <aside class="sidebar">
      <div class="logo">U</div>
      <button class="nav-btn" title="Outras páginas">☰</button>
    </aside>

    <div class="pagina">

      <header class="header">
        <span class="header-logo">UNAMA</span>
        <span class="curso">Ciência da Computação</span>
        <div class="usuario">
          <span>Bem-vindo, <strong>André Neto</strong></span>
          <div class="avatar">AN</div>
        </div>
      </header>

      <main class="conteudo">

        <!-- materias -->
        <section class="materias">
          <div v-for="m in materias" :key="m.id" class="card">
            <p class="card-nome">{{ m.nome }}</p>
            <p class="card-prof">{{ m.professor }}</p>
            <div class="barra-row">
              <span>Freq.</span>
              <div class="barra"><div class="barra-fill" :style="{ width: m.frequencia + '%' }"></div></div>
              <span>{{ m.frequencia }}%</span>
            </div>
            <div class="barra-row">
              <span>Nota</span>
              <div class="barra"><div class="barra-fill amarelo" :style="{ width: (m.nota / 10) * 100 + '%' }"></div></div>
              <span>{{ m.nota }}</span>
            </div>
          </div>
        </section>

        <!-- calendario -->
        <aside class="lado-direito">
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
                :class="{ apagado: !celula.doMes, hoje: celula.hoje, selecionado: celula.dia === diaSelecionado && celula.doMes }"
                @click="celula.doMes && (diaSelecionado = celula.dia)"
              >{{ celula.dia }}</button>
            </div>
          </div>

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
        </aside>

        <!-- quadro de horarios -->
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

      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagPrincipal',

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

      diasSemana: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
      diaSelecionado: null,

      eventosDoMes: {
        10: [{ id: 1, nome: 'Prova — Arquitetura',         hora: '08:00' }],
        19: [{ id: 2, nome: 'Entrega da Atividade — Machine Learning',  hora: '23:59' }],
        25: [{ id: 3, nome: 'Seminário — Web Programming', hora: '14:00' }],
      },

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

    eventosHoje() {
      return this.diaSelecionado ? (this.eventosDoMes[this.diaSelecionado] || []) : []
    },
  },

  methods: {
    getAula(dia, hora) {
      return this.aulas[`${dia}|${hora}`] || null
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --verde: #1a5c45;
  --verde-mid: #2e9b6a;
  --verde-card: #1e6b50;
  --verde-pale: #d6f0e5;
  --amarelo: #f0b429;
  --bg: #f2f6f4;
  --branco: #fff;
  --borda: #ddeade;
  --muted: #6b7b74;
  --r: 12px;
}

body { font-family: 'DM Sans', sans-serif; background: var(--bg); }

.layout { display: flex; height: 100vh; overflow: hidden; }

/* Sidebar */
.sidebar {
  width: 64px; background: var(--verde); flex-shrink: 0;
  display: flex; flex-direction: column; align-items: center; padding: 16px 0; gap: 12px;
}
.logo {
  width: 38px; height: 38px; background: rgba(255,255,255,.15); border-radius: 10px;
  color: #fff; font-weight: 700; font-size: 18px;
  display: flex; align-items: center; justify-content: center;
}
.nav-btn {
  width: 40px; height: 40px; border: none; border-radius: 10px; font-size: 18px;
  background: transparent; color: rgba(255,255,255,.6); cursor: pointer;
}
.nav-btn:hover { background: var(--verde-mid); color: #fff; }

/* Página */
.pagina { flex: 1; display: flex; flex-direction: column; overflow: hidden; }

.header {
  height: 60px; background: var(--branco); border-bottom: 1px solid var(--borda);
  display: flex; align-items: center; padding: 0 24px; gap: 12px; flex-shrink: 0;
}
.header-logo { font-weight: 700; font-size: 18px; color: var(--verde); }
.curso {
  font-size: 12px; font-weight: 600; color: var(--verde);
  background: var(--verde-pale); padding: 4px 12px; border-radius: 99px;
}
.usuario { margin-left: auto; display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--muted); }
.usuario strong { color: #1a2520; }
.avatar {
  width: 34px; height: 34px; border-radius: 50%; background: var(--verde-mid);
  color: #fff; font-size: 12px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
}

/* Conteúdo */
.conteudo {
  flex: 1; overflow-y: auto; padding: 24px;
  display: grid; grid-template-columns: 1fr 270px;
  grid-template-rows: auto auto; gap: 20px; align-content: start;
}
.conteudo::-webkit-scrollbar { width: 5px; }
.conteudo::-webkit-scrollbar-thumb { background: #c4d9ce; border-radius: 99px; }

.secao-titulo {
  font-size: 11px; font-weight: 700; letter-spacing: .9px;
  text-transform: uppercase; color: var(--muted); margin-bottom: 12px;
}

/* Cards de matéria */
.materias { grid-column: 1; grid-row: 1; display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 11px; }

.card {
  background: var(--verde-card); border-radius: var(--r); padding: 15px; color: #fff;
  transition: transform .18s; cursor: pointer;
}
.card:hover { transform: translateY(-2px); }
.card-nome { font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 3px; }
.card-prof { font-size: 10px; color: rgba(255,255,255,.5); margin-bottom: 10px; }

.barra-row { display: flex; align-items: center; gap: 7px; margin-bottom: 5px; font-size: 9px; color: rgba(255,255,255,.5); }
.barra { flex: 1; height: 5px; border-radius: 99px; background: rgba(255,255,255,.15); overflow: hidden; }
.barra-fill { height: 100%; border-radius: 99px; background: rgba(255,255,255,.7); }
.barra-fill.amarelo { background: var(--amarelo); }

/* Calendário */
.lado-direito { grid-column: 2; grid-row: 1 / 3; align-self: start; display: flex; flex-direction: column; gap: 12px; }

.calendario { background: var(--branco); border-radius: var(--r); padding: 15px; border: 1px solid var(--borda); }
.cal-topo { text-align: center; margin-bottom: 10px; }
.cal-mes { font-size: 14px; font-weight: 600; color: var(--verde); }

.cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; text-align: center; }
.cal-label { font-size: 10px; font-weight: 600; color: var(--muted); padding: 3px 0; }
.cal-dia {
  padding: 6px 2px; font-size: 12px; border-radius: 7px; border: none;
  background: transparent; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: background .12s;
}
.cal-dia:hover      { background: var(--verde-pale); }
.cal-dia.apagado    { color: #c8d8d2; pointer-events: none; }
.cal-dia.hoje       { background: var(--verde); color: #fff; font-weight: 700; }
.cal-dia.selecionado { background: var(--verde-mid); color: #fff; }

.eventos { background: var(--verde-pale); border-radius: var(--r); padding: 14px; }
.eventos-titulo { font-size: 11px; font-weight: 700; letter-spacing: .8px; text-transform: uppercase; color: var(--verde); margin-bottom: 8px; }
.evento {
  background: var(--branco); border-radius: 8px; padding: 9px 11px; margin-bottom: 7px;
  border-left: 3px solid var(--verde-mid); display: flex; flex-direction: column; gap: 2px;
  font-size: 12px; font-weight: 600; color: var(--verde);
}
.evento:last-child { margin-bottom: 0; }
.evento-hora { font-size: 11px; color: var(--muted); font-weight: 400; }
.sem-evento { font-size: 12px; color: var(--muted); text-align: center; padding: 6px 0; }

/* Horários */
.horarios { grid-column: 1; grid-row: 2; background: var(--branco); border-radius: var(--r); padding: 18px; border: 1px solid var(--borda); }
.grade { display: grid; grid-template-columns: 56px repeat(5, 1fr); gap: 5px; }
.grade-dia { font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--muted); text-align: center; padding: 4px 0; }
.grade-hora { font-size: 10px; color: var(--muted); display: flex; align-items: center; }
.grade-celula {
  min-height: 56px; border-radius: 8px; background: #eef7f3;
  border: 1px solid var(--borda); display: flex; flex-direction: column;
  align-items: center; justify-content: center; text-align: center; gap: 2px; padding: 5px;
}
.grade-celula.aula { background: var(--verde-card); border-color: var(--verde-card); }
.aula-nome { font-size: 10px; font-weight: 700; color: #fff; text-transform: uppercase; }
.aula-prof { font-size: 9px; color: rgba(255,255,255,.55); }
.vazio { font-size: 13px; color: #c0d4cc; }

.legenda { display: flex; gap: 14px; margin-top: 12px; font-size: 11px; color: var(--muted); align-items: center; }
.legenda span { display: flex; align-items: center; gap: 5px; }
.bolinha { display: inline-block; width: 9px; height: 9px; border-radius: 50%; }
.bolinha.verde { background: var(--verde-card); }
.bolinha.cinza { background: #c0d4cc; }
</style>