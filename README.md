# REST API built with Node, Express, MongoDB

## Routes
Base URL - [REST_API](https://restcrudapi.herokuapp.com)

This API consists of five(5) routes namely:

* **/getUsers** - This fetches all the Users from the DB
* **/getOneUser** - This fetches one user from the DB based on the userId passed
* **/createUser** - This creates a new User with the parameters (name, email and country)
* **/updateUser** - This updates a specific User by passing the userId
* **/deleteUser** - This deletes a specific User by passing the userId

## Sample Result for each route

* **/getUsers** - ``{
  "users": [
    {
      "_id": "609bba8ad373911ba876d66a",
      "name": "Kalson",
      "email": "saintkalson",
      "country": "Nigeria",
      "__v": 0
    },
    {
      "_id": "609bbaf9d373911ba876d66b",
      "name": "david",
      "email": "saint@test.com",
      "country": "Nigeria",
      "__v": 0
    },
    {
      "_id": "609be22cbe8c0b0004ba1100",
      "name": "emmy",
      "email": "emmy@test.com",
      "country": "Benin",
      "__v": 0
    }
  ],
  "message": "users fetched successfully"
}``
