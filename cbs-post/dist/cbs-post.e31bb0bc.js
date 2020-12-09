// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FibsPost = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FibsPost, _HTMLElement);

  var _super = _createSuper(FibsPost);

  function FibsPost() {
    var _this;

    _classCallCheck(this, FibsPost);

    _this = _super.call(this);
    _this.shadow = _this.attachShadow({
      mode: 'open'
    }); // sets and returns 'this.shadowRoot'
    //console.log("Head", Head)
    // STYLE

    var styleEl = document.createElement("style");
    styleEl.innerHTML = headStyle;

    _this.shadow.appendChild(styleEl);

    return _this;
  }

  _createClass(FibsPost, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      console.log('Connected', this);
      console.log("this", this.getAttribute("title"));
      var possibleProps = ["title", "description", "authorLink", "authorName", "avatar", "data"];
      var props = {};
      possibleProps.forEach(function (pp) {
        props[pp] = _this2.getAttribute(pp);
      });
      console.log("props", props);
      var Head = headMarkup(_objectSpread({}, props)); // WRAPPER

      var wrapper = document.createElement("div");
      wrapper.className = "fibs-post-wrapper";
      wrapper.innerHTML = Head;
      this.shadow.appendChild(wrapper);
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      console.log('Custom square element attributes changed.');
    }
  }]);

  return FibsPost;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

var headMarkup = function headMarkup(_ref) {
  var title = _ref.title,
      description = _ref.description,
      authorLink = _ref.authorLink,
      authorName = _ref.authorName,
      avatar = _ref.avatar,
      date = _ref.date;
  return "\n\n    <div class=\"head\">\n        <h1>".concat(title, "</h1>\n        <p>").concat(description, "</p>\n        <div class=\"author-box\">\n            <div class=\"avatar-wrapper\">\n                <a href=\"").concat(authorLink, "\" target=\"_blank\">\n                    <div class=\"avatar-box\">\n                        <img src=\"").concat(avatar, "\" alt=\"avatar\">\n                    </div>\n                </a>\n            </div>\n            <div>\n                <div>\n                    <p class=\"author-name-box\">\n                        <a href=\"").concat(authorLink, "\" target=\"_blank\">\n                            ").concat(authorName, "\n                        </a>\n                    </p>\n                    <p class=\"date\">").concat(date, "</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <template>\n        <section>\n            <slot></slot>\n            <button>OK</button>\n        </section>\n        <footer>Glad you're here!</footer>\n    </template>\n");
};

var headStyle = "\n    body {\n        font-family: GT-Walsheim, \"Neue Helvetica W02\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    }\n    .fibs-post-wrapper { width:100%; }\n    h1 { \n        box-sizing: inherit;\n        color: var(--text-color, inherit);\n        font-family: GT-Walsheim, \"Neue Helvetica W02\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        font-size: 40px;\n        font-variant: common-ligatures;\n        font-weight: 600;\n        letter-spacing: -1.5px;\n        line-height: 1.1;\n        margin: 0px;\n        outline: none;\n        padding: 0px;\n        text-align: center;\n        text-rendering: geometricprecision;\n        text-size-adjust: inherit;\n    }\n    @media only screen and (min-width: 375px) { \n        h1 { \n            font-size: 52px;\n            letter-spacing: -1.5px;\n        }\n    }\n    @media only screen and (min-width: 768px) { \n        h1 { \n            font-size: 64px;\n            letter-spacing: -1.5px;\n        }\n    }\n    @media only screen and (min-width: 1024px) { \n        h1 { \n            font-size: 80px;\n            letter-spacing: -2.3px;\n        }\n    }\n\n    /*-------------------EXCERPT----------------------------------------*/\n\n    div.head p { \n        box-sizing: inherit;\n        font-size: 20px;\n        font-variant: common-ligatures;\n        letter-spacing: -0.5px;\n        line-height: 1.5;\n        margin: 0px;\n        outline: none;\n        text-align: center;\n        text-size-adjust: inherit;\n    }\n    @media only screen and (min-width: 425px) { \n        div.head p { \n            font-size: 28px;\n            letter-spacing: -0.5px;\n        }\n    }\n\n    /*-----------------------AUTHOR------------------------------------*/\n\n    div.author-box { \n        align-items: center;\n        distribute: center;\n        -webkit-box-align: center;\n        -webkit-box-pack: center;\n        align-items: center;\n        box-sizing: inherit;\n        display: flex;\n        flex-direction: row;\n        font-size: 20px;\n        font-variant: common-ligatures;\n        justify-content: center;\n        line-height: 40px;\n        outline: none;\n        text-size-adjust: inherit;\n    }\n    div.avatar-box {\n        cursor: pointer;\n        display: inline-block;\n        font-size: 20px;\n        height: 40px;\n        left: 0px;\n        line-height: 40px;\n        outline: none;\n        position: relative;\n        right: 0px;\n        text-size-adjust: inherit;\n        top: 0px;\n        vertical-align: top;\n        width: 40px;\n        overflow:hidden;\n    }\n    div.avatar-box:before {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: 0;\n        border-radius: 500px;\n        width: 100%;\n        height: 100%;\n        z-index: 200;\n        box-shadow: 0 0 0 1px rgba(0,0,0,0.1) inset;\n    }\n    div.avatar-box image{\n        position:relative;\n        opacity: 1;\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        border-radius: 500px;\n        display: block;\n        -webkit-user-drag: none;\n        -webkit-transition: 0.2s opacity;\n        transition: 0.2s opacity;\n    }\n    p.author-name-box { \n        color: #111;\n        box-sizing: inherit;\n\n        font-weight: 600;\n        letter-spacing: -0.1px;\n        line-height: 1.5;\n        margin: 0px;\n        outline: none;\n        text-size-adjust: inherit;\n    }\n\n    p.date {\n        box-sizing: inherit;\n        color: ##555;\n        box-sizing: inherit;\n        font-size: 14px;\n        font-variant: common-ligatures;\n        letter-spacing: -0.1px;\n        line-height: 1.5;\n        margin: 0px;\n        outline: none;\n        text-size-adjust: inherit;\n    }\n    \n    \n";
customElements.define('fibs-post', FibsPost);
},{}],"../../../../.nvm/versions/node/v12.16.3/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36461" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.nvm/versions/node/v12.16.3/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/cbs-post.e31bb0bc.js.map