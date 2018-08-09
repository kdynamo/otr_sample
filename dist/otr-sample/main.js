(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _module_main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/main/dashboard/dashboard.component */ "./src/app/module/main/dashboard/dashboard.component.ts");
/* harmony import */ var _module_main_edit_row_edit_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/main/edit-row/edit-row.component */ "./src/app/module/main/edit-row/edit-row.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '', component: _module_main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }, {
        path: 'edit-row', component: _module_main_edit_row_edit_row_component__WEBPACK_IMPORTED_MODULE_3__["EditRowComponent"],
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _module_main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/main/dashboard/dashboard.component */ "./src/app/module/main/dashboard/dashboard.component.ts");
/* harmony import */ var _module_main_edit_row_edit_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/main/edit-row/edit-row.component */ "./src/app/module/main/edit-row/edit-row.component.ts");
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/shared/shared.module */ "./src/app/module/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _module_main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _module_main_edit_row_edit_row_component__WEBPACK_IMPORTED_MODULE_5__["EditRowComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/module/main/dashboard/dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/module/main/dashboard/dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  logistic dashboard\n</h1>\n<table class=\"table\">\n  <tbody>\n    <tr>\n\n      <th>id</th>\n      <th>equipmentGroup</th>\n      <th>origin</th>\n      <th>dest</th>\n      <th>Mon</th>\n      <th>Tue</th>\n      <th>Wed</th>\n      <th>Thu</th>\n      <th>Fri</th>\n      <th>Sat</th>\n      <th>Sun</th>\n    </tr>\n    <tr *ngFor=\"let truckRoute of truckRoutes\" (click)=\"clickRow( $event, truckRoute )\">\n      <ng-container *ngFor=\"let field of fields\">\n        <td>{{ field?.field | cellrender: truckRoute: field }}</td>\n      </ng-container>\n      </tr>\n      </tbody>\n</table>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <input type=\"button\" name=\"update\" value=\"Add Vehicle\" (click)=\"addVehicle( )\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/module/main/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/module/main/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/module/main/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/module/main/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_truck_route_truck_route_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/truck-route/truck-route.service */ "./src/app/module/service/truck-route/truck-route.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_pipe_cell_render_cell_render_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipe/cell-render/cell-render.pipe */ "./src/app/module/shared/pipe/cell-render/cell-render.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(truckRouteService, router) {
        this.truckRouteService = truckRouteService;
        this.router = router;
        this.truckRoutes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fields = this.truckRouteService.getFields();
        this.truckRouteService.getRoutes().subscribe(function (truckRoutes) { _this.truckRoutes = truckRoutes; });
    };
    DashboardComponent.prototype.getEquipmentGroup = function (id) {
        return _service_truck_route_truck_route_service__WEBPACK_IMPORTED_MODULE_1__["EquipmentGroup"][id];
    };
    DashboardComponent.prototype.clickRow = function (e, row) {
        console.log('Click row', e, row);
        this.router.navigate(['/edit-row/', { id: row.id }]);
    };
    DashboardComponent.prototype.addVehicle = function () {
        this.router.navigate(['/edit-row/']);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/module/main/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/module/main/dashboard/dashboard.component.scss")],
            providers: [_shared_pipe_cell_render_cell_render_pipe__WEBPACK_IMPORTED_MODULE_3__["CellRenderPipe"]]
        }),
        __metadata("design:paramtypes", [_service_truck_route_truck_route_service__WEBPACK_IMPORTED_MODULE_1__["TruckRouteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/module/main/edit-row/edit-row.component.html":
/*!**************************************************************!*\
  !*** ./src/app/module/main/edit-row/edit-row.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"f.form.valid && update( f )\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <label>ID</label> {{ truckRoute.id }}\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <select [(ngModel)]=\"truckRoute.equipmentGroupId\" name=\"equipmentGroupId\" required>\n        <option value=\"1\">Flatbed</option>\n        <option value=\"2\">Tanker</option>\n        <option value=\"3\">Van</option>\n        <option value=\"4\">Reffer</option>\n      </select>\n      <label>Equipment Group ID</label>\n      <div class=\"alert alert-danger\">Required</div>\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n\n      <input name=\"origin\" [(ngModel)]=\"truckRoute.origin\" validateZip  required/>\n      <label>Origin</label>\n      <div class=\"alert alert-danger\">{{ f.controls.origin?.errors?.message }}</div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <input name=\"destination\" [(ngModel)]=\"truckRoute.destination\" validateZip required />\n      <label>destination</label>\n      <div class=\"alert alert-danger\">{{ f.controls.destination?.errors?.message }}</div>\n    </div>\n  </div>\n  <h2>Availability</h2>\n  <!-- <ng-container *ngFor=\"let days of truckRoute?.availability | keyvalue\">\n {{ days.key }} <input type=\"checkbox\" name=\"days.key\" />\n</ng-container>\n-->\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <input type=\"checkbox\" name=\"monday\" [(ngModel)]=\"truckRoute.availability.monday\">Monday\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <input type=\"checkbox\" name=\"tuesday\" [(ngModel)]=\"truckRoute.availability.tuesday\">Tuesday\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <input type=\"checkbox\" name=\"wednesday\" [(ngModel)]=\"truckRoute.availability.wednesday\">Wednesday\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <input type=\"checkbox\" name=\"thursday\" [(ngModel)]=\"truckRoute.availability.thursday\">Thursday\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <input type=\"checkbox\" name=\"friday\" [(ngModel)]=\"truckRoute.availability.friday\">Friday\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <input type=\"checkbox\" name=\"saturday\" [(ngModel)]=\"truckRoute.availability.saturday\">Saturday\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <input type=\"checkbox\" name=\"sunday\" [(ngModel)]=\"truckRoute.availability.sunday\">Sunday\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <input type=\"button\" value=\"Cancel\" name=\"cancel\" (click)=\"cancelUpdate()\" />\n      <input [disabled]=\"! f.form.valid\" type=\"submit\" value=\"Update\" name=\"update\"  />\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/module/main/edit-row/edit-row.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/module/main/edit-row/edit-row.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/module/main/edit-row/edit-row.component.ts":
/*!************************************************************!*\
  !*** ./src/app/module/main/edit-row/edit-row.component.ts ***!
  \************************************************************/
/*! exports provided: EditRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRowComponent", function() { return EditRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_truck_route_truck_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/truck-route/truck-route.service */ "./src/app/module/service/truck-route/truck-route.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditRowComponent = /** @class */ (function () {
    function EditRowComponent(route, router, truckRoutesService) {
        this.route = route;
        this.router = router;
        this.truckRoutesService = truckRoutesService;
    }
    EditRowComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        var truckRoute = this.truckRoutesService.getRoute(id);
        this.truckRoute = __assign({}, truckRoute);
        if (!this.truckRoute.id) {
            this.truckRoute.availability = {
                monday: false,
                tuesday: false,
                wednesday: false,
                thursday: false,
                friday: false,
                saturday: false,
                sunday: false
            };
        }
    };
    EditRowComponent.prototype.cancelUpdate = function () {
        this.router.navigate(['/']);
    };
    EditRowComponent.prototype.update = function (form, e) {
        this.truckRoutesService.setRoute(this.truckRoute);
        this.router.navigate(['/']);
    };
    EditRowComponent.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, ['DEBUG'].concat(args));
    };
    EditRowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-row',
            template: __webpack_require__(/*! ./edit-row.component.html */ "./src/app/module/main/edit-row/edit-row.component.html"),
            styles: [__webpack_require__(/*! ./edit-row.component.scss */ "./src/app/module/main/edit-row/edit-row.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_truck_route_truck_route_service__WEBPACK_IMPORTED_MODULE_2__["TruckRouteService"]])
    ], EditRowComponent);
    return EditRowComponent;
}());



/***/ }),

/***/ "./src/app/module/service/truck-route/truck-route.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module/service/truck-route/truck-route.service.ts ***!
  \*******************************************************************/
/*! exports provided: EquipmentGroup, TruckRouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentGroup", function() { return EquipmentGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckRouteService", function() { return TruckRouteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EquipmentGroup;
(function (EquipmentGroup) {
    EquipmentGroup[EquipmentGroup["Flatebed"] = 1] = "Flatebed";
    EquipmentGroup[EquipmentGroup["Tanker"] = 2] = "Tanker";
    EquipmentGroup[EquipmentGroup["Van"] = 3] = "Van";
    EquipmentGroup[EquipmentGroup["Reffer"] = 4] = "Reffer";
})(EquipmentGroup || (EquipmentGroup = {}));
;
var TruckRouteService = /** @class */ (function () {
    function TruckRouteService() {
        this.truckRouteFields = [{
                field: 'id',
                header: 'Id'
            }, {
                field: 'equipmentGroupId',
                header: 'EId'
            }, {
                field: 'origin',
                header: 'Origin'
            }, {
                field: 'destination',
                header: 'Destination'
            }, {
                field: 'availability.monday',
                header: 'Monday',
                format: 'check'
            }, {
                field: 'availability.tuesday',
                header: 'Tuesday',
                format: 'check'
            }, {
                field: 'availability.wednesday',
                header: 'Wednesday',
                format: 'check'
            }, {
                field: 'availability.thursday',
                header: 'Thursday',
                format: 'check'
            }, {
                field: 'availability.friday',
                header: 'Friday',
                format: 'check'
            }, {
                field: 'availability.saturday',
                header: 'Saturday',
                format: 'check'
            }, {
                field: 'availability.sunday',
                header: 'Sunday',
                format: 'check'
            }];
        this.truckRoutes = [{
                id: 1,
                equipmentGroupId: 2,
                origin: 60564,
                destination: 52001,
                availability: {
                    monday: true,
                    tuesday: false,
                    wednesday: true,
                    thursday: true,
                    friday: true,
                    saturday: false,
                    sunday: false
                }
            }, {
                id: 2,
                equipmentGroupId: 3,
                origin: 60056,
                destination: 80525,
                availability: {
                    monday: false,
                    tuesday: false,
                    wednesday: true,
                    thursday: true,
                    friday: true,
                    saturday: false,
                    sunday: false
                }
            }, {
                id: 3,
                equipmentGroupId: 3,
                origin: 60056,
                destination: 80525,
                availability: {
                    monday: false,
                    tuesday: false,
                    wednesday: true,
                    thursday: true,
                    friday: true,
                    saturday: false,
                    sunday: false
                }
            }];
    }
    TruckRouteService.prototype.getRoutes = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.truckRoutes);
    };
    TruckRouteService.prototype.getRoute = function (id) {
        var finalValue = null;
        this.truckRoutes.forEach(function (truckRoute, index) {
            if (!finalValue && (truckRoute.id === parseInt(id, 10))) {
                finalValue = truckRoute;
            }
        });
        return finalValue;
    };
    TruckRouteService.prototype.setRoute = function (updatedRoute) {
        var _this = this;
        if (!updatedRoute.id) {
            updatedRoute.id = this.truckRoutes.length;
            this.truckRoutes.push(updatedRoute);
        }
        this.truckRoutes.forEach(function (truckRoute, index) {
            if (truckRoute.id === updatedRoute.id) {
                _this.truckRoutes[index] = updatedRoute;
            }
        });
    };
    TruckRouteService.prototype.addRoute = function (newRoute) {
        newRoute.id = this.truckRoutes.length;
        this.truckRoutes.push(newRoute);
    };
    TruckRouteService.prototype.getFields = function () {
        return this.truckRouteFields;
    };
    TruckRouteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TruckRouteService);
    return TruckRouteService;
}());



/***/ }),

/***/ "./src/app/module/shared/directive/validator/zip/zip-validator.directive.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/module/shared/directive/validator/zip/zip-validator.directive.ts ***!
  \**********************************************************************************/
/*! exports provided: ZipValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipValidatorDirective", function() { return ZipValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZipValidatorDirective = /** @class */ (function () {
    function ZipValidatorDirective() {
    }
    ZipValidatorDirective_1 = ZipValidatorDirective;
    ZipValidatorDirective.validateZip = function (control) {
        var value = control.value;
        var retValue = null;
        if ((value === '') ||
            (value && value.match && !value.match(/^\s*\d{5}(\-\d{4})?/))) {
            retValue = { message: 'Zip format must be either 99999 or 99999-9999' };
        }
        return retValue;
    };
    ZipValidatorDirective.prototype.validate = function (value) {
        return ZipValidatorDirective_1.validateZip(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ZipValidatorDirective.prototype, "zipFormat", void 0);
    ZipValidatorDirective = ZipValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateZip],[validateZip][formControlName],[validateZip][formControl],[validateZip][ngModel]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ZipValidatorDirective_1; }),
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], ZipValidatorDirective);
    return ZipValidatorDirective;
    var ZipValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/module/shared/pipe/cell-render/cell-render.pipe.ts":
/*!********************************************************************!*\
  !*** ./src/app/module/shared/pipe/cell-render/cell-render.pipe.ts ***!
  \********************************************************************/
/*! exports provided: CellRenderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellRenderPipe", function() { return CellRenderPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CellRenderPipe = /** @class */ (function () {
    function CellRenderPipe() {
    }
    CellRenderPipe.prototype.transform = function (value, row, column, args) {
        var split = column.field.split('.');
        var field = row;
        split.forEach(function (leg) {
            field = field[leg];
        });
        if (column.format === 'check') {
            field = (field) ? 'X' : '';
        }
        return field;
    };
    CellRenderPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'cellrender'
        })
    ], CellRenderPipe);
    return CellRenderPipe;
}());



/***/ }),

/***/ "./src/app/module/shared/shared.module.ts":
/*!************************************************!*\
  !*** ./src/app/module/shared/shared.module.ts ***!
  \************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipe_cell_render_cell_render_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipe/cell-render/cell-render.pipe */ "./src/app/module/shared/pipe/cell-render/cell-render.pipe.ts");
/* harmony import */ var _directive_validator_zip_zip_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive/validator/zip/zip-validator.directive */ "./src/app/module/shared/directive/validator/zip/zip-validator.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [_pipe_cell_render_cell_render_pipe__WEBPACK_IMPORTED_MODULE_3__["CellRenderPipe"], _directive_validator_zip_zip_validator_directive__WEBPACK_IMPORTED_MODULE_4__["ZipValidatorDirective"]],
            exports: [
                _pipe_cell_render_cell_render_pipe__WEBPACK_IMPORTED_MODULE_3__["CellRenderPipe"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _directive_validator_zip_zip_validator_directive__WEBPACK_IMPORTED_MODULE_4__["ZipValidatorDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\angular\otr-sample\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map