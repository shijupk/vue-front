<template>
  <header class="flex">
    <div class="branding flex">
      <img src="@/assets/dashboard-report-white.svg" alt="" />
    </div>
  </header>
</template>

<script>
export default {
  name: "navigation",
};
</script>

<style lang="scss" scoped>
header {
  z-index: 99;
  flex-direction: row;
  background-color: #1e2139;
  @media (min-width: 900px) {
    min-height: 100%;
    min-width: 50px;
    flex-direction: column;
    border-radius: 0 2px 2px 0;
  }

  .branding {
    border-radius: 0 8px 8px 0;
    background-color: #7c5dfa;
    justify-content: center;
    padding: 10px;
    @media (min-width: 900px) {
      width: 100%;
    }

    img {
      width: auto;
      height: 20px;
    }
  }
}
</style>
