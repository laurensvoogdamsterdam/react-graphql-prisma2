# Backend of the real estate app

## Quick start

Make sure to crea a ```.env``` file (see .env.sample for an example).
Install the prisma cli to create the db schema in postgres
Examples

  Setup a new Prisma project
  ```$ prisma init```

  Generate artifacts (e.g. Prisma Client)
  ```$ prisma generate```

  Browse your data
  ```$ prisma studio```

  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  ```$ prisma migrate dev```

  Pull the schema from an existing database, updating the Prisma schema
  ```$ prisma db pull```

  Push the Prisma schema state to the database
  ```$ prisma db push```

Once the db is setup you can check this via ```prisma studio``` which will host a simple web app interfacing your database, you can use the commands as shown in the ```package.json``` to run the server.