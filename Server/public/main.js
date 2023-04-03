(self["webpackChunksistema_tickets"] = self["webpackChunksistema_tickets"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 4599);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _components_indexPrincipal_principal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/indexPrincipal/principal.component */ 4883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  component: _components_indexPrincipal_principal_component__WEBPACK_IMPORTED_MODULE_2__.PrincipalComponent,
  children: [{
    path: '',
    component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
  }]
}, {
  path: 'home',
  component: _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
  children: [{
    path: 'inicio',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main/main.module */ 9580)).then(x => x.MainModule)
  }]
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
    useHash: false
  }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'ticket-digital';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/avatar */ 7063);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.module */ 5687);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 4599);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _service_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/usuario.service */ 375);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/menu */ 625);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/slider */ 4950);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/multiselect */ 3814);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/contextmenu */ 5945);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/progressbar */ 8395);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/fileupload */ 6193);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/rating */ 2415);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/radiobutton */ 9902);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/slidemenu */ 691);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/splitbutton */ 3650);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _service_CustomerService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/CustomerService */ 8205);
/* harmony import */ var _service_Area_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/Area.service */ 4262);
/* harmony import */ var _components_indexPrincipal_principal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/indexPrincipal/principal.component */ 4883);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);




































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_components_indexPrincipal_principal_component__WEBPACK_IMPORTED_MODULE_6__.PrincipalComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [_service_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService, _service_CustomerService__WEBPACK_IMPORTED_MODULE_4__.CustomerService, _service_Area_service__WEBPACK_IMPORTED_MODULE_5__.AreaService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_11__.SidebarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, primeng_menu__WEBPACK_IMPORTED_MODULE_15__.MenuModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_16__.RippleModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_17__.SlideMenuModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_18__.ToolbarModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_19__.AvatarModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_20__.SplitButtonModule, primeng_toast__WEBPACK_IMPORTED_MODULE_21__.ToastModule, primeng_table__WEBPACK_IMPORTED_MODULE_22__.TableModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_23__.CalendarModule, primeng_slider__WEBPACK_IMPORTED_MODULE_24__.SliderModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_25__.MultiSelectModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_26__.ContextMenuModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_27__.DialogModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_28__.DropdownModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_29__.ProgressBarModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_30__.FileUploadModule, primeng_rating__WEBPACK_IMPORTED_MODULE_31__.RatingModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_32__.RadioButtonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_33__.InputNumberModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_34__.InputTextareaModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_35__.CheckboxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _components_indexPrincipal_principal_component__WEBPACK_IMPORTED_MODULE_6__.PrincipalComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_11__.SidebarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, primeng_menu__WEBPACK_IMPORTED_MODULE_15__.MenuModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_16__.RippleModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_17__.SlideMenuModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_18__.ToolbarModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_19__.AvatarModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_20__.SplitButtonModule, primeng_toast__WEBPACK_IMPORTED_MODULE_21__.ToastModule, primeng_table__WEBPACK_IMPORTED_MODULE_22__.TableModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_23__.CalendarModule, primeng_slider__WEBPACK_IMPORTED_MODULE_24__.SliderModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_25__.MultiSelectModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_26__.ContextMenuModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_27__.DialogModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_28__.DropdownModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_29__.ProgressBarModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_30__.FileUploadModule, primeng_rating__WEBPACK_IMPORTED_MODULE_31__.RatingModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_32__.RadioButtonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_33__.InputNumberModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_34__.InputTextareaModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_35__.CheckboxModule],
    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 4883:
/*!******************************************************************!*\
  !*** ./src/app/components/indexPrincipal/principal.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalComponent": () => (/* binding */ PrincipalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class PrincipalComponent {}
PrincipalComponent.ɵfac = function PrincipalComponent_Factory(t) {
  return new (t || PrincipalComponent)();
};
PrincipalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PrincipalComponent,
  selectors: [["app-principal"]],
  decls: 1,
  vars: 0,
  template: function PrincipalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 8647:
/*!*******************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioComponent": () => (/* binding */ InicioComponent)
/* harmony export */ });
/* harmony import */ var _util_alerta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/alerta.component */ 5845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth-guard.service */ 1557);
/* harmony import */ var _service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/usuario.service */ 375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/splitbutton */ 3650);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/avatar */ 7063);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.component */ 3429);










function InicioComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
  }
}
function InicioComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
  }
}
const _c0 = function () {
  return {
    "background-color": "#E30521",
    "opacity": "0.2;",
    "color": "#ffffff"
  };
};
class InicioComponent {
  constructor(_authGuardService, authService, _auth) {
    this._authGuardService = _authGuardService;
    this.authService = authService;
    this._auth = _auth;
    this.token = this._authGuardService.getToken();
    this.sesionUsuario = this._authGuardService.getUser();
  }
  get auth() {
    return this.authService.auth;
  }
  ngOnInit() {
    this.items = [{
      label: 'Perfil',
      icon: 'pi pi-user',
      routerLink: ['perfil']
    }, {
      separator: true
    }, {
      label: 'Exit',
      icon: 'pi pi-sign-out',
      command: () => this.logout(),
      routerLink: ['']
    }];
  }
  logout() {
    this._auth.logout();
  }
}
InicioComponent.ɵfac = function InicioComponent_Factory(t) {
  return new (t || InicioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.authGuardService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.authGuardService));
};
InicioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: InicioComponent,
  selectors: [["inicio"]],
  viewQuery: function InicioComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_util_alerta_component__WEBPACK_IMPORTED_MODULE_0__.AlertaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.mensajeAlerta = _t.first);
    }
  },
  decls: 15,
  vars: 7,
  consts: [[1, ""], [1, "flex", "align-items-center", "justify-content-between"], [1, "flex-inline"], ["shape", "circle", "icon", "pi pi-user", "pBadge", "", "value", "4", "severity", "success", "styleClass", "mr-2", "size", "large"], ["label", "Cuenta", "styleClass", "p-button-text p-button-danger mr-2 mb-2 ", 3, "model"], [4, "ngIf"]],
  template: function InicioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "p-avatar", 3)(8, "p-splitButton", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, InicioComponent_div_10_Template, 1, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "app-alerta");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, InicioComponent_div_13_Template, 1, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "router-outlet");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Nombre: ", ctx.auth.nombre, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sesionUsuario.clave == "ADM" || ctx.sesionUsuario.clave == "TEC");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sesionUsuario.clave == "ADM" || ctx.sesionUsuario.clave == "TEC");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__.SplitButton, primeng_avatar__WEBPACK_IMPORTED_MODULE_7__.Avatar, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _util_alerta_component__WEBPACK_IMPORTED_MODULE_0__.AlertaComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent],
  encapsulation: 2
});

/***/ }),

/***/ 4599:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var C_Mesa_de_Ayuda_Front_Front_end_728963e443877477536b5c628cd6d800a198e819_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_components_model_login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/model/login.model */ 6982);
/* harmony import */ var src_app_util_alerta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/alerta.component */ 5845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/usuario.service */ 375);
/* harmony import */ var src_app_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth-guard.service */ 1557);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ 9129);















function LoginComponent_section_0_div_11_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "El campo usuario se encuentra vac\u00EDo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginComponent_section_0_div_11_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "El usuario debe de ser de minimo 3 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginComponent_section_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LoginComponent_section_0_div_11_small_1_Template, 2, 0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LoginComponent_section_0_div_11_small_2_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form["usuarioLogin"].errors == null ? null : ctx_r1.form["usuarioLogin"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.controls.usuarioLogin.errors == null ? null : ctx_r1.loginForm.controls.usuarioLogin.errors["minlength"]);
  }
}
function LoginComponent_section_0_div_16_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "El campo contrase\u00F1a se encuentra vac\u00EDo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginComponent_section_0_div_16_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "La contrase\u00F1a es demaciado larga.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginComponent_section_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LoginComponent_section_0_div_16_small_1_Template, 2, 0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LoginComponent_section_0_div_16_small_2_Template, 2, 0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.loginForm.controls.contrasenaLogin.errors == null ? null : ctx_r2.loginForm.controls.contrasenaLogin.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.loginForm.controls.contrasenaLogin.errors == null ? null : ctx_r2.loginForm.controls.contrasenaLogin.errors["maxlength"]);
  }
}
function LoginComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Iniciar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginComponent_section_0_Template_form_ngSubmit_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.fnLogueo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 8)(8, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, LoginComponent_section_0_div_11_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 8)(13, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, LoginComponent_section_0_div_16_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_section_0_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.fnLogueo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Iniciar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.touched && ctx_r0.loginForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.touched && ctx_r0.loginForm.invalid);
  }
}
class LoginComponent {
  constructor(_formBuilder, messageService, _usuarioService, _authGuardService, router) {
    this._formBuilder = _formBuilder;
    this.messageService = messageService;
    this._usuarioService = _usuarioService;
    this._authGuardService = _authGuardService;
    this.router = router;
    this.loginForm = this._formBuilder.group({
      usuarioLogin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(1)]],
      contrasenaLogin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(15)]]
    });
  }
  fnLogueo() {
    console.log("this.loginForm", this.loginForm.value);
    if (this.loginForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'No es posible acceder',
        detail: 'Porfavor verifique todos los campos'
      });
    } else {
      console.log("this.loginForm.value.usuarioLogin", this.loginForm.value.usuarioLogin);
      this.iniciarSesion(this.loginForm.value.usuarioLogin, this.loginForm.value.contrasenaLogin);
    }
  }
  get form() {
    return this.loginForm.controls;
  }
  iniciarSesion(usuario, contrasena) {
    var _this = this;
    return (0,C_Mesa_de_Ayuda_Front_Front_end_728963e443877477536b5c628cd6d800a198e819_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("usuario", usuario, "contrasena", contrasena);
      let datosInicioSesion = new src_app_components_model_login_model__WEBPACK_IMPORTED_MODULE_1__.loginUsuario(usuario, contrasena);
      console.log("datosSesion", datosInicioSesion);
      _this._usuarioService.iniciarSesion(datosInicioSesion).subscribe({
        next: resp => {
          let respuestaDto = resp;
          if (respuestaDto.valido == 0) {
            console.log("next", respuestaDto.mensaje);
            _this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: respuestaDto.mensaje
            });
          } else {
            _this.usuario = respuestaDto.addenda;
            // this.obtenerMenu(respuestaDto.token , this.usuario);
            _this._authGuardService.sendToken(_this.usuario);
            _this._authGuardService.sendKey(respuestaDto.token);
            _this.router.navigate(["/home/inicio/main/Ticket"]);
          } // if
        },

        error: error => {
          let mensaje = error;
          _this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
        }
      });
    })();
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__.authGuardService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  viewQuery: function LoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](src_app_util_alerta_component__WEBPACK_IMPORTED_MODULE_2__.AlertaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.mensajeAlerta = _t.first);
    }
  },
  decls: 3,
  vars: 1,
  consts: [["id", "wrapper", 4, "ngIf"], ["position", "top-right"], ["id", "wrapper"], [1, "fondo-imagen"], [1, "login-box"], [1, "login-card", "tamano560"], [1, "box-title", "m-b-20", "text-center"], [3, "formGroup", "ngSubmit"], [1, "field"], ["for", "loginUsuario"], ["id", "usuarioLogin", "formControlName", "usuarioLogin", "pInputText", "", 1, "p-2", "border-1", "border-solid", "surface-border", "border-round", "appearance-none", "outline-none", "focus:border-primary", "w-full", 2, "background", "#9c9b9b54"], [4, "ngIf"], ["for", "lblLoginContrasena"], ["id", "idLoginContrasena", "formControlName", "contrasenaLogin", "pInputText", "", "type", "password", 1, "p-2", "border-1", "border-solid", "surface-border", "border-round", "appearance-none", "outline-none", "focus:border-primary", "w-full", 2, "background", "#9c9b9b54"], [1, "form-group", "text-center", "m-t-20"], [1, "col-xs-12"], ["pButton", "", "type", "button", 1, "p-button-danger", 3, "click"], ["id", "blErrorUsuarioLogin", "class", "p-error", 4, "ngIf"], ["id", "lblLongUsername", "class", "p-error", 4, "ngIf"], ["id", "blErrorUsuarioLogin", 1, "p-error"], ["id", "lblLongUsername", 1, "p-error"], ["id", "lblErrcontrasenaLogin", "class", " p-error ", 4, "ngIf"], ["id", "lblErrcontrasenaLogin", 1, "p-error"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, LoginComponent_section_0_Template, 21, 3, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "p-toast", 1)(2, "app-alerta");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx._authGuardService.isLoggednIn());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, primeng_toast__WEBPACK_IMPORTED_MODULE_12__.Toast, src_app_util_alerta_component__WEBPACK_IMPORTED_MODULE_2__.AlertaComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
  encapsulation: 2
});

/***/ }),

/***/ 3429:
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/auth-guard.service */ 1557);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/slidemenu */ 691);






class MenuComponent {
  constructor(primengConfig, _authGuardService) {
    this.primengConfig = primengConfig;
    this._authGuardService = _authGuardService;
    this.visibleSidebar1 = false;
    this.items = new Array();
    this.sesionUsuario = this._authGuardService.getUser();
  }
  ngOnInit() {
    this.obtenerMenu();
    console.log("this.sesionUsuario ", this.sesionUsuario);
  }
  obtenerMenu() {
    this.primengConfig.ripple = true;
    console.log("this.sesionUsuario.descripcion_rol ", this.sesionUsuario.clave);
    this.items.push({
      label: 'Solicitudes',
      icon: 'pi pi-fw pi-file',
      routerLink: ['solicitudes']
    }, {
      label: 'Tikets',
      icon: 'pi pi-inbox',
      routerLink: ['Ticket']
    });
    if (this.sesionUsuario.clave === 'TEC' || this.sesionUsuario.clave === 'ADM') {
      this.items.push({
        label: 'Reasignacion',
        icon: ' pi pi-sync',
        routerLink: ['reasignacion']
      }, {
        label: 'Utilerías',
        icon: 'pi pi-file-import',
        items: [{
          label: 'Usuarios',
          icon: 'pi pi-fw pi-user',
          routerLink: ['Tusuario']
        }, {
          label: 'Lugar y Area',
          icon: 'pi pi-map-marker',
          routerLink: ['lugarArea']
        }, {
          label: 'Activos',
          icon: 'pi pi-desktop',
          routerLink: ['Tactivos']
        }, {
          label: 'Licencia',
          icon: 'pi pi-microsoft'
        }]
      }, {
        label: 'Inventario',
        icon: 'pi pi-chart-pie'
      }, {
        label: 'Reportes',
        icon: 'pi pi-chart-bar'
      }, {
        label: 'Nuevo Activo ',
        icon: 'pi pi-chart-bar',
        routerLink: ['NuevoActivo']
      });
    }
  }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.authGuardService));
};
MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  decls: 8,
  vars: 5,
  consts: [[3, "visible", "baseZIndex", "showCloseIcon", "visibleChange"], [1, "text-center"], ["src", "../../../assets/images/big/icon-LB.PNG", "alt", "", "width", "40%"], [1, "p-3"], [3, "model", "viewportHeight"], ["type", "button", "icon", "pi pi-align-justify", 3, "click"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-sidebar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function MenuComponent_Template_p_sidebar_visibleChange_0_listener($event) {
        return ctx.visibleSidebar1 = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bienvenido");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p-slideMenu", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_p_button_click_7_listener() {
        return ctx.visibleSidebar1 = true;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.visibleSidebar1)("baseZIndex", 10000)("showCloseIcon", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", ctx.items)("viewportHeight", 300);
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__.Sidebar, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_5__.SlideMenu],
  encapsulation: 2
});

/***/ }),

/***/ 6982:
/*!*************************************************!*\
  !*** ./src/app/components/model/login.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginUsuario": () => (/* binding */ loginUsuario)
/* harmony export */ });
class loginUsuario {
  constructor(username, nip) {
    this.username = username;
    this.nip = nip;
  }
}

/***/ }),

/***/ 4262:
/*!*****************************************!*\
  !*** ./src/app/service/Area.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaService": () => (/* binding */ AreaService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _util_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util-api.service */ 4838);




class AreaService {
  constructor(_http, _apiService) {
    this._http = _http;
    this._apiService = _apiService;
    this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
  }
  saveArea(datosA) {
    console.log("*******-> asave area", datosA);
    return this._apiService.sendPostRequest(datosA, this.url + "area/post");
  } // Post area
}
AreaService.ɵfac = function AreaService_Factory(t) {
  return new (t || AreaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_util_api_service__WEBPACK_IMPORTED_MODULE_1__.UtilApiService));
};
AreaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AreaService,
  factory: AreaService.ɵfac
});

/***/ }),

/***/ 8205:
/*!********************************************!*\
  !*** ./src/app/service/CustomerService.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _util_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util-api.service */ 4838);




class CustomerService {
  constructor(http, _apiService) {
    this.http = http;
    this._apiService = _apiService;
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
  }
  fnusuario(token) {
    return this._apiService.sendGetRequest(this.url + "usuario/getUsuarios", token);
  }
  getTicket(token) {
    return this._apiService.sendGetRequest(this.url + "ticket/getticket", token);
  }
  getActivos(token) {
    return this._apiService.sendGetRequest(this.url + "activos/getActivos", token);
  }
  getArea(token) {
    return this._apiService.sendGetRequest(this.url + "area/getarea", token);
  }
  getLugar(token) {
    return this._apiService.sendGetRequest(this.url + "lugar/get", token);
  }
  getRol(token) {
    return this._apiService.sendGetRequest(this.url + "rol/get", token);
  }
  saveTicket(datosT) {
    return this._apiService.sendPostRequest(datosT, this.url + "ticket/post");
  } // Post usuario
}
CustomerService.ɵfac = function CustomerService_Factory(t) {
  return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_util_api_service__WEBPACK_IMPORTED_MODULE_1__.UtilApiService));
};
CustomerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CustomerService,
  factory: CustomerService.ɵfac
});

/***/ }),

/***/ 1557:
/*!***********************************************!*\
  !*** ./src/app/service/auth-guard.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authGuardService": () => (/* binding */ authGuardService)
/* harmony export */ });
/* harmony import */ var C_Mesa_de_Ayuda_Front_Front_end_728963e443877477536b5c628cd6d800a198e819_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _service_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/local.service */ 9738);






class authGuardService {
  constructor(http, router, localService) {
    this.http = http;
    this.router = router;
    this.localService = localService;
    this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url;
  }
  sendToken(usr) {
    var _this = this;
    return (0,C_Mesa_de_Ayuda_Front_Front_end_728963e443877477536b5c628cd6d800a198e819_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (usr) {
        let usuario = yield _this.localService.setJsonValue('LoggedInUser', usr);
        //localStorage.setItem("LoggedInUser", usr)
      }
    })();
  }

  sendKey(key) {
    var _this2 = this;
    return (0,C_Mesa_de_Ayuda_Front_Front_end_728963e443877477536b5c628cd6d800a198e819_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let llave = yield _this2.localService.setJsonValue('token', key);
      //localStorage.setItem("token", key)
    })();
  }

  getUser() {
    return this.localService.getJsonValue('LoggedInUser');
    //return JSON.parse(localStorage.getItem('LoggedInUser'));
  }

  getToken() {
    return this.localService.getJsonValue('token');
    // return localStorage.getItem('token');
  }

  getPermisos() {
    return this.localService.getJsonValue('permisos');
    //return JSON.parse(localStorage.getItem('permisos'));
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    return this.localService.clearToken();
    //localStorage.removeItem("LoggedInUser")
    //  localStorage.clear();
    this.router.navigate(["/"]);
  }
  sendPerfilMenu(perfil) {
    this.localService.setJsonValue('permisos', perfil);
  }
}
authGuardService.ɵfac = function authGuardService_Factory(t) {
  return new (t || authGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_service_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService));
};
authGuardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: authGuardService,
  factory: authGuardService.ɵfac
});

/***/ }),

/***/ 9738:
/*!******************************************!*\
  !*** ./src/app/service/local.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalService": () => (/* binding */ LocalService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _storage_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.services */ 850);


class LocalService {
  constructor(storageService) {
    this.storageService = storageService;
  }
  // Set the json data to local 
  setJsonValue(key, value) {
    this.storageService.secureStorage.setItem(key, value);
  }
  // Get the json value from local 
  getJsonValue(key) {
    return this.storageService.secureStorage.getItem(key);
  } // Clear the local 
  clearToken() {
    return this.storageService.secureStorage.clear();
  }
}
LocalService.ɵfac = function LocalService_Factory(t) {
  return new (t || LocalService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_storage_services__WEBPACK_IMPORTED_MODULE_0__.StorageService));
};
LocalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LocalService,
  factory: LocalService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 850:
/*!*********************************************!*\
  !*** ./src/app/service/storage.services.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 6240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


const SecureStorage = __webpack_require__(/*! secure-web-storage */ 3576);
const SECRET_KEY = 'Ber1g0';
class StorageService {
  constructor() {
    this.secureStorage = new SecureStorage(localStorage, {
      hash: function hash(key) {
        key = crypto_js__WEBPACK_IMPORTED_MODULE_0__.SHA256(key, {
          SECRET_KEY
        });
        return key.toString();
      },
      encrypt: function encrypt(data) {
        data = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(data, SECRET_KEY);
        data = data.toString();
        return data;
      },
      decrypt: function decrypt(data) {
        data = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(data, SECRET_KEY);
        data = data.toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8);
        return data;
      }
    });
  }
}
StorageService.ɵfac = function StorageService_Factory(t) {
  return new (t || StorageService)();
};
StorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: StorageService,
  factory: StorageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 375:
/*!********************************************!*\
  !*** ./src/app/service/usuario.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioService": () => (/* binding */ UsuarioService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 4766);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _util_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util-api.service */ 4838);





class UsuarioService {
  get auth() {
    return {
      ...this._auth
    };
  }
  constructor(_http, _apiService) {
    this._http = _http;
    this._apiService = _apiService;
    this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
  }
  iniciarSesion(datosInicioSesion) {
    return this._apiService.sendPostRequest(datosInicioSesion, this.url + 'iniciarSesion/iniciarSesion').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(auth => this._auth = auth.addenda));
  } // IniciarSesion
  fnusuario(token) {
    return this._apiService.sendGetRequest(this.url + "usuario/getUsuarios", token);
  } //get Usuario
  saveUsuario(datosA) {
    return this._apiService.sendPostRequest(datosA, this.url + "usuario/post");
  } // Post usuario
}
UsuarioService.ɵfac = function UsuarioService_Factory(t) {
  return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_util_api_service__WEBPACK_IMPORTED_MODULE_1__.UtilApiService));
};
UsuarioService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UsuarioService,
  factory: UsuarioService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4838:
/*!*********************************************!*\
  !*** ./src/app/service/util-api.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilApiService": () => (/* binding */ UtilApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class UtilApiService {
  constructor(_http) {
    this._http = _http;
  }
  sendPostRequest(aEnviar, url) {
    let json = JSON.stringify(aEnviar);
    let params = "json=" + json;
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(url, json, {
      headers: headers
    });
  } // sendPostRequest
  sendGetRequest(url, token) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': ': ' + token + ''
    });
    return this._http.get(url, {
      headers: headers
    });
  } // sendGetRequest
}
UtilApiService.ɵfac = function UtilApiService_Factory(t) {
  return new (t || UtilApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
};
UtilApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UtilApiService,
  factory: UtilApiService.ɵfac
});

/***/ }),

/***/ 5687:
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/chips */ 5980);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/inputmask */ 1227);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/cascadeselect */ 8671);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/multiselect */ 3814);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/autocomplete */ 5630);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _util_alerta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/alerta.component */ 5845);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/auth-guard.service */ 1557);
/* harmony import */ var _service_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/local.service */ 9738);
/* harmony import */ var _service_util_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/util-api.service */ 4838);
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/inicio/inicio.component */ 8647);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/contextmenu */ 5945);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/fileupload */ 6193);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/progressbar */ 8395);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/radiobutton */ 9902);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/rating */ 2415);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.component */ 3429);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/avatar */ 7063);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/splitbutton */ 3650);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/menu */ 625);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/slidemenu */ 691);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/steps */ 2420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









































class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService, _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.authGuardService, _service_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService, _service_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService, _service_util_api_service__WEBPACK_IMPORTED_MODULE_3__.UtilApiService],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.ConfirmDialogModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_10__.SidebarModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_11__.SlideMenuModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_12__.SplitButtonModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_13__.AvatarModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__.ToolbarModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_17__.CardModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__.InputTextModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_19__.AutoCompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_22__.CalendarModule, primeng_chips__WEBPACK_IMPORTED_MODULE_23__.ChipsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__.DropdownModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_25__.InputMaskModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_26__.InputNumberModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_27__.CascadeSelectModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_28__.MultiSelectModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_29__.InputTextareaModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__.InputTextModule, primeng_toast__WEBPACK_IMPORTED_MODULE_30__.ToastModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.ConfirmDialogModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__.ToolbarModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_31__.ContextMenuModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_32__.DialogModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_33__.ProgressBarModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_34__.FileUploadModule, primeng_rating__WEBPACK_IMPORTED_MODULE_35__.RatingModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_36__.RadioButtonModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_13__.AvatarModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_12__.SplitButtonModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_10__.SidebarModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_11__.SlideMenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, primeng_menu__WEBPACK_IMPORTED_MODULE_37__.MenuModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_38__.RippleModule, primeng_table__WEBPACK_IMPORTED_MODULE_39__.TableModule, primeng_steps__WEBPACK_IMPORTED_MODULE_40__.StepsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_util_alerta_component__WEBPACK_IMPORTED_MODULE_0__.AlertaComponent, _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__.InicioComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.ConfirmDialogModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_10__.SidebarModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_11__.SlideMenuModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_12__.SplitButtonModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_13__.AvatarModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__.ToolbarModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule],
    exports: [_components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__.InicioComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_17__.CardModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__.InputTextModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_19__.AutoCompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_22__.CalendarModule, primeng_chips__WEBPACK_IMPORTED_MODULE_23__.ChipsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__.DropdownModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_25__.InputMaskModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_26__.InputNumberModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_27__.CascadeSelectModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_28__.MultiSelectModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_29__.InputTextareaModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__.InputTextModule, primeng_toast__WEBPACK_IMPORTED_MODULE_30__.ToastModule, _util_alerta_component__WEBPACK_IMPORTED_MODULE_0__.AlertaComponent, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.ConfirmDialogModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__.ToolbarModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_31__.ContextMenuModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_32__.DialogModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_33__.ProgressBarModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_34__.FileUploadModule, primeng_rating__WEBPACK_IMPORTED_MODULE_35__.RatingModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_36__.RadioButtonModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_13__.AvatarModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_12__.SplitButtonModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_10__.SidebarModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_11__.SlideMenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, primeng_menu__WEBPACK_IMPORTED_MODULE_37__.MenuModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_38__.RippleModule, primeng_table__WEBPACK_IMPORTED_MODULE_39__.TableModule, primeng_steps__WEBPACK_IMPORTED_MODULE_40__.StepsModule]
  });
})();

/***/ }),

/***/ 5845:
/*!******************************************!*\
  !*** ./src/app/util/alerta.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertaComponent": () => (/* binding */ AlertaComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/confirmdialog */ 97);





class AlertaComponent {
  constructor(_confirmationService, router) {
    this._confirmationService = _confirmationService;
    this.router = router;
  }
  ngOnInit() {}
  alerta(header, titulo, mensaje, campo) {
    this._confirmationService.confirm({
      message: mensaje,
      header: header,
      acceptLabel: 'Cierra',
      accept: () => {
        this.cierraModal(campo);
      }
    });
  }
  exito(header, titulo, mensaje, campo, redirect) {
    this._confirmationService.confirm({
      message: mensaje,
      header: header,
      acceptLabel: 'Ingresar',
      accept: () => {
        this.redirectModal(redirect);
      }
    });
  }
  error(header, titulo, mensaje, campo) {
    this._confirmationService.confirm({
      message: mensaje,
      header: header,
      acceptLabel: 'Aceptar',
      accept: () => {
        this.cierraModal(campo);
      }
    });
  }
  cierraModal(campo) {
    if (!campo || campo == '') {
      campo = 'no';
    }
    campo = "#" + campo;
    setTimeout(function () {
      $(campo).focus();
    }, 10);
  }
  redirectModal(redirect) {
    if (redirect == "1") {
      this.router.navigate(['/login']);
    }
  }
}
AlertaComponent.ɵfac = function AlertaComponent_Factory(t) {
  return new (t || AlertaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AlertaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AlertaComponent,
  selectors: [["app-alerta"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__.ConfirmationService])],
  decls: 1,
  vars: 0,
  template: function AlertaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-confirmDialog");
    }
  },
  dependencies: [primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialog],
  encapsulation: 2
});

/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false,
  url: 'http://localhost:5013/'
};

/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 2480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map