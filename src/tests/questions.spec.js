

const brTag = document.querySelector('br')
const spanTag = document.querySelector('span')
const inputTag = document.querySelector('input')
const inputTagText = document.querySelector('input[type="text"]')
const inputTagNumber = document.querySelector('input[type="number"]')
const inputTagSubmit = document.querySelector('input[type="submit"]')
const labelTag = document.querySelector('label')
const ulTag = document.querySelector('ul')
const liTag = document.querySelectorAll('li')
const headerTag = document.querySelector('header')
const navTag = document.querySelector('nav')
const mainTag = document.querySelector('main')
const footerTag = document.querySelector('footer')
const buttonTag = document.querySelector('button')
const buttonTagReset = document.querySelector('button[type="reset"]')
const buttonTagSubmit = document.querySelector('button[type="submit"]')
const tableTag = document.querySelector('table')
const trTag = document.querySelectorAll('tr')
const thTag = document.querySelectorAll('th')
const tdTag = document.querySelectorAll('td')


// Checking <br> tag 
it('<br> should exists', async () => {
    assert.exists(brTag)
})

// Checking <span> tag 
it('<span> should exists', async () => {
    assert.exists(spanTag)
})

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

// Checking <label> tag
it('<label> should exists', async () => {
    assert.exists(labelTag)
})

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


// Checking <header> tag
it('<header> tag should exists', async () => {
    assert.exists(headerTag)
})

// Checking <nav> tag
it('<nav> tag should exists', async () => {
    assert.exists(navTag)
})

// Checking <main> tag
it('<main> tag should exists', async () => {
    assert.exists(mainTag)
})

// Checking <footer> tag
it('<footer> tag should exists', async () => {
    assert.exists(footerTag)
})

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

// Checking table of 2 rows and 3 columns
it('<li> should exists of text "Coffee" and "Tea"', async () => {
    console.log(trTag.length)
    assert.exists(tableTag)
    // assert.equal(trTag)
    // assert.equal(thTag)
    // assert.equal(tdTag)
})
