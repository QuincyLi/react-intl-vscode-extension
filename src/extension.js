// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
const translation = require('./translation/translation');
const translatedHover = require('./translatedHover/translatedHover');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "react-intl-message" is now active!');
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		/**
		 * TODO
		 *  refresh translated file
		 */
	});

	translation.getTranslatedObj();

	const hover = vscode.languages.registerHoverProvider({ scheme: 'file', language: 'javascript' }, {
		provideHover: translatedHover.default
	});

	context.subscriptions.push(hover);
	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
	translation.destory();
}

module.exports = {
	activate,
	deactivate
}
