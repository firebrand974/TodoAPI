const {MongoClient, ObjectID}  = require ('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
     if (err) {
         return console.log(err);
     }
     console.log('connected');
     const db = client.db('TodoApp');

      db.collection('Users').find({_id: new ObjectID("5bbb0c81e3fe26091a4796bb")}).toArray().then((docs) => {
          console.log(JSON.stringify(docs , undefined, 2));

      }).catch((err) => {
          console.log(err);
      });

     client.close();
});