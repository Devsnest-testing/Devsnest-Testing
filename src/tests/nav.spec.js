const { chai, mocha } = window;
const { assert, expect } = chai;

const navTag = document.querySelector('nav')
const test = document.getElementById('test');

test.addEventListener('click', () => {
    mocha.run();
})

describe("Testing......", () => {
    // Checking <nav> tag
    it('<nav> tag should exists', async () => {
        assert.exists(navTag)
    })
})
