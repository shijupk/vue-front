<template>
  <div v-if="sitesLoaded">
    <div v-if="!mobile" class="app flex flex-column">
      <Navigation />
      <div class="app-content flex flex-column">
        <router-view />
      </div>
    </div>
    <div v-else class="mobile-message flex flex-column">
      <h2>Sorry, this app is not supported on Mobile Devices</h2>
      <p>To use this app, please use a computer or Tablet</p>
    </div>
  </div>
  <div v-else class="container app-content empty flex flex-column">
    <Loading/>
    <img src="@/assets/illustration-empty.svg" alt="" />
    <h3>There is nothing here</h3>
    <p>Unable to connect server</p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Navigation from "./components/Navigation";
import Loading from "./components/Loading"
export default {
  data() {
    return {
      mobile: null,
    };
  },
  components:{
    Navigation, Loading,
  },
  created() {
    this.GET_SITES_INFO();
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    ...mapActions(["GET_SITES_INFO"]),
    checkScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    },
  },
    computed: {
    ...mapState(["sitesLoaded"]),
    },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.app {
  background-color: #1C1B21;
  min-height: 100vh;
  @media (min-width: 900px) {
    flex-direction: row !important;
  }

  .app-content {
    padding: 0 20px;
    flex: 1;
    position: relative;
  }
}

.mobile-message {
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1C1B21;
  color: #fff;

  p {
    margin-top: 16px;
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

// animated siteInfo

.tranSite-enter-active,
.tranSite-leave-active {
  transition: 0.8s ease all;
}

.tranSite-enter-from,
.tranSite-leave-to {
  transform: translateX(-700px);
}

button,
.button {
  cursor: pointer;
  padding: 16px 24px;
  border-radius: 30px;
  border: none;
  font-size: 12px;
  margin-right: 8px;
  color: #fff;
}

.dark-purple {
  background-color: #252945;
}

.red {
  background-color: #ec5757;
}

.purple {
  background-color: #7c5dfa;
}

.green {
  background-color: #33d69f;
}

.orange {
  background-color: #ff8f00;
}

.gray {
  background-color: #292930;
}

.dark-gray {
  background-color: #1C1B21;
}
// utility classes

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.container {
  width: 100%;
  padding: 40px 10px;
  max-width: 850px;
  margin: 0 auto;

  @media (min-width: 900px) {
    padding-top: 72px;
  }
}

.nav-link {
  text-decoration: none;
  color: initial;
}

// Status Button Styling

.status-button {
  &::before {
    content: "";
    left: -5px;
    top: -5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 15px;
    animation: pulse 1.5s infinite ease-in;

  }
  font-size: 12px;
  margin-right: 30px;
  align-items: center;
  padding: 8px 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
@keyframes pulse {
  from {
    transform: scale(0.5);
    opacity: 1;
  }
  to {
    transform: scale(1.5);
    opacity: 0;
  }
}
.OK {
  &::before {
    background-color: #33d69f;
  }
  color: #33d69f;
  background-color: rgba(51, 214, 160, 0.1);
}

.Down {
  &::before {
    background-color: #ff4242;
  }
  color: #ff8f00;
  background-color: rgba(255, 145, 0, 0.1);
}

.Maintenance {
  &::before {
    background-color: #ff8f00;
  }
  color: #dfe3fa;
  background-color: rgba(223, 227, 250, 0.1);
}
</style>
