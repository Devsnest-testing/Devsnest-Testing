const { chai, mocha } = window;
const { assert, expect } = chai;

const detailsTag = document.querySelector('details')
const test = document.getElementById('test');

test.addEventListener('click', () => {
    mocha.run();
})

describe("Testing......", () => {
    // Checking <details> tag
    it('<details> tag should exists', async () => {
        assert.exists(detailsTag)
    })
})
