(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dnd"), require("react-dnd-html5-backend"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dnd", "react-dnd-html5-backend"], factory);
	else if(typeof exports === 'object')
		exports["HelloWorldReact"] = factory(require("react"), require("react-dnd"), require("react-dnd-html5-backend"));
	else
		root["HelloWorldReact"] = factory(root["react"], root["react-dnd"], root["react-dnd-html5-backend"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].e;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			e: {},
/******/ 			i: moduleId,
/******/ 			l: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.e, module, module.e, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.e;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.e = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.e = require("react-dnd");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = undefined && undefined.__metadata || function (k, v) {
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var React = __webpack_require__(0);
	var react_dnd_1 = __webpack_require__(1);
	var cardSource = {
	    beginDrag: function beginDrag(props, monitor, component) {
	        var e = Object.assign({}, props.children, { id: props.id });
	        return {
	            element: e,
	            forTarget: props.forTarget,
	            id: props.id
	        };
	    }
	};
	var DragSourceElement = function (_React$Component) {
	    _inherits(DragSourceElement, _React$Component);

	    function DragSourceElement() {
	        _classCallCheck(this, DragSourceElement);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(DragSourceElement).call(this));
	    }

	    _createClass(DragSourceElement, [{
	        key: "render",
	        value: function render() {
	            var style = {
	                border: '1px dashed gray',
	                padding: '0.5rem 1rem',
	                marginBottom: '.5rem',
	                backgroundColor: 'white',
	                display: 'table'
	            };
	            var isDragging = this.props.isDragging ? this.props.isDragging : false;
	            var connectDragSource = this.props.connectDragSource;
	            var opacity = isDragging ? 0 : 1;
	            return connectDragSource(React.createElement("div", { style: Object.assign({}, style, { opacity: opacity }) }, this.props.children));
	        }
	    }]);

	    return DragSourceElement;
	}(React.Component);
	DragSourceElement = __decorate([react_dnd_1.DragSource('element', cardSource, function (connect, monitor) {
	    return {
	        connectDragSource: connect.dragSource(),
	        isDragging: monitor.isDragging()
	    };
	}), __metadata('design:paramtypes', [])], DragSourceElement);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DragSourceElement;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var DragDropContext_1 = __webpack_require__(4);
	var DragSourceElement_1 = __webpack_require__(2);
	var DropTargetContainer_1 = __webpack_require__(5);
	module.e = { DragDropContext: DragDropContext_1.default, DragSourceElement: DragSourceElement_1.default, DropTargetContainer: DropTargetContainer_1.default };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = undefined && undefined.__metadata || function (k, v) {
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var React = __webpack_require__(0);
	var react_dnd_1 = __webpack_require__(1);
	var HTML5Backend = __webpack_require__(6);
	var Containers = function (_React$Component) {
	    _inherits(Containers, _React$Component);

	    function Containers(props) {
	        _classCallCheck(this, Containers);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Containers).call(this, props));
	    }

	    _createClass(Containers, [{
	        key: "render",
	        value: function render() {
	            return React.createElement("div", null, this.props.children);
	        }
	    }]);

	    return Containers;
	}(React.Component);
	Containers = __decorate([react_dnd_1.DragDropContext(HTML5Backend), __metadata('design:paramtypes', [Object])], Containers);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Containers;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = undefined && undefined.__metadata || function (k, v) {
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var React = __webpack_require__(0);
	var react_dnd_1 = __webpack_require__(1);
	var DragSourceElement_1 = __webpack_require__(2);
	var boxTarget = {
	    drop: function drop(props, monitor, component) {
	        var item = monitor.getItem();
	        component.moveElement(item.element, item.forTarget, item.id);
	    }
	};
	var DropTargetContainer = function (_React$Component) {
	    _inherits(DropTargetContainer, _React$Component);

	    function DropTargetContainer(props) {
	        _classCallCheck(this, DropTargetContainer);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DropTargetContainer).call(this, props));

	        _this.state = {
	            elementHover: -1
	        };
	        return _this;
	    }

	    _createClass(DropTargetContainer, [{
	        key: "moveElement",
	        value: function moveElement(element, forTarget, idElement) {
	            if (forTarget.indexOf(this.props.idTarget) == -1 || this.getElement(idElement)) {
	                return false;
	            }
	            if (this.props.onDrop) {
	                this.props.onDrop(this.props.idTarget, element);
	            }
	        }
	    }, {
	        key: "removeElement",
	        value: function removeElement(i) {
	            this.props.onRemove(this.props.idTarget, i);
	        }
	    }, {
	        key: "getElement",
	        value: function getElement(id) {
	            var data = this.props.elements;
	            if (data) {
	                var _ret = function () {
	                    var exist = false;
	                    var e = data.map(function (e, i) {
	                        exist = e.id == id ? e : exist;
	                    });
	                    return {
	                        v: exist
	                    };
	                }();

	                if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	            }
	            return false;
	        }
	    }, {
	        key: "onMouseOver",
	        value: function onMouseOver(i) {
	            this.setState({
	                elementHover: i
	            });
	        }
	    }, {
	        key: "onMouseLeave",
	        value: function onMouseLeave() {
	            this.setState({
	                elementHover: -1
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            var connectDropTarget = this.props.connectDropTarget;
	            var style = {
	                padding: '7px 7px 4px 4px',
	                display: 'table',
	                float: 'left',
	                position: 'relative'
	            };
	            var removeBtn = {
	                padding: '3px 5px',
	                fontSize: 10,
	                border: '1px solid',
	                borderRadius: '50%',
	                backgroundColor: '#000',
	                color: '#fff',
	                position: 'absolute',
	                right: -10,
	                top: 0
	            };
	            var elements = this.props.elements ? this.props.elements : [];
	            return React.createElement("div", null, connectDropTarget(React.createElement("div", { style: this.props.style ? this.props.style : null }, elements.length > 0 ? elements.map(function (e, i) {
	                return React.createElement("div", { key: i, style: { display: 'table', float: 'left' } }, _this2.props.reDrop ? React.createElement(DragSourceElement_1.default, { forTarget: [] }, React.createElement("div", { style: style, onMouseOver: _this2.onMouseOver.bind(_this2, i), onMouseLeave: _this2.onMouseLeave.bind(_this2) }, React.createElement("div", { style: { display: 'inline-block' } }, e), _this2.state.elementHover == i ? React.createElement("span", { style: removeBtn, onClick: _this2.removeElement.bind(_this2, i) }, "X") : null)) : React.createElement("div", { style: style, key: i, onMouseOver: _this2.onMouseOver.bind(_this2, i), onMouseLeave: _this2.onMouseLeave.bind(_this2) }, React.createElement("div", { style: { display: 'inline-block' } }, e), _this2.state.elementHover == i ? React.createElement("span", { style: removeBtn, onClick: _this2.removeElement.bind(_this2, i) }, "X") : null));
	            }) : this.props.children ? this.props.children : null)));
	        }
	    }]);

	    return DropTargetContainer;
	}(React.Component);
	DropTargetContainer = __decorate([react_dnd_1.DropTarget('element', boxTarget, function (connect) {
	    return {
	        connectDropTarget: connect.dropTarget()
	    };
	}), __metadata('design:paramtypes', [Object])], DropTargetContainer);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DropTargetContainer;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.e = require("react-dnd-html5-backend");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.e = __webpack_require__(3);


/***/ }
/******/ ])
});
;