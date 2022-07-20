<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      Message <input type="text" v-model="message" />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import SocketioService from "../services/socketio.service.js";

export default {
  name: "HomeView",
  created() {
    SocketioService.setupSocketConnection();
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage() {
      SocketioService.sendMessage(this.message);
    },
  },
};
</script>
