<template>
  <aside class="sidebar">
    <div class="logo">U</div>
    <button class="nav-btn" title="Outras páginas">☰</button>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar',
}
</script>

<style scoped>
.sidebar {
  width: 64px;
  background: var(--verde);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  gap: 12px;
}
.logo {
  width: 38px; height: 38px;
  background: rgba(255,255,255,.15);
  border-radius: 10px;
  color: #fff; font-weight: 700; font-size: 18px;
  display: flex; align-items: center; justify-content: center;
}
.nav-btn {
  width: 40px; height: 40px;
  border: none; border-radius: 10px; font-size: 18px;
  background: transparent; color: rgba(255,255,255,.6); cursor: pointer;
}
.nav-btn:hover { background: var(--verde-mid); color: #fff; }
</style>