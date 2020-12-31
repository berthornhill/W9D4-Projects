/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

class FollowToggle {
    
    constructor(el) {
        debugger
        this.$el = $(el);
        this.userId = this.$el.data("id");
        this.followState = this.$el.data("initial-follow-state")
        this.render();
    }

    render(){
        if (this.followState === "unfollowed") {
            this.$el.innerText = "unfollowed"
        } else {
            this.$el.innerText = "followed"
        }
    }
}

module.exports = FollowToggle;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

$(() => {
    const $followToggles = $('.follow-toggle') // [btn1, btn2, btn3]
    
    $followToggles.each(function() {
        debugger
        new FollowToggle(this);
    });

    $('.follow-toggle').on("submit", e => {
        e.preventDefault();
        debugger
    });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map