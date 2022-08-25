
const { chai, mocha } = window;
const { assert, expect } = chai;

const buttonTag = document.querySelector('button')
const buttonTagReset = document.querySelector('button[type="reset"]')
const buttonTagSubmit = document.querySelector('button[type="submit"]')
const test = document.getElementById('test');

test.addEventListener('click', () => {
    mocha.run();
})

describe("Testing......", () => {
    // Checking <button> tag 
    it('<button> should exists', async () => {
        assert.exists(buttonTag)
    })

    // Checking <button> tag of type "reset"
    it('<button> of type "reset" should exists', async () => {
        assert.exists(buttonTagReset)
    })

    // Checking <button> tag of type "submit"
    it('<button> of type "submit" should exists', async () => {
        assert.exists(buttonTagSubmit)
    })
})
