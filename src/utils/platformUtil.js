import os from 'os';

export function isWin() {
  return os.platform().includes("win");
}