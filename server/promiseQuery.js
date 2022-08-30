const db =require("./dbConnection")

function promiseQuery(query) {
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        })
    })
}


module.exports = promiseQuery;