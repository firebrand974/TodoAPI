const {MongoClient, ObjectID}  = require ('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
     if (err) {
         return console.log(err);
     }
     console.log('connected');
     const db = client.db('TodoApp');

     db.collection('Users').deleteOne({_id: new ObjectID("5bbb2bb3bac6c80d898d40c0")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));

    }).catch((err) => {
        console.log(err);
    });

   client.close();
});