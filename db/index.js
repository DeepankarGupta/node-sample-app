const MongoClient = require('mongodb').MongoClient;

const db_url = process.env.DB_URL;

let db;

const connect = async() => {
    let client = await MongoClient.connect(db_url);
    db = client.db()
}

const getDB = () => {
    return db;
}

module.exports = {
    connect,
    getDB
}