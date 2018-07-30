var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var lat = 11;
        var long = 12;
        var from = 'Joejoe';
        var url = 'https://www.google.com/maps?q=11,12';
        var message = generateLocationMessage(from, lat, long);
        
        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toEqual(from);
        expect(message.url).toEqual(url);
    });
});