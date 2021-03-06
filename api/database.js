const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
let _db = null

const mongoConnect = (callback) => {
    mongoClient.connect('mongodb+srv://Naril:narilos25@cluster0-vtg5t.mongodb.net/practice?retryWrites=true')
    .then(client => {
        console.log('Connected!')
        _db = client.db()
        callback()
    })
    .catch(err=> console.log(err))
}

const getDb = () => {
    if(_db) {
        return _db;
    }
    else {
        throw err;
    }
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb