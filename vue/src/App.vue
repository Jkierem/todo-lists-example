<template>
  <h1>To Do List</h1>
  <form>
    <input name="name" v-model="current" />
    <button v-on:click="onAddToDo">Add to do</button>
  </form>
  <to-do-item 
    v-for="(todo,index) in todos" 
    v-bind:key="index"
    v-bind:todo="todo"
  />
</template>

<script>
import ToDoItem from './components/ToDoItem.vue'

export default {
  name: 'App',
  data:() => ({
    current: "",
    todos: []
  }),
  methods:{
    onAddToDo: function(e){
      e.preventDefault();
      this.todos.push({ name: this.current , completed: false });
      this.current = ""
    }
  },
  components: {
    ToDoItem
  }
}
</script>
