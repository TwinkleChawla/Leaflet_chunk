var MyClass = L.Class.extend({
	initialize: function (greeter) {
this.greeter = greeter;
	},

	greet: function (name) {
alert(this.greeter + ', ' + name)
	}
});
var a = new MyClass("Hello");
a.greet("World");