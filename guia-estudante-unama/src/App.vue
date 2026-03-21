<template>
  <div id="app">
    <nav class="global-nav">
      <router-link to="/">Início</router-link>
      <router-link to="/livros">Livros</router-link>
      <router-link to="/laboratorios">Laboratórios</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f4f4f4;
}
.global-nav {
  background: #1a5c45;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.global-nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.2s;
}
.global-nav a:hover {
  background: #2e9b6a;
}
.global-nav a.router-link-active {
  background: #0d6f63;
}
</style>