var sinon = require('sinon')
var chai = require('chai')
var expect = chai.expect;
var Student = require('../controllers/studentCtrl')
var studentObj = new Student()

describe('testing studentCtrl using sinon', () => {

    it('userId should be 12', () => {
        expect(studentObj.userId()).to.be.equal(12)
    })

    // it('counting getInfo', () => {
    //     let spyObj = sinon.spy(studentObj, 'getInfo')
    //     studentObj.home(5)
    //     // expect(spyObj.calledOnce).to.be.true; // to check if getInfo is called once
    //     expect(spyObj.calledTwice).to.be.true; // to check if getInfo is called twice
    // })

    it('checking function argument', () => {
        let spyObj = sinon.spy(studentObj, 'getInfo')
        studentObj.home(12)
        expect(spyObj.calledWith(12, 1)).to.be.true; // to check if getInfo is called twice
    })
})