webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar *ngIf=\"authService.loggedIn()\"></app-navbar>\n<div class=\"container-fluid\">\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.picture_url = JSON.parse(localStorage.getItem('user')).picture_url;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_can_deactivate_service__ = __webpack_require__("../../../../../src/app/services/can-deactivate-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_presentation_resources_pow_demo_pow_demo_component__ = __webpack_require__("../../../../../src/app/components/presentation-resources/pow-demo/pow-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_presentation_resources_hash_demo_hash_demo_component__ = __webpack_require__("../../../../../src/app/components/presentation-resources/hash-demo/hash-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_carouselamos__ = __webpack_require__("../../../../ng2-carouselamos/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_carousel__ = __webpack_require__("../../../../primeng/carousel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_dragdrop__ = __webpack_require__("../../../../primeng/dragdrop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_dragdrop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_dragdrop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_blockchain_demo_create_tx_create_tx_component__ = __webpack_require__("../../../../../src/app/components/blockchain-demo/create-tx/create-tx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_blockchain_demo_create_tx_mempool_mempool_component__ = __webpack_require__("../../../../../src/app/components/blockchain-demo/create-tx/mempool/mempool.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_blockchain_demo_blockchain_blockchain_component__ = __webpack_require__("../../../../../src/app/components/blockchain-demo/blockchain/blockchain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_blockchain_demo_create_block_create_block_component__ = __webpack_require__("../../../../../src/app/components/blockchain-demo/create-block/create-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_blockchain_demo_create_block_incoming_blocks_incoming_blocks_component__ = __webpack_require__("../../../../../src/app/components/blockchain-demo/create-block/incoming-blocks/incoming-blocks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_blockchain_demo_blockchain_block_header_block_header_component__ = __webpack_require__("../../../../../src/app/components/blockchain-demo/blockchain/block-header/block-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_blockchain_demo_blockchain_block_txs_block_txs_component__ = __webpack_require__("../../../../../src/app/components/blockchain-demo/blockchain/block-txs/block-txs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_blockchain_demo_create_block_block_form_block_form_component__ = __webpack_require__("../../../../../src/app/components/blockchain-demo/create-block/block-form/block-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_blockchain_demo_blockchain_demo_component__ = __webpack_require__("../../../../../src/app/components/blockchain-demo/blockchain-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_certification_certification_component__ = __webpack_require__("../../../../../src/app/components/certification/certification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_presentation_resources_presentation_resources_component__ = __webpack_require__("../../../../../src/app/components/presentation-resources/presentation-resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_presentation_resources_wallet_generator_wallet_generator_component__ = __webpack_require__("../../../../../src/app/components/presentation-resources/wallet-generator/wallet-generator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_error_page_error_page_component__ = __webpack_require__("../../../../../src/app/components/error-page/error-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_query_service__ = __webpack_require__("../../../../../src/app/services/query.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_glossary_glossary_component__ = __webpack_require__("../../../../../src/app/components/glossary/glossary.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































/**
 * All child routes protected if canActivate present on parent
 * To allow the parent but not the children, use canActivateChild: [AuthGuardService] instead
 */
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_29__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_17__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_16__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]], component: __WEBPACK_IMPORTED_MODULE_18__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'blockchain-demo', /*canActivate: [AuthGuardService],*/ component: __WEBPACK_IMPORTED_MODULE_28__components_blockchain_demo_blockchain_demo_component__["a" /* BlockchainDemoComponent */], children: [
            { path: 'create-tx', component: __WEBPACK_IMPORTED_MODULE_20__components_blockchain_demo_create_tx_create_tx_component__["a" /* CreateTxComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_0__services_can_deactivate_service__["a" /* CanDeactivateGuard */]] },
            { path: 'create-block', component: __WEBPACK_IMPORTED_MODULE_23__components_blockchain_demo_create_block_create_block_component__["a" /* CreateBlockComponent */] },
            { path: 'blockchain', component: __WEBPACK_IMPORTED_MODULE_22__components_blockchain_demo_blockchain_blockchain_component__["a" /* BlockchainComponent */] }
        ] },
    { path: 'certification', canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]], component: __WEBPACK_IMPORTED_MODULE_30__components_certification_certification_component__["a" /* CertificationComponent */] },
    { path: 'glossary', /*canActivate: [AuthGuardService],*/ component: __WEBPACK_IMPORTED_MODULE_35__components_glossary_glossary_component__["a" /* GlossaryComponent */] },
    { path: 'presentation-resources', /*canActivate: [AuthGuardService],*/ component: __WEBPACK_IMPORTED_MODULE_31__components_presentation_resources_presentation_resources_component__["a" /* PresentationResourcesComponent */], children: [
            { path: 'hash-demo', component: __WEBPACK_IMPORTED_MODULE_3__components_presentation_resources_hash_demo_hash_demo_component__["a" /* HashDemoComponent */] },
            { path: 'pow-demo', component: __WEBPACK_IMPORTED_MODULE_2__components_presentation_resources_pow_demo_pow_demo_component__["a" /* PowDemoComponent */] },
            { path: 'wallet-generator', component: __WEBPACK_IMPORTED_MODULE_32__components_presentation_resources_wallet_generator_wallet_generator_component__["a" /* WalletGeneratorComponent */] }
        ] },
    { path: 'error-page', component: __WEBPACK_IMPORTED_MODULE_33__components_error_page_error_page_component__["a" /* ErrorPageComponent */], data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/error-page' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_blockchain_demo_create_tx_create_tx_component__["a" /* CreateTxComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_blockchain_demo_create_tx_mempool_mempool_component__["a" /* MempoolComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_blockchain_demo_blockchain_blockchain_component__["a" /* BlockchainComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_blockchain_demo_create_block_create_block_component__["a" /* CreateBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_blockchain_demo_create_block_incoming_blocks_incoming_blocks_component__["a" /* IncomingBlocksComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_blockchain_demo_blockchain_block_header_block_header_component__["a" /* BlockHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_blockchain_demo_blockchain_block_txs_block_txs_component__["a" /* BlockTxsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_blockchain_demo_create_block_block_form_block_form_component__["a" /* BlockFormComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_blockchain_demo_blockchain_demo_component__["a" /* BlockchainDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_presentation_resources_wallet_generator_wallet_generator_component__["a" /* WalletGeneratorComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_certification_certification_component__["a" /* CertificationComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_presentation_resources_presentation_resources_component__["a" /* PresentationResourcesComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_presentation_resources_hash_demo_hash_demo_component__["a" /* HashDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_presentation_resources_pow_demo_pow_demo_component__["a" /* PowDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_error_page_error_page_component__["a" /* ErrorPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_35__components_glossary_glossary_component__["a" /* GlossaryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ng2_carouselamos__["a" /* Ng2CarouselamosModule */],
                __WEBPACK_IMPORTED_MODULE_13_primeng_carousel__["CarouselModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_dragdrop__["DragDropModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_0__services_can_deactivate_service__["a" /* CanDeactivateGuard */], __WEBPACK_IMPORTED_MODULE_34__services_query_service__["a" /* QueryService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/blockchain-demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".activeNav {\n    background-color: #eeedf7 !important;\n    color: #312a44;\n}\n\n.navOverride {\n    background-color: transparent;\n    color: #312a44;\n}\n\n\n.navOverride:hover {\n    background-color: transparent;\n    color: #312a44;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/blockchain-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/blockchain-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockchainDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlockchainDemoComponent = (function () {
    function BlockchainDemoComponent() {
    }
    BlockchainDemoComponent.prototype.ngOnInit = function () {
    };
    BlockchainDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blockchain-demo',
            template: __webpack_require__("../../../../../src/app/components/blockchain-demo/blockchain-demo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blockchain-demo/blockchain-demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockchainDemoComponent);
    return BlockchainDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/blockchain/block-header/block-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/blockchain/block-header/block-header.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  block-header works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/blockchain/block-header/block-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlockHeaderComponent = (function () {
    function BlockHeaderComponent() {
    }
    BlockHeaderComponent.prototype.ngOnInit = function () {
    };
    BlockHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-block-header',
            template: __webpack_require__("../../../../../src/app/components/blockchain-demo/blockchain/block-header/block-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blockchain-demo/blockchain/block-header/block-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockHeaderComponent);
    return BlockHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/blockchain/block-txs/block-txs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/blockchain/block-txs/block-txs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  block-txs works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/blockchain/block-txs/block-txs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockTxsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlockTxsComponent = (function () {
    function BlockTxsComponent() {
    }
    BlockTxsComponent.prototype.ngOnInit = function () {
    };
    BlockTxsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-block-txs',
            template: __webpack_require__("../../../../../src/app/components/blockchain-demo/blockchain/block-txs/block-txs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blockchain-demo/blockchain/block-txs/block-txs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockTxsComponent);
    return BlockTxsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/blockchain/blockchain.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".block {\n    width: 600px;\n    margin: 20px 40px 20px 40px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.block2 {\n    width: 40px;\n    margin: 20px 40px 20px 40px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.blockchain {\n    overflow: scroll;\n    width: 100%;\n    overflow-x: auto;\n    white-space: nowrap;\n}\n\n.sel-tx-container {\n    padding: 20px;\n    border: dashed rgba(49,42,68,1) 1px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/blockchain/blockchain.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blockchain\">\n  <h1 *ngIf=\"blocks.length === 0\">There are no blocks in the blockchain.  <a style=\"text-decoration: underline;\" routerLink=\"/blockchain-demo/create-block\">Mine the Genesis Block now!</a></h1>\n  <div class=\"shadowBox block\" *ngFor=\"let block of blocks\">\n    <h2 *ngIf=\"block.blockHeight > 0\" class=\"text-primary d-inline\">Block #{{ block.blockHeight }}</h2>\n    <h2 *ngIf=\"block.blockHeight === 0\" class=\"text-primary d-inline\">Genesis Block</h2>\n    <div class=\"hash hash-margin-top\">{{ block.blockHash }}</div>\n    <hr>\n    <h4>Block Header</h4>\n    <hr>\n    <h6>Previous Block Hash</h6>\n    <div *ngIf=\"block.blockHeight === 0\" class=\"hash\">0x0000000000000000000000000000000000000000000000000000000000000000</div>\n    <div *ngIf=\"block.blockHeight > 0\" class=\"hash\">{{ block.prevBlockHash }}</div>\n    <h6>Merkle Root</h6>\n    <div class=\"hash\">{{ block.merkleRoot }}</div>\n    <div>\n      <h6 class=\"d-inline\">Timestamp</h6>\n      <div class=\"hash hash-no-overflow\">{{ block.timestamp }}</div>\n    </div>\n    <div>\n      <h6 class=\"d-inline\">Nonce</h6>\n      <div class=\"hash hash-no-overflow\">{{ block.nonce }}</div>\n    </div>\n    <div>\n      <h6 class=\"d-inline\">Number of Transactions in Block</h6>\n      <div class=\"hash hash-no-overflow\">{{ block.numberTxsInBlock }}</div>\n    </div>\n    <hr>\n    <h4 class=\"d-inline\">Block Transactions</h4>\n    <hr>\n    <div class=\"sel-tx-container\" *ngFor=\"let tx of block.txs; let i = index;\">\n      <h5 *ngIf=\"tx.coinbase === true\">Coinbase Transaction</h5>\n      <h5 *ngIf=\"tx.coinbase === false\">Transaction #{{ i }}</h5>\n      <hr>\n      <h6>Transaction Hash</h6>\n      <div class=\"hash\">{{tx.tx_hash}}</div>\n      <div>\n        <h6 class=\"d-inline\">\n          Transaction Inputs\n          <div class=\"utxo\" *ngFor=\"let input of tx.inputs\">{{ input.value }}</div>\n        </h6>\n      </div>\n\n      <div>\n        <h6 class=\"d-inline\">\n          Transaction Outputs\n          <div class=\"utxo\" *ngFor=\"let output of tx.outputs\">{{ output.value }}</div>\n        </h6>\n      </div>\n\n    </div>\n\n  </div>\n  <div class=\"block2\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/blockchain/blockchain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockchainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_query_service__ = __webpack_require__("../../../../../src/app/services/query.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlockchainComponent = (function () {
    function BlockchainComponent(authService, query) {
        this.authService = authService;
        this.query = query;
        this.coinbaseAdded = false;
        this.blocks = [];
        this.coinbase = {
            hash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
            inputs: [20.1, 40.1],
            outputs: [32.1, 43.2],
            coinbase: true
        };
    }
    BlockchainComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.loadBlocks();
    };
    BlockchainComponent.prototype.loadBlocks = function () {
        var _this = this;
        this.query.getUserBlockchain(this.user.id).subscribe(function (blocks) {
            blocks.forEach(function (block) {
                var b = {
                    blockHeight: block.height,
                    prevBlockHash: block.previous_block,
                    merkleRoot: block.merkle_root,
                    timestamp: block.timestamp,
                    nonce: block.nonce,
                    numberTxsInBlock: block.num_txs,
                    blockHash: block.block_hash,
                    txs: []
                };
                _this.query.getBlockTxs(block.id).subscribe(function (block_txs) {
                    block_txs.forEach(function (t) {
                        var tx_temp = {
                            tx_hash: t.tx_hash,
                            coinbase: t.coinbase,
                            inputs: [],
                            outputs: []
                        };
                        _this.query.getInputs(t.id).subscribe(function (inputs) {
                            inputs.forEach(function (input) { return tx_temp.inputs.push(input); });
                            _this.query.getOutputs(t.id).subscribe(function (outputs) {
                                outputs.forEach(function (output) { return tx_temp.outputs.push(output); });
                                b.txs.push(tx_temp);
                            });
                        });
                    });
                    console.log(b);
                });
                _this.blocks.push(b);
            });
        });
    };
    BlockchainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-blockchain',
            template: __webpack_require__("../../../../../src/app/components/blockchain-demo/blockchain/blockchain.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blockchain-demo/blockchain/blockchain.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_query_service__["a" /* QueryService */]])
    ], BlockchainComponent);
    return BlockchainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/create-block/block-form/block-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/create-block/block-form/block-form.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  block-form works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/create-block/block-form/block-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlockFormComponent = (function () {
    function BlockFormComponent() {
    }
    BlockFormComponent.prototype.ngOnInit = function () {
    };
    BlockFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-block-form',
            template: __webpack_require__("../../../../../src/app/components/blockchain-demo/create-block/block-form/block-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blockchain-demo/create-block/block-form/block-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockFormComponent);
    return BlockFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/create-block/create-block.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carou {\n    border-radius: 0px;\n}\n\n.utxoSelected {\n    line-height: 60px;\n    margin-left: 10px;\n}\n\n.mempool {\n    max-height: 500px;\n    overflow: auto;\n}\n\n.txButton {\n    margin-top:15px;\n}\n\n.utxo-box {\n    border: dashed rgba(49,42,68,.1) 4px;\n    background: #eeedf7;\n    margin-top: 10px;\n    min-height: 60px;\n    width: 100%;\n}\n\n\n.in-btn1 {\n    margin: -5px 0px 10px 10px;\n    color: white;\n}\n\n.in-btn2 {\n    margin: -5px 0px 1px 10px;\n    color: white;\n}\n\n.drag-container {\n    padding: 20px;\n    min-height: 100px;\n}\n\n.drag-container:hover {\n    border: dashed rgba(49,42,68,1) 5px;\n    cursor: -webkit-grab;\n    cursor: grab;\n}\n\n.utxo {\n    font-size: 0.7rem;\n    border: solid black 1px;\n    border-radius: 50%;\n    display: inline-block;\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    text-align: center;\n    margin: 5px;\n}\n\n.inout {\n    margin-bottom: 20px;\n}\n\n.sel-tx-container {\n    padding: 20px;\n}\n\n.sel-tx-container:hover {\n    border: dashed rgba(49,42,68,1) 4px;\n    cursor: -webkit-grab;\n    cursor: grab;\n}\n\n.sel-coinbase-container {\n    padding: 20px;\n}\n\n.blockpool {\n    max-height: 350px;\n    overflow: auto;\n}\n\n.nonce {\n    font-size: 4.0rem;\n    font-weight: 500;\n    border: solid;\n    display: block;\n    background-color: #ffc200;\n    color: white;\n}\n\n.nonce-finished {\n    color: white;\n    background-color: #ffc200;\n}\n\n.hash-highlight {\n    background-color: #ffc200;\n    color: white;\n}\n\n.pulse-button {\n\n    position: relative;\n    border: none;\n    box-shadow: 0 0 0 0 #ffc200;\n    background-color: #ffc200;\n    cursor: pointer;\n    -webkit-animation: pulse 1.25s infinite cubic-bezier(0.31, 0, 0, 1);\n    animation: pulse 1.25s infinite cubic-bezier(0.31, 0, 0, 1);\n  }\n  .pulse-button:hover \n  {\n    -webkit-animation: none;animation: none;\n  }\n  \n  @-webkit-keyframes pulse {to {box-shadow: 0 0 0 20px rgba(232, 76, 61, 0);}}\n  @keyframes pulse {to {box-shadow: 0 0 0 20px rgba(232, 76, 61, 0);}}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/create-block/create-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n        <ngb-alert class=\"helper-text\" *ngIf=\"coinbaseAlert\" type=\"warning\" [dismissible]=\"false\">Please add a Coinbase Transaction before mining the block!</ngb-alert>\n        <ngb-alert class=\"helper-text\" *ngIf=\"blockAlert\" type=\"warning\" [dismissible]=\"false\">You must either accept or reject all incoming blocks first!</ngb-alert>\n        <ngb-alert class=\"helper-text\" *ngIf=\"broadcastAlert\" type=\"success\" [dismissible]=\"false\">Congrats!  You have won the competition and mined the block.  You have received the block reward for this round!</ngb-alert>\n        <ngb-alert class=\"helper-text\" *ngIf=\"blockLoser\" type=\"danger\" [dismissible]=\"false\">Sorry!  Another miner has found this block solution already.  Please accept or reject incoming blocks and start mining the next block.</ngb-alert>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-12 tx-form\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n\n          <!--==================================\n            Create Block Form\n            ====================================-->\n          <div class=\"shadowBoxLight\" pDroppable=\"txs\" (onDrop)=\"drop($event)\">\n            <h2 *ngIf=\"blockHeight > 0\" class=\"text-primary d-inline\">Create Block #{{ blockHeight }}</h2>\n            <h2 *ngIf=\"blockHeight === 0\" class=\"text-primary d-inline\">Create Genesis Block</h2>\n            <button *ngIf=\"!finished\" class=\"btn btn-warning btn-sm in-btn1 d-inline\" (click)=\"mine()\">Mine Block</button>\n            <button *ngIf=\"finished\" class=\"btn btn-warning btn-sm in-btn1 d-inline pulse-button\" (click)=\"broadcast()\">Broadcast Block</button>\n            <div class=\"hash hash-no-margin\">{{ blockHash }}</div>\n            <hr>\n            <h4>Block Header</h4>\n            <hr>\n            <h6>Previous Block Hash</h6>\n            <div class=\"hash\">{{ prevBlockHash }}</div>\n            <h6>Merkle Root</h6>\n            <div class=\"hash hash-highlight\" [ngClass]=\"{'hash-highlight': merkleHighlight }\">{{ merkleRoot }}</div>\n            <div>\n              <h6 class=\"d-inline\">Timestamp</h6>\n              <div class=\"hash hash-no-overflow\">{{ timestamp }}</div>\n            </div>\n            <div>\n              <h6 class=\"d-inline\">Nonce</h6>\n              <div class=\"hash hash-no-overflow\" [ngClass]=\"{'nonce': mining, 'nonce-finished': finished}\">{{ nonce }}</div>\n            </div>\n            <div>\n              <h6 class=\"d-inline\">Number of Transactions in Block</h6>\n              <div class=\"hash hash-no-overflow\">{{ numberTxsInBlock }}</div>\n            </div>\n            <hr>\n            <h4 class=\"d-inline\">Block Transactions</h4>\n            <button *ngIf=\"!coinbaseAdded\" class=\"btn btn-sm btn-warning in-btn2 d-inline\" (click)=\"createCoinbase()\">Add Coinbase Transaction</button>\n            <button *ngIf=\"coinbaseAdded && !mining\" class=\"btn btn-sm btn-danger in-btn2 d-inline\" (click)=\"removeCoinbase()\">Remove Coinbase Transaction</button>\n            <hr>\n            <div class=\"utxo-box\" pDroppable=\"txs\" (onDrop)=\"drop($event)\">\n              <div *ngIf=\"selectedTxs.length === 0 && !coinbaseAdded\" class=\"helper-text text-center utxoSelected\">Drag Transactions here</div>\n              <div *ngIf=\"coinbaseAdded\" class=\"sel-coinbase-container\">\n                <h4>Coinbase Transaction</h4>\n                <hr>\n                <h6>Transaction Hash</h6>\n                <div class=\"hash hash-inverse\">{{coinbase.tx_hash}}</div>\n                <div>\n                  <h6 class=\"d-inline\">\n                    Transaction Outputs (block reward, block tx fees)\n                    <div class=\"utxo\" *ngFor=\"let output of coinbase.outputs\">{{ output.value }}</div>\n                  </h6>\n                </div>\n              </div>\n              <div *ngFor=\"let selTx of selectedTxs; let i = index;\" class=\"sel-tx-container\" pDraggable=\"selTxs\" (onDragStart)=\"dragStart($event, selTx)\" (onDragEnd)=\"dragEnd($event)\">\n                <h4>Transaction #{{ i + 1 }}</h4>\n                <h4 *ngIf=\"selTx.coinbase === true\">Coinbase Transaction</h4>\n                <hr>\n                <h6>Transaction Hash</h6>\n                <div class=\"hash hash-inverse\">{{selTx.tx_hash}}</div>\n                <div>\n                  <h6 class=\"d-inline\">\n                    Transaction Inputs\n                    <div class=\"utxo\" *ngFor=\"let input of selTx.inputs\">{{ input.value.toFixed(1) }}</div>\n                  </h6>\n                </div>\n\n                <div>\n                  <h6 class=\"d-inline\">\n                    Transaction Outputs\n                    <div class=\"utxo\" *ngFor=\"let output of selTx.outputs\">{{ output.value.toFixed(1) }}</div>\n                  </h6>\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-12\">\n\n      <!--==================================\n          Mempool\n      ======================================-->\n\n      <div class=\"row\">\n        <div class=\"col-12 shadowBoxLight blockpool\" pDroppable=\"selTxs\" (onDrop)=\"dropSel($event)\">\n          <div *ngIf=\"txs.length === 0\" class=\"helper-text\">There are no more transactions in your Mempool!</div>\n          <h4>Mempool</h4>  \n          <div class=\"items drag-container\" *ngFor=\"let tx of txs\" pDroppable=\"selTxs\" (onDrop)=\"dropSel($event)\" pDraggable=\"txs\" (onDragStart)=\"dragStart($event, tx)\"\n            (onDragEnd)=\"dragEnd($event)\">\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <h6>Tx Hash</h6>\n                <div class=\"hash\">{{tx.tx_hash}}</div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-3 inout\">\n                <div>\n                  <h6>Inputs</h6>\n                </div>\n                <div class=\"utxo\" *ngFor=\"let input of tx.inputs\">{{ input.value.toFixed(1) }}</div>\n              </div>\n              <div class=\"col-3 inout\">\n                <div>\n                  <h6>Outputs</h6>\n                </div>\n                <div class=\"utxo\" *ngFor=\"let output of tx.outputs\">{{ output.value.toFixed(1) }}</div>\n              </div>\n              <div class=\"col-6\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!--==================================\n      Incoming Blocks\n      ====================================-->\n      \n      <div class=\"row incoming-blocks\">\n        <div class=\"col-12 shadowBoxLight mempool\">\n            <app-incoming-blocks (mined)=\"onMine()\" (blockSubscribed)=\"onBlockSub()\" (noMoreBlocks)=\"noMoreBlocks()\" #mem></app-incoming-blocks>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/create-block/create-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_query_service__ = __webpack_require__("../../../../../src/app/services/query.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var web3 = new Web3();
var CreateBlockComponent = (function () {
    function CreateBlockComponent(authService, query) {
        this.authService = authService;
        this.query = query;
        // Drag n Drop variables
        this.coinbaseAdded = false;
        this.txUtxos = [];
        this.selectedTxs = [];
        this.txs = [];
        // Block variables
        this.blockReward = 50;
        this.blockHeight = 1;
        this.prevBlockHash = 'loading...';
        this.merkleRoot = 'No transactions in block yet';
        this.timestamp = 'Set when block is mined';
        this.nonce = 0;
        this.numberTxsInBlock = 0;
        this.blockHash = 'Set when block is mined';
        this.merkleHighlight = false;
        this.broadcastAlert = false;
        // Mining Variables
        this.mining = false;
        this.finished = false;
        this.processing = false;
        this.coinbaseAlert = false;
        this.blocksLeft = true;
        this.blockAlert = false;
        this.difficultyTarget = 2;
        this.blockLoser = false;
        // Mining difficulty
        this.difficulty = [
            '0x0fffffff62236eb17adc8502332f4c9c82bc14e19bfc0aa10ab674ff75b3d2f3',
            '0x00ffffff62236eb17adc8502332f4c9c82bc14e19bfc0aa10ab674ff75b3d2f3',
            '0x000fffff62236eb17adc8502332f4c9c82bc14e19bfc0aa10ab674ff75b3d2f3'
        ];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }
    CreateBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.selectedTxs = [];
        this.getUserBlockchain();
        this.loadTxs();
        setInterval(function () {
            if (!_this.mining) {
                _this.mem.loadBlocks();
            }
        }, 5000);
    };
    CreateBlockComponent.prototype.noMoreBlocks = function () {
        this.blockAlert = false;
        this.blocksLeft = false;
    };
    CreateBlockComponent.prototype.loadTxs = function () {
        var _this = this;
        this.txs = [];
        this.query.getUserTxs(this.user.id).subscribe(function (data) {
            data.forEach(function (element) {
                _this.query.getInputs(element.id).subscribe(function (inputs) {
                    element.inputs = inputs;
                    _this.query.getOutputs(element.id).subscribe(function (outputs) {
                        element.outputs = outputs;
                        _this.txs.push(element);
                    });
                });
            });
        });
    };
    CreateBlockComponent.prototype.getUserBlockchain = function () {
        var _this = this;
        this.query.getUserBlockchain(this.user.id).subscribe(function (blocks) {
            _this.resetBlock();
            _this.blockHeight = blocks.length;
            if (blocks.length !== 0) {
                _this.prevBlockHash = blocks[blocks.length - 1].block_hash;
            }
            else {
                _this.prevBlockHash = '0x0000000000000000000000000000000000000000000000000000000000000000';
            }
        });
    };
    CreateBlockComponent.prototype.onBlockSub = function () {
        this.loadTxs();
        this.getUserBlockchain();
    };
    /**
   * ===========================
   * Block Functionality
   * ===========================
   */
    CreateBlockComponent.prototype.resetBlock = function () {
        this.selectedTxs = [];
        this.coinbase = null;
        this.timestamp = 'Set when block is mined';
        this.nonce = 0;
        this.finished = false;
        this.merkleRoot = 'No transactions in block yet';
        this.prevBlockHash = '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B';
        this.blockHash = 'Set when block is mined';
        this.coinbaseAdded = false;
        this.coinbaseAlert = false;
    };
    CreateBlockComponent.prototype.broadcast = function () {
        var _this = this;
        var block = {
            height: this.blockHeight,
            block_hash: this.blockHash,
            previous_block: this.prevBlockHash,
            merkle_root: this.merkleRoot,
            timestamp: this.timestamp,
            nonce: this.nonce,
            num_txs: this.numberTxsInBlock
        };
        // Check to make sure that current user won the mining race
        this.query.getIncomingBlocks(this.user.id).subscribe(function (blocks) {
            if (blocks.length === 0) {
                _this.query.postBlock(block).subscribe(function (blk) {
                    _this.broadcastAlert = true;
                    setTimeout(function () {
                        _this.broadcastAlert = false;
                    }, 8000);
                    var coinbaseToSubmit = {
                        from: _this.user.id,
                        tx: {
                            tx_hash: '',
                            fee: 0,
                            coinbase: true
                        },
                        inputs: [],
                        outputs: _this.coinbase.outputs
                    };
                    _this.selectedTxs.forEach(function (tx) {
                        _this.query.unsubscribeTx(tx.id).subscribe();
                        _this.query.addTxToBlock(tx.id, blk.id).subscribe();
                    });
                    _this.query.postTx(coinbaseToSubmit).subscribe(function (coinbase_tx) {
                        _this.query.unsubscribeTx(coinbase_tx.id).subscribe();
                        _this.query.addTxToBlock(coinbase_tx.id, blk.id).subscribe();
                    });
                    _this.query.subscribeBlock(blk.id).subscribe(function () {
                        _this.getUserBlockchain();
                        _this.mem.loadBlocks();
                    });
                    _this.loadTxs();
                });
            }
            else {
                _this.blockLoser = true;
                setTimeout(function () {
                    _this.blockLoser = false;
                }, 8000);
                _this.mem.loadBlocks();
            }
        });
    };
    /**
   * ===========================
   * Mining Functionality
   * ===========================
   */
    CreateBlockComponent.prototype.setMerkle = function () {
        var _this = this;
        this.merkleHighlight = true;
        setTimeout(function () { _this.merkleHighlight = false; }, 500);
        var txData = '';
        this.selectedTxs.forEach(function (tx) {
            txData += tx.tx_hash;
        });
        if (this.coinbase) {
            txData += this.coinbase.tx_hash;
        }
        this.merkleRoot = web3.sha3(txData);
    };
    CreateBlockComponent.prototype.mine = function () {
        if (!this.coinbaseAdded) {
            this.coinbaseAlert = true;
            return;
        }
        if (!this.blocksLeft) {
            var date = new Date(Date.now());
            var day = date.getDate().toString();
            var month = this.months[date.getMonth()];
            var year = date.getFullYear().toString();
            var hours = date.getHours().toString();
            var minutes = date.getMinutes().toString();
            var seconds = date.getSeconds().toString();
            this.timestamp = month + ' ' + day + ', ' + year + ' ' + hours + ':' + minutes + ':' + seconds;
            var data = this.prevBlockHash + this.merkleRoot + this.timestamp + this.numberTxsInBlock;
            var difficulty = this.difficultyTarget;
            this.reset(data, difficulty);
            this.increment(data, difficulty);
        }
        else {
            this.blockAlert = true;
            return;
        }
    };
    CreateBlockComponent.prototype.reset = function (data, difficulty) {
        this.finished = false;
        this.blockHash = '';
        this.nonce = 0;
    };
    CreateBlockComponent.prototype.loseMiningStatus = function () {
        var _this = this;
        this.blockLoser = true;
        setTimeout(function () {
            _this.blockLoser = false;
        }, 8000);
        this.mining = false;
        this.mem.loadBlocks();
    };
    CreateBlockComponent.prototype.increment = function (data, difficulty) {
        var _this = this;
        setTimeout(function () {
            if (web3.sha3(_this.nonce + data) >= _this.difficulty[difficulty]) {
                if (_this.nonce % 100 === 0) {
                    _this.query.getIncomingBlocks(_this.user.id).subscribe(function (blocks) {
                        if (blocks.length !== 0) {
                            _this.loseMiningStatus();
                        }
                    });
                }
                _this.mining = true;
                _this.nonce = _this.nonce + 1;
                _this.blockHash = web3.sha3(_this.nonce + data);
                if (!_this.blockLoser) {
                    _this.increment(data, difficulty);
                }
            }
            else {
                // Check to make sure that current user won the mining race
                _this.query.getIncomingBlocks(_this.user.id).subscribe(function (blocks) {
                    if (blocks.length === 0) {
                        _this.mining = false;
                        _this.blockHash = web3.sha3(_this.nonce + data);
                        _this.finished = true;
                    }
                    else {
                        _this.loseMiningStatus();
                    }
                });
            }
        }, 0.1);
    };
    /**
     * ===========================
     * Coinbase Transaction
     * ===========================
     */
    CreateBlockComponent.prototype.createCoinbase = function () {
        var totalFee = 0;
        this.selectedTxs.forEach(function (tx) {
            totalFee += +tx.fee;
        });
        this.coinbase = {
            tx_hash: 'Created upon broadcasting block',
            outputs: [
                {
                    value: this.blockReward,
                    to: this.user.id
                },
                {
                    value: totalFee,
                    to: this.user.id
                }
            ],
            coinbase: true
        };
        this.coinbaseAlert = false;
        this.coinbaseAdded = true;
        this.finished = false;
        this.setMerkle();
    };
    CreateBlockComponent.prototype.removeCoinbase = function () {
        this.coinbaseAdded = false;
        this.coinbase = null;
        this.finished = false;
        this.setMerkle();
    };
    /**
     * ===========================
     * Drag and Drop functionality
     * ===========================
     */
    CreateBlockComponent.prototype.dragStart = function (event, tx) {
        this.draggedTx = tx;
    };
    CreateBlockComponent.prototype.drop = function (event) {
        if (this.blocksLeft) {
            console.log('You must accept or reject all incoming blocks first');
            return;
        }
        if (this.draggedTx) {
            var draggedTxIndex_1 = this.findIndex(this.draggedTx);
            console.log(draggedTxIndex_1);
            this.selectedTxs = this.selectedTxs.concat([this.draggedTx]);
            this.txs = this.txs.filter(function (val, i) { return i !== draggedTxIndex_1; });
            this.draggedTx = null;
        }
        this.numberTxsInBlock = this.selectedTxs.length;
        this.finished = false;
        console.log(this.selectedTxs);
        this.setMerkle();
    };
    CreateBlockComponent.prototype.dragEnd = function (event) {
        this.draggedTx = null;
    };
    CreateBlockComponent.prototype.findIndex = function (tx) {
        var index = -1;
        for (var i = 0; i < this.txs.length; i++) {
            if (tx.tx_hash === this.txs[i].tx_hash) {
                index = i;
                break;
            }
        }
        return index;
    };
    CreateBlockComponent.prototype.dropSel = function (event) {
        if (this.draggedTx) {
            var draggedTxIndex_2 = this.findIndexSel(this.draggedTx);
            this.txs = this.txs.concat([this.draggedTx]);
            this.selectedTxs = this.selectedTxs.filter(function (val, i) { return i !== draggedTxIndex_2; });
            this.draggedTx = null;
        }
        this.numberTxsInBlock = this.selectedTxs.length;
        this.finished = false;
        this.setMerkle();
    };
    CreateBlockComponent.prototype.findIndexSel = function (tx) {
        var index = -1;
        for (var i = 0; i < this.selectedTxs.length; i++) {
            if (tx.tx_hash === this.selectedTxs[i].tx_hash) {
                index = i;
                break;
            }
        }
        return index;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('mem'),
        __metadata("design:type", Object)
    ], CreateBlockComponent.prototype, "mem", void 0);
    CreateBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-create-block',
            template: __webpack_require__("../../../../../src/app/components/blockchain-demo/create-block/create-block.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blockchain-demo/create-block/create-block.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_query_service__["a" /* QueryService */]])
    ], CreateBlockComponent);
    return CreateBlockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/create-block/incoming-blocks/incoming-blocks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blockButton {\n    margin-top:-5px;\n}\n\n.items {\n    max-height: 200px;\n    overflow: auto;\n}\n\n.mempool {\n    max-height: 500px;\n    overflow: auto;\n}\n\n.hash-gold {\n    background: #fcc200;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/create-block/incoming-blocks/incoming-blocks.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"blocks.length === 0\" class=\"helper-text\">You are fully synced with the main blockchain. You may now mine your current block!</div>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h4>Incoming Blocks</h4>\n  </div>\n</div>\n<div class=\"row d-inline\" *ngFor=\"let block of blocks; let i=index;\">\n  <div class=\"col-12\">\n    <h4 *ngIf=\"block.height === 0\">Genesis Block</h4>\n    <h4>Block #{{ block.height }}</h4>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <h6>Block Hash</h6>\n        <div class=\"hash\">\n          {{block.block_hash}}\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <h6 class=\"d-inline\">Txs in Block</h6>\n        <div class=\"col-4 hash hash-no-overflow hash-no-margin\">\n          {{block.num_txs}}\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <h6 class=\"d-inline\">Block Confirmations</h6>\n        <div class=\"col-4 hash hash-no-overflow hash-no-margin\">\n          {{'2'}}\n        </div>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <button type=\"button\" class=\"btn btn-sm btn-primary txButton ml-auto\" (click)=\"accept(i)\">Accept</button>\n        <button type=\"button\" class=\"btn btn-sm btn-primary txButton mr-auto\" (click)=\"reject(i)\">Reject</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/create-block/incoming-blocks/incoming-blocks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomingBlocksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_query_service__ = __webpack_require__("../../../../../src/app/services/query.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IncomingBlocksComponent = (function () {
    function IncomingBlocksComponent(authService, query) {
        this.authService = authService;
        this.query = query;
        this.blockSubscribed = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.noMoreBlocks = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.blocks = [];
    }
    IncomingBlocksComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.loadBlocks();
    };
    IncomingBlocksComponent.prototype.loadBlocks = function () {
        var _this = this;
        this.query.getIncomingBlocks(this.user.id).subscribe(function (blocks) {
            if (blocks.length === 0) {
                _this.noMoreBlocks.emit();
            }
            _this.blocks = blocks;
        });
    };
    IncomingBlocksComponent.prototype.accept = function (index) {
        var _this = this;
        var block_id = this.blocks[index].id;
        this.query.subscribeBlock(block_id).subscribe(function () {
            _this.loadBlocks();
        });
        this.query.getBlockTxs(block_id).subscribe(function (txs) {
            txs.forEach(function (tx) {
                _this.query.getOutputs(tx.id).subscribe(function (t) {
                    t.forEach(function (t_output) {
                        _this.query.subscribeUtxo(t_output.id).subscribe();
                    });
                });
                _this.query.unsubscribeTx(tx.id).subscribe();
            });
        });
        // Emit an event that can be sent to create-tx component
        this.blockSubscribed.emit();
    };
    IncomingBlocksComponent.prototype.reject = function (index) {
        var _this = this;
        var block_id = this.blocks[index].id;
        this.query.rejectBlock(block_id).subscribe(function () {
            _this.loadBlocks();
        });
        this.query.getBlockTxs(block_id).subscribe(function (txs) {
            txs.forEach(function (tx) {
                _this.query.rejectTx(tx.id).subscribe();
            });
        });
        // Emit an event that can be sent to create-tx component
        this.blockSubscribed.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], IncomingBlocksComponent.prototype, "blockSubscribed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], IncomingBlocksComponent.prototype, "noMoreBlocks", void 0);
    IncomingBlocksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-incoming-blocks',
            template: __webpack_require__("../../../../../src/app/components/blockchain-demo/create-block/incoming-blocks/incoming-blocks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blockchain-demo/create-block/incoming-blocks/incoming-blocks.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_query_service__["a" /* QueryService */]])
    ], IncomingBlocksComponent);
    return IncomingBlocksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/create-tx/create-tx.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.carou {\n    border-radius: 0px;\n}\n\n\n.mempool {\n    max-height: 500px;\n    overflow: auto;\n}\n\n.utxoSelected {\n    line-height: 60px;\n    margin-left: 10px;\n}\n\n.txButton {\n    margin-top:15px;\n}\n\n.utxo-box {\n    border: dashed rgba(49,42,68,.1) 4px;\n    background: #eeedf7;\n    margin-top: 10px;\n    min-height: 60px;\n    width: 100%;\n}\n\n.utxo:hover {\n    cursor: -webkit-grab;\n    cursor: grab;\n}\n\n.my-utxo {\n    background-color: #ffc200;\n    width: 45px;\n    height: 45px;\n    line-height: 45px;\n    font-size: 0.8rem;\n    color: white;\n    border: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/create-tx/create-tx.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n        <ngb-alert class=\"helper-text\" *ngIf=\"invalidUtxo\" type=\"warning\" [dismissible]=\"false\">Your private key did not unlock this UTXO.  Please select a gold UTXO.</ngb-alert>\n        <ngb-alert class=\"helper-text\" *ngIf=\"invalidTx\" type=\"warning\" [dismissible]=\"false\">You cannot send funds to yourself!  Select a different user!</ngb-alert>\n        <ngb-alert class=\"helper-text\" *ngIf=\"notEnoughFunds\" type=\"warning\" [dismissible]=\"false\">You do not have enough funds for this transaction.  Add more UTXOs or decrease the fee!</ngb-alert>\n        <ngb-alert class=\"helper-text\" *ngIf=\"invalidForm\" type=\"warning\" [dismissible]=\"false\">You must fill out all fields before submitting the transaction!</ngb-alert>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-12 tx-form\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <form class=\"shadowBoxLight\" (ngSubmit)=\"onTxSubmit()\" #txform=\"ngForm\">\n            <h2 class=\"text-primary\">Create Transaction</h2>\n            <hr>\n            <div class=\"form-group form-row\">\n              <label for=\"amount\" class=\"col-form-label\">Send</label>\n              <div class=\"col-lg-8 col-12\">\n                <input type=\"text\" class=\"form-control\" name=\"amount\" placeholder=\"Amount...\" ngModel required>\n              </div>\n            </div>\n            <div class=\"form-group form-row\">\n              <ng-template #rt let-r=\"result\" let-t=\"term\">\n                <img [src]=\"r['picture_url']\" width=\"50\"> {{ r.username }}\n              </ng-template>\n              <label for=\"typeahead-template\" class=\"col-form-label\">User Lookup:</label>\n              <div class=\"col-lg-6 col-12\">\n                <input id=\"typeahead-template\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\"\n                  [inputFormatter]=\"formatter\" name=\"selectedUser\" ngModel required>\n              </div>\n            </div>\n            <div class=\"form-group form-row\">\n              <label for=\"fee\" class=\"col-form-label h6\">Add Tx Inputs</label>\n              <div class=\"col-12\">\n                <div class=\"utxo-box\" pDroppable=\"utxos\" (onDrop)=\"drop($event)\">\n                  <div class=\"utxoSelected\">\n                    <div *ngIf=\"selectedUtxos.length === 0\" class=\"helper-text text-center\">Drag UTXOs here</div>\n                    <div class=\"utxo\" pDraggable=\"selUtxos\" (onDragStart)=\"dragStart($event, utxo)\" (onDragEnd)=\"dragEnd($event)\" *ngFor=\"let utxo of selectedUtxos\">{{utxo.value.toFixed(1)}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group form-row\">\n              <label for=\"fee\" class=\"col-form-label\">Add Fee</label>\n              <div class=\"col-lg-3 col-12\">\n                <input type=\"text\" class=\"form-control\" name=\"fee\" ngModel required>\n              </div>\n              <div class=\"col-lg-3 col-12\">\n                <button class=\"btn btn-outline-primary\" type=\"button\" (click)=\"estimateFee()\">Estimate</button>\n              </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Submit Transaction</button>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-8 col-12\">\n      <div class=\"row\">\n        <div class=\"col-12 shadowBoxLight\" pDroppable=\"selUtxos\" (onDrop)=\"dropSel($event)\">\n          <h4>UTXO Set</h4>\n          <div *ngIf=\"utxos.length === 0\" class=\"helper-text\">There are no UTXOs in the UTXO set! <a style=\"text-decoration: underline;\" routerLink=\"/blockchain-demo/create-block\">Create a Genesis Block first!</a></div>\n          <div *ngFor=\"let utxo of utxos\" class=\"utxo\" [ngClass]=\"{'my-utxo': utxo.current_owner === user.id }\"\n            pDraggable=\"utxos\" (onDragStart)=\"dragStart($event, utxo)\" (onDragEnd)=\"dragEnd($event)\">\n            {{utxo.value.toFixed(1)}}\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 shadowBoxLight mempool\">\n          <app-mempool (txSubscribed)=\"onTxSub()\"></app-mempool>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/create-tx/create-tx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_query_service__ = __webpack_require__("../../../../../src/app/services/query.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var web3 = new Web3();
var CreateTxComponent = (function () {
    function CreateTxComponent(authService, query) {
        var _this = this;
        this.authService = authService;
        this.query = query;
        this.changes = true;
        this.utxos = [];
        this.txUtxos = [];
        this.selectedUtxos = [];
        this.usersWithPics = [];
        /**
         * ===========================
         * Autocomplete functionality
         * ===========================
         */
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .map(function (term) { return term === '' ? []
                : _this.usersWithPics.filter(function (v) { return v.username.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
        this.formatter = function (x) { return x.username; };
    }
    CreateTxComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.selectedUtxos = [];
        this.updateUtxos();
        this.loadUsers();
    };
    CreateTxComponent.prototype.loadUsers = function () {
        var _this = this;
        this.authService.loadUserProfiles().subscribe(function (users) {
            _this.usersWithPics = users;
        });
    };
    CreateTxComponent.prototype.onTxSubmit = function () {
        var _this = this;
        console.log(this.txForm.valid);
        if (!this.txForm.valid) {
            this.invalidForm = true;
            setTimeout(function () {
                _this.invalidForm = false;
            }, 6000);
        }
        else {
            if (this.txForm.value.selectedUser.id === this.user.id) {
                this.invalidTx = true;
                setTimeout(function () {
                    _this.invalidTx = false;
                }, 5000);
            }
            else {
                var sendAmount = +this.txForm.value.amount;
                var currentUserId = this.user.id;
                var fee = +this.txForm.value.fee;
                var totalInputs = 0;
                for (var i = 0; i < this.selectedUtxos.length; i++) {
                    totalInputs = totalInputs + this.selectedUtxos[i].value;
                }
                if (totalInputs < fee + sendAmount) {
                    this.notEnoughFunds = true;
                    setTimeout(function () {
                        _this.notEnoughFunds = false;
                    }, 6000);
                }
                else {
                    var txToSubmit = {
                        from: currentUserId,
                        tx: {
                            tx_hash: '',
                            fee: fee,
                            coinbase: false
                        },
                        inputs: this.selectedUtxos,
                        outputs: [{
                                value: sendAmount,
                                to: this.txForm.value.selectedUser.id
                            },
                            {
                                value: totalInputs - (sendAmount + fee),
                                to: currentUserId
                            }]
                    };
                    console.log(txToSubmit);
                    this.query.postTx(txToSubmit).subscribe(function (tx) {
                        // Reload UTXOs, reset form, reset selected UTXOs
                        _this.updateUtxos();
                        _this.txForm.reset();
                        _this.selectedUtxos = [];
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
        }
    };
    /**
     * Fee is estimated based on the number of UTXO inputs
     */
    CreateTxComponent.prototype.estimateFee = function () {
        var fee = 0;
        this.selectedUtxos.forEach(function () { return fee += 0.2; });
        this.txForm.form.patchValue({
            fee: fee
        });
    };
    CreateTxComponent.prototype.onTxSub = function (eventData) {
        if (this.selectedUtxos.length === 0) {
            this.updateUtxos();
        }
    };
    CreateTxComponent.prototype.updateUtxos = function () {
        var _this = this;
        this.query.getUtxos(this.user.id).subscribe(function (utxos) {
            _this.utxos = utxos;
        });
    };
    /**
     * ===========================
     * Drag and Drop functionality
     * ===========================
     */
    CreateTxComponent.prototype.dragStart = function (event, utxo) {
        this.invalidUtxo = false;
        this.draggedUtxo = utxo;
    };
    CreateTxComponent.prototype.drop = function (event) {
        var _this = this;
        if (this.draggedUtxo) {
            var draggedUtxoIndex_1 = this.findIndex(this.draggedUtxo);
            if (this.draggedUtxo.current_owner !== this.user.id) {
                this.invalidUtxo = true;
                setTimeout(function () {
                    _this.invalidUtxo = false;
                }, 6000);
            }
            else {
                this.selectedUtxos = this.selectedUtxos.concat([this.draggedUtxo]);
                this.utxos = this.utxos.filter(function (val, i) { return i !== draggedUtxoIndex_1; });
            }
            this.draggedUtxo = null;
        }
    };
    CreateTxComponent.prototype.dragEnd = function (event) {
        this.draggedUtxo = null;
    };
    CreateTxComponent.prototype.findIndex = function (utxo) {
        var index = -1;
        for (var i = 0; i < this.utxos.length; i++) {
            if (utxo.id === this.utxos[i].id) {
                index = i;
                break;
            }
        }
        return index;
    };
    CreateTxComponent.prototype.dropSel = function (event) {
        if (this.draggedUtxo) {
            var draggedUtxoIndex_2 = this.findIndexSel(this.draggedUtxo);
            this.utxos = this.utxos.concat([this.draggedUtxo]);
            this.selectedUtxos = this.selectedUtxos.filter(function (val, i) { return i !== draggedUtxoIndex_2; });
            this.draggedUtxo = null;
        }
    };
    CreateTxComponent.prototype.findIndexSel = function (utxo) {
        var index = -1;
        for (var i = 0; i < this.selectedUtxos.length; i++) {
            if (utxo.id === this.selectedUtxos[i].id) {
                index = i;
                break;
            }
        }
        return index;
    };
    CreateTxComponent.prototype.canDeactivate = function () {
        if (this.selectedUtxos.length === 0) {
            return true;
        }
        else {
            return confirm('Are you sure you want to navigate away?  All changes will be lost!');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('txform'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* NgForm */])
    ], CreateTxComponent.prototype, "txForm", void 0);
    CreateTxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-create-tx',
            template: __webpack_require__("../../../../../src/app/components/blockchain-demo/create-tx/create-tx.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blockchain-demo/create-tx/create-tx.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_query_service__["a" /* QueryService */]])
    ], CreateTxComponent);
    return CreateTxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/create-tx/mempool/mempool.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.utxo {\n    font-size: 0.7rem;\n    border: solid black 1px;\n    border-radius: 50%;\n    display: inline-block;\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    text-align: center;\n    margin: 5px;\n}\n\n.txButton {\n    margin-top:15px;\n}\n\n.inout {\n    margin-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/create-tx/mempool/mempool.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"><div class=\"col-12\">\n  <h4>Incoming Transactions</h4>\n</div></div>\n<div class=\"row d-inline\" *ngFor=\"let tx of txs; let i=index;\">\n  <div class=\"col-12\">\n    <div class=\"row\">\n      <h6>Tx Hash</h6>\n      <div class=\"col-12 hash\">\n        {{tx.tx_hash}}\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-3 inout\">\n        <div>\n          <h6>Inputs</h6>\n        </div>\n        <h4 *ngIf=\"tx.inputs.length === 0\">Inputs Loading...</h4>\n        <div class=\"utxo\" *ngFor=\"let input of tx.inputs\">{{input.value}}</div>\n      </div>\n      <div class=\"col-3 inout\">\n        <div>\n          <h6>Outputs</h6>\n        </div>\n        <h4 *ngIf=\"tx.outputs.length === 0\">Outputs Loading...</h4>\n        <div class=\"utxo\" *ngFor=\"let output of tx.outputs\">{{output.value}}</div>\n      </div>\n      <div class=\"col-6\">\n        <button type=\"button\" class=\"btn btn-sm btn-primary txButton ml-auto\" (click)=\"accept(i)\">Accept</button>\n        <button type=\"button\" class=\"btn btn-sm btn-primary txButton mr-auto\" (click)=\"reject(i)\">Reject</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/blockchain-demo/create-tx/mempool/mempool.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MempoolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_query_service__ = __webpack_require__("../../../../../src/app/services/query.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MempoolComponent = (function () {
    function MempoolComponent(authService, query) {
        this.authService = authService;
        this.query = query;
        this.txSubscribed = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.txs = [];
    }
    MempoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.loadTxs();
        setInterval(function () {
            _this.loadTxs();
        }, 5000);
    };
    MempoolComponent.prototype.loadTxs = function () {
        var _this = this;
        this.query.getIncomingTxs(this.user.id).subscribe(function (data) {
            data.forEach(function (element) {
                if (_this.txs.findIndex(function (el) { return el.id === element.id; }) === -1) {
                    _this.query.getInputs(element.id).subscribe(function (inputs) {
                        element.inputs = inputs;
                        _this.query.getOutputs(element.id).subscribe(function (outputs) {
                            element.outputs = outputs;
                            _this.txs.push(element);
                        });
                    });
                }
            });
            _this.txSubscribed.emit();
        });
    };
    MempoolComponent.prototype.accept = function (index) {
        var _this = this;
        var inputs = this.txs[index].inputs;
        var outputs = this.txs[index].outputs;
        // Add all tx inputs to spent utxos
        inputs.forEach(function (input) {
            console.log('input spent');
            _this.query.spendUtxo(input.id).subscribe();
        });
        // Add all tx outputs to unspent utxos
        outputs.forEach(function (output) {
            console.log('output subbed');
            _this.query.subscribeUtxo(output.id).subscribe();
        });
        // Add tx to user subscriptions
        this.query.subscribeTx(this.txs[index].id).subscribe(function () {
            _this.loadTxs();
        });
    };
    MempoolComponent.prototype.reject = function (index) {
        var _this = this;
        // Add tx to user subscriptions
        this.query.rejectTx(this.txs[index].id).subscribe(function () {
            _this.loadTxs();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MempoolComponent.prototype, "txSubscribed", void 0);
    MempoolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-mempool',
            template: __webpack_require__("../../../../../src/app/components/blockchain-demo/create-tx/mempool/mempool.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blockchain-demo/create-tx/mempool/mempool.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_query_service__["a" /* QueryService */]])
    ], MempoolComponent);
    return MempoolComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/certification/certification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/certification/certification.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  certification works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/certification/certification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CertificationComponent = (function () {
    function CertificationComponent() {
    }
    CertificationComponent.prototype.ngOnInit = function () {
    };
    CertificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-certification',
            template: __webpack_require__("../../../../../src/app/components/certification/certification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/certification/certification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CertificationComponent);
    return CertificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/error-page/error-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/error-page/error-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>{{ errorMessage }}</h4>"

/***/ }),

/***/ "../../../../../src/app/components/error-page/error-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorPageComponent = (function () {
    function ErrorPageComponent(route) {
        this.route = route;
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.errorMessage = data['message'];
        });
    };
    ErrorPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__("../../../../../src/app/components/error-page/error-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/error-page/error-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/glossary/glossary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".terms-grid {\n    padding: 5px;\n}\n\n.inner-box {\n    border: solid rgba(49,42,68,.1);\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-radius: 5px;\n}\n\n.term-text {\n    font-family: monospace;\n    font-size: x-large;\n    font-weight: 600;\n    color: #312a44;\n}\n\n.inner-box:hover {\n    background: solid rgba(49,42,68,.1);\n    border: solid #312a44 1px;\n    cursor: pointer;\n}\n\n.term-text:hover {\n    cursor: pointer;\n}\n\n.tooltip {\n    font-family: monospace !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/glossary/glossary.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container-fluid\">\n  <div class=\"row text-center\">\n    <div class=\"col-12 text-primary\">\n      <h2>Blockchain Terms by Chainworks</h2>\n      <p>Click on each term to show definition</p>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-12 mr-auto ml-auto text-center\">\n      <div class=\"btn-group text-center \" *ngFor=\"let term of terms; let i = index;\">\n        <button class=\"btn btn-primary\" style=\"margin: 15px;\" (click)=\"open(content)\">{{ term.term }}</button>\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">{{term.term}}</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <p>{{ term.definition }}</p>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/glossary/glossary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlossaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlossaryComponent = (function () {
    function GlossaryComponent(modalService) {
        this.modalService = modalService;
        /**
         * CSV to JSON
         *  {lb}
           "term":"{f1}",
          "definition":"{f2}"
            {rb}
            http://www.convertcsv.com/csv-to-json.htm
         */
        this.terms = [
            {
                "term": "Address",
                "definition": "Publicly known string of characters used to send and receive transactions from on the network."
            },
            {
                "term": "ASIC",
                "definition": "Short form for ‘Application Specific Integrated Circuit’. Often compared to GPUs, ASICs are specially made for mining and may offer significant power savings."
            },
            {
                "term": "Block",
                "definition": "Package of data that carries immutable information including a block header and block transactions."
            },
            {
                "term": "Block Hash",
                "definition": "A deterministic, irreversible hash of the header of the block.  This hash will change if any data in the entire block is changed, including transactions."
            },
            {
                "term": "Block Header",
                "definition": "An 80-byte header belonging to a single block storing metadata pertaining to that block which includes the previous block hash, the merkle root hash, the timestamp, nonce, and number of transactions in the block."
            },
            {
                "term": "Block Interval",
                "definition": "The average time interval in which new blocks are typically mined.  Bitcoin strives for a 10 minute block interval and will adjust the difficulty target according to the aggregate hash power in the network."
            },
            {
                "term": "Block Reward",
                "definition": "The payment that a miner recceives for mining a block.  This provides an incentive for miners to participate in and secure the network via monetary compensation."
            },
            {
                "term": "Block Timestamp",
                "definition": "A Unix time timestamp contained in each block. Iit serves as a source of variation for the block hash making it more difficult for bad nodes to manipulate a blockchain."
            },
            {
                "term": "Blockchain (Chainworks)",
                "definition": "A write once (immutable), distributed and sequential database (chain) of transactions (blocks) fused onto a decentralized network of peer clients that are economic agents (incentivized by block reward) to agree (consensus protocol) at regular time intervals (block interval) about the state of shared network data (ledger)."
            },
            {
                "term": "Blockchain (Tapscott)",
                "definition": "An incorruptible digital ledger of economic transactions that can be programmed to record not just financial transactions but virtually everything of value."
            },
            {
                "term": "Coinbase Transaction",
                "definition": "The first transaction in a block. Always created by a miner, this transaction includes the current block reward and the sum of the transaction fees as outputs sent back to the miner.  There are no inputs in the coinbase transaction."
            },
            {
                "term": "Consensus",
                "definition": "A term often used in peer to peer networks which refers to the agreement between network participants on the state of some data."
            },
            {
                "term": "Consensus Protocol",
                "definition": "Often a reference to the type of consensus algorithm used to secure a particular blockchain.  In Bitcoin, the consensus protocol is POW (proof of work)."
            },
            {
                "term": "Dapp",
                "definition": "Referred to as a Decentralized Application, a Dapp replaces the common backend database architecture with the blockchain."
            },
            {
                "term": "Deterministic",
                "definition": "An algorithm which, given a particular input, will always produce the same output."
            },
            {
                "term": "Distributed Ledger (aka Shared Ledger)",
                "definition": "A consensus of replicated, shared, and synchronized digital data geographically spread across multiple sites, countries, or institutions."
            },
            {
                "term": "Ethash",
                "definition": "The consensus algorithm used natively for the proof-of-work function in Ethereum-based blockchain currencies."
            },
            {
                "term": "Genesis Block",
                "definition": "The first block of a blockchain. Modern versions of Bitcoin number it as block 0, though very early versions counted it as block 1."
            },
            {
                "term": "Hash Function",
                "definition": "Any function that can be used to map data of arbitrary size to data of fixed size, is deterministic, and irreversible. "
            },
            {
                "term": "Hashes ",
                "definition": "The values returned by a hash function.  Also known as: hash values, hash codes, or digests."
            },
            {
                "term": "Immutable ",
                "definition": "Unchanging over time or unable to be changed."
            },
            {
                "term": "Keccak Hash 256",
                "definition": "A common hash function which is used for address generation and other tasks in Ethereum."
            },
            {
                "term": "Merkle Root",
                "definition": "The topmost (root) leaf of a merkle tree which is stored in the block header and which changes anytime a transaction in a block is altered in any way."
            },
            {
                "term": "Merkle Tree",
                "definition": "A binary tree like data structure which allows all transactions in a block to be consolidated and represented by a single 64 character hash, also called the merkle root."
            },
            {
                "term": "Mining",
                "definition": "The process of creating a block, solving a proof-of-work for that block, and broadcasting the block to peers in the network as \"valid\"."
            },
            {
                "term": "Nonce",
                "definition": "An arbitrary number incremented over and over to solve a proof-of-work algorithm while mining."
            },
            {
                "term": "Peer-to-Peer",
                "definition": "A decentralized network architecture in which each participant has equal rights but not necessarily responsibilities."
            },
            {
                "term": "Previous Block Hash",
                "definition": "Contained in the header of every block, the previous block hash refers to the previous block in the blockchain, and allows the chain to be linked together."
            },
            {
                "term": "Privacy",
                "definition": "In blockchain circles, privacy often refers to anonymity of both identity and data."
            },
            {
                "term": "Private Key",
                "definition": "A large, random number that is used to indicate a specific identity on the blockchain.  This value is responsible for securing a user's funds and if compromised, can result in a complete loss of funds."
            },
            {
                "term": "Proof of Stake (POS)",
                "definition": "A consensus mechanism where miners are chosen at random to solve the proof of work for a block based on their stake in the network."
            },
            {
                "term": "Proof of Work (POW)",
                "definition": "A consensus mechanism where miners compete to solve a computationally difficult cryptographic puzzle to prove that a block has been mined with integrity."
            },
            {
                "term": "Public Key",
                "definition": "A cryptographic key that can be obtained and used by anyone to encrypt messages intended for a particular recipient, such that the encrypted messages can be deciphered only by using a second key that is known only to the recipient (the private key)."
            },
            {
                "term": "SHA-256 Hash",
                "definition": "A popular hashing algorithm designed and developed by the NSA and used for a variety of functions including mining/hashing in Bitcoin."
            },
            {
                "term": "Shared Ledger (aka Distributed Ledger)",
                "definition": "A consensus of replicated, shared, and synchronized digital data geographically spread across multiple sites, countries, or institutions."
            },
            {
                "term": "Smart contracts",
                "definition": "business rules executed in trust-less manner via code"
            },
            {
                "term": "Transaction",
                "definition": "An exchange of value, services, or other goods between two or more people."
            },
            {
                "term": "Transaction Hash",
                "definition": "An identifier used to uniquely identify a particular transaction on the blockchain."
            },
            {
                "term": "Transaction Inputs",
                "definition": "One or more UTXOs which are unlocked via a user's private key and included as \"funds\" for a given transaction.  After being used in a transaction, a UTXO is considered \"spent\" and can no longer be used in the Bitcoin network."
            },
            {
                "term": "Transaction Outputs",
                "definition": "One or more UTXOs which are created as a result of a transaction, and which can only be spent by the user who's public key was used to lock the outputs.  All transaction outputs are newly created UTXOs and can be used as inputs in future transactions."
            },
            {
                "term": "Trust-less",
                "definition": "Refers to a system in which participants may interact and transact with each other despite lacking trust in each other.  This is common in peer to peer networks like Bitcoin."
            },
            {
                "term": "UTXO",
                "definition": "Bitcoin specific term.  An Unspent Transaction Output is a value of Bitcoin which has a locking and unlocking script.  The user who has the private key which satisfies the unlocking script can use the UTXO as a transaction input."
            },
            {
                "term": "UTXO Set",
                "definition": "Bitcoin specific term.  The UTXO set represents all the UTXOs available in the Bitcoin network, and together, allow one to construct a user's \"balance\" of Bitcoin."
            },
            {
                "term": "Value",
                "definition": "the importance, worth, or usefulness of something."
            }
        ];
    }
    GlossaryComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    GlossaryComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    GlossaryComponent.prototype.ngOnInit = function () {
    };
    GlossaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-glossary',
            template: __webpack_require__("../../../../../src/app/components/glossary/glossary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/glossary/glossary.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], GlossaryComponent);
    return GlossaryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\n    height: 300px;\n    font-size: 1.2rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authService.loggedIn()\" class=\"container\">\n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-12 col-lg-6 mr-auto ml-auto\">\n      <div *ngIf=\"authService.currentUser\" class=\"display-4 text-capitalize\">Welcome {{ authService.currentUser.f_name }}!</div>\n      <br>\n      <br>\n      <div class=\"lead\">Chainworks thanks you for your attendance and willingness to learn more about Blockchain technology. This site will\n        be your companion throughout the training session. On each page, there are tips indicated by the\n        <i class=\"fa fa-question\" aria-hidden=\"true\"></i> icon. There are many confusing concepts when talking about blockchain, and we want a painless experience for\n        all our trainees! If you have a question at any point in the training, you can submit it on the \"Submit Question\"\n        tab, and we will be sure to get to it at some point during or after the presentation! Enjoy!\n      </div>\n      <br>\n      <button type=\"button\" class=\"btn btn-lg btn-primary\" routerLink=\"/register\">Go to the Demos</button>\n      <button type=\"button\" class=\"btn btn-lg btn-primary\" routerLink=\"/register\">Take a Short Tour</button>\n      <br>\n      <br>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12 col-lg-10 ml-auto\">\n            <form class=\"shadowBox\" (ngSubmit)=\"onQuestionSubmit()\" #question=\"ngForm\">\n              <h2 class=\"text-primary\">Ask a Question</h2>\n              <hr>\n              <div class=\"form-group\">\n                <textarea type=\"text\" class=\"form-control\" name=\"question\" placeholder=\"Enter your question here...\" ngModel></textarea>\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Submit Question</button>\n              <div *ngIf=\"questionSuccess\" class=\"form-group\">\n                <br>\n                <p class=\"text-success\">Your question has been submitted!</p>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <br>\n      <br>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"!authService.loggedIn()\" class=\"container\">\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <div class=\"row text-center\">\n    <div class=\"col-6 mr-auto ml-auto\">\n\n      <div class=\"display-2 text-primary\">Welcome</div>\n      <br>\n      <br>\n      <div class=\"lead\">This training portal was created to help you better understand blockchain technology.</div>\n      <br>\n      <br>\n      <button type=\"button\" class=\"btn btn-lg btn-primary\" routerLink=\"/register\">Register</button>\n      <button type=\"button\" class=\"btn btn-lg btn-info\" routerLink=\"/login\">Login</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(authService, http) {
        this.authService = authService;
        this.http = http;
        this.questionSuccess = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onQuestionSubmit = function () {
        var _this = this;
        var id = this.authService.currentUser.id;
        var question = { question: this.questionForm.value.question };
        console.log(question);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        this.http.post('/api/v1/' + id + '/question', question, { headers: headers })
            .subscribe(function (res) {
            _this.questionForm.reset();
            _this.questionSuccess = true;
            setTimeout(function () { _this.questionSuccess = false; }, 2000);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('question'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], HomeComponent.prototype, "questionForm", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#appNav {\n  box-shadow: 0px 1px 1px #eeedf7;\n}\n\n.profile-img {\n  margin-top: -10px;\n  margin-bottom: -20px;\n  margin-right: 5px;\n  float: left;\n  background-size: auto 100%;\n  width: 50px;\n  height: 50px;\n}\n\n.roundImg {\n    border-radius: 50%;\n    height: 50px;\n    width: 50px;\n}\n\n.dd:hover {\n  cursor: pointer;\n}\n\nnavli:hover {\n  cursor: default;\n  background-color: transparent;\n  background: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-white\" id=\"appNav\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"../../assets/chainworks-logo.png\" class=\"img-rounded\" style=\"margin-left: 20px;\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" aria-controls=\"navCollapse\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div [ngbCollapse]=\"isNavbarCollapsed\" class=\"navbar-collapse justify-content-end\" id=\"navCollapse\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/certification\" routerLinkActive=\"active\" class=\"nav-link\">Certification</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/glossary\" routerLinkActive=\"active\" class=\"nav-link\">Glossary</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n          <a id=\"presentation-resources\" class=\"nav-link dd\" ngbDropdownToggle>Presentation Resources</a>\n          <div ngbDropdownMenu aria-labelledby=\"presentation-resources\">\n            <button class=\"dropdown-item dd\" [routerLink]=\"['/presentation-resources/hash-demo']\">Hash Demo</button>\n            <button class=\"dropdown-item dd\" [routerLink]=\"['/presentation-resources/pow-demo']\">POW Demo</button>\n            <button class=\"dropdown-item dd\" [routerLink]=\"['/presentation-resources/wallet-generator']\">Wallet Generator</button>\n          </div>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n          <a id=\"blockchain-demo\" ngbDropdownToggle class=\"nav-link dd\">Blockchain Demo</a>\n          <div ngbDropdownMenu aria-labelledby=\"blockchain-demo\">\n            <button class=\"dropdown-item dd\" [routerLink]=\"['/blockchain-demo/create-tx']\">Create Transaction</button>\n            <button class=\"dropdown-item dd\" [routerLink]=\"['/blockchain-demo/create-block']\">Create Block</button>\n            <button class=\"dropdown-item dd\" [routerLink]=\"['/blockchain-demo/blockchain']\">View Blockchain</button>\n          </div>\n        </li>\n        <div *ngIf=\"authService.loggedIn()\" ngbDropdown placement=\"bottom-right\" class=\"nav-item d-inline-block\">\n          <a class=\"nav-link dd\" id=\"basicdrop\" ngbDropdownToggle>\n            <!-- The Profile picture inserted via div class below, with shaping provided by Bootstrap -->\n            <div class=\"profile-img dd\">\n              <img class=\"roundImg dd\" src=\"{{ this.authService.picture_url }}\">\n            </div>\n            <span class=\"caret dd\"></span>\n          </a>\n          <div ngbDropdownMenu aria-labelledby=\"basicdrop\">\n            <h4 *ngIf=\"user\" class=\"dropdown-item text-capitalize navli\">{{ user.f_name }}</h4>\n            <hr>\n            <button class=\"dropdown-item dd\" [routerLink]=\"['/profile']\">Profile</button>\n            <button class=\"dropdown-item dd\" href=\"#\" (click)=\"onLogout()\">Logout</button>\n          </div>\n        </div>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.updateLocal = function () {
        console.log('pro pic updated');
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/presentation-resources/hash-demo/hash-demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shadow-box {\n    box-shadow: 1px 2px 10px -3px #312a44;\n    padding: 5px;\n    min-height: 50px;\n    word-wrap: break-word;\n    margin-bottom: 40px;\n  }\n\n  .txt {\n      line-height: 40px;\n      font-family: monospace;\n      font-size: large;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/presentation-resources/hash-demo/hash-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <div class=\"row text-center\">\n    <div class=\"col-12 col-lg-8 mr-auto ml-auto\">\n      <h2>Hash Demo (SHA256)</h2>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n      <div class=\"col-12 col-lg-8 mr-auto ml-auto shadowBoxLight\">\n          <form (ngSubmit)=\"onFormSubmit()\" #hashform=\"ngForm\">\n              <div class=\"form-group\">\n                  <textarea style=\"min-height: 100px;\" type=\"text\" class=\"form-control\" name=\"rawdata\" placeholder=\"Enter some text here...\" ngModel></textarea>\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary btn-block\">Hash Text</button>\n            </form>\n      </div>\n  </div>\n  <br>\n  <br>\n  <div *ngIf=\"hashedData\" class=\"row text-center\">\n    <div class=\"col-12 col-lg-8 mr-auto ml-auto shadow-box\">\n      <div class=\"txt\">{{ hashedData }}</div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 col-lg-8 mr-auto ml-auto\">\n      <div class=\"row text-center\">\n        <div class=\"col-12 col-md-4 h2\">Deterministic</div>\n        <div class=\"col-12 col-md-4 h2\">Irreversible</div>\n        <div class=\"col-12 col-md-4 h2\">Constant Size</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/presentation-resources/hash-demo/hash-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HashDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var web3 = new Web3();
var HashDemoComponent = (function () {
    function HashDemoComponent() {
    }
    HashDemoComponent.prototype.ngOnInit = function () {
    };
    HashDemoComponent.prototype.onFormSubmit = function () {
        this.hashedData = web3.sha3(this.hashForm.value.rawdata);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hashform'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */])
    ], HashDemoComponent.prototype, "hashForm", void 0);
    HashDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hash-demo',
            template: __webpack_require__("../../../../../src/app/components/presentation-resources/hash-demo/hash-demo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/presentation-resources/hash-demo/hash-demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HashDemoComponent);
    return HashDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/presentation-resources/pow-demo/pow-demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nonce {\n    height: 200px;\n    width: 200px;\n}\n\n.noncetext {\n    line-height: 40px;\n    font-family: monospace;\n    font-size: 5.5rem;\n    margin-top: 40px;\n}\n\n.txt {\n    line-height: 40px;\n    font-family: monospace;\n    font-size: large;\n    overflow: scroll;\n}\n\n.lg {\n    font-size: 2.0rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/presentation-resources/pow-demo/pow-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <h1 class=\"text-center\">Proof of Work Demo</h1>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-12 shadowBoxLight\">\n      <form (ngSubmit)=\"mine()\" #powForm=\"ngForm\">\n        <div class=\"form-group\">\n          <textarea style=\"min-height: 100px;\" type=\"text\" class=\"form-control\" name=\"rawdata\" placeholder=\"Enter some text here...\"\n            ngModel></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary btn-block\">Mine</button>\n      </form>\n    </div>\n  </div>\n  <br>\n  <br>\n  <div class=\"row  shadowBoxLight\">\n    <div class=\"col-8\">\n      <h4>Target</h4>\n      <div class=\"txt\">\n        <span [ngClass]=\"{'text-success lg': finished, 'text-danger': !finished}\">{{ difficulty[0].substring(0, 4) }}</span><span>{{ difficulty[0].substring(4) }}</span>\n      </div>\n      <br>\n      <h4>Solution</h4>\n      <div class=\"txt\">\n        <span *ngIf=\"solution\" [ngClass]=\"{'text-success lg': finished, 'text-danger': !finished}\">{{ solution.substring(0, 4) }}</span><span *ngIf=\"solution\">{{ solution.substring(4) }}</span>\n      </div>\n    </div>\n    <div class=\"col-4 text-center\">\n      <h4>Nonce</h4>\n      <div class=\"noncetext\">{{ nonce }}</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/presentation-resources/pow-demo/pow-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PowDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var web3 = new Web3();
var PowDemoComponent = (function () {
    function PowDemoComponent() {
        this.mining = false;
        this.finished = false;
        this.processing = false;
        this.difficulty = [
            '0x0fffffff62236eb17adc8502332f4c9c82bc14e19bfc0aa10ab674ff75b3d2f3',
            '0x00ffffff62236eb17adc8502332f4c9c82bc14e19bfc0aa10ab674ff75b3d2f3',
            '0x000fffff62236eb17adc8502332f4c9c82bc14e19bfc0aa10ab674ff75b3d2f3'
        ];
    }
    PowDemoComponent.prototype.ngOnInit = function () {
        this.nonce = 0;
    };
    PowDemoComponent.prototype.mine = function () {
        var data = this.powForm.value.rawdata;
        var difficulty = 0;
        this.reset(data, difficulty);
        this.increment(data, difficulty);
    };
    PowDemoComponent.prototype.reset = function (data, difficulty) {
        this.finished = false;
        this.solution = '';
        this.nonce = 0;
    };
    PowDemoComponent.prototype.increment = function (data, difficulty) {
        var _this = this;
        setTimeout(function () {
            if (web3.sha3(_this.nonce + data) >= _this.difficulty[difficulty]) {
                _this.mining = true;
                _this.nonce = _this.nonce + 1;
                _this.solution = web3.sha3(_this.nonce + data);
                _this.increment(data, difficulty);
            }
            else {
                _this.mining = false;
                _this.solution = web3.sha3(_this.nonce + data);
                _this.finished = true;
            }
        }, 200);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('powForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* NgForm */])
    ], PowDemoComponent.prototype, "powForm", void 0);
    PowDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-pow-demo',
            template: __webpack_require__("../../../../../src/app/components/presentation-resources/pow-demo/pow-demo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/presentation-resources/pow-demo/pow-demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PowDemoComponent);
    return PowDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/presentation-resources/presentation-resources.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/presentation-resources/presentation-resources.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/presentation-resources/presentation-resources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentationResourcesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PresentationResourcesComponent = (function () {
    function PresentationResourcesComponent() {
    }
    PresentationResourcesComponent.prototype.ngOnInit = function () {
    };
    PresentationResourcesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-presentation-resources',
            template: __webpack_require__("../../../../../src/app/components/presentation-resources/presentation-resources.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/presentation-resources/presentation-resources.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PresentationResourcesComponent);
    return PresentationResourcesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/presentation-resources/wallet-generator/wallet-generator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/presentation-resources/wallet-generator/wallet-generator.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  wallet-generator works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/presentation-resources/wallet-generator/wallet-generator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletGeneratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WalletGeneratorComponent = (function () {
    function WalletGeneratorComponent() {
    }
    WalletGeneratorComponent.prototype.ngOnInit = function () {
    };
    WalletGeneratorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wallet-generator',
            template: __webpack_require__("../../../../../src/app/components/presentation-resources/wallet-generator/wallet-generator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/presentation-resources/wallet-generator/wallet-generator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WalletGeneratorComponent);
    return WalletGeneratorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br><br><br><br><br><br><br>\n  <div class=\"row\">\n    <div class=\"col-12 col-xl-5 col-lg-6 col-md-8 col-sm-10 mr-auto ml-auto\">\n      <form class=\"shadowBox\" (ngSubmit)=\"onLoginSubmit()\" #login=\"ngForm\">\n        <h2>Login</h2>\n        <hr>\n        <div class=\"form-group\">\n          <label for=\"f_name\">Username</label>\n          <input type=\"text\" class=\"form-control\" name=\"username\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"l_name\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" ngModel>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Submit</button>\n      </form>     \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_query_service__ = __webpack_require__("../../../../../src/app/services/query.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(authService, router, query) {
        this.authService = authService;
        this.router = router;
        this.query = query;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.loginForm.value.username,
            password: this.loginForm.value.password
        };
        this.authService.loginUser(user).subscribe(function (userObj) {
            if (userObj.success) {
                _this.authService.storeUserData(userObj.token, userObj.user);
                _this.authService.getProfile().subscribe(function (profile) {
                    if (profile.user.picture_url) {
                        _this.authService.picture_url = profile.user.picture_url;
                    }
                    _this.authService.currentUser = profile.user;
                    _this.router.navigate(['/']);
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.router.navigate(['/register']);
            }
        });
        this.loginForm.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('login'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_query_service__["a" /* QueryService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pic {\n    width: 100%;\n    position: relative;\n    display: inline-block;\n  }\n  \n  .pic:hover > .overlay {\n      position: absolute;\n      top: 0;\n      width:100%;\n      height:100%;\n      left: 0;\n      background-color:#000;\n      opacity:0.5;\n      z-index: 100;\n      display: block;\n  }\n  \n  .info {\n    display: none;\n    position: absolute;\n    top: 150px;\n    left: 50px;\n    text-align: center;\n    color: white;\n    z-index: 101;\n  }\n\n  .db {\n      display: block;\n  }\n\n  #file {\n      height: 100%;\n      width: 100%;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xl-4 col-md-5\">\n      <div *ngIf=\"uploadMessage == '' && fileReady\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">\n          Upload Image\n        </button>\n        <br>\n        <br>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\" role=\"progressbar\">{{ uploader.progress }}%</div>\n        </div>\n        <br>\n      </div>\n      <p *ngIf=\"!fileReady && uploadMessage != ''\">{{ uploadMessage }}</p>\n      <div class=\"card\">\n        <div class=\"pic card-img-top\" (mouseover)=\"changeStyle($event)\" (mouseout)=\"changeStyle($event)\">\n          <img class=\"img-fluid\" src=\"{{ user.picture_url }}\">\n          <div class=\"overlay\"></div>\n          <div class=\"info\" [ngClass]=\"display\">\n            <input *ngIf=\"!uploader.isReady && !uploader.isUploading && !uploader.isSuccess && !fileReady\" type=\"file\" name=\"photo\" ng2FileSelect\n              [uploader]=\"uploader\" />\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-capitalize\">{{ user.f_name }}'s Profile</h5>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">\n            <strong>Email: </strong>{{ user.email }}</li>\n          <li class=\"list-group-item\">\n            <strong>Username: </strong>{{ user.username }}</li>\n          <li class=\"list-group-item\">\n            <strong>Session Id: </strong>{{ user.session }}</li>\n        </ul>\n\n      </div>\n    </div>\n    <div class=\"col-7 ml-auto\">\n      <h2 class=\"display-4\">My Questions</h2><hr>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let question of questions\">{{ question.question }}</li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_query_service__ = __webpack_require__("../../../../../src/app/services/query.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, queryService) {
        this.authService = authService;
        this.queryService = queryService;
        this.display = '';
        this.fileReady = false;
        this.uploaded = '';
        this.uploadMessage = '';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: '/upload', itemAlias: 'photo' });
        this.profilePicChanged = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.queryService.getUserQuestions().subscribe(function (questions) {
            _this.questions = questions;
        });
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
            _this.fileReady = true;
            _this.uploadMessage = '';
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            if (!res.success) {
                _this.fileReady = false;
                _this.uploader.clearQueue();
                _this.uploadMessage = res.msg;
            }
            else {
                // Save user picture to local storage
                var usr = JSON.parse(localStorage.getItem('user'));
                usr.picture_url = res.file;
                localStorage.setItem('user', JSON.stringify(usr));
                _this.user = usr;
                _this.authService.picture_url = res.file;
                setTimeout(function () {
                    _this.fileReady = false;
                    _this.uploadMessage = res.msg;
                    _this.uploader.clearQueue();
                }, 1000);
            }
        };
    };
    ProfileComponent.prototype.emitUploader = function () {
        console.log(this.uploader);
    };
    ProfileComponent.prototype.changeStyle = function ($event) {
        this.display = $event.type === 'mouseover' ? 'db' : '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "profilePicChanged", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__services_query_service__["a" /* QueryService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-12 col-xl-5 col-lg-6 col-md-8 col-sm-10 mr-auto ml-auto\">\n      <form class=\"shadowBox\" (ngSubmit)=\"onRegisterSubmit()\" #register=\"ngForm\">\n        <h2>Register</h2>\n        <hr>\n        <div class=\"form-group\">\n          <label for=\"f_name\">First Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"f_name\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"l_name\">Last Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"l_name\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"userEmail\">Email</label>\n          <input type=\"email\" class=\"form-control\" name=\"userEmail\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input type=\"text\" class=\"form-control\" name=\"username\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"session\">Training Session Id</label>\n          <input type=\"text\" class=\"form-control\" name=\"session\" ngModel>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Submit</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var username = this.registerForm.value.username;
        var password = this.registerForm.value.password;
        var user = {
            email: this.registerForm.value.userEmail,
            f_name: this.registerForm.value.f_name,
            l_name: this.registerForm.value.l_name,
            username: username,
            password: password,
            session: this.registerForm.value.session
        };
        // Register user with backend
        this.authService.registerUser(user).subscribe(function (data) {
            if (data) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.router.navigate(['/register']);
            }
        });
        this.registerForm.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('register'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.picture_url = 'http://www.tadamun.so/wp-content/uploads/2016/09/blank-avatar.png';
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        // Return an observable that can be subscribed to
        return this.http.post('/users/new', user, { headers: headers });
    };
    // Make POST request to authenticate
    AuthService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        // Return an observable that can be subscribed to
        return this.http.post('/users/authenticate', user, { headers: headers });
    };
    // Allow someone on unauthorized routes
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Authorization': this.authToken,
            'Content-type': 'application/json'
        });
        // Return an observable that can be subscribed to
        return this.http.get('/users/profile', { headers: headers });
    };
    // Allow edits to a user
    AuthService.prototype.updateUserPicture = function (username, picture) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        return this.http.put('/api/v1/' + username + '/image', picture, { headers: headers });
    };
    // Store logged in user in localStorage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        // Local storage only stores strings, so we need to stringify the Json user object
        localStorage.setItem('user', JSON.stringify(user));
        // Set auth service globals so we can pass around our app
        this.authToken = token;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loadUserProfiles = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        return this.http.get('/api/v1/users', { headers: headers })
            .map(function (response) {
            var users = [];
            response.forEach(function (user) {
                users.push({ username: user.username, id: user.id, picture_url: user.picture_url });
            });
            return users;
        }, function (err) {
            console.log(err);
        });
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    // Log out logic
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.currentUser = null;
        localStorage.clear();
        this.router.navigate(['/']);
        this.picture_url = 'http://www.tadamun.so/wp-content/uploads/2016/09/blank-avatar.png';
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/can-deactivate-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanDeactivateGuard; });
var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        return component.canDeactivate();
    };
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/query.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueryService = (function () {
    function QueryService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    QueryService.prototype.getUserQuestions = function () {
        var id = JSON.parse(localStorage.getItem('user')).id;
        return this.http.get('/api/v1/' + id + '/questions');
    };
    QueryService.prototype.getUtxos = function (user_id) {
        return this.http.get('/api/v1/utxos/unspent/' + user_id);
    };
    QueryService.prototype.getIncomingTxs = function (user_id) {
        return this.http.get('/api/v1/txs/incoming/' + user_id);
    };
    QueryService.prototype.getBlockTxs = function (block_id) {
        return this.http.get('/api/v1/blocks/txs/' + block_id);
    };
    QueryService.prototype.getIncomingBlocks = function (user_id) {
        return this.http.get('/api/v1/blocks/incoming/' + user_id);
    };
    QueryService.prototype.getUserTxs = function (user_id) {
        return this.http.get('/api/v1/txs/' + user_id);
    };
    QueryService.prototype.getTxById = function (tx_id) {
        return this.http.get('/api/v1/txs/tx/' + tx_id);
    };
    QueryService.prototype.getInputs = function (id) {
        return this.http.get('/api/v1/txs/' + id + '/inputs');
    };
    QueryService.prototype.getOutputs = function (id) {
        return this.http.get('/api/v1/txs/' + id + '/outputs');
    };
    QueryService.prototype.postUtxo = function (user_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        var utxo = {
            value: 50,
            current_owner: user_id
        };
        return this.http.post('/api/v1/utxos/new', utxo, { headers: headers });
    };
    QueryService.prototype.spendUtxo = function (utxoId) {
        var id = JSON.parse(localStorage.getItem('user')).id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        var utxo = {
            user_id: this.authService.user.id,
            utxo_id: utxoId
        };
        return this.http.post('/api/v1/utxos/spend', utxo, { headers: headers });
    };
    QueryService.prototype.subscribeUtxo = function (utxoId) {
        var id = JSON.parse(localStorage.getItem('user')).id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        var utxo = {
            user_id: id,
            utxo_id: utxoId
        };
        return this.http.post('/api/v1/utxos/bind', utxo, { headers: headers });
    };
    QueryService.prototype.postTx = function (tx) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        return this.http.post('/api/v1/txs/new', tx, { headers: headers });
    };
    QueryService.prototype.subscribeTx = function (txId) {
        var id = JSON.parse(localStorage.getItem('user')).id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        var tx = {
            user_id: id,
            tx_id: txId
        };
        return this.http.post('/api/v1/txs/bind', tx, { headers: headers });
    };
    QueryService.prototype.rejectTx = function (txId) {
        var id = JSON.parse(localStorage.getItem('user')).id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        var tx = {
            user_id: id,
            tx_id: txId
        };
        return this.http.post('/api/v1/txs/reject', tx, { headers: headers });
    };
    QueryService.prototype.unsubscribeTx = function (txId) {
        var id = JSON.parse(localStorage.getItem('user')).id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        var tx = {
            user_id: id,
            tx_id: txId
        };
        return this.http.post('/api/v1/txs/delete', tx, { headers: headers });
    };
    // TODO
    QueryService.prototype.addTxToBlock = function (tx_id, block_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        var tx = {
            tx_id: tx_id,
            block_id: block_id
        };
        return this.http.post('/api/v1/blocks/bind-tx', tx, { headers: headers });
    };
    QueryService.prototype.postBlock = function (block) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        return this.http.post('/api/v1/blocks/new', block, { headers: headers });
    };
    QueryService.prototype.subscribeBlock = function (blockId) {
        var id = JSON.parse(localStorage.getItem('user')).id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        var block = {
            user_id: id,
            block_id: blockId
        };
        return this.http.post('/api/v1/blocks/bind', block, { headers: headers });
    };
    QueryService.prototype.rejectBlock = function (blockId) {
        var id = JSON.parse(localStorage.getItem('user')).id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        var block = {
            user_id: id,
            block_id: blockId
        };
        return this.http.post('/api/v1/blocks/reject', block, { headers: headers });
    };
    QueryService.prototype.getBlockById = function (blockId) {
        return this.http.get('/api/v1/blocks/' + blockId);
    };
    QueryService.prototype.getUserBlockchain = function (user_id) {
        return this.http.get('/api/v1/blocks/user/' + user_id);
    };
    QueryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]])
    ], QueryService);
    return QueryService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map