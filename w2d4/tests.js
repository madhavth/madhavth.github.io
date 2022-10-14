describe("filter banned words", function () {
    it("take a string and filter out the banned words", function () {
        const bannedWords = ['this', 'that', 'bad'];
        assert.equal("this that bad word".filter(...bannedWords), 'word');
    });

    it("test case 2 filter banned word", function () {
        assert.equal("this is not a good idea".filter("not"), "this is a good idea");
    });
});

describe("bubble sort", function () {
    it("bubble sort extension for array", function () {
        const arr = [3, 4, 2, 1];
        assert.deepEqual(arr.bubbleSort(), [1, 2, 3, 4]);
    });

    it("bubble sort second pass", function() {
       const arr2= [1,3,2,2,1];
       assert.deepEqual(arr2.bubbleSort(), [1,1,2,2,3]);
    });
});


describe("testing inheritance with teacher class", function() {
    it("teacher teach property", function() {
        const teacher = new Teacher();

        teacher.initialize("Best", 40);
        assert.equal(teacher.teach("WAP"), "Best is now teaching WAP");
    });
});
