var glob = require('glob');
glob('test/*.js', function (error, matches) {
    if (error) {
        console.log(error);
        return;
    }

    console.log(JSON.stringify(matches));
}).on('match', function (match) {
    console.log('this is a match', match);
});