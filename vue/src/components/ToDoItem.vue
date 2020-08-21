<template>
  <li>
    <input type="checkbox" value="{{todo.completed}}"/><label>{{todo.name}}</label>
  </li>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: {
    todo: Object
  }
}
</script>
