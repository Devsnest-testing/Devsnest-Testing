
const { chai, mocha } = window;
const { assert, expect } = chai;

const tableTag = document.querySelector('table')
const trTag = document.querySelectorAll('tr')
const thTag = document.querySelectorAll('th')
const tdTag = document.querySelectorAll('td')
const test = document.getElementById('test');

test.addEventListener('click', () => {
    mocha.run();
})

describe("Testing......", () => {
    // Checking table of 2 rows and 3 columns
    it('<li> should exists of text "Coffee" and "Tea"', async () => {
        console.log(trTag.length)
        assert.exists(tableTag)
        // assert.equal(trTag)
        // assert.equal(thTag)
        // assert.equal(tdTag)
    })
})
