module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar _default = {\n  env: \"development\" || false,\n  port: process.env.PORT || 8080,\n  API_URL: \"http://localhost:8080\",\n  // API_URL: \"http://192.168.0.132:3000\",\n  // API_URL: \"https://notinmood.com\",\n  // MONGO_URI : 'mongodb+srv://notinmood:notinmood123@cluster0-57jsn.mongodb.net/notinmood?retryWrites=true&w=majority',\n  // mongodb+srv://salarycount:salarycount12345@cluster0.szwfu.mongodb.net/salarycount?retryWrites=true&w=majority\n  MONGO_URI: \"mongodb+srv://salarycount:salarycount12345@cluster0.szwfu.mongodb.net/salarycount?retryWrites=true&w=majority\",\n  COOKIEKEY: 'mycookiesecret',\n  REDIS: {\n    URL: \"redis://127.0.0.1:6379\"\n  },\n  DB: {\n    DEFAULT_COUNT: 0,\n    DEFAULT_CONTENT_TYPE: 1,\n    //1-images 2- videos\n    DEFAULT_TRUE: true,\n    DEFAULT_FALSE: false,\n    DEFAULT_ACCOUNT_TYPE: 0,\n    // -1 - ADMIN SIDE  0 - Normal , 1- Google, 2- Facebook\n    GENDER: {\n      MALE: 1,\n      FEMALE: 2,\n      OTHER: 3\n    },\n    BADGETS: {\n      NOOBIE: 1,\n      PRO: 2\n    },\n    CRAWLED_TYPE: {\n      DEFAULT: 0,\n      FB: 1,\n      GAG: 2\n    },\n    AGE_GROUP: {\n      ONE: 1,\n      //18 - 20\n      TWO: 2,\n      //20 - 30\n      THREE: 3,\n      //30 - 40\n      FOUR: 4 //40 - 50+\n\n    }\n  },\n  S3: {\n    BUCKET: 'salarycount',\n    URL: 'https://salarycount.s3.ap-south-1.amazonaws.com',\n    ACCESS: 'AKIA3YIPQLXVWGII6REH',\n    SECRET: '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'\n  },\n  LOGIN_KEYS: {\n    GOOGLE: {\n      CLIENT: '38122336055-7stkqff3vae90il94e1p12tp0pq26a4h.apps.googleusercontent.com',\n      SECRET: 'Czvtwg5Is_ZZwdVPEwUAoR8c'\n    }\n  },\n  MESSAGES: {\n    100: \"post has beeb added successfully\",\n    101: \"section has been added successfully\"\n  },\n  ERRORS: {\n    100: \"something went wrong, please try to post again\"\n  },\n  USER: {\n    POST_TYPES: {\n      UPLOADED: 1,\n      LIKED: 2,\n      COMMENTED: 3\n    }\n  },\n  JWT_SECRET: \"himanshu@1234\",\n  ACCESS_TOKEN: \"0z6v8b4uua\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshu/Documents/live-project/salarycounterapp/config/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/posts.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/posts.controller.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_industries_types_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/industries_types.model */ \"./server/models/industries_types.model.js\");\n/* harmony import */ var _models_locations_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/locations.model */ \"./server/models/locations.model.js\");\n/* harmony import */ var _models_rating_range_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/rating_range.model */ \"./server/models/rating_range.model.js\");\n/* harmony import */ var _models_employees_count_range_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/employees_count_range.model */ \"./server/models/employees_count_range.model.js\");\n/* harmony import */ var _models_industries_tags_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/industries_tags.model */ \"./server/models/industries_tags.model.js\");\n/* harmony import */ var _models_companies_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/companies.model */ \"./server/models/companies.model.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! request */ \"request\");\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var request_promise__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! request-promise */ \"request-promise\");\n/* harmony import */ var request_promise__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(request_promise__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import { countReset } from 'console'\n\nvar s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_11___default.a.S3({\n  accessKeyId: _config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].S3.ACCESS,\n  secretAccessKey: _config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].S3.SECRET,\n  region: 'ap-south-1'\n});\n\nvar uploadToS3 = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var externalUrl,\n        data64,\n        path,\n        uploadType,\n        result,\n        base64,\n        mime,\n        ext,\n        listOfSupportedExtns,\n        buff,\n        slugId,\n        base64Data,\n        type,\n        key,\n        params,\n        s3Result,\n        _args = arguments;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            externalUrl = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;\n            data64 = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;\n            path = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'uploads';\n            uploadType = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;\n            console.log('s3-upload');\n            _context.prev = 5;\n            result = null, base64 = null, mime = null, ext = null;\n            listOfSupportedExtns = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'mp4'];\n\n            if (!data64) {\n              _context.next = 13;\n              break;\n            }\n\n            result = Buffer.from(data64.replace(/^data:image\\/\\w+;base64,/, \"\"), 'base64');\n            ext = req.body.ext;\n            _context.next = 19;\n            break;\n\n          case 13:\n            _context.next = 15;\n            return request_promise__WEBPACK_IMPORTED_MODULE_13___default()({\n              url: externalUrl,\n              encoding: null\n            });\n\n          case 15:\n            result = _context.sent;\n            buff = new Buffer(result);\n            ext = externalUrl.split('.').pop();\n            base64 = \"data:image/\".concat(ext, \";base64,\") + buff.toString('base64');\n\n          case 19:\n            slugId = Object(uuid__WEBPACK_IMPORTED_MODULE_9__[\"v4\"])();\n            ext = listOfSupportedExtns.indexOf(ext) < 0 ? 'jpg' : ext;\n            base64Data = result;\n            type = uploadType === 'video' ? \"video/mp4\" : \"image/\".concat(ext); // const key = `${path}/${moment().format('DD-MM-YYYY')}/${slugId}.${ext}`;\n\n            key = uploadType === 'video' ? \"\".concat(path, \"/\").concat(slugId, \".mp4\") : \"\".concat(path, \"/\").concat(slugId, \".\").concat(ext);\n            params = {\n              Bucket: _config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].S3.BUCKET,\n              Key: key,\n              Body: base64Data,\n              ContentType: type\n            };\n            s3Result = null;\n\n            if (!(uploadType === 'video')) {\n              _context.next = 30;\n              break;\n            }\n\n            // s3Result = s3.upload(params);\n            // s3Result.on('httpUploadProgress', function (progress) {\n            //     console.log(progress.loaded + \" of \" + progress.total + \" bytes\");\n            // });\n            // s3Result.send();\n            fs__WEBPACK_IMPORTED_MODULE_10___default.a.writeFileSync(\"\".concat(path, \"/\").concat(slugId, \".mp4\"), result);\n            _context.next = 33;\n            break;\n\n          case 30:\n            _context.next = 32;\n            return s3.putObject(params).promise();\n\n          case 32:\n            s3Result = _context.sent;\n\n          case 33:\n            console.log({\n              url: \"https://\".concat(_config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].S3.BUCKET, \".s3.ap-south-1.amazonaws.com/\").concat(key),\n              key: key,\n              slug: slugId,\n              mime: type,\n              ext: ext\n            });\n            return _context.abrupt(\"return\", {\n              s3_url: \"https://\".concat(_config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].S3.BUCKET, \".s3.ap-south-1.amazonaws.com/\").concat(key),\n              slug_id: slugId,\n              mime: type,\n              ext: ext\n            });\n\n          case 37:\n            _context.prev = 37;\n            _context.t0 = _context[\"catch\"](5);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", {\n              s3_url: \"https://salarycount.s3.ap-south-1.amazonaws.com/company/logos/company-placeholder.svg\",\n              slug_id: null,\n              mime: null,\n              ext: null\n            });\n\n          case 41:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[5, 37]]);\n  }));\n\n  return function uploadToS3() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar _default = {\n  // listOfProfileData: async (req, res)=>{\n  //     const { model } = req.query;\n  //     let categories = [], websites = [];\n  //     if(model){\n  //         const videos = await Videos.aggregate([\n  //             { $match: { $expr : { $in : [ mongoose.Types.ObjectId(model), '$profiles' ] } } } \n  //         ]);\n  //         for(let video of videos){\n  //             categories = [...categories, ...video.categories];\n  //             websites = [...websites, ...video.websites];\n  //         }\n  //         websites = _.uniq(websites);\n  //         categories = _.uniq(categories);\n  //     }else{\n  //         categories = await Categories.aggregate([\n  //             { $match: {}},\n  //             { $sort: { videos_count: -1 } }\n  //         ]).cache({ key: 'allcategories'});\n  //         websites = await Websites.aggregate([\n  //             { $match: {}},\n  //             { $sort: { videos_count: -1 } }\n  //         ]).cache({ key: 'allwebsites'});\n  //     }\n  //     res.send({\n  //         data : { websites, categories }\n  //     })\n  // },\n  // listOfVideosByModels : async (req, res)=>{\n  //     console.log(req.query);\n  //     let { offset: skip , limit, filters } = req.query;\n  //     console.log(filters);\n  //     let sort = { _id: -1 }, model = null, videoFilterPipeline = [];\n  //     filters = JSON.parse(filters);\n  //     if(filters.sort){\n  //        sort = filters.sort;\n  //     }\n  //     if(filters.condition){\n  //         model = filters.condition.model || null;\n  //     }\n  //     const filterObj = model ? { $expr : { $in : [ '$$profile_id', '$profiles' ] } }: {};        \n  //     if(filters.condition.category.length>0 && filters.condition.website.length==0){\n  //         videoFilterPipeline = [\n  //             { $match: filterObj},\n  //             {\n  //                 $lookup: {\n  //                     from: 'profiles',\n  //                     localField: 'profiles',\n  //                     foreignField: '_id',\n  //                     as: 'profiles'\n  //                 }\n  //             },\n  //             { $match: { categories : { $all: filters.condition.category }} },\n  //             { $sort: sort},\n  //             { $skip: +skip },\n  //             { $limit: +limit },\n  //         ]\n  //     }else if(filters.condition.website.length>0 && filters.condition.category.length==0){\n  //         videoFilterPipeline = [\n  //             { $match: filterObj},\n  //             {\n  //                 $lookup: {\n  //                     from: 'profiles',\n  //                     localField: 'profiles',\n  //                     foreignField: '_id',\n  //                     as: 'profiles'\n  //                 }\n  //             },\n  //             { $match: { websites : { $all: filters.condition.website }} },\n  //             { $sort: sort},\n  //             { $skip: +skip },\n  //             { $limit: +limit },\n  //         ]\n  //     }else if(filters.condition.website.length==0 && filters.condition.category.length==0){\n  //         videoFilterPipeline = [\n  //             { $match: filterObj},\n  //             {\n  //                 $lookup: {\n  //                     from: 'profiles',\n  //                     localField: 'profiles',\n  //                     foreignField: '_id',\n  //                     as: 'profiles'\n  //                 }\n  //             },\n  //             { $sort: sort},\n  //             { $skip: +skip },\n  //             { $limit: +limit },\n  //         ]\n  //     }else{\n  //         videoFilterPipeline = [\n  //             { $match: filterObj},\n  //             {\n  //                 $lookup: {\n  //                     from: 'profiles',\n  //                     localField: 'profiles',\n  //                     foreignField: '_id',\n  //                     as: 'profiles'\n  //                 }\n  //             },\n  //             { $match: { $and : [ { websites : { $all: filters.condition.website }}, { categories : { $all: filters.condition.category }}] }},\n  //             { $sort: sort},\n  //             { $skip: +skip },\n  //             { $limit: +limit },\n  //         ]\n  //     }\n  //     let data;\n  //     if(model){\n  //         data = await Profiles.aggregate([\n  //             { $match: { _id : mongoose.Types.ObjectId(model)} },\n  //             {\n  //                 $lookup:{\n  //                     from: \"videos\",\n  //                     let : { profile_id: '$_id' },\n  //                     pipeline: videoFilterPipeline,\n  //                     as: 'videos'\n  //                 }\n  //             }\n  //         ]);\n  //     }else{\n  //         data = await Videos.aggregate(videoFilterPipeline);\n  //     }\n  //     res.send({\n  //         data\n  //     })\n  // },\n  // listOfProfiles : async (req, res)=>{\n  //      console.log(req.body);\n  //      const { offset:skip , limit, filters } = req.body;\n  //      let filterObj = {}, sort = { videos_count: -1 };\n  //      if(filters.sort){\n  //         sort = filters.sort;\n  //      }\n  //      if(filters.condition){\n  //         filterObj = filters.condition\n  //      }\n  //      try {\n  //         const totalProfiles = await Profiles.count();\n  //         const profiles = await Profiles.aggregate([\n  //             { $match: filterObj},\n  //             { $sort: sort},\n  //             { $skip: +skip },\n  //             { $limit: +limit }\n  //         ]);\n  //         res.send({\n  //             data: profiles,\n  //             count : totalProfiles\n  //         })\n  //      } catch (error) {\n  //          res.send({\n  //              error\n  //          })\n  //      }\n  // },\n  // listOfAllWebsitesAndCategrories: async (req, res)=>{\n  //     const allCategories = await Categories.aggregate([\n  //         { $match: {}},\n  //         { $sort: { videos_count: -1 }}\n  //     ]);\n  //     const allWebsites = await Websites.aggregate([\n  //         { $match: {}},\n  //         { $sort: { videos_count: -1 }}\n  //     ]);\n  //     res.send({\n  //         data: { categories: allCategories, websites: allWebsites }\n  //     })\n  // },\n  // listOfAllCategoriesFilteredByWebsites: async (req, res)=>{\n  //     const { website } = req.query;\n  //     const allCategories = await Videos.aggregate([\n  //         { $match: { websites: { $in: [website.trim()] } }},\n  //         { $project: { categories: 1 }}\n  //     ]);\n  //     let uniqueCategories = {}, selectedCategories = [], count=0;\n  //     for(let category of allCategories){\n  //         let { categories, _id } = category;\n  //         for(let x of categories){\n  //             uniqueCategories[x] ? ++uniqueCategories[x]: (uniqueCategories[x] = 1)\n  //         }\n  //     }\n  //     for(let k in uniqueCategories){\n  //         selectedCategories.push({\n  //             _id: ++count,\n  //             name : k,\n  //             videos_count: uniqueCategories[k]\n  //         })\n  //     }\n  //     res.send({\n  //         data: { categories: selectedCategories }\n  //     })\n  // },\n  // listVideos: async (req, res)=>{\n  //     const {limit=10, offset:skip=0} = req.query;\n  //     let filterObj = {}, sort= { _id: -1 };\n  //     const videos = await Videos.aggregate([\n  //         { $match: filterObj},\n  //         { $sort: sort},\n  //         { $skip: +skip },\n  //         { $limit: +limit }\n  //     ]);\n  //     res.send({\n  //         data : videos\n  //     })\n  // },\n  fetchCompaniesMetainfo: function () {\n    var _fetchCompaniesMetainfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {\n      var counter, callit;\n      return regeneratorRuntime.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              // const ambitionBox = `https://www.ambitionbox.com/api/v2/companyListingFilters?type=all`;\n              // const {data: { employee_count_range }} = await rp({ \n              //     uri: ambitionBox,\n              //     json: true\n              // });\n              // for(let x of employee_count_range){\n              //     let ind = new employeesCountRange({\n              //         name: x.Name,\n              //         url: x.UrlName,\n              //         count: x.count\n              //     })\n              //     let result = await ind.save();\n              //     console.log(result);\n              // }\n              // res.send({ result : \"completed\" })\n              counter = 15732;\n\n              callit = /*#__PURE__*/function () {\n                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n                  var companiesInfo, _yield$rp, listing, getInsdustries, getTags, no, _iterator3, _step3, company, isExists, logoURL, record, _res;\n\n                  return regeneratorRuntime.wrap(function _callee4$(_context4) {\n                    while (1) {\n                      switch (_context4.prev = _context4.next) {\n                        case 0:\n                          ++counter;\n                          console.log(\"https://www.ambitionbox.com/api/v2/companyListingInfo?page=\".concat(counter, \"&sort=popularity\"));\n                          companiesInfo = \"https://www.ambitionbox.com/api/v2/companyListingInfo?page=\".concat(counter, \"&sort=popularity\");\n                          _context4.next = 5;\n                          return request_promise__WEBPACK_IMPORTED_MODULE_13___default()({\n                            uri: companiesInfo,\n                            json: true\n                          });\n\n                        case 5:\n                          _yield$rp = _context4.sent;\n                          listing = _yield$rp.data.listing;\n\n                          if (!(listing && listing.length > 0)) {\n                            _context4.next = 92;\n                            break;\n                          }\n\n                          //UPDATE DB\n                          getInsdustries = /*#__PURE__*/function () {\n                            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(result) {\n                              var industries, _iterator, _step, x, isExists;\n\n                              return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                                while (1) {\n                                  switch (_context2.prev = _context2.next) {\n                                    case 0:\n                                      if (!(result.length == 0)) {\n                                        _context2.next = 2;\n                                        break;\n                                      }\n\n                                      return _context2.abrupt(\"return\", result);\n\n                                    case 2:\n                                      industries = [];\n                                      _iterator = _createForOfIteratorHelper(result);\n                                      _context2.prev = 4;\n\n                                      _iterator.s();\n\n                                    case 6:\n                                      if ((_step = _iterator.n()).done) {\n                                        _context2.next = 14;\n                                        break;\n                                      }\n\n                                      x = _step.value;\n                                      _context2.next = 10;\n                                      return _models_industries_types_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n                                        name: x.Name\n                                      });\n\n                                    case 10:\n                                      isExists = _context2.sent;\n\n                                      if (isExists) {\n                                        industries.push(isExists._id);\n                                      }\n\n                                    case 12:\n                                      _context2.next = 6;\n                                      break;\n\n                                    case 14:\n                                      _context2.next = 19;\n                                      break;\n\n                                    case 16:\n                                      _context2.prev = 16;\n                                      _context2.t0 = _context2[\"catch\"](4);\n\n                                      _iterator.e(_context2.t0);\n\n                                    case 19:\n                                      _context2.prev = 19;\n\n                                      _iterator.f();\n\n                                      return _context2.finish(19);\n\n                                    case 22:\n                                      return _context2.abrupt(\"return\", industries);\n\n                                    case 23:\n                                    case \"end\":\n                                      return _context2.stop();\n                                  }\n                                }\n                              }, _callee2, null, [[4, 16, 19, 22]]);\n                            }));\n\n                            return function getInsdustries(_x3) {\n                              return _ref3.apply(this, arguments);\n                            };\n                          }();\n\n                          getTags = /*#__PURE__*/function () {\n                            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(result) {\n                              var tags, _iterator2, _step2, x, isExists;\n\n                              return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                                while (1) {\n                                  switch (_context3.prev = _context3.next) {\n                                    case 0:\n                                      if (!(result.length == 0)) {\n                                        _context3.next = 2;\n                                        break;\n                                      }\n\n                                      return _context3.abrupt(\"return\", result);\n\n                                    case 2:\n                                      tags = [];\n                                      _iterator2 = _createForOfIteratorHelper(result);\n                                      _context3.prev = 4;\n\n                                      _iterator2.s();\n\n                                    case 6:\n                                      if ((_step2 = _iterator2.n()).done) {\n                                        _context3.next = 14;\n                                        break;\n                                      }\n\n                                      x = _step2.value;\n                                      _context3.next = 10;\n                                      return _models_industries_tags_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                                        name: x.Name\n                                      });\n\n                                    case 10:\n                                      isExists = _context3.sent;\n\n                                      if (isExists) {\n                                        tags.push(isExists._id);\n                                      }\n\n                                    case 12:\n                                      _context3.next = 6;\n                                      break;\n\n                                    case 14:\n                                      _context3.next = 19;\n                                      break;\n\n                                    case 16:\n                                      _context3.prev = 16;\n                                      _context3.t0 = _context3[\"catch\"](4);\n\n                                      _iterator2.e(_context3.t0);\n\n                                    case 19:\n                                      _context3.prev = 19;\n\n                                      _iterator2.f();\n\n                                      return _context3.finish(19);\n\n                                    case 22:\n                                      return _context3.abrupt(\"return\", tags);\n\n                                    case 23:\n                                    case \"end\":\n                                      return _context3.stop();\n                                  }\n                                }\n                              }, _callee3, null, [[4, 16, 19, 22]]);\n                            }));\n\n                            return function getTags(_x4) {\n                              return _ref4.apply(this, arguments);\n                            };\n                          }();\n\n                          no = 1;\n                          _iterator3 = _createForOfIteratorHelper(listing);\n                          _context4.prev = 12;\n\n                          _iterator3.s();\n\n                        case 14:\n                          if ((_step3 = _iterator3.n()).done) {\n                            _context4.next = 82;\n                            break;\n                          }\n\n                          company = _step3.value;\n                          ++no; // console.log(company);\n\n                          _context4.next = 19;\n                          return _models_companies_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n                            CompanyId: company.CompanyId\n                          });\n\n                        case 19:\n                          isExists = _context4.sent;\n\n                          if (!isExists) {\n                            _context4.next = 24;\n                            break;\n                          }\n\n                          return _context4.abrupt(\"continue\", 80);\n\n                        case 24:\n                          logoURL = void 0;\n\n                          if (!(!company.Logo || company.Logo == \"\")) {\n                            _context4.next = 29;\n                            break;\n                          }\n\n                          logoURL = \"https://salarycount.s3.ap-south-1.amazonaws.com/company/logos/company-placeholder.svg\";\n                          _context4.next = 32;\n                          break;\n\n                        case 29:\n                          _context4.next = 31;\n                          return uploadToS3(\"https://static.ambitionbox.com/alpha/company/photos/logos/\".concat(company.Logo, \".jpg\"), null, 'company/logos');\n\n                        case 31:\n                          logoURL = _context4.sent.s3_url;\n\n                        case 32:\n                          _context4.t0 = _models_companies_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n                          _context4.t1 = company.Name;\n                          _context4.t2 = company.Rating;\n                          _context4.t3 = company.ShortName;\n                          _context4.t4 = company.CompanyId;\n                          _context4.t5 = company.Age;\n                          _context4.t6 = company.About;\n                          _context4.t7 = company.CompanyReviewsLive;\n                          _context4.t8 = company.CompanySalaries;\n                          _context4.t9 = company.CompanyType;\n                          _context4.t10 = company.HQCountry;\n                          _context4.t11 = company.HQUrlName;\n                          _context4.t12 = company.InterviewExperiencesLive;\n                          _context4.t13 = logoURL;\n                          _context4.t14 = company.TotalEmployees;\n                          _context4.t15 = company.UrlName;\n                          _context4.t16 = company.first_location;\n                          _context4.t17 = company.headquaters == \"\" ? [] : company.headquaters.toLowerCase();\n                          _context4.t18 = company.location_count;\n\n                          if (!company.industries) {\n                            _context4.next = 57;\n                            break;\n                          }\n\n                          _context4.next = 54;\n                          return getInsdustries(company.industries);\n\n                        case 54:\n                          _context4.t19 = _context4.sent;\n                          _context4.next = 58;\n                          break;\n\n                        case 57:\n                          _context4.t19 = [];\n\n                        case 58:\n                          _context4.t20 = _context4.t19;\n\n                          if (!company.tags) {\n                            _context4.next = 65;\n                            break;\n                          }\n\n                          _context4.next = 62;\n                          return getTags(company.tags);\n\n                        case 62:\n                          _context4.t21 = _context4.sent;\n                          _context4.next = 66;\n                          break;\n\n                        case 65:\n                          _context4.t21 = [];\n\n                        case 66:\n                          _context4.t22 = _context4.t21;\n                          _context4.t23 = \"\".concat(companiesInfo, \"&no=\").concat(no);\n                          _context4.t24 = {\n                            Name: _context4.t1,\n                            Rating: _context4.t2,\n                            ShortName: _context4.t3,\n                            CompanyId: _context4.t4,\n                            Age: _context4.t5,\n                            About: _context4.t6,\n                            CompanyReviewsLive: _context4.t7,\n                            CompanySalaries: _context4.t8,\n                            CompanyType: _context4.t9,\n                            HQCountry: _context4.t10,\n                            HQUrlName: _context4.t11,\n                            InterviewExperiencesLive: _context4.t12,\n                            Logo: _context4.t13,\n                            TotalEmployees: _context4.t14,\n                            UrlName: _context4.t15,\n                            Locations: _context4.t16,\n                            Headquaters: _context4.t17,\n                            LocationCount: _context4.t18,\n                            Industries: _context4.t20,\n                            Tags: _context4.t22,\n                            CrawledSource: _context4.t23\n                          };\n                          record = new _context4.t0(_context4.t24);\n                          _context4.prev = 70;\n                          _context4.next = 73;\n                          return record.save();\n\n                        case 73:\n                          _res = _context4.sent;\n                          console.log(_res);\n                          _context4.next = 80;\n                          break;\n\n                        case 77:\n                          _context4.prev = 77;\n                          _context4.t25 = _context4[\"catch\"](70);\n                          console.log(_context4.t25);\n\n                        case 80:\n                          _context4.next = 14;\n                          break;\n\n                        case 82:\n                          _context4.next = 87;\n                          break;\n\n                        case 84:\n                          _context4.prev = 84;\n                          _context4.t26 = _context4[\"catch\"](12);\n\n                          _iterator3.e(_context4.t26);\n\n                        case 87:\n                          _context4.prev = 87;\n\n                          _iterator3.f();\n\n                          return _context4.finish(87);\n\n                        case 90:\n                          _context4.next = 92;\n                          return callit();\n\n                        case 92:\n                        case \"end\":\n                          return _context4.stop();\n                      }\n                    }\n                  }, _callee4, null, [[12, 84, 87, 90], [70, 77]]);\n                }));\n\n                return function callit() {\n                  return _ref2.apply(this, arguments);\n                };\n              }();\n\n              _context5.next = 4;\n              return callit();\n\n            case 4:\n              res.send({\n                result: \"completed\"\n              });\n\n            case 5:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5);\n    }));\n\n    function fetchCompaniesMetainfo(_x, _x2) {\n      return _fetchCompaniesMetainfo.apply(this, arguments);\n    }\n\n    return fetchCompaniesMetainfo;\n  }(),\n  listAllCompanies: function () {\n    var _listAllCompanies = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {\n      var result;\n      return regeneratorRuntime.wrap(function _callee6$(_context6) {\n        while (1) {\n          switch (_context6.prev = _context6.next) {\n            case 0:\n              _context6.next = 2;\n              return _models_companies_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"].aggregate([{\n                $match: {}\n              }, {\n                $sort: {\n                  _id: -1\n                }\n              }, // {$sort: { created: -1}},\n              {\n                $limit: 10\n              }]);\n\n            case 2:\n              result = _context6.sent;\n              res.send({\n                data: result\n              });\n\n            case 4:\n            case \"end\":\n              return _context6.stop();\n          }\n        }\n      }, _callee6);\n    }));\n\n    function listAllCompanies(_x5, _x6) {\n      return _listAllCompanies.apply(this, arguments);\n    }\n\n    return listAllCompanies;\n  }() // About: \"WNS (Holdings) Limited (NYSE: WNS), is a leading Business Process Management (BPM) company. We combine our deep industry knowledge with technology and analytics expertise to co-create innovative, digital-led transformational solutions with clients across 10 industries. We enable businesses in Travel, Insurance, Banking and Financial Services, Manufacturing, Retail and Consumer Packaged Goods, Shipping and Logistics, Healthcare, and Utilities to re-imagine their digital future and transform their outcomes with operational excellence.↵We deliver an entire spectrum of BPM services in finance and accounting, procurement, customer interaction services and human resources leveraging collaborative models that are tailored to address the unique business challenges of each client. We co-create and execute the future vision of 350+ clients with the help of our 41,000+ employees. Our global footprint spans 16 countries with 60 delivery centers worldwide including in China, Costa Rica, India, the Philippines, Poland, Romania, South Africa, Spain, Sri Lanka, Turkey, United Kingdom and the United States.\"\n  // Age: 24\n  // CompanyId: 2237\n  // CompanyReviewsLive: 2945\n  // CompanySalaries: 20404\n  // CompanyType: \"Private\"\n  // HQCountry: \"India\"\n  // HQUrlName: \"mumbai\"\n  // InterviewExperiencesLive: 21\n  // Logo: \"wns-global-services\"\n  // Name: \"WNS\"\n  // Rating: 3.69\n  // ShortName: \"WNS\"\n  // TotalEmployees: \"10000+\"\n  // UrlName: \"wns\"\n  // first_location: [\"Mumbai\", \"Chennai\"]\n  // headquaters: \"Mumbai\"\n  // industries: [{UrlName: \"bpo-or-kpo\", Id: \"10\", Name: \"BPO/KPO\"}]\n  // 0: {UrlName: \"bpo-or-kpo\", Id: \"10\", Name: \"BPO/KPO\"}\n  // industry_string: \"BPO/KPO\"\n  // // location_count: 15\n  // tags: [{Name: \"MNC\", UrlName: \"mnc\"}]\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(s3, \"s3\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/controllers/posts.controller.js\");\n  reactHotLoader.register(uploadToS3, \"uploadToS3\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/controllers/posts.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/controllers/posts.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/posts.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar compile = function compile(app) {\n  if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../template.js */ \"./template.js\");\n/* harmony import */ var _routes_posts_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/posts.routes */ \"./server/routes/posts.routes.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n // import './services/cache'\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  limit: '10mb',\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json({\n  limit: '10mb',\n  extended: true\n}));\nvar CURRENT_WORKING_DIR = process.cwd();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'public'))); //comment out before building for production\n\n //comment out before building for production\n\n_devBundle__WEBPACK_IMPORTED_MODULE_6__[\"default\"].compile(app);\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist')));\napp.use('/api', Object(_routes_posts_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(express__WEBPACK_IMPORTED_MODULE_0___default.a.Router()));\napp.get('*', function (req, res) {\n  res.send(Object(_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n});\nvar _default = app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/express.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/express.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/models/companies.model.js":
/*!******************************************!*\
  !*** ./server/models/companies.model.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar DB = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DB;\nvar Companies = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  Name: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  Rating: {\n    type: Number,\n    \"default\": DB.DEFAULT_COUNT\n  },\n  ShortName: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  TotalEmployees: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  UrlName: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  CompanyId: {\n    type: Number,\n    unique: true\n  },\n  CompanyType: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  CompanyReviewsLive: {\n    type: Number,\n    \"default\": DB.DEFAULT_COUNT\n  },\n  CompanySalaries: {\n    type: Number,\n    \"default\": DB.DEFAULT_COUNT\n  },\n  About: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  Age: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  HQCountry: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  HQUrlName: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  InterviewExperiencesLive: {\n    type: Number,\n    \"default\": DB.DEFAULT_COUNT\n  },\n  Logo: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  Locations: [{\n    type: String,\n    trim: true,\n    lowercase: true\n  }],\n  Headquaters: [{\n    type: String,\n    trim: true,\n    lowercase: true\n  }],\n  LocationCount: {\n    type: Number,\n    \"default\": DB.DEFAULT_COUNT\n  },\n  Industries: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'industries_types'\n  }],\n  Tags: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'industries_tags'\n  }],\n  CrawledSource: {\n    type: String\n  },\n  Created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  Updated: {\n    type: Date\n  },\n  Comment: {\n    type: String\n  }\n}); // first_location: [\"Stockholm\", \"Mumbai\"]\n// headquaters: \"Stockholm\"\n// industries: [{UrlName: \"analytics\", Id: \"4\", Name: \"Analytics\"},…]\n// industry_string: \"Analytics,Research & Development\"\n// location_count: 112\n// tags: [{Name: \"Forbes Global 2000\", UrlName: \"forbesglobal2000\"}, {Name: \"MNC\", UrlName: \"mnc\"}]\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('companies', Companies, 'companies');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DB, \"DB\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/companies.model.js\");\n  reactHotLoader.register(Companies, \"Companies\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/companies.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/companies.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/companies.model.js?");

/***/ }),

/***/ "./server/models/employees_count_range.model.js":
/*!******************************************************!*\
  !*** ./server/models/employees_count_range.model.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar DB = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DB;\nvar employeesCountRange = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  url: {\n    type: String,\n    lowercase: true,\n    required: true,\n    unique: true\n  },\n  count: {\n    type: Number,\n    \"default\": DB.DEFAULT_COUNT\n  },\n  created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('employees_count_range', employeesCountRange, 'employees_count_range');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DB, \"DB\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/employees_count_range.model.js\");\n  reactHotLoader.register(employeesCountRange, \"employeesCountRange\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/employees_count_range.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/employees_count_range.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/employees_count_range.model.js?");

/***/ }),

/***/ "./server/models/industries_tags.model.js":
/*!************************************************!*\
  !*** ./server/models/industries_tags.model.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar DB = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DB;\nvar Tags = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  url: {\n    type: String,\n    lowercase: true,\n    required: true,\n    unique: true\n  },\n  count: {\n    type: Number,\n    \"default\": DB.DEFAULT_COUNT\n  },\n  created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('industries_tags', Tags);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DB, \"DB\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/industries_tags.model.js\");\n  reactHotLoader.register(Tags, \"Tags\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/industries_tags.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/industries_tags.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/industries_tags.model.js?");

/***/ }),

/***/ "./server/models/industries_types.model.js":
/*!*************************************************!*\
  !*** ./server/models/industries_types.model.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar DB = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DB;\nvar industriesTypes = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  url: {\n    type: String,\n    lowercase: true,\n    required: true\n  },\n  count: {\n    type: Number,\n    \"default\": DB.DEFAULT_COUNT\n  },\n  created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('industries_types', industriesTypes);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DB, \"DB\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/industries_types.model.js\");\n  reactHotLoader.register(industriesTypes, \"industriesTypes\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/industries_types.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/industries_types.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/industries_types.model.js?");

/***/ }),

/***/ "./server/models/locations.model.js":
/*!******************************************!*\
  !*** ./server/models/locations.model.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar DB = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DB;\nvar Locations = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  url: {\n    type: String,\n    lowercase: true,\n    required: true,\n    unique: true\n  },\n  count: {\n    type: Number,\n    \"default\": DB.DEFAULT_COUNT\n  },\n  created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('locations', Locations);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DB, \"DB\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/locations.model.js\");\n  reactHotLoader.register(Locations, \"Locations\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/locations.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/locations.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/locations.model.js?");

/***/ }),

/***/ "./server/models/rating_range.model.js":
/*!*********************************************!*\
  !*** ./server/models/rating_range.model.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar DB = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DB;\nvar ratingRange = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  url: {\n    type: String,\n    lowercase: true,\n    required: true,\n    unique: true\n  },\n  count: {\n    type: Number,\n    \"default\": DB.DEFAULT_COUNT\n  },\n  created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('rating_range', ratingRange, 'rating_range');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DB, \"DB\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/rating_range.model.js\");\n  reactHotLoader.register(ratingRange, \"ratingRange\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/rating_range.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/models/rating_range.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/rating_range.model.js?");

/***/ }),

/***/ "./server/routes/posts.routes.js":
/*!***************************************!*\
  !*** ./server/routes/posts.routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/posts.controller */ \"./server/controllers/posts.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar _default = function _default(router) {\n  // router.get('/websites-categories', postsController.listOfAllWebsitesAndCategrories);\n  // router.get('/categories-by-websites', postsController.listOfAllCategoriesFilteredByWebsites)\n  // router.get('/videos-by-profile', postsController.listOfVideosByModels);\n  // router.get('/profile-data', postsController.listOfProfileData);\n  // router.post('/list-profiles', postsController.listOfProfiles);\n  router.get('/fetch-filters', _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchCompaniesMetainfo);\n  router.get('/list-companies', _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listAllCompanies);\n  return router;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshu/Documents/live-project/salarycounterapp/server/routes/posts.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/posts.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MONGO_URI, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('error', function () {\n  throw new Error('unable to connect to database');\n});\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listen(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar _default = function _default() {\n  return \"\\n        <!DOCTYPE html>\\n            <html lang=\\\"en\\\">\\n                <head>\\n                    <meta charset=\\\"utf-8\\\">\\n                    <title>Detail | Basik - Bootstrap 4 Web Application</title>\\n                    <meta name=\\\"description\\\" content=\\\"Responsive, Bootstrap, BS4\\\">\\n                    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1, shrink-to-fit=no\\\">\\n                    <title>Course - Courses Listing Page | Front - Responsive Website Template</title>\\n                    <!-- Font -->\\n                    <link href=\\\"https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap\\\" rel=\\\"stylesheet\\\">\\n                    <link rel=\\\"stylesheet\\\" href=\\\"/css/all.css\\\">\\n                    <link rel=\\\"stylesheet\\\" href=\\\"/css/theme.css\\\">\\n                    </head>\\n                <body class=\\\"layout-column\\\">\\n                        <div id=\\\"root\\\"></div>\\n                        <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n                </body> \\n            </html>\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshu/Documents/live-project/salarycounterapp/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['babel-polyfill', 'react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    chunkFilename: '[id].js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /.css$/,\n      use: [{\n        loader: 'style-loader'\n      }, {\n        loader: 'css-loader'\n      }]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/himanshu/Documents/live-project/salarycounterapp/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/Users/himanshu/Documents/live-project/salarycounterapp/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi babel-polyfill ./server/server.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! /Users/himanshu/Documents/live-project/salarycounterapp/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./server/server.js?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request\");\n\n//# sourceURL=webpack:///external_%22request%22?");

/***/ }),

/***/ "request-promise":
/*!**********************************!*\
  !*** external "request-promise" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request-promise\");\n\n//# sourceURL=webpack:///external_%22request-promise%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });