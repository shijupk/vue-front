<template>
  <header class="flex">
    <div class="branding flex">
      <img src="@/assets/logo.svg" alt="" />
    </div>
    <div class="sidenav right">
      <div class="nav"><div class="icon fa fa-home"></div></div>
      <div class="nav active"><div class="icon fa fa-database"></div></div>
      <div class="nav active"><div class="icon fa fa-users"></div></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "navigation",
};
</script>

<style lang="scss" scoped>
@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css);

header {
  z-index: 99;
  flex-direction: row;
  background-color: #292930;
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
      height: 30px;
    }
  }
}

.sidenav {
  display: flex;
  flex-basis: 100%;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  position: relative;
  height: 100%;
  @media (min-width: 900px) {
    flex-direction: column;
    width: 100%;
    height: 50%;
    margin-top: 50px;
  }

  .nav {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transition: all 0.4s ease;
    cursor: pointer;
    margin-top: 25px;
    margin-right: 50px;
    color: #808080;
    &:hover {
      color: #fff;
    }

    @media (min-width: 900px) {
      flex-direction: column;
      width: 100%;
      margin-right: 50px;
      margin-top: 50px;
    }

    .icon {
      text-align: center;
      font-size: 20px;
      height: 100%;
      position: relative;
    }

    .active .icon {
      background: #ff5722;
    }
  }
}
</style>
