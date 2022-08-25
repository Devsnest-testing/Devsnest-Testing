const { chai, mocha } = window;
const { assert, expect } = chai;

const inputTag = document.querySelector('input')
const inputTagText = document.querySelector('input[type="text"]')
const inputTagNumber = document.querySelector('input[type="number"]')
const inputTagSubmit = document.querySelector('input[type="submit"]')
const test = document.getElementById('test');

test.addEventListener('click', () => {
    mocha.run();
})

describe("Testing......", () => {
    // Checking <input> tag 
    it('<input> should exists', async () => {
        assert.exists(inputTag)
    })

    // Checking <input> tag of type "text"
    it('<input> of type "text" should exists', async () => {
        assert.exists(inputTagText)
    })

    // Checking <input> tag of type "number"
    it('<input> of type "number" should exists', async () => {
        assert.exists(inputTagNumber)
    })

    // Checking <input> tag of type "submit"
    it('<input> of type "submit" should exists', async () => {
        assert.exists(inputTagSubmit)
    })
})