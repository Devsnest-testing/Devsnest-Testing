const { chai, mocha } = window;
const { assert, expect } = chai;

const formTagGet = document.querySelector('form[method="get"]')
const formTagPost = document.querySelector('form[method="post"]')
const formTagBlank = document.querySelector('form[target="_blank"]')
const formTagInput = document.getElementsByTagName('form')[0].getElementsByTagName('input')
const formTagButton = document.getElementsByTagName('form')[0].getElementsByTagName('button')
const test = document.getElementById('test');

test.addEventListener('click', () => {
    mocha.run();
})

describe("Testing......", () => {
    // Checking <form> tag of method "GET"
    it('<form> of method "GET" should exists', async () => {
        assert.exists(formTagGet)
    })

    // Checking <form> tag of method "POST"
    it('<form> of method "POST" should exists', async () => {
        assert.exists(formTagPost)
    })

    // Checking <form> tag of target "_blank"
    it('<form> of target "_blank" should exists', async () => {
        assert.exists(formTagBlank)
    })

    // Checking <form> with two input fields
    it('<form> tag with two input fields and one button should exists', async () => {
        // console.log(formTagInput.length+"😌😌")
        // console.log(formTagButton)
        assert.equal(formTagInput.length, 2)
        assert.equal(formTagButton.length, 1)
    })
})
