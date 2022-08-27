const { chai, mocha } = window;
const { assert, expect } = chai;

const dialogTag = document.querySelector('dialog')
const test = document.getElementById('test');

test.addEventListener('click', () => {
    mocha.run();
})

describe("Testing......", () => {
    // Checking <dialog> tag
    it('<dialog> tag should exists', async () => {
        assert.exists(dialogTag)
    })
})
