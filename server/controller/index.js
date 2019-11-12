var methods = {
    test: function test(req, res) {
        res.send('hi , form controller');
    },
    debug: function debug(req, res) {
        res.send('this is ebug test for seperate function');
    }

}

module.exports = methods;
