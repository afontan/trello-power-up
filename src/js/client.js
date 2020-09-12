/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';

TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
        t.lists('all')
            .then(function (lists) {
                console.log(JSON.stringify(lists, null, 2));
            });
        return t.card('all')
            .then(function(card){
                console.log(JSON.stringify(card, null, 2));
                return [{
                    // It's best to use static badges unless you need your
                    // badges to refresh.
                    // You can mix and match between static and dynamic
                    text: 'Some text',
                    icon: BLACK_ROCKET_ICON, // for card front badges only
                    color: 'orange'
                }];
            });
    }
});
