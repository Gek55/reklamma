import _typeof from "@babel/runtime/helpers/typeof";
export function classNames() {
  var result = [];
  for (var i = 0; i < arguments.length; i++) {
    var item = arguments[i];
    if (!item) {
      continue;
    }
    switch (_typeof(item)) {
      case "string":
        result.push(item);
        break;
      case "object":
        for (var key in item) {
          if (item[key]) {
            result.push(key);
          }
        }
        break;
      default:
        result.push("".concat(item));
    }
  }
  return result.length > 1 ? result : result[0] || "";
}
export function classNamesString() {
  var res = classNames.apply(void 0, arguments);
  return typeof res === "string" ? res : res.join(" ");
}
//# sourceMappingURL=classNames.js.map