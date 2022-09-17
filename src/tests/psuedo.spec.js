const { chai, mocha } = window;
const { assert, expect } = chai;

const test = document.getElementById('test');

test.addEventListener('click', () => {
    mocha.run();
})

function getCssPropertyForRule(rule, prop) {
    var sheets = document.styleSheets;
    var slen = sheets.length;
    for (var i = 0; i < slen; i++) {
        var rules = document.styleSheets[i].cssRules;
        var rlen = rules.length;
        for (var j = 0; j < rlen; j++) {
            if (rules[j].selectorText == rule) {
                return rules[j].style[prop];
            }
        }
    }
}

// console.log(getCssPropertyForRule('p:hover', 'background-color') + "😅💪🏼☕☕");

describe("testing........", () => {
    it("Change background color to cyan on hover", async () => {
        const pTag = document.querySelector('.p')
        let pStyles = getComputedStyle(pTag, ":focus")
        let pStyles2 = getComputedStyle(pTag, ":focus").getPropertyValue('background-color')

        console.log(pStyles.backgroundColor + "😂")
        console.log(pStyles2 + "😂😂");
        assert.equal(pStyles.backgroundColor, 'rgb(0, 255, 255)');
    });
})
