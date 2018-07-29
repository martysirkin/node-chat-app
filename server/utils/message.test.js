var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', (done) => {
    it('should generate the correct message object', () => {
        var from = 'Jeanne';
        var text = 'La message';   
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toEqual(from);
        expect(message.text).toEqual(text);
   });
});