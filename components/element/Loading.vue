<template>
  <div class="loading-wrap">
    <div class="loading"></div>
  </div>
</template>
<style>
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .loading-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loading {
    margin-top: 200px;
    margin-bottom: 100px;
    width: 100px;
    height: 100px;
    border-width: 6px;
    border-style: solid;
    border-color: #000 #000 rgba(0,0,0,0.1) rgba(0,0,0,0.1);
    border-radius: 50%;
    animation: rotate 600ms linear infinite;
  }
</style>
