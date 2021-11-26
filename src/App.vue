<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <HelloWorld msg="Welcome to Your Vue.js App"/>v
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
  <ol>
    <!-- Создание экземпляра компонента todo-item -->
    <todo-item>kopkp</todo-item>
  </ol>
  <div>2222</div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'

const TodoItem = {
  name: 'todo-item',
  template: `<li>Это одна из задач</li>`
}
export default {

  components: {
    TodoItem,
    HelloWorld,

  },
  data() {
    return {
      message: 123123123
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
