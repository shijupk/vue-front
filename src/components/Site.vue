<template>
      <transition appear name="tranSite">
 <div class="siteInfo flex">
   <div class ="left flex">
    <span class="siteId">{{siteInfo.siteId}}</span>
    <span class="status-button flex" :class ="siteInfo.statusCode">{{siteInfo.statusCode}}</span>
   </div>
   <div class ="right flex">
     <span class="siteStatus">{{siteInfo.description}}</span>
   </div>
 </div>
      </transition>
</template>

<script>
export default {
    name: "siteInfo",
    props: ["siteInfo"],
};
</script>

<style lang="scss" scoped>
.siteInfo {
  text-decoration: none;
  cursor: pointer;
  gap: 16px;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 20px;
  padding: 28px 32px;
  background-color: #1e2139;
  align-items: center;
  transition: all 1s;
  span {
    font-size: 13px;
  }

  .left {
    align-items: center;
    flex-basis: 40%;
    gap: 16px;

    span {
      flex: 1;
    }

    .siteId {
      text-transform: uppercase;
    }


  }

  .right {
    gap: 16px;
    flex-basis: 60%;
    align-items: center;

    .siteStatus {
      flex: 1;
      font-size: 16px;
      font-weight: 600px;
    }
  }
}
</style>

