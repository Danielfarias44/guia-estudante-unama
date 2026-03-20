createApp({
  data() {
    return {
      materias: [
        { id: 1, nome: 'Arquitetura de Software', professor: 'Profº Bruno Brasil da Silva', frequencia: 82, nota: 8.5 },
        { id: 2, nome: 'Machine Learning',         professor: 'Profº Daniel Farias',        frequencia: 90, nota: 9.0 },
        { id: 3, nome: 'Desenvolvimento Mobile',   professor: 'Profª Letícia Monteiro',     frequencia: 75, nota: 7.8 },
        { id: 4, nome: 'Redes de Computadores',    professor: 'Profº Felipe Mota Damasceno',frequencia: 68, nota: 6.5 },
        { id: 5, nome: 'Web Programming',          professor: 'Profª Camila Bomfim',        frequencia: 88, nota: 9.2 },
        { id: 6, nome: 'Sistemas Operacionais',    professor: 'Profº Bruno Brasil da Silva', frequencia: 95, nota: 8.0 },
      ],

      diasSemana: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
      diaSelecionado: null,

      eventosDoMes: {
        10: [{ id: 1, nome: 'Prova — Arquitetura',        hora: '08:00' }],
        19: [{ id: 2, nome: 'Entrega de Atividade— Machine Learning', hora: '23:59' }],
        25: [{ id: 3, nome: 'Seminário — Web Programming', hora: '14:00' }],
      },

      dias:   ['Seg','Ter','Qua','Qui','Sex'],
      horarios: ['07:30','09:10','11:00','13:00'],

      aulas: {
        'Seg|07:30': { materia: 'Sist. Operacionais', prof: 'Bruno Brasil da Silva'  },
        'Seg|09:10': { materia: 'Sist. Operacionais', prof: 'Bruno Brasil da Silva'  },
        'Seg|11:00': { materia: 'Sist. Operacionais', prof: 'Bruno Brasil da Silva'  },
        'Ter|07:30': { materia: 'Arq. de Software',   prof: 'Bruno Brasil da Silva'  },
        'Ter|09:10': { materia: 'Arq. de Software',   prof: 'Bruno Brasil da Silva'  },
        'Qua|07:30': { materia: 'Web Programming',    prof: 'Camila Bomfim'          },
        'Qua|09:10': { materia: 'Machine Learning',   prof: 'Daniel Farias'          },
        'Qua|11:00': { materia: 'Machine Learning',   prof: 'Daniel Farias'          },
        'Qui|07:30': { materia: 'Redes',              prof: 'Felipe Mota Damasceno'  },
        'Qui|09:10': { materia: 'Redes',              prof: 'Felipe Mota Damasceno'  },
        'Sex|07:30': { materia: 'Dev. Mobile',        prof: 'Letícia Monteiro'       },
        'Sex|09:10': { materia: 'Dev. Mobile',        prof: 'Letícia Monteiro'       },
        'Sex|13:00': { materia: 'Web Programming',    prof: 'Camila Bomfim'          },
      },
    }
  },

  computed: {
    celulas() {
      const primeiroDia = new Date(2026, 2, 1).getDay() // março 2026 começa num domingo
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
}).mount('#app')