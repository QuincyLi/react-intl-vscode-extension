import { workspace, window } from 'vscode';
import path from 'path';
import fs from 'fs';

let result = null;

function translated() {
  try {
    const settingPath = workspace.getConfiguration().get('TranslatedMessage.path');
    const { rootPath, workspaceFolders } = workspace;
    const translatedFilePath = path.resolve((rootPath || workspaceFolders) + settingPath);
    if (fs.existsSync(translatedFilePath)) {
      const result = JSON.parse(fs.readFileSync(translatedFilePath));
      return result;
    } else {
      window.showInformationMessage('Cannot find your json file!');
    }
  } catch (error) {
    console.log(error);
  }
}

export function getTranslatedObj() {
  if (!result) {
    result = translated();
  }
  return result;
}

export function destory() {
  result = null;
}

export default getTranslatedObj();