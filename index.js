var qm = require('qminer');

exports.loadSentimentDataset = function (store, fileName) {
    fileName = fileName == undefined ? __dirname + '/sentiment.ldjson' : fileName;
    store.loadJson(fileName);
}

exports.loadRecommendationDataset = function (store, fileName) {
    fileName = fileName == undefined ? __dirname + '/visits_small.ldjson' : fileName;
    store.loadJson(fileName);
}

exports.loadMoviesDataset = function (store, fileName) {
    fileName = fileName == undefined ? __dirname + '/movies.ldjson' : fileName;
    store.loadJson(fileName);
}

exports.loadForexDataset = function (store, fileName) {
    fileName = fileName == undefined ? __dirname + '/forex.ldjson' : fileName;
    store.loadJson(fileName);
}

exports.loadIrisDataset = function (store, fileName) {
    fileName = fileName == undefined ? __dirname + '/iris.ldjson' : fileName;
    store.loadJson(fileName);
}

exports.getSentimentDatasetFile = function (fileName) {
    return __dirname + '/' + fileName;
}

exports.loadRatingsMatrix = function (spMat, fileName) {
    fileName = fileName == undefined ? __dirname + '/ratingsMatrix.bin' : fileName;
    var fin = qm.fs.openRead(fileName);
    spMat.load(fin);
}

exports.loadRatingsMoviesDataset = function (store, fileName) {
    fileName = fileName == undefined ? __dirname + '/ratingsMovies.ldjson' : fileName;
    store.loadJson(fileName);
}

exports.loadTweetsCount = function (store, fileName) {
    fileName = fileName == undefined ? __dirname + '/tweetCount.json' : fileName;
    JSON.parse(require("fs").readFileSync(fileName, "utf8")).forEach(
        function (data) { store.push(data); }
    );
}
