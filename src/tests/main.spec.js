const { chai, mocha } = window;
const { assert, expect } = chai;

const mainTag = document.querySelector('main')
const test = document.getElementById('test');

test.addEventListener('click', () => {
    mocha.run();
})

describe("Testing......", () => {
    // Checking <main> tag
    it('<main> tag should exists', async () => {
        assert.exists(mainTag)
    })
})
