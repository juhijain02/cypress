export class baseservice {

    clickButton(pressme) {
        cy.get(pressme).click()
    }

    patientName(length) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        let chatlen = chars.length
        let result = ''
        let count = 0
        while (count < length) {
            result = result + chars.charAt(Math.floor(Math.random() * chatlen))
            count = count + 1
        }
        return result
    }

    contactNumber(length) {
        let result=''
        let count=0
        let numbs='1234567890'
        let numlength=numbs.length
        while(count<length)
        {
            result=result + numbs.charAt(Math.floor(Math.random() * numlength))
            count=count+1
        }
        return result
    }
}