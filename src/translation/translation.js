import { workspace, window } from 'vscode';
import path from 'path';
import fs from 'fs';

let instance = null;
let latestPath = null;

function translated() {
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
  const settingPath = workspace.getConfiguration().get('TranslatedMessage.path');
  if (!instance || latestPath !== settingPath) {
    latestPath = settingPath;
    translated();
  }

  return instance;
}

export function destory() {
  instance = null;
}