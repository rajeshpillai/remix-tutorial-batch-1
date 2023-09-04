import {store} from "../../db/store";

const Api = {
  users: {
    all: async function () {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await resp.json();
    
      return users;
    },
    insert: async function (values) {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body : JSON.stringify(values),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });

      const data = await resp.json();
      store.users.push(data);
      return data;
    }
  }
}

export {Api};