<template>
  <div class="home container">
    <!-- Header -->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>DistRad Site Status</h1>
        <span class="sentence"
          >There are {{ sitesInfo.length }} sites status available</span
        >
      </div>
    </div>
    <!-- Sites -->
    <div v-if="sitesInfo.length > 0">
      <Site
        v-for="(siteInfo, index) in sitesInfo"
        :siteInfo="siteInfo"
        :key="index"
      />
    </div>
    <div v-else class="empty flex flex-column">
      <img src="@/assets/illustration-empty.svg" alt="" />
      <h3>There is nothing here</h3>
      <p>No site informatoin available yet!</p>
    </div>
  </div>
</template>

<script>
import Site from "../components/Site";
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {},

  components: {
    Site,
  },
  computed: {
    ...mapState(["sitesInfo", "dummy"]),
    sitesData() {
      return this.sitesInfo;
    },
  },
};
</script>
<style lang="scss" scoped>
list-complete-item {
  transition: all 1s;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}

.home {
  color: #808080;

  .header {
    margin-bottom: 65px;
    .sentence {
      color: #dcdcdc;
    }

    .left,
    .right {
      flex: 1;
    }
    .right {
      justify-content: flex-end;
      align-items: center;

      .button,
      .filter {
        align-items: center;

        span {
          font-size: 12px;
        }
      }

      .filter {
        position: relative;
        margin-right: 40px;
        cursor: pointer;

        img {
          margin-left: 12px;
          width: 9px;
          height: 5px;
        }

        .filter-menu {
          width: 120px;
          position: absolute;
          top: 25px;
          list-style: none;
          background-color: #1e2139;
          box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
            rgba(0, 0, 0, 0.23) 0px 6px 6px;

          li {
            cursor: pointer;
            font-size: 12px;
            padding: 10px 20px;

            &:hover {
              color: #1e2139;
              background-color: #fff;
            }
          }
        }
      }

      .button {
        padding: 8px 10px;
        background-color: #7c5dfa;
        border-radius: 40px;

        .inner-button {
          margin-right: 8px;
          border-radius: 50%;
          padding: 8px;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          img {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }
  .empty {
    margin-top: 160px;
    align-items: center;

    img {
      width: 214px;
      height: 200px;
    }

    h3 {
      font-size: 20px;
      margin-top: 40px;
    }

    p {
      text-align: center;
      max-width: 224px;
      font-size: 12px;
      font-weight: 300;
      margin-top: 16px;
    }
  }
}
</style>
