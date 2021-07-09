<template>
  <header class="flex">
    <div class="branding flex">
      <img src="@/assets/logo.svg" alt="" />
    </div>
    <div class="sidenav right">
      <div class="nav active"><font-awesome-icon :icon="['fas', 'skull']" class="icon"/></div>
      <div class="nav "> <font-awesome-icon :icon="['fas', 'cog']" class="icon"/></div>
      <div class="nav "><font-awesome-icon :icon="['fas', 'igloo']" class="icon"/></div>
    </div>
  </header>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas);
library.add(far);
export default {
  name: "navigation",
};
</script>

<style lang="scss" scoped>
//@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css);


header {
  z-index: 99;
  flex-direction: row;
  background-color: var(--mine-gray);
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
 // depends on text size
  position: relative;
  height: 100%;
  gap: 40px;
  @media (min-width: 900px) {
    flex-direction: column;
  }

  .nav {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 1000;
    //transition: all 0.4s ease;
    cursor: pointer;
    color: var(--mine-text-gray);
    padding: 22px;
    &:hover {
      color: var(--mine-blue) !important
    }

    .icon {
      text-align: center;
      font-size: 20px;
      height: 100%;
      position: relative;
    }


  }

  .active {
    color: var(--mine-blue) !important;
    border-top: 3px solid var(--mine-blue);
    @media (min-width: 900px) {
       border-left: 3px solid var(--mine-blue);
       border-top:none;
    }
  }

  

}
</style>
