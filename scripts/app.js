define(function (){
	require.config({
		baseUrl: "scripts",
	});

	require(["app/main"], function(main){
		main.foo();
		main.bar();
	})
});