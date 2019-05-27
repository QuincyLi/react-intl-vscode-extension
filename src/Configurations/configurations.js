import { workspace } from 'vscode';
import { translated } from '../translation/translation';

function addConfigurationListener(context) {
  context.subscriptions.push(workspace.onDidChangeConfiguration(() => {
    translated();
  }));
}

export default addConfigurationListener;