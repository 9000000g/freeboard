const app = require('express')();
const cors = require('cors-express');
app.use(cors());
app.listen(9992);

console.log( 'http://127.0.0.1:9992/activeCalls.json' );
console.log( 'http://127.0.0.1:9992/onOff.json' );
console.log( 'http://127.0.0.1:9992/location.json' );
console.log( 'http://127.0.0.1:9992/text.json' );
console.log( 'http://127.0.0.1:9992/picture.jpg' );
console.log( 'http://127.0.0.1:9992/picture.json' );
app.get('/activeCalls.json', (req, res) => {
    res.json({
		count: parseInt( Math.random() * 100 )
	});
});

app.get('/onOff.json', (req, res) => {
    res.json({
		value: parseInt( Math.random() * 2 ) == 0? false: true
	});
});

app.get('/location.json', (req, res) => {
    res.json({
		lat: 51.36430 + parseInt( Math.random() * 2 ),
		lon: 35.68714 + parseInt( Math.random() * 2 )
	});
});



var texts = [
	'سلام خوب هستین؟',
	'چه خبر؟',
	'اینورا نمیاین؟',
	'کی میای پس داداش؟',
	'خدافس',
]
app.get('/text.json', (req, res) => {
    res.json({
		value: texts[parseInt( Math.random() * 5 )]
	});
});

app.get('/picture.json', (req, res) => {
    res.json(['picture.jpg']);
});

app.get('/picture.jpg', (req, res) => {
	res.sendFile(`${__dirname}/files/${parseInt( Math.random() * 9 )}.jpg`);
});


/*

t
51.36430
35.68714

532963
3949309.5
*/
