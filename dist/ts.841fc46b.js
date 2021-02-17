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
})({"ts/config/index.ts":[function(require,module,exports) {
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
},{}],"ts/api/product.ts":[function(require,module,exports) {
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
exports.remove = exports.edit = exports.add = exports.get = exports.getAllFeatured = exports.getAll = void 0;

var index_1 = require("../config/index");

function getAll() {
  return __awaiter(this, void 0, void 0, function () {
    var _this = this;

    return __generator(this, function (_a) {
      return [2
      /*return*/
      , apiCallWrapper(function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , fetch(index_1.BASE_URL + "/products")];

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

exports.getAll = getAll;

function getAllFeatured() {
  return __awaiter(this, void 0, void 0, function () {
    var _this = this;

    return __generator(this, function (_a) {
      return [2
      /*return*/
      , apiCallWrapper(function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , fetch(index_1.BASE_URL + "/products?featured=true")];

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

exports.getAllFeatured = getAllFeatured;

function get(id) {
  return __awaiter(this, void 0, void 0, function () {
    var _this = this;

    return __generator(this, function (_a) {
      return [2
      /*return*/
      , apiCallWrapper(function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , fetch(index_1.BASE_URL + "/products/" + parseInt(id))];

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

exports.get = get;

function add(options) {
  return __awaiter(this, void 0, void 0, function () {
    var fetchSettings;

    var _this = this;

    return __generator(this, function (_a) {
      fetchSettings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + options.token
        },
        body: JSON.stringify(options.data)
      };
      return [2
      /*return*/
      , apiCallWrapper(function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , fetch(index_1.BASE_URL + "/products", fetchSettings)];

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

exports.add = add;

function edit(options) {
  return __awaiter(this, void 0, void 0, function () {
    var fetchSettings;

    var _this = this;

    return __generator(this, function (_a) {
      fetchSettings = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + options.token
        },
        body: JSON.stringify(options.data)
      };
      return [2
      /*return*/
      , apiCallWrapper(function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , fetch(index_1.BASE_URL + "/products/" + parseInt(options.id), fetchSettings)];

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

exports.edit = edit;

function remove(options) {
  return __awaiter(this, void 0, void 0, function () {
    var fetchSettings;

    var _this = this;

    return __generator(this, function (_a) {
      fetchSettings = {
        method: "DELETE",
        Authorization: "Bearer " + options.token
      };
      return [2
      /*return*/
      , apiCallWrapper(function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , fetch(index_1.BASE_URL + "/products/" + parseInt(options.id), fetchSettings)];

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

exports.remove = remove;

function apiCallWrapper(callback) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [2
      /*return*/
      , callback().then(function (resultData) {
        return {
          success: true,
          error: null,
          data: resultData
        };
      }).catch(function (error) {
        return {
          success: false,
          error: error,
          data: null
        };
      })];
    });
  });
}
},{"../config/index":"ts/config/index.ts"}],"ts/api/home.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHeroBanner = exports.get = exports.getFeaturedProducts = void 0;

var index_1 = require("../config/index");

var product_1 = require("./product");

Object.defineProperty(exports, "getFeaturedProducts", {
  enumerable: true,
  get: function get() {
    return product_1.getAllFeatured;
  }
});

function get() {
  return __awaiter(this, void 0, void 0, function () {
    var _this = this;

    return __generator(this, function (_a) {
      return [2
      /*return*/
      , apiCallWrapper(function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , fetch(index_1.BASE_URL + "/home")];

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

exports.get = get;

function getHeroBanner() {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [2
      /*return*/
      , get().then(function (result) {
        return __assign(__assign({}, result), {
          data: {
            hero_banner: result.data.hero_banner,
            hero_banner_alt_text: result.data.hero_banner_alt_text
          }
        });
      })];
    });
  });
}

exports.getHeroBanner = getHeroBanner;

function apiCallWrapper(callback) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      // TODO check <Promise>
      return [2
      /*return*/
      , callback().then(function (resultData) {
        return {
          success: true,
          error: null,
          data: resultData
        };
      }).catch(function (error) {
        return {
          success: false,
          error: error,
          data: null
        };
      })];
    });
  });
}
},{"../config/index":"ts/config/index.ts","./product":"ts/api/product.ts"}],"ts/components/footer.ts":[function(require,module,exports) {
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
},{}],"ts/components/heroBanner.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroBanner = void 0;

var index_1 = require("../config/index");

var HeroBanner =
/** @class */
function () {
  function HeroBanner(path, altText) {
    this.path = path;
    this.alt_text = altText;
  }

  HeroBanner.prototype.renderMarkup = function () {
    var jumbotron = document.querySelector("#jumbotron");
    var markup = "<div style=\"background: url(" + index_1.BASE_URL + this.path + ") no-repeat center/cover;\"\n                        class=\"jumbotron text-center\">\n                      <div class=\"container\">\n                        <h1>" + this.alt_text + "</h1>\n                        <p class=\"lead text-muted\">\n                          " + this.alt_text + "\n                        </p>\n                        <p>\n                          <a href=\"" + index_1.SITE_URL + "/browse.html\" class=\"btn btn-primary my-2\">START SHOPPING</a>\n                          <a href=\"" + index_1.SITE_URL + "/login.html\" class=\"btn btn-secondary my-2\">LOGIN</a>\n                        </p>\n                      </div>\n                  </div>";
    return jumbotron.innerHTML = markup;
  };

  return HeroBanner;
}();

exports.HeroBanner = HeroBanner;
},{"../config/index":"ts/config/index.ts"}],"ts/utils/storage.ts":[function(require,module,exports) {
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
},{}],"ts/components/productCard.ts":[function(require,module,exports) {
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductCard = void 0;

var storage = __importStar(require("../utils/storage"));

var index_1 = require("../config/index");

var ProductCard =
/** @class */
function () {
  function ProductCard(title, description, image_url, price) {
    this.title = title;
    this.description = description;
    this.image_url = image_url;
    this.price = price;
  }

  ProductCard.prototype.renderMarkup = function () {
    var productRow = document.querySelector("#productRow");
    var markup = "<div class=\"col-md-4\">\n                <div class=\"card mb-4 shadow-sm\">\n                  <img\n                    src=\"" + this.image_url + "\"\n                    class=\"bd-placeholder-img card-img-top\"\n                    width=\"100%\"\n                    height=\"auto\"\n                    role=\"img\"\n                    aria-label=\"Placeholder: Thumbnail\"\n                  >\n                  <div class=\"card-body\">\n                    <h3>" + this.title + "</h3>\n                    <p class=\"card-text\">\n                      " + this.description.slice(0, 100) + "\n                    </p>\n                    <p class=\"\">" + this.price + " Kr</p>\n                    <div\n                      class=\"d-flex justify-content-between align-items-center\"\n                    >\n                      <div class=\"btn-group\">\n                        <button\n                          type=\"button\"\n                          data-action=\"ADD_TO_CART\"\n                          data-title=\"" + this.title + "\"\n                          data-price=\"" + this.price + "\"\n                          data-photo=\"" + this.image_url + "\"\n                          class=\"addToCartBtn btn btn-sm btn-primary\"\n                        >\n                          Add to cart\n                        </button>\n                        <button\n                          type=\"button\"\n                          data-action=\"ADD_TO_FAVORITES\"\n                          data-title=\"" + this.title + "\"\n                          data-price=\"" + this.price + "\"\n                          data-photo=\"" + this.image_url + "\"\n                          class=\"addToFavorites btn btn-sm btn-outline-primary\"\n                        >\n                          Add to wishlist\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>";
    return productRow.innerHTML += markup;
  };

  return ProductCard;
}();

exports.ProductCard = ProductCard;
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (e) {
    var cart = [];
    var button = e.target;

    if (button && button.dataset.action === "ADD_TO_CART") {
      var product_1 = {
        qty: 1,
        title: button.dataset.title,
        price: button.dataset.price,
        photo: button.dataset.photo
      };
      var inCart = cart.filter(function (item) {
        return item.title === product_1.title;
      });

      if (!inCart) {
        cart.push(product_1);
        storage.store(index_1.CART_KEY, cart); // save to local storage
      }
    }
  });
});
},{"../utils/storage":"ts/utils/storage.ts","../config/index":"ts/config/index.ts"}],"ts/index.ts":[function(require,module,exports) {
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = require("./config/index");

var home_1 = require("./api/home");

var footer_1 = __importDefault(require("./components/footer"));

var header_1 = __importDefault(require("./components/header"));

var heroBanner_1 = require("./components/heroBanner");

var productCard_1 = require("./components/productCard");

(function () {
  return __awaiter(this, void 0, void 0, function () {
    var heroBanner, renderHeroBanner, featuredProducts, products, i, renderProducts;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          header_1.default();
          footer_1.default();
          return [4
          /*yield*/
          , home_1.getHeroBanner()];

        case 1:
          heroBanner = _a.sent();
          renderHeroBanner = new heroBanner_1.HeroBanner(heroBanner.data.hero_banner.formats.large.url, heroBanner.data.hero_banner_alt_text);
          renderHeroBanner;
          return [4
          /*yield*/
          , home_1.getFeaturedProducts()];

        case 2:
          featuredProducts = _a.sent();
          products = featuredProducts.data;

          for (i = 0; i < products.length; i++) {
            renderProducts = new productCard_1.ProductCard(products[i].title, products[i].description, products[i].image ? "" + index_1.BASE_URL + products[i].image.formats.large.url : "" + index_1.FALLBACK_IMAGE, products[i].price);
            renderProducts.renderMarkup();
          }

          return [2
          /*return*/
          ];
      }
    });
  });
})();
},{"./config/index":"ts/config/index.ts","./api/home":"ts/api/home.ts","./components/footer":"ts/components/footer.ts","./components/header":"ts/components/header.ts","./components/heroBanner":"ts/components/heroBanner.ts","./components/productCard":"ts/components/productCard.ts"}],"../../../../.nvm/versions/node/v14.15.4/pnpm-global/4/node_modules/.pnpm/parcel-bundler@1.12.4/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../../../.nvm/versions/node/v14.15.4/pnpm-global/4/node_modules/.pnpm/parcel-bundler@1.12.4/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ts/index.ts"], null)
//# sourceMappingURL=/ts.841fc46b.js.map