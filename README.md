# new-js-be-framework-approach

Prequequisite: As we know, in any outsource company, one of the most important thing to identify your conding skill level is the knowledge about the frameworks that the company desires and you can use them. Of course, there are tons of JS frameworks that can workaround for backend developers, but some you are familiar with, some you are not, so here is how i learn to catch up with the framework and 

1) Server:
- Able to parse body with form-data
- Upload handler
- Able to connect or switch between dbms
- CORS handler: CSRF token, allowed origins, https
- Internal monitor (pm2, docker)

2) Core:
- Lifecycle
- Dependency injection
- Pattern
- Hidden infrastructure

3) CRUD:
- Custom DTO layers intergration
- Custom serialized layers intergrations
- Custom Error handler
- CLI usage.
- Swagger

4) RBAC:
- Basic roles normal user access to normal api (without / admin)
- Basic CRUD authority.

5) Time:
- Store time as utc (whatever it is timestamp or date string)
- All time comparisions in db and server are under UTC time

6) External Connection:
- Save image on external storage(if you have account)
- Send email (if you have smtp server)
- Chat prototype on firebase: Room, Participants, Message
- Google analytics request perday
- Log service

7) Test writing:
- Functionally test.
- Seed data.

8) Read more about the frameworks.

That's it.

PS: Quick example with FastifyJS and MikrORM

1) What is the purpose?
This app is a quick demo of the new js approach

2) What is the structure of the app?
Like ExpressJS framework, this app is mainly focused on JS, but because prisma.io is typescript based, so we will write this project using typescript.

The directory structure:
routes
services
schema

3) How to run the project?
npm run start

4) References:

- Before you start, you must generate prisma schema in your source code, run "npm run generate"
PS: Quick example with FastifyJS and PrismORM
