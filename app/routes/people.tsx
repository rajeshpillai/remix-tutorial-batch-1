import { useEffect, useRef } from "react";
import {Form, Link, useActionData, useLoaderData, useNavigation, useFetcher} from "@remix-run/react";
import { ActionFunction, redirect } from "@remix-run/node";


import {Api} from "~/utils/api.server";
import {store} from "../../db/store";

export async function loader() {
  // return [
  //   {id: +new Date(),
  //   name: "Chandra",
  //   username: "moon"},
  //   {
  //     id: +new Date(),
  //     name: "Mayur",
  //     username: "peacock"
  //   }
  // ]

  console.log("Store: ", store.users);
  if (store.users.length === 0) {
    const users = await Api.users.all();
    console.log("Users: ", users);
    store.users = users;
  }
  return store.users;

}

export async function action({request})  {
  let formData = await request.formData();

  // todo: 
  let {...values} = Object.fromEntries(formData);
  const data = await Api.users.insert(values);

  //return {success: true};
  // todo:
  return redirect("/people");
}

export default function People() {
  const people = useLoaderData();
  console.log("PEOPLE: ", people);
  return (
    <div>
      <h2>Friend and Families list</h2>
      <ul>
        {people.map(person => (
           <li key={person.id}>{person?.name} - {person?.username}</li>
          )
        )}
        <li>
              <Form replace method="post">
                <input type="text" name = "name" /> { " "}
                <input type="text" name="username" /> { " "}
                <button  type="submit">Add</button>
              </Form>
           </li>
      </ul>
    </div>
  )
}