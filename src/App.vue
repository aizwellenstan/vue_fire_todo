<template>
  <div id="app">
    <div>
      <label>Todo:</label>
      <input type="text" v-model="todo">
      <button @click="submittodo()">Add</button>
    </div>
    <div>
      <ul>
        <li v-for="persontodo of todos" v-bind:key="persontodo['.key']">
          <div v-if="persontodo.edit">
            <input type="text" v-model="persontodo.todo">
            <button @click="saveEdit(persontodo)">Save</button>
            <button @click="cancelEdit(persontodo)">Cancel</button>
          </div>
          <div v-else>
            <p>{{persontodo.todo}}</p>
            <button @click="removetodo(persontodo)">Remove</button>
            <button @click="setEdit(persontodo)">Edit</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { todosRef } from './firebase';


export default {
  data() {
    return {
      todo: '',
      todos: [],
      edit: false,
    }
  },
  firebase: {
    todos: {
      source: todosRef
    }
  },
  methods: {
    submittodo() {
      todosRef.push({ todo: this.todo, edit: false });
      this.todo = '';
    },
    removetodo(todo) {
      todosRef.child(todo['.key']).remove();
    },
    setEdit(todo) {
      todosRef.child(todo['.key']).update({ edit: true });
    },
    saveEdit(person) {
      todosRef.child(person['.key']).update({ todo: person.todo, edit: false })
    },
    cancelEdit(person) {
      todosRef.child(person['.key']).update({
        edit: false
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  background-color: transparent;
  border: 2px solid black;
}
</style>
