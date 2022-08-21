var chai = require('chai')

var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

// ASSERT
describe('USING ASSERT', () => {
    let username = 'CODE'
    it('type should be string', () => {
        assert.typeOf(username, 'string')
    })

    it('value should be CODE', () => {
        assert.strictEqual(username, 'CODE')
    })

    it('length should be 4', () => {
        assert.strictEqual(username.length, 4)
    })

    it('using lengthOf method', () => {
        assert.lengthOf(username, 4)
    })
})

// SHOULD
describe('USING SHOULD', () => {
    let username = 'CODE'
    it('type should be string', () => {
        username.should.be.a('string')
    })

    it('value should be CODE', () => {
        username.should.equal('CODE')
    })

    it('length should be 4', () => {
        username.should.have.lengthOf(4)
    })

    it('using lengthOf method', () => {
        (username.length).should.equal(4)
    })
})

// EXPECT
describe('USING EXPECT', () => {
    let username = 'CODE'
    let obj = {
        item: [{
            id: 1,
            name: 'Ambani'
        }],
        title: "This is title",
        address: {
            country: "INDIA",
            phone: ['1234567890', '0987654321']
        }
    }
    it('type should be string', () => {
        expect(username).to.be.a('string')
    })

    it('value should be CODE', () => {
        expect(username).to.equal('CODE')
    })

    it('length should be 4', () => {
        expect(username.length).to.equal(4)
    })

    it('using lengthOf method', () => {
        expect(username).to.have.lengthOf(4)
    })

    it('obj fields should be item and title', () => {
        expect(obj).to.have.all.keys('item', 'title', 'address')
    })

    it('obj field item should have 1 length', () => {
        expect(obj).to.have.property('item').with.lengthOf(1)
    })

    it('checking phone in obj of address field', () => {
        expect(obj).to.have.nested.property('address.phone')
        expect(obj).to.have.nested.property('address.phone').with.lengthOf(2)
        expect(obj).to.have.nested.property('address.phone[0]').equal('1234567890')
        expect(obj).to.have.nested.include({ 'address.country': 'INDIA' })
        expect(obj).to.have.nested.include({ 'address.phone[1]': '0987654321' })
    })
})
