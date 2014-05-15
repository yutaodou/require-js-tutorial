define( ['libs/foo','libs/bar'] , function (foo, bar) {
	return {
		foo: function () {
			console.log("foo called");
		},

		bar: function () {
			console.log("bar called");
		}
	};
});