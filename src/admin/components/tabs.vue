<template lang="pug">
ul.tabs__list
  li.tabs__item.tabs__item_activ Скилы
  li.tabs__item Статьи
  li.tabs__item Работы
</template>


<style lang="scss">
  .tabs__list {
    background-color: #f0efe9;
    display: flex;
  }
  
  .tabs__item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: $green;
    width: 180px;
    height: 60px;
    border-right: 2px solid rgba(255,255,255, .7);
    transition: background-color .2s;
    cursor: pointer;
    
    &:hover {
      background-color: rgba(255,255,255, .5);
    }
  }
  
  .tabs__item_activ {
    background-color: #fff;
    cursor: default;
    
    &:hover {
      background-color: #fff;
    }
  }
</style>
