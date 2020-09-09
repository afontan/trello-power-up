/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';

TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
        return t.card('name')
            .get('name')
            .then(function(cardName){
                console.log('We just loaded the card name for fun222: ' + cardName);
                return [{
                    // It's best to use static badges unless you need your
                    // badges to refresh.
                    // You can mix and match between static and dynamic
                    text: 'Lu, si estas leyendo esto me debes un beso',
                    icon: BLACK_ROCKET_ICON, // for card front badges only
                    color: null
                }];
            });
    }
});
