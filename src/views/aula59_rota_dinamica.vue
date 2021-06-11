<template>
  <div>
    <h1>Aula 59 - rota dinâmica</h1>
    <hr>
    <ul>
      <li>
        <router-link to="/user/1">Usuário 1 </router-link>
        <router-link to="/user/1/perfil">Perfil </router-link>
        <router-link to="/user/1/posts">Posts </router-link>
      </li>
      <li>
        <router-link to="/user/2">Usuário 2 </router-link>
        <router-link to="/user/2/perfil">Perfil </router-link>
        <router-link to="/user/2/posts">Posts </router-link>
      </li>
      <li>
        <router-link to="/bitcoin">Preço do Bitcoin </router-link>
      </li>
      <li>
        <router-link to="/blog">Blog </router-link>
      </li>
      <li>
        <router-link to="/filme">Filmes em cartaz </router-link>
      </li>
      <li>
        <router-link to="/carrinho">Carrinho de compras </router-link>
      </li>
      <li>
        <router-link to="/cadastro.usuario">Cadastro Usuário </router-link>
      </li>
    </ul>
  </div>
</template>
