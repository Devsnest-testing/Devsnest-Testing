const { chai, mocha } = window;
const { assert, expect } = chai;

const labelTag = document.querySelector('label')
const test = document.getElementById('test');

test.addEventListener('click', () => {
    mocha.run();
})

describe("Testing......", () => {
    // Checking <label> tag
    it('<label> should exists', async () => {
        assert.exists(labelTag)
    })
})