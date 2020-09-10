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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  env: \"development\" || false,\n  port: process.env.PORT || 3000,\n  API_URL: \"http://localhost:3000\",\n  // API_URL: \"http://192.168.0.132:3000\",\n  // API_URL: \"https://notinmood.com\",\n  // MONGO_URI : 'mongodb+srv://notinmood:notinmood123@cluster0-57jsn.mongodb.net/notinmood?retryWrites=true&w=majority',\n  MONGO_URI: \"mongodb://boobsboy:boobsboylovesit@128.199.20.103:27017/boobsboy\",\n  COOKIEKEY: 'mycookiesecret',\n  REDIS: {\n    URL: \"redis://127.0.0.1:6379\"\n  },\n  DB: {\n    DEFAULT_COUNT: 0,\n    DEFAULT_CONTENT_TYPE: 1,\n    //1-images 2- videos\n    DEFAULT_TRUE: true,\n    DEFAULT_FALSE: false,\n    DEFAULT_ACCOUNT_TYPE: 0,\n    // -1 - ADMIN SIDE  0 - Normal , 1- Google, 2- Facebook\n    GENDER: {\n      MALE: 1,\n      FEMALE: 2,\n      OTHER: 3\n    },\n    BADGETS: {\n      NOOBIE: 1,\n      PRO: 2\n    },\n    CRAWLED_TYPE: {\n      DEFAULT: 0,\n      FB: 1,\n      GAG: 2\n    },\n    AGE_GROUP: {\n      ONE: 1,\n      //18 - 20\n      TWO: 2,\n      //20 - 30\n      THREE: 3,\n      //30 - 40\n      FOUR: 4 //40 - 50+\n\n    }\n  },\n  S3: {\n    BUCKET: 'notinmood',\n    URL: 'https://notinmood.s3.ap-south-1.amazonaws.com',\n    ACCESS: 'AKIA3YIPQLXVUSE5T2BI',\n    SECRET: '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'\n  },\n  LOGIN_KEYS: {\n    GOOGLE: {\n      CLIENT: '38122336055-7stkqff3vae90il94e1p12tp0pq26a4h.apps.googleusercontent.com',\n      SECRET: 'Czvtwg5Is_ZZwdVPEwUAoR8c'\n    }\n  },\n  MESSAGES: {\n    100: \"post has beeb added successfully\",\n    101: \"section has been added successfully\"\n  },\n  ERRORS: {\n    100: \"something went wrong, please try to post again\"\n  },\n  USER: {\n    POST_TYPES: {\n      UPLOADED: 1,\n      LIKED: 2,\n      COMMENTED: 3\n    }\n  },\n  JWT_SECRET: \"himanshu@1234\",\n  ACCESS_TOKEN: \"0z6v8b4uua\"\n});\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./server/controllers/posts.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/posts.controller.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_profiles_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/profiles.model */ \"./server/models/profiles.model.js\");\n/* harmony import */ var _models_videos_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/videos.model */ \"./server/models/videos.model.js\");\n/* harmony import */ var _models_categories_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/categories.model */ \"./server/models/categories.model.js\");\n/* harmony import */ var _models_websites_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/websites.model */ \"./server/models/websites.model.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var request_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! request-promise */ \"request-promise\");\n/* harmony import */ var request_promise__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(request_promise__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_9___default.a.S3({\n  accessKeyId: _config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].S3.ACCESS,\n  secretAccessKey: _config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].S3.SECRET,\n  region: 'ap-south-1'\n});\n\nconst uploadToS3 = async (externalUrl = null, data64 = null, path = 'uploads', uploadType = null) => {\n  console.log('s3-upload');\n\n  try {\n    let result = null,\n        base64 = null,\n        mime = null,\n        ext = null;\n    let listOfSupportedExtns = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'mp4'];\n\n    if (data64) {\n      result = Buffer.from(data64.replace(/^data:image\\/\\w+;base64,/, \"\"), 'base64');\n      ext = req.body.ext;\n    } else {\n      result = await request_promise__WEBPACK_IMPORTED_MODULE_10___default()({\n        url: externalUrl,\n        encoding: null\n      });\n      let buff = new Buffer(result);\n      ext = externalUrl.split('.').pop();\n      base64 = `data:image/${ext};base64,` + buff.toString('base64');\n    }\n\n    const slugId = Object(uuid__WEBPACK_IMPORTED_MODULE_7__[\"v4\"])();\n    ext = listOfSupportedExtns.indexOf(ext) < 0 ? 'jpg' : ext;\n    const base64Data = result;\n    const type = uploadType === 'video' ? `video/mp4` : `image/${ext}`; // const key = `${path}/${moment().format('DD-MM-YYYY')}/${slugId}.${ext}`;\n\n    const key = uploadType === 'video' ? `${path}/${slugId}.mp4` : `${path}/${slugId}.${ext}`;\n    const params = {\n      Bucket: _config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].S3.BUCKET,\n      Key: key,\n      Body: base64Data,\n      ContentType: type\n    };\n    let s3Result = null;\n\n    if (uploadType === 'video') {\n      // s3Result = s3.upload(params);\n      // s3Result.on('httpUploadProgress', function (progress) {\n      //     console.log(progress.loaded + \" of \" + progress.total + \" bytes\");\n      // });\n      // s3Result.send();\n      fs__WEBPACK_IMPORTED_MODULE_8___default.a.writeFileSync(`${path}/${slugId}.mp4`, result);\n    } else {\n      s3Result = await s3.putObject(params).promise();\n    }\n\n    console.log({\n      url: `https://${_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].S3.BUCKET}.s3.ap-south-1.amazonaws.com/${key}`,\n      key: key,\n      slug: slugId,\n      mime: type,\n      ext\n    });\n    return {\n      s3_url: `https://${_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].S3.BUCKET}.s3.ap-south-1.amazonaws.com/${key}`,\n      slug_id: slugId,\n      mime: type,\n      ext\n    };\n  } catch (e) {\n    console.log(e);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  listOfProfileData: async (req, res) => {\n    const {\n      model\n    } = req.query;\n    let categories = [],\n        websites = [];\n\n    if (model) {\n      const videos = await _models_videos_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aggregate([{\n        $match: {\n          $expr: {\n            $in: [mongoose__WEBPACK_IMPORTED_MODULE_4___default.a.Types.ObjectId(model), '$profiles']\n          }\n        }\n      }]);\n\n      for (let video of videos) {\n        categories = [...categories, ...video.categories];\n        websites = [...websites, ...video.websites];\n      }\n\n      websites = lodash__WEBPACK_IMPORTED_MODULE_11___default.a.uniq(websites);\n      categories = lodash__WEBPACK_IMPORTED_MODULE_11___default.a.uniq(categories);\n    } else {\n      categories = await _models_categories_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].aggregate([{\n        $match: {}\n      }, {\n        $sort: {\n          videos_count: -1\n        }\n      }]).cache({\n        key: 'allcategories'\n      });\n      websites = await _models_websites_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aggregate([{\n        $match: {}\n      }, {\n        $sort: {\n          videos_count: -1\n        }\n      }]).cache({\n        key: 'allwebsites'\n      });\n    }\n\n    res.send({\n      data: {\n        websites,\n        categories\n      }\n    });\n  },\n  listOfVideosByModels: async (req, res) => {\n    console.log(req.query);\n    let {\n      offset: skip,\n      limit,\n      filters\n    } = req.query;\n    console.log(filters);\n    let sort = {\n      _id: -1\n    },\n        model = null,\n        videoFilterPipeline = [];\n    filters = JSON.parse(filters);\n\n    if (filters.sort) {\n      sort = filters.sort;\n    }\n\n    if (filters.condition) {\n      model = filters.condition.model || null;\n    }\n\n    const filterObj = model ? {\n      $expr: {\n        $in: ['$$profile_id', '$profiles']\n      }\n    } : {};\n\n    if (filters.condition.category.length > 0 && filters.condition.website.length == 0) {\n      videoFilterPipeline = [{\n        $match: filterObj\n      }, {\n        $lookup: {\n          from: 'profiles',\n          localField: 'profiles',\n          foreignField: '_id',\n          as: 'profiles'\n        }\n      }, {\n        $match: {\n          categories: {\n            $all: filters.condition.category\n          }\n        }\n      }, {\n        $sort: sort\n      }, {\n        $skip: +skip\n      }, {\n        $limit: +limit\n      }];\n    } else if (filters.condition.website.length > 0 && filters.condition.category.length == 0) {\n      videoFilterPipeline = [{\n        $match: filterObj\n      }, {\n        $lookup: {\n          from: 'profiles',\n          localField: 'profiles',\n          foreignField: '_id',\n          as: 'profiles'\n        }\n      }, {\n        $match: {\n          websites: {\n            $all: filters.condition.website\n          }\n        }\n      }, {\n        $sort: sort\n      }, {\n        $skip: +skip\n      }, {\n        $limit: +limit\n      }];\n    } else if (filters.condition.website.length == 0 && filters.condition.category.length == 0) {\n      videoFilterPipeline = [{\n        $match: filterObj\n      }, {\n        $lookup: {\n          from: 'profiles',\n          localField: 'profiles',\n          foreignField: '_id',\n          as: 'profiles'\n        }\n      }, {\n        $sort: sort\n      }, {\n        $skip: +skip\n      }, {\n        $limit: +limit\n      }];\n    } else {\n      videoFilterPipeline = [{\n        $match: filterObj\n      }, {\n        $lookup: {\n          from: 'profiles',\n          localField: 'profiles',\n          foreignField: '_id',\n          as: 'profiles'\n        }\n      }, {\n        $match: {\n          $and: [{\n            websites: {\n              $all: filters.condition.website\n            }\n          }, {\n            categories: {\n              $all: filters.condition.category\n            }\n          }]\n        }\n      }, {\n        $sort: sort\n      }, {\n        $skip: +skip\n      }, {\n        $limit: +limit\n      }];\n    }\n\n    let data;\n\n    if (model) {\n      data = await _models_profiles_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aggregate([{\n        $match: {\n          _id: mongoose__WEBPACK_IMPORTED_MODULE_4___default.a.Types.ObjectId(model)\n        }\n      }, {\n        $lookup: {\n          from: \"videos\",\n          let: {\n            profile_id: '$_id'\n          },\n          pipeline: videoFilterPipeline,\n          as: 'videos'\n        }\n      }]);\n    } else {\n      data = await _models_videos_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aggregate(videoFilterPipeline);\n    }\n\n    res.send({\n      data\n    });\n  },\n  listOfProfiles: async (req, res) => {\n    console.log(req.body);\n    const {\n      offset: skip,\n      limit,\n      filters\n    } = req.body;\n    let filterObj = {},\n        sort = {\n      videos_count: -1\n    };\n\n    if (filters.sort) {\n      sort = filters.sort;\n    }\n\n    if (filters.condition) {\n      filterObj = filters.condition;\n    }\n\n    try {\n      const totalProfiles = await _models_profiles_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].count();\n      const profiles = await _models_profiles_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aggregate([{\n        $match: filterObj\n      }, {\n        $sort: sort\n      }, {\n        $skip: +skip\n      }, {\n        $limit: +limit\n      }]);\n      res.send({\n        data: profiles,\n        count: totalProfiles\n      });\n    } catch (error) {\n      res.send({\n        error\n      });\n    }\n  },\n  listOfAllWebsitesAndCategrories: async (req, res) => {\n    const allCategories = await _models_categories_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].aggregate([{\n      $match: {}\n    }, {\n      $sort: {\n        videos_count: -1\n      }\n    }]);\n    const allWebsites = await _models_websites_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aggregate([{\n      $match: {}\n    }, {\n      $sort: {\n        videos_count: -1\n      }\n    }]);\n    res.send({\n      data: {\n        categories: allCategories,\n        websites: allWebsites\n      }\n    });\n  },\n  listOfAllCategoriesFilteredByWebsites: async (req, res) => {\n    const {\n      website\n    } = req.query;\n    const allCategories = await _models_videos_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aggregate([{\n      $match: {\n        websites: {\n          $in: [website.trim()]\n        }\n      }\n    }, {\n      $project: {\n        categories: 1\n      }\n    }]);\n    let uniqueCategories = {},\n        selectedCategories = [],\n        count = 0;\n\n    for (let category of allCategories) {\n      let {\n        categories,\n        _id\n      } = category;\n\n      for (let x of categories) {\n        uniqueCategories[x] ? ++uniqueCategories[x] : uniqueCategories[x] = 1;\n      }\n    }\n\n    for (let k in uniqueCategories) {\n      selectedCategories.push({\n        _id: ++count,\n        name: k,\n        videos_count: uniqueCategories[k]\n      });\n    }\n\n    res.send({\n      data: {\n        categories: selectedCategories\n      }\n    });\n  },\n  listVideos: async (req, res) => {\n    const {\n      limit = 10,\n      offset: skip = 0\n    } = req.query;\n    let filterObj = {},\n        sort = {\n      _id: -1\n    };\n    const videos = await _models_videos_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aggregate([{\n      $match: filterObj\n    }, {\n      $sort: sort\n    }, {\n      $skip: +skip\n    }, {\n      $limit: +limit\n    }]);\n    res.send({\n      data: videos\n    });\n  }\n});\n\n//# sourceURL=webpack:///./server/controllers/posts.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst compile = app => {\n  if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  compile\n});\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../template.js */ \"./template.js\");\n/* harmony import */ var _routes_posts_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/posts.routes */ \"./server/routes/posts.routes.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/cache */ \"./server/services/cache.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  limit: '10mb',\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json({\n  limit: '10mb',\n  extended: true\n}));\nconst CURRENT_WORKING_DIR = process.cwd();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'public'))); //comment out before building for production\n\n //comment out before building for production\n\n_devBundle__WEBPACK_IMPORTED_MODULE_7__[\"default\"].compile(app);\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist')));\napp.use('/api', Object(_routes_posts_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(express__WEBPACK_IMPORTED_MODULE_0___default.a.Router()));\napp.get('*', (req, res) => {\n  res.send(Object(_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/models/categories.model.js":
/*!*******************************************!*\
  !*** ./server/models/categories.model.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\n\nconst {\n  DB\n} = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nconst Categories = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  videos_count: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  videos_downloaded: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('categories', Categories));\n\n//# sourceURL=webpack:///./server/models/categories.model.js?");

/***/ }),

/***/ "./server/models/profiles.model.js":
/*!*****************************************!*\
  !*** ./server/models/profiles.model.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\n\nconst {\n  DB\n} = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nconst Profiles = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  profile_picture: {\n    type: String\n  },\n  hair_color: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  height: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  weight: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  tits_size: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  gender: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  profile_views: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  source: {\n    type: String\n  },\n  total_videos_views: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  total_videos_count: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  videos_count: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  is_uploaded: {\n    type: Boolean,\n    default: DB.DEFAULT_FALSE\n  },\n  rating: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  age_group: {\n    type: Number\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('profiles', Profiles));\n\n//# sourceURL=webpack:///./server/models/profiles.model.js?");

/***/ }),

/***/ "./server/models/videos.model.js":
/*!***************************************!*\
  !*** ./server/models/videos.model.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\n\nconst {\n  DB\n} = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nconst Videos = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  title: {\n    type: String,\n    required: true\n  },\n  s3_url: {\n    type: String,\n    default: null\n  },\n  download_url: {\n    type: String,\n    default: null\n  },\n  source_url: {\n    type: String\n  },\n  download_id: {\n    type: String,\n    default: null\n  },\n  is_downloaded: {\n    type: Boolean,\n    default: DB.DEFAULT_FALSE\n  },\n  poster_url: {\n    type: String\n  },\n  video_link_url: {\n    type: String\n  },\n  total_duration: {\n    type: Number //IN SECONDS\n\n  },\n  thumb_video_preview: {\n    type: String,\n    unique: true\n  },\n  views: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  video_badge: {\n    type: String\n  },\n  total_likes_count: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  total_dislikes_count: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  websites: [{\n    type: String\n  }],\n  profiles: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'profiles'\n  }],\n  categories: [{\n    type: String\n  }],\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('videos', Videos));\n\n//# sourceURL=webpack:///./server/models/videos.model.js?");

/***/ }),

/***/ "./server/models/websites.model.js":
/*!*****************************************!*\
  !*** ./server/models/websites.model.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\n\nconst {\n  DB\n} = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nconst Websites = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  videos_count: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  videos_downloaded: {\n    type: Number,\n    default: DB.DEFAULT_COUNT\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('websites', Websites));\n\n//# sourceURL=webpack:///./server/models/websites.model.js?");

/***/ }),

/***/ "./server/routes/posts.routes.js":
/*!***************************************!*\
  !*** ./server/routes/posts.routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/posts.controller */ \"./server/controllers/posts.controller.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router => {\n  router.get('/websites-categories', _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listOfAllWebsitesAndCategrories);\n  router.get('/categories-by-websites', _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listOfAllCategoriesFilteredByWebsites);\n  router.get('/videos-by-profile', _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listOfVideosByModels);\n  router.get('/profile-data', _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listOfProfileData);\n  router.post('/list-profiles', _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listOfProfiles);\n  return router;\n});\n\n//# sourceURL=webpack:///./server/routes/posts.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MONGO_URI, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('error', () => {\n  throw new Error('unable to connect to database');\n});\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listen(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./server/services/cache.js":
/*!**********************************!*\
  !*** ./server/services/cache.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redis */ \"redis\");\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\n\n\n\nconst client = redis__WEBPACK_IMPORTED_MODULE_1___default.a.createClient(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].REDIS.URL);\nclient.hget = util__WEBPACK_IMPORTED_MODULE_2___default.a.promisify(client.hget);\nconst exec = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Query.prototype.exec;\nconst execAgre = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Aggregate.prototype.exec;\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Query.prototype.cache = function (options = {}) {\n  this.useCache = true;\n  this.hashKey = JSON.stringify(options.key || '');\n  return this;\n};\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Query.prototype.exec = async function () {\n  console.log(\"this is inside exec\");\n\n  if (!this.useCache) {\n    return exec.apply(this, arguments);\n  }\n\n  const key = JSON.stringify(Object.assign({}, this.getQuery(), {\n    collection: this.mongooseCollection.name\n  })); // See if we have a value for 'key' in redis\n\n  const cacheValue = await client.hget(this.hashKey, key); // If we do, return that\n\n  if (cacheValue) {\n    const doc = JSON.parse(cacheValue);\n    console.log(\"its coming form cache\");\n    return Array.isArray(doc) ? doc.map(d => new this.model(d)) : new this.model(doc);\n  }\n\n  console.log(\"its coming form db\"); // Otherwise, issue the query and store the result in redis\n\n  const result = await exec.apply(this, arguments);\n  client.hset(this.hashKey, key, JSON.stringify(result), 'EX', 10);\n  return result;\n};\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Aggregate.prototype.cache = function (options = {}) {\n  this.useCache = true;\n  this.hashKey = JSON.stringify(options.key || '');\n  return this;\n};\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Aggregate.prototype.exec = async function () {\n  if (!this.useCache) {\n    return execAgre.apply(this, arguments);\n  }\n\n  console.log(this._model.collection.collectionName);\n  let pipeline = this.pipeline();\n  const key = JSON.stringify([...pipeline, {\n    collection: this._model.collection.name\n  }]);\n  console.log(key);\n  const cacheValue = await client.hget(this.hashKey, key); // If we do, return that\n\n  if (cacheValue) {\n    const doc = JSON.parse(cacheValue);\n    console.log(\"its coming form cache\");\n    return doc;\n  }\n\n  console.log(\"its coming form db\"); // Otherwise, issue the query and store the result in redis\n\n  const result = await execAgre.apply(this, arguments);\n  client.hset(this.hashKey, key, JSON.stringify(result), 'EX', 10);\n  return result;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  clearHash: () => {\n    client.del(JSON.stringify(hashKey));\n  }\n});\n\n//# sourceURL=webpack:///./server/services/cache.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return `\n        <!DOCTYPE html>\n            <html lang=\"en\" class=\"bg-dark\" data-class=\"bg-dark\">\n            <head>\n                <meta charset=\"utf-8\">\n                <title>Detail | Basik - Bootstrap 4 Web Application</title>\n                <meta name=\"description\" content=\"Responsive, Bootstrap, BS4\">\n                <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,maximum-scale=1\">\n                <link rel=\"stylesheet\" href=\"/css/style.css\">\n            </head>\n            <body class=\"layout-column\">\n                    <div id=\"root\"></div>\n                    <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n            </body> \n        </html>`;\n});\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['babel-polyfill', 'react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    chunkFilename: '[id].js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /.css$/,\n      use: [{\n        loader: 'style-loader'\n      }, {\n        loader: 'css-loader'\n      }]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

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

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redis\");\n\n//# sourceURL=webpack:///external_%22redis%22?");

/***/ }),

/***/ "request-promise":
/*!**********************************!*\
  !*** external "request-promise" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request-promise\");\n\n//# sourceURL=webpack:///external_%22request-promise%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

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