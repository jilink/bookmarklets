javascript: (function () {
	if (window.location.href.includes("vscode.dev")) {
		window.location.replace(
			window.location.href.replace(
				"vscode.dev/", ""
			)
				.replace("github", "github.com"))

	}
	else {
		window.location.replace(`http://vscode.dev/${window.location.href}`)
	}

})();
