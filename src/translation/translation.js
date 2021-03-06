import { workspace, window } from 'vscode';
import path from 'path';
import fs from 'fs';

let instance = null;

export function translated() {
  try {
    const settingPath = workspace.getConfiguration().get('TranslatedMessage.path');
    const { rootPath, workspaceFolders } = workspace;
    const translatedFilePath = path.resolve((rootPath || workspaceFolders) + settingPath);
    if (fs.existsSync(translatedFilePath)) {
      fs.readFile(translatedFilePath, (err, content) => {
        instance = JSON.parse(content);
      });
    } else {
      window.showInformationMessage('Cannot find your json file!');
    }
  } catch (error) {
    console.log(error);
  }
}

export function getTranslatedObj() {
  return instance;
}

export function destory() {
  instance = null;
}