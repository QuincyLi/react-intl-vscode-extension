import { Hover } from "vscode";
import translation from "../translation/translation";

function translatedHover(document, position) {
  try {
    const range = document.getWordRangeAtPosition(position);
    const word = document.getText(range);
    // let separator = null;
    // if (isWin()) {
    //   separator = "\\";
    // } else {
    //   separator = "/";
    // }
    // const relativePath = getFilePathByTextDocument(document).split(separator).concat(word).join('.');
    const result = [];
    for (const key of Object.keys(translation)) {
      if (key.includes(word)) {
        result.push(translation[key]);
      }
    }
    const content = result.join("\n");
    console.log(result);
    return new Hover(content);
  } catch (error) {
    return new Hover("There is no translation");
  }
}

export default translatedHover;