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
    spMat.load(fileName);
}

exports.loadRatingsMoviesDataset = function (store, fileName) {
    fileName = fileName == undefined ? __dirname + '/ratingsMovies.ldjson' : fileName;
    store.loadJson(fileName);
}