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
  background-color:#292930;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  @media (min-width: 900px) {
    min-height: 100%;
    min-width: 50px;
    flex-direction: column;
    border-radius: 0 2px 2px 0;
  }

  .branding {
    border-radius: 0 8px 8px 0;
    justify-content: center;
    padding: 20px;
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
