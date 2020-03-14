<template>
  <div>
    <h3>添加内容</h3>
    <div class="ad">
      <form @submit.prevent='onSubmit'>
        <input type="text"
               v-model="text"
               placeholder="添加代办事项......">
        <input type="submit"
               value="提交">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'addTodo',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit() {
      this.addTodo(this.text);
      this.text = ''
    }
  },
}
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>