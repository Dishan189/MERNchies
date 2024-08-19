const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient
const mongoURI = 'mongodb+srv://gofood_mern:PMa7BfsJaVOyTWUz@cluster0.qv5bq.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'; // Customer change url to your db you created in atlas
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("food_Category");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
            // listCollections({name: 'food_items'}).toArray(function (err, database) {
            // });
            //     module.exports.Collection = database;
            // });
        }
    })
};

// const mongoose = require('mongoose');
// const mongoURL = 'mongodb+srv://gofood_mern:PMa7BfsJaVOyTWUz@cluster0.qv5bq.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'; //PMa7BfsJaVOyTWUz
// const mongoDB = async () => {
//     await mongoose.connect(mongoURL, { useNewUrlParser: true }, async (err, result) => {
//         if (err) console.log("---", err)
//         else {
//             console.log("connected");
//             const fetched_data = await mongoose.connection.db.collection("food_items");
//             fetched_data.find({}).toArray(async function (err, data) {
//                 const foodCategory = await mongoose.connection.db.collection("food_Category");
//                 foodCategory.find({}).toArray(function (err, catData) {
//                     if (err) console.log(err);
//                     else {
//                         global.food_items = data;
//                         global.food_Category=catData;
//                     }
//                 })
//                 if (err) console.log(err);
//                 else {
//                     global.food_items = data;
//                     // console.log(global.food_items)
//                 }
//             })
//         }
//     });
// }

// module.exports = mongoDB;