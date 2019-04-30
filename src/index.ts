import * as FSTreeDiff from "fs-tree-diff";

export function main() {
  return FSTreeDiff.fromPaths(["."]);
}