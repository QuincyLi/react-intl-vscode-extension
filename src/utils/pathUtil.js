import path from 'path';
import { workspace } from "vscode";
import { isWin } from './platformUtil';

export function getFilePathByTextDocument(textDocument) {
  const { fileName } = textDocument;
  const { dir } = path.parse(fileName);
  const { rootPath } = workspace;
  let separator = null;
  if (isWin()) {
    separator = "\\src\\";
  } else {
    separator = "/src/";
  }
  return dir.replace(rootPath, '').replace(separator, "");
}