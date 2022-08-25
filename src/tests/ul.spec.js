const { chai, mocha } = window;
const { assert, expect } = chai;

const ulTag = document.querySelector('ul')
const liTag = document.querySelectorAll('li')
const test = document.getElementById('test');

test.addEventListener('click', () => {
    mocha.run();
})

describe("Testing......", () => {
    // Checking <ul> tag
    it('<ul> should exists', async () => {
        assert.exists(ulTag)
    })

    // Checking <ul> and <li> tag
    it('<li> should exists of text "Coffee" and "Tea"', async () => {
        // console.log(liTag[0].innerText)
        // console.log(liTag[1].innerText)
        assert.equal(liTag[0].innerText, 'Coffee')
        assert.equal(liTag[1].innerText, 'Tea')
    })
})
