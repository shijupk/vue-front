import { api } from "@/api";
import { createStore, createLogger } from "vuex";
import createWebSocketPlugin from "./websocket";

const debug = process.env.NODE_ENV !== "production";

var ws = new WebSocket("ws://localhost:5555/ws");
const plugin = createWebSocketPlugin(ws);

export default createStore({
  state: {
    sitesInfo: [],
    dummy: "test",
    sitesLoaded: null,
  },
  mutations: {
    SET_SITES_INFO(state, payload) {
      state.sitesInfo = payload;
      state.sitesLoaded = true;
    },
    CLEAR_SITES_INFO(state) {
      state.sitesInfo = [];
    },
    SET_DUMMY(state, payload) {
      state.dummy = payload;
    },
  },
  actions: {
    async GET_SITES_INFO({ commit }) {
      try {
        const response = await api.getSitesInfo();
        var tempsites = [];
        if (response) {
          for (var key in response.data) {
            const data = {
              siteId: response.data[key].siteId,
              description: response.data[key].description,
              statusCode: response.data[key].statusCode,
              notificationDateTime: response.data[key].notificationDateTime,
            };
            tempsites.push(data);
          }
          commit("SET_SITES_INFO", tempsites);
        }
      } catch (error) {
        //dispatchCheckApiError(context, error);
      }
    },
  },
  modules: {},
  strict: debug,
  plugins: debug ? [createLogger(), plugin] : [plugin],
});
