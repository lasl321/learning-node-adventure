// var fs = require('fs');

// function calculateByteSize() {
//     var totalBytes = 0,
//         i,
//         filenames,
//         stats;
//     filenames = fs.readdirSync(".");
//     for (i = 0; i < filenames.length; i ++) {
//         stats = fs.statSync("./" + filenames[i]);
//         totalBytes += stats.size;
//     }
//     console.log(totalBytes);
// }

// calculateByteSize();

/****************************************************************************/

// var fs = require('fs');

// var count = 0,
//     totalBytes = 0;

// function calculateByteSize() {
//     fs.readdir(".", function (err, filenames) {
//         var i;
//         count = filenames.length;

//         for (i = 0; i < filenames.length; i++) {
//             fs.stat("./" + filenames[i], function (err, stats) {
//                 totalBytes += stats.size;
//                 count--;
//                 if (count === 0) {
//                     console.log(totalBytes);
//                 }
//             });
//         }
//     });
// }

// calculateByteSize();

/********************************************************************** */

// var fs = require('fs');

// var path1 = "./",
//     path2 = ".././";

// function countFiles(path) {
//     var filenames = fs.readdirSync(path);
//     return filenames.length;
// }

// console.log(countFiles(path1) + " files in " + path1);
// console.log(countFiles(path2) + " files in " + path2);

/************************************************************************** */

var fs = require('fs');

var path1 = "./",
    path2 = ".././",
    logCount;

function countFiles(path, callback) {
    fs.readdir(path, function (err, filenames) {
        callback(err, path, filenames.length);
    });
}

logCount = function (err, path, count) {
    console.log(count + " files in " + path);
};

countFiles(path1, logCount);
countFiles(path2, logCount);
