# Backend Guide

Basic guide for using endpoints on the backend server.

## Schemas

*Event*
```
{
  eventName: String
  users: User[]
  startTime: Date
  endTime: Date
}
```
*User*
```
{
   username: String,
   password: String,
   events: Event[],
   email: String
}
```

_may be subject to change, check `models/event.js` and `models/user.js` for up-to-date schemas_

## Endpoints

### GET

`GET /events` - get all events

`GET /events/:eventname` - get an event with the given event name

`GET /users/:username` - get an event with the given username

### PUT

`PUT /events/:eventname/:username` - sign up the user with given username for event with given eventname

### POST

`POST /user` - create user in database with given information. `req` object should contain fields `password, username, email`

`POST /event` - create event in database with the given information. `req` object should contain fields `eventName, startTime, endTime`
