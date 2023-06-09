db.createUser({
  user: "admin",
  pwd: "admin123",
  roles: [
    {
      role: "readWrite",
      db: "noteworx",
    },
  ],
});

db.createCollection("notes");
