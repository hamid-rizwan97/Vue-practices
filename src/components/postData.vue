<template>
  <div class="parent">
    <h1>HTTP Requests</h1>
    <div class="form-group">
      <label>Username</label>
      <input class="form-control" type="text" v-model="user.name" />
    </div>
    <div class="form-group">
      <label>Email</label>
      <input class="form-control" type="text" v-model="user.mail" />
    </div>
    <button @click.prevent="submit()">submit</button>
    <hr />
    <button @click="getData()">Get Data</button>
    <ul>
      <li v-for="u in users">
        <p>Name: {{ u.name }}</p>
      <p>Email: {{ u.mail }}</p>
    </li>
     
    </ul>
  </div>
</template>
<script>
//import { response } from 'express';

//import { response } from 'express';

export default {
  data() {
    return {
      user: {
        name: "",
        mail: "",
      },
      users: [],
    };
  },
  methods: {
    submit() {
      this.$http
        .post(
          "",
          this.user
        )
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    },
    getData() {
      this.$http
        .get(
          "https://practice-http-b61ab-default-rtdb.firebaseio.com/data.json"
        )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const result = [];
          for (let key in data) {
            result.push(data[key]);
          }
          this.users = result;
        });
    },
  },
};
</script>
