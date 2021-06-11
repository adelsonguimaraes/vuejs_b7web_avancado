<template>
  <div>
    <h4>Página do usuário</h4>
    <span>Id do usuário atual {{ $route.params.id }}</span>

    <hr>

    <router-view></router-view>

  </div>
</template>
