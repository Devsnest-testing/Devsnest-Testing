const { chai, mocha } = window;
const { assert, expect } = chai;

const footerTag = document.querySelector('footer')
const test = document.getElementById('test');

test.addEventListener('click', () => {
    mocha.run();
})


describe("Testing......", () => {
    // Checking <footer> tag
    it('<footer> tag should exists', async () => {
        assert.exists(footerTag)
    })
})
