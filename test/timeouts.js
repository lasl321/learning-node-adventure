describe('a suite of tests', function () {
    this.timeout(100);

    it('should take less than 500ms', function (done) {
        this.timeout(400);
        setTimeout(done, 300);
    });

    it('should take less than 500ms as well', function (done) {
        setTimeout(done, 50);
    });
})
