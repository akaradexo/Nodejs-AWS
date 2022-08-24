var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
//######### ASSERTS ############

describe('---Aspect check---',function(){
    let userName = 'code improve';
    let myList ={
        item:[{
            id:1, name:'demo'
        }],
        title:'user list'
    }

    it("Check string",function(){
        assert.typeOf(userName,'String');
    })
    it("equal match string",function(){
        assert.equal(userName,'code improve');
    })
    it("length match string",function(){
        assert.lengthOf(myList.item,1);
    })
})

//######### SHOULD ############

describe('---Should check---',function(){
    let userName = 'code improve';
    let myList ={
        item:[{
            id:1, name:'demo'
        }],
        title:'user list'
    }
    it("Check string",function(){
        userName.should.be.a('String');
    })
    it("equal check",function(){
        userName.should.equal('code improve');
    })
    it("length check",function(){
        myList.should.have.property('item').with.lengthOf(1);
    })
})

//######### EXPECT ############

describe("---Expect check---",function(){
    let userName = 'code improve';
    let myList ={
        item:[{
            id:1, name:'demo'
        }],
        title:'user list',
        address:{
            country:'India',
            phoneNo:['123456728','9876782190']
        }
    }
    it('string match',function(){
        expect(userName).to.be.a('string')
    })
    it('equal match',function(){
        expect(userName).to.equal('code improve')
    })
    it('length match',function(){
        expect(userName).to.lengthOf(12)
    })
    it('object match',function(){
        expect(myList).to.have.property('item').with.lengthOf(1)
    })
    it('api object match',function(){
        expect(myList).to.have.all.key('item','title','address')
    })
    it('no of phone check',function(){
        expect(myList).to.have.nested.property('address.phoneNo[0]')
    })
    it('country check',function(){
        // expect(myList).to.have.nested.property('address.country')
        expect(myList).to.have.nested.include({'address.country':'India'})
    })
    it('phone check',function(){
        // expect(myList).to.have.nested.property('address.country')
        expect(myList).to.have.nested.include({'address.phoneNo[1]':'9876782190'})
    })
})