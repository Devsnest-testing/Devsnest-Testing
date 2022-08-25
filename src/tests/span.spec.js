const { chai, mocha } = window;
const { assert, expect } = chai;

const spanTag = document.querySelector('span')
const test = document.getElementById('test');

test.addEventListener('click', () => {
    mocha.run();
})

describe("Testing......", () => {
    // Checking <span> tag 
    it('<span> should exists', async () => {
        assert.exists(spanTag)
    })
})