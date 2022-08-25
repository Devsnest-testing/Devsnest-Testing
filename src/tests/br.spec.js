const { chai, mocha } = window;
const { assert, expect } = chai;

const brTag = document.querySelector('br')
const test = document.getElementById('test');

test.addEventListener('click', () => {
    mocha.run();
})

describe("Testing......", () => {
    // Checking <br> tag 
    it('<br> should exists', async () => {
        assert.exists(brTag)
    })
})
