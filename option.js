var MyClass = L.Class.extend({
	options: {
myOption1: 'foo',
myOption2: 'bar'
	}
});

var MyChildClass = MyClass.extend({
	options: {
myOption1: 'baz',
myOption3: 5
	}
});

var a = new MyChildClass();
a.options.myOption1; // 'baz'
a.options.myOption2; // 'bar'
a.options.myOption3; // 5