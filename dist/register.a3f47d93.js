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
})({"ts/components/displayMessage.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function displayMessage(messageType, message, targetElement) {
  var element = document.querySelector(targetElement);
  var markup = "<div class=\"alert alert-" + messageType + "\">" + message + "</div>";
  element.innerHTML = markup;
}

exports.default = displayMessage;
},{}],"ts/components/footer.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function Footer() {
  var footer = document.querySelector('#footer');
  var markup = "<div class=\"container\">\n                    <p class=\"float-right\">\n                    <a href=\"#\">Back to top</a>\n                    </p>\n                  </div>";
  return footer.innerHTML = markup;
}

exports.default = Footer;
},{}],"ts/components/header.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function Header() {
  var header = document.querySelector('#header');
  var markup = "<div class=\"collapse bg-dark\" id=\"navbarHeader\">\n                    <div class=\"container\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-8 col-md-7 py-4\">\n                          <h4 class=\"text-white\">Login</h4>\n                        </div>\n                        <div class=\"col-sm-4 offset-md-1 py-4\">\n                          <h4 class=\"text-white\">Contact</h4>\n                          <ul class=\"list-unstyled\">\n                            <li><a href=\"#\" class=\"text-white\">Follow on Twitter</a></li>\n                            <li><a href=\"#\" class=\"text-white\">Like on Facebook</a></li>\n                            <li><a href=\"#\" class=\"text-white\">Email me</a></li>\n                          </ul>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"navbar navbar-dark bg-dark shadow-sm\">\n                    <div class=\"container d-flex justify-content-between\">\n                      <a href=\"/\" class=\"navbar-brand d-flex align-items-center\">\n                          <img src=\"./img/noroff-logo.png\" alt=\"Noroff\" width=\"160\">\n                      </a>\n                      <button\n                        class=\"navbar-toggler\"\n                        type=\"button\"\n                        data-toggle=\"collapse\"\n                        data-target=\"#navbarHeader\"\n                        aria-controls=\"navbarHeader\"\n                        aria-expanded=\"false\"\n                        aria-label=\"Toggle navigation\"\n                      >\n                        <span class=\"navbar-toggler-icon\"></span>\n                      </button>\n                    </div>\n                  </div>";
  return header.innerHTML = markup;
}

exports.default = Header;
},{}],"ts/config/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CART_KEY = exports.USER_KEY = exports.AUTH_TOKEN_KEY = exports.FALLBACK_IMAGE = exports.IMAGE_BASE_URL = exports.SITE_URL = exports.BASE_URL = void 0;
exports.BASE_URL = "http://localhost:1337";
exports.SITE_URL = document.location.origin;
exports.IMAGE_BASE_URL = "http://localhost/public/uploads";
exports.FALLBACK_IMAGE = "https://picsum.photos/240/220";
exports.AUTH_TOKEN_KEY = "authtoken";
exports.USER_KEY = "userkey";
exports.CART_KEY = "cart";
},{}],"ts/api/apiCallWrapper.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiCallWrapper = void 0;

function apiCallWrapper(callback) {
  return __awaiter(this, void 0, Promise, function () {
    var result, _a, err_1;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          result = {
            success: false,
            error: null,
            data: null
          };
          _b.label = 1;

        case 1:
          _b.trys.push([1, 3,, 4]);

          _a = result;
          return [4
          /*yield*/
          , callback()];

        case 2:
          _a.data = _b.sent();
          result.success = true;
          return [3
          /*break*/
          , 4];

        case 3:
          err_1 = _b.sent();
          result.error = err_1;
          return [3
          /*break*/
          , 4];

        case 4:
          return [2
          /*return*/
          , result];
      }
    });
  });
}

exports.apiCallWrapper = apiCallWrapper;
},{}],"ts/api/auth.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.authenticate = void 0;

var index_1 = require("../config/index");

var apiCallWrapper_1 = require("./apiCallWrapper");

function authenticate(usernameOrEmail, password) {
  return __awaiter(this, void 0, void 0, function () {
    var fetchSettings;

    var _this = this;

    return __generator(this, function (_a) {
      fetchSettings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          identifier: usernameOrEmail,
          password: password
        })
      };
      return [2
      /*return*/
      , apiCallWrapper_1.apiCallWrapper(function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , fetch(index_1.BASE_URL + "/auth/local", fetchSettings)];

              case 1:
                return [4
                /*yield*/
                , _a.sent().json()];

              case 2:
                return [2
                /*return*/
                , _a.sent()];
            }
          });
        });
      })];
    });
  });
}

exports.authenticate = authenticate;

function register(username, userEmail, password) {
  return __awaiter(this, void 0, void 0, function () {
    var fetchSettings;

    var _this = this;

    return __generator(this, function (_a) {
      fetchSettings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          email: userEmail,
          password: password
        })
      };
      return [2
      /*return*/
      , apiCallWrapper_1.apiCallWrapper(function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , fetch(index_1.BASE_URL + "/auth/local/register", fetchSettings)];

              case 1:
                return [4
                /*yield*/
                , _a.sent().json()];

              case 2:
                return [2
                /*return*/
                , _a.sent()];
            }
          });
        });
      })];
    });
  });
}

exports.register = register;
},{"../config/index":"ts/config/index.ts","./apiCallWrapper":"ts/api/apiCallWrapper.ts"}],"ts/utils/storage.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.retrieve = exports.store = void 0;

function store(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

exports.store = store;

function retrieve(key) {
  return JSON.parse(localStorage.getItem(key) || '');
}

exports.retrieve = retrieve;

function remove(key) {
  localStorage.removeItem(key);
}

exports.remove = remove;
},{}],"ts/utils/user.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = exports.getDetails = exports.isLoggedIn = exports.logout = exports.register = exports.login = void 0;

var authAPI = __importStar(require("../api/auth"));

var displayMessage_1 = __importDefault(require("../components/displayMessage"));

var index_1 = require("../config/index");

var storage = __importStar(require("./storage"));

function login(usernameOrEmail, password) {
  return __awaiter(this, void 0, void 0, function () {
    var loginResponse;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , authAPI.authenticate(usernameOrEmail, password)];

        case 1:
          loginResponse = _a.sent();

          if (loginResponse.data.statusCode === 400) {
            displayMessage_1.default("danger", "" + loginResponse.data.data[0].messages[0].message, ".message-container");
            return [2
            /*return*/
            , false];
          }

          if (loginResponse.data.statusCode === 200) {
            storage.store(index_1.AUTH_TOKEN_KEY, loginResponse.data.jwt);
            storage.store(index_1.USER_KEY, loginResponse.data.user);
            displayMessage_1.default("success", "Success you are now logged in.", ".message-container");
            return [2
            /*return*/
            , loginResponse];
          }

          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.login = login;

function register(username, userEmail, password) {
  return __awaiter(this, void 0, void 0, function () {
    var registerResponse;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , authAPI.register(username, userEmail, password)];

        case 1:
          registerResponse = _a.sent();

          if (registerResponse) {
            console.log("registered", registerResponse);
            displayMessage_1.default("success", "Success you are now logged in.", ".message-container");
          }

          return [2
          /*return*/
          , registerResponse];
      }
    });
  });
}

exports.register = register;

function logout() {
  storage.remove(index_1.AUTH_TOKEN_KEY);
}

exports.logout = logout;

function isLoggedIn() {
  return Boolean(getToken());
}

exports.isLoggedIn = isLoggedIn;

function getDetails() {
  return storage.retrieve(index_1.USER_KEY);
}

exports.getDetails = getDetails;

function getToken() {
  return storage.retrieve(index_1.AUTH_TOKEN_KEY);
}

exports.getToken = getToken;
},{"../api/auth":"ts/api/auth.ts","../components/displayMessage":"ts/components/displayMessage.ts","../config/index":"ts/config/index.ts","./storage":"ts/utils/storage.ts"}],"ts/auth/register.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var displayMessage_1 = __importDefault(require("../components/displayMessage"));

var footer_1 = __importDefault(require("../components/footer"));

var header_1 = __importDefault(require("../components/header"));

var user_1 = require("../utils/user");

(function () {
  header_1.default();
  footer_1.default();
  var form = document.querySelector("form");
  var username = document.querySelector("#username");
  var userEmail = document.querySelector("#email");
  var password = document.querySelector("#password");

  function submitForm(event) {
    event.preventDefault();
    var usernameValue = username.value.trim();
    var userEmailValue = userEmail.value.trim();
    var passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
      return displayMessage_1.default("warning", "Invalid values", ".message-container");
    }

    user_1.register(usernameValue, userEmailValue, passwordValue);
  }

  form.addEventListener("submit", submitForm);
})();
},{"../components/displayMessage":"ts/components/displayMessage.ts","../components/footer":"ts/components/footer.ts","../components/header":"ts/components/header.ts","../utils/user":"ts/utils/user.ts"}],"../../../../.nvm/versions/node/v14.15.4/pnpm-global/4/node_modules/.pnpm/parcel-bundler@1.12.4/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58803" + '/');

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
},{}]},{},["../../../../.nvm/versions/node/v14.15.4/pnpm-global/4/node_modules/.pnpm/parcel-bundler@1.12.4/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ts/auth/register.ts"], null)
//# sourceMappingURL=/register.a3f47d93.js.map