const { chai, mocha } = window;
const { assert, expect } = chai;

const headerTag = document.querySelector('header')
const test = document.getElementById('test');

test.addEventListener('click', () => {
    mocha.run();
})

describe("Testing......", () => {
    // Checking <header> tag
    it('<header> tag should exists', async () => {
        assert.exists(headerTag)
    })
})
