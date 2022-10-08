<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

const send = ref('')
const reply = ref('')

const sendMsg = async () => {
  try {
    window.electronAPI.echo(send.value).then((result: String) => {
      reply.value += `echo: ${result}\n`
    })
  }
  catch (error) {
    console.error(error)
  }
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <div class="card">
    <h2>进程间通信</h2>
    <textarea v-model="reply" cols="60" rows="10" disabled />
    <div style="margin-top: 20px">
      <input v-model="send" type="text" placeholder="给主进程发消息">
      <button style="margin-left: 20px" @click="sendMsg">
        Send
      </button>
    </div>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
