import { createScopedElement } from "./jsxRuntime";
import * as React from "react";
import { platform } from "./platform";
import { computeBrowserInfo } from "./browser";
import { DOMContext, getDOM } from "../lib/dom";
export var SSRContext = /*#__PURE__*/React.createContext({
  platform: null,
  userAgent: "",
  browserInfo: undefined
});
/**
 * @see https://vkcom.github.io/VKUI/#/SSR
 */
export var SSRWrapper = function SSRWrapper(_ref) {
  var userAgent = _ref.userAgent,
    browserInfo = _ref.browserInfo,
    children = _ref.children;
  if (!browserInfo && userAgent) {
    browserInfo = computeBrowserInfo(userAgent);
  }

  // TODO: Каждый раз создаётся новый объект для контекста - плохо
  var contextValue = {
    platform: platform(browserInfo),
    browserInfo: browserInfo,
    userAgent: userAgent
  };

  // TODO: move to state, and update in effect?
  var dom = getDOM();
  return createScopedElement(SSRContext.Provider, {
    value: contextValue
  }, createScopedElement(DOMContext.Provider, {
    value: dom
  }, children));
};
//# sourceMappingURL=SSR.js.map