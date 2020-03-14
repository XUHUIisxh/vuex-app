<template>
  <div id="app">
    <div class="container">
      <add-todo></add-todo>
      <todos></todos>
    </div>
  </div>
</template>

<script>
import todos from './components/todos'
import addTodo from './components/addTodo'
export default {
  name: 'app',
  components: {
    todos,
    addTodo
  }
}
</script>

<style >
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
