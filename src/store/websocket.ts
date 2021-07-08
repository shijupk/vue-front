export default function createWebSocketPlugin(socket) {
  return (store) => {
    socket.onmessage = function (event) {
      console.log(event.data);
      store.commit("SET_DUMMY", event.data);
      store.dispatch("GET_SITES_INFO");
    };
  };
}
