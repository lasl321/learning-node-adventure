var glob = require('glob');
glob('test/*.js', function (error, matches) {
    if (error) {
        console.log(error);
        return;
    }

    console.log(JSON.stringify(matches));
});