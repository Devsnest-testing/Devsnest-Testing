const { chai, mocha } = window;
const { assert, expect } = chai;

const button = document.getElementById('btn');
const heading = document.getElementById('heading');
const closeHeading = document.getElementById('closeHeading');
const paraBlue = document.getElementById('paraBlue');
const test = document.getElementById('test');

test.addEventListener('click', () => {
    // mocha.run(() => {
    //     mocha.run(() => {
    //         console.log('ran twice');
    //     })
    // });
    mocha.run();
    // cleanReferencesAfterRun(mocha)
    // console.log(mocha.cleanReferencesAfterRun)
    // mocha.cleanReferencesAfterRun = disabled;
})

describe("Tesing questions", function () {

    it('Heading should be devsnest', () => {
        // console.log(heading.textContent)
        // heading.innerText = 'Devsnest';
        expect(heading.value).to.equal('Devsnest');
    })

    it('Heading tag should be closed', () => {
        // closeHeading.innerText = '</h1>';
        expect(closeHeading.value).to.equal('</h1>');
    })

    it('Set the para color to blue', () => {
        // paraBlue.innerText = 'style="color: blue;"';
        expect(paraBlue.value).to.equal('style="color:blue;"');
    })




});

