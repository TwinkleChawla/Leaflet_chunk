var MyClass = L.Class.extend({
	initialize: function (greeter) {
this.greeter = greeter;
	},

	greet: function (name) {
alert(this.greeter + ', ' + name)
	}
});

// create instance of MyClass, passing "Hello" to the constructor
var a = new MyClass("Hello");

// call greet method, alerting "Hello, World"
a.greet("World");