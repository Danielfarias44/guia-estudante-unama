<template>
  <header class="header">
    <span class="header-logo">UNAMA</span>
    <span class="curso">Ciência da Computação</span>
    <div class="usuario">
      <span>Bem-vindo, <strong>André Neto</strong></span>
      <div class="avatar">AN</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
.header {
  height: 60px;
  background: var(--branco);
  border-bottom: 1px solid var(--borda);
  display: flex; align-items: center;
  padding: 0 24px; gap: 12px; flex-shrink: 0;
}
.header-logo { font-weight: 700; font-size: 18px; color: var(--verde); }
.curso {
  font-size: 12px; font-weight: 600; color: var(--verde);
  background: var(--verde-pale); padding: 4px 12px; border-radius: 99px;
}
.usuario {
  margin-left: auto; display: flex; align-items: center;
  gap: 10px; font-size: 13px; color: var(--muted);
}
.usuario strong { color: #1a2520; }
.avatar {
  width: 34px; height: 34px; border-radius: 50%;
  background: var(--verde-mid); color: #fff;
  font-size: 12px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
}
</style>