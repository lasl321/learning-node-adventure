var fs = require('fs'),
    oldFilename,
    newFilename,
    isSymLink;

oldFilename = "./processId.txt";
newFilename = "./processIdOld.txt";

fs.chmodSync(oldFilename, 777);
fs.renameSync(oldFilename, newFilename);

isSymLink = fs.lstatSync(newFilename).isSymbolicLink();

console.log(isSymLink);

console.log('********************');

newFilename = "./processId.txt";
oldFilename = "./processIdOld.txt";

fs.chmod(oldFilename, 777, function (err) {
    fs.rename(oldFilename, newFilename, function (err) {
        fs.lstat(newFilename, function (err, stats) {
            var isSymLink = stats.isSymbolicLink();
        });
    });
});