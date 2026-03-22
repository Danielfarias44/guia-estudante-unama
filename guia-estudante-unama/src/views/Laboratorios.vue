<template>
  <div class="laboratorios-page">
    <!-- Sidebar com menu hambúrguer -->
    <aside class="sidebar">
      <div class="menu-icon" :class="{ active: menuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </aside>

    <main class="main">
      <header class="header">
        <div class="logo">
          <img :src="logoImg" alt="logo da unama" />
        </div>
        <div class="user">
          <div class="avatar">AN</div>
          <p><strong>BEM-VINDO,</strong><br />ANDRÉ NETO</p>
        </div>
      </header>

      <div class="title">Laboratórios disponíveis</div>

      <section class="labs">
        <div v-for="lab in labs" :key="lab.id" class="card">
          <div class="top">
            <span>💻</span>
            <span class="badge">{{ lab.nome }}</span>
          </div>
          <p>{{ lab.horario }}</p>
          <button @click="reservar(lab.nome)">Reservar</button>
        </div>
      </section>

      <footer class="footer">
        ⚠️ Regras de uso: proibido comer e beber dentro dos laboratórios, favor desligar os computadores após o uso.
      </footer>
    </main>
  </div>
</template>

<script>
import logoImg from '/src/assets/transferir-removebg-preview 1.png';

export default {
  name: 'Laboratorios',
  data() {
    return {
      menuOpen: false,
      logoImg,
      labs: [
        { id: 1, nome: 'Lab - 100', horario: 'Disponível de 12:00 às 15:00 horas' },
        { id: 2, nome: 'Lab - 101', horario: 'Disponível de 9:00 às 13:00 horas' },
        { id: 3, nome: 'Lab - 102', horario: 'Disponível de 14:00 às 18:00 horas' },
        { id: 4, nome: 'Lab - 103', horario: 'Disponível de 7:00 às 8:00 horas' },
        { id: 5, nome: 'Lab - 104', horario: 'Disponível de 10:00 às 19:00 horas' },
        { id: 6, nome: 'Lab - 105', horario: 'Disponível de 12:30 às 18:30 horas' },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    reservar(lab) {
      alert(`Você reservou o ${lab}`);
    },
  },
};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

.menu-icon {
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
}
.menu-icon span {
  width: 30px;
  height: 3px;
  background: white;
  border-radius: 5px;
  transition: 0.3s;
}
.menu-icon.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.menu-icon.active span:nth-child(2) {
  opacity: 0;
}
.menu-icon.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}
.sidebar {
  width: 120px;
  height: 100vh;
  background: #007566;
  position: fixed;
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.user {
  position: absolute;
  right: 30px;
  top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  width: 50px;
  height: 50px;
  background: #0d6f63;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-bottom: 4px;
}
.main {
  margin-left: 120px;
  background: #f4f4f4;
  min-height: 100vh;
}
.header {
  background: #d9d9d9;
  padding: 80px 0;
  text-align: center;
  position: relative;
  justify-content: center;
}
.header h1 {
  font-size: 28px;
  font-weight: bold;
}
.user {
  position: absolute;
  right: 30px;
  top: 25px;
  text-align: center;
  font-size: 12px;
}
.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo img {
  width: 200px;
  margin-bottom: 5px;
}
.title {
  background: #d3d3d3;
  width: fit-content;
  margin: 30px auto;
  padding: 12px 40px;
  border-radius: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
}
.labs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;
  padding: 20px 80px;
}
.card {
  background: #589A8D;
  border-radius: 20px;
  padding: 30px;
  color: white;
  text-align: center;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.badge {
  background: #e0e0e0;
  color: #000;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
}
.card p {
  font-size: 14px;
}
.card button {
  background: #0d6f63;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}
.card button:hover {
  background: #09574e;
}
.footer {
  margin: 40px;
  text-align: center;
  font-size: 13px;
}
</style>