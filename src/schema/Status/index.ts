
export enum Status {
  parseError = 0,     // 因為內容錯誤，導致解析方法出現runtime error
  semanticError = 1,  // 因為內容缺失，導致解析方法無法判斷結果
  success = 2         // 解析成功
}
