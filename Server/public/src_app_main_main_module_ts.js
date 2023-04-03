"use strict";
(self["webpackChunksistema_tickets"] = self["webpackChunksistema_tickets"] || []).push([["src_app_main_main_module_ts"],{

/***/ 2049:
/*!*****************************************************************!*\
  !*** ./src/app/components/info-ticket/info-ticket.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoTicketComponent": () => (/* binding */ InfoTicketComponent)
/* harmony export */ });
/* harmony import */ var _util_alerta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/alerta.component */ 5845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _service_CustomerService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/CustomerService */ 8205);
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth-guard.service */ 1557);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 4538);










class InfoTicketComponent {
  constructor(messageService, customerService, _authGuardService, route, fb) {
    this.messageService = messageService;
    this.customerService = customerService;
    this._authGuardService = _authGuardService;
    this.route = route;
    this.fb = fb;
    this.recoInfo = this.fb.group({
      idfolios: ['1'],
      idusuarios: ['26'],
      idtipo_servicio: ['1'],
      asunto: [''],
      mensaje: [''],
      foto1: ['1'],
      foto2: ['1'],
      foto3: ['1'],
      foto4: ['1'],
      solucion: ['1'],
      firma: ['1'],
      estado_ticket: ['1'],
      nombre: [''],
      Descripcion: [''],
      num_folio: [''],
      num_empleado: [''],
      idstatusTicket: ['2']
    });
    this.token = this._authGuardService.getToken();
    this.id = this.route.snapshot.params['idfolios'];
  }
  ngOnInit() {
    this.obtenerTickets();
  }
  obtenerTickets() {
    console.log("Token", this.token);
    this.customerService.getTicket(this.token).subscribe({
      next: resp => {
        console.log("Obtener tickets", resp);
        let respuestaDto = resp;
        if (respuestaDto.ok) {
          this.tickets = resp.addenda;
        } else {} // if
      },

      error: error => {
        let mensaje = error;
        this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
      }
    });
  }
  selectProduct(solicitud) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Selected',
      detail: solicitud.nombre
    });
  }
  guardar(forma) {
    console.log('submit disparado', forma);
    console.log(forma.value);
  }
}
InfoTicketComponent.ɵfac = function InfoTicketComponent_Factory(t) {
  return new (t || InfoTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_CustomerService__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.authGuardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder));
};
InfoTicketComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: InfoTicketComponent,
  selectors: [["app-info-ticket"]],
  viewQuery: function InfoTicketComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_util_alerta_component__WEBPACK_IMPORTED_MODULE_0__.AlertaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mensajeAlerta = _t.first);
    }
  },
  decls: 24,
  vars: 2,
  consts: [[1, "container"], [1, "flex", "align-items-center", "justify-content-between", "fondo"], [3, "formGroup"], [1, "field", "col-12", "md:col-2"], [1, "p-float-label"], ["type", "text", "pInputText", "", "formControlName", "nombre"], ["type", "text", "pInputText", "", "formControlName", "Modalidad"], ["type", "text", "pInputText", "", "formControlName", "Prioridad"], ["pButton", "", "pRipple", "", "label", "Guardar", 1, "p-button-success", "mr-2"]],
  template: function InfoTicketComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div")(2, "div", 1)(3, "div")(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "INFORMACION DEL TICKET");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "FORMULARIO PARA EL TECNICO");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div")(9, "form", 2)(10, "div", 3)(11, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Modalidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Nievel de Prioridad");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.recoInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.tickets[1].nombre);
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.Ripple],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9604:
/*!***************************************************************!*\
  !*** ./src/app/components/lugar-area/lugar-area.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LugarAreaComponent": () => (/* binding */ LugarAreaComponent)
/* harmony export */ });
/* harmony import */ var C_Mesa_de_Ayuda_Front_Front_end_728963e443877477536b5c628cd6d800a198e819_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_util_alerta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/alerta.component */ 5845);
/* harmony import */ var _model_insertArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/insertArea */ 5761);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _service_CustomerService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/CustomerService */ 8205);
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth-guard.service */ 1557);
/* harmony import */ var _service_Area_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/Area.service */ 4262);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ 7485);




















function LugarAreaComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Lugar y Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Dar de alta Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div")(7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LugarAreaComponent_ng_template_3_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.openNew());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function LugarAreaComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Lugar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function LugarAreaComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const areas_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](areas_r10.idarea);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](areas_r10.nombre_area);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](areas_r10.ubicacion);
  }
}
function LugarAreaComponent_ng_template_6_Template(rf, ctx) {}
function LugarAreaComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Agregar Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function LugarAreaComponent_small_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "El nombre es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function LugarAreaComponent_small_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Elige un lugar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function LugarAreaComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LugarAreaComponent_ng_template_20_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LugarAreaComponent_ng_template_20_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.addProduct());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    "min-width": "50rem"
  };
};
const _c1 = function () {
  return [10, 25, 50];
};
const _c2 = function () {
  return {
    height: "30vw",
    width: "50vw"
  };
};
class LugarAreaComponent {
  constructor(fb, messageService, customerService, _authGuardService, areaService) {
    this.fb = fb;
    this.messageService = messageService;
    this.customerService = customerService;
    this._authGuardService = _authGuardService;
    this.areaService = areaService;
    this.clickClose = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.displayAddModal = false;
    this.agregarAreaForm = this.fb.group({
      nombre_area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      idlugar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    this.token = this._authGuardService.getToken();
  }
  ngOnInit() {
    this.obtenerArea();
    this.obtenerLugar();
  }
  obtenerArea() {
    console.log("Token", this.token);
    this.customerService.getArea(this.token).subscribe({
      next: resp => {
        console.log("Obtener Area", resp);
        let respuestaDto = resp;
        if (respuestaDto.ok) {
          this.area = resp.addenda;
        } else {} // if
      },

      error: error => {
        let mensaje = error;
        this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
      }
    });
  }
  obtenerLugar() {
    console.log("Token", this.token);
    this.customerService.getLugar(this.token).subscribe({
      next: resp => {
        console.log("Lugaaaaaaaaaaaaar", resp);
        let respuestaDto = resp;
        if (respuestaDto.ok) {
          this.lugares = resp.addenda;
        } else {} // if
      },

      error: error => {
        let mensaje = error;
        this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
      }
    });
  }
  openNew() {
    this.displayAddModal = true;
  }
  closeModal() {
    this.agregarAreaForm.reset();
    this.obtenerArea();
    this.displayAddModal = false;
  }
  addProduct() {
    console.log("this.loginFormLugare area", this.agregarAreaForm.value);
    if (this.agregarAreaForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'No es posible agregar',
        detail: 'Porfavor verifique todos los campos'
      });
    } else {
      console.log("this.loginForm.value.usuarioLogin", this.agregarAreaForm.value.nombre_area);
      this.saveArea(this.agregarAreaForm.value.nombre_area, this.agregarAreaForm.value.idlugar);
    }
  }
  saveArea(nombre_area, idlugar) {
    var _this = this;
    return (0,C_Mesa_de_Ayuda_Front_Front_end_728963e443877477536b5c628cd6d800a198e819_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("lugarAreas", nombre_area, "Lugar", idlugar);
      let datosA = new _model_insertArea__WEBPACK_IMPORTED_MODULE_2__.insertArea(nombre_area, idlugar);
      console.log("Datos Area", datosA);
      _this.areaService.saveArea(datosA).subscribe({
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
            _this.areas = respuestaDto.addenda;
            _this.obtenerArea();
          }
        },
        error: error => {
          let mensaje = error;
          _this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
        }
      });
    })();
  }
}
LugarAreaComponent.ɵfac = function LugarAreaComponent_Factory(t) {
  return new (t || LugarAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_CustomerService__WEBPACK_IMPORTED_MODULE_3__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__.authGuardService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_Area_service__WEBPACK_IMPORTED_MODULE_5__.AreaService));
};
LugarAreaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: LugarAreaComponent,
  selectors: [["app-lugar-area"]],
  viewQuery: function LugarAreaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_util_alerta_component__WEBPACK_IMPORTED_MODULE_1__.AlertaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.mensajeAlerta = _t.first);
    }
  },
  inputs: {
    clickClose: "clickClose"
  },
  outputs: {
    clickClose: "clickClose"
  },
  decls: 23,
  vars: 17,
  consts: [[1, "container"], ["currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "paginator", "rows", "showCurrentPageReport", "tableStyle", "rowsPerPageOptions"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["header", "Header", "styleClass", "p-fluid", 3, "visible", "modal", "visibleChange"], [3, "formGroup", "ngSubmit"], [1, "field"], ["for", "name"], ["formControlName", "nombre_area", "pInputText", "", "required", "", "autofocus", ""], ["class", "p-error", 4, "ngIf"], ["for", "ubi"], ["placeholder", "Seleccione un lugar", "formControlName", "idlugar", "optionLabel", "ubicacion", "optionValue", "idlugar", 3, "options"], ["pTemplate", "footer"], ["position", "top-right"], [1, "flex", "align-items-center", "justify-content-between", "fondo"], ["pButton", "", "pRipple", "", "type", "button", "label", "Nuevo", 3, "click"], ["pSortableColumn", "idarea"], ["field", "idarea"], [1, "text-xl", "font-bold"], [1, "p-error"], ["icon", "pi pi-times", "label", "Cancelar", "styleClass", "p-button-text", 3, "click"], ["type", "button", "icon", "pi pi-check", "label", "Agregar", "styleClass", "p-button-text", 3, "click"]],
  template: function LugarAreaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0)(1, "div")(2, "p-table", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, LugarAreaComponent_ng_template_3_Template, 8, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, LugarAreaComponent_ng_template_4_Template, 8, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, LugarAreaComponent_ng_template_5_Template, 7, 3, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, LugarAreaComponent_ng_template_6_Template, 0, 0, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p-dialog", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function LugarAreaComponent_Template_p_dialog_visibleChange_7_listener($event) {
        return ctx.displayAddModal = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, LugarAreaComponent_ng_template_8_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function LugarAreaComponent_Template_form_ngSubmit_9_listener() {
        return ctx.addProduct();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7)(11, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Nombre del Area");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, LugarAreaComponent_small_14_Template, 2, 0, "small", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 7)(16, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Lugar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "p-dropdown", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, LugarAreaComponent_small_19_Template, 2, 0, "small", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, LugarAreaComponent_ng_template_20_Template, 2, 0, "ng-template", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "p-toast", 14)(22, "app-alerta");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.area)("paginator", true)("rows", 10)("showCurrentPageReport", true)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](14, _c0))("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](15, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](16, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.displayAddModal)("modal", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.agregarAreaForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.agregarAreaForm.touched && ctx.agregarAreaForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.lugares);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.agregarAreaForm.touched && ctx.agregarAreaForm.invalid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.Toast, src_app_util_alerta_component__WEBPACK_IMPORTED_MODULE_1__.AlertaComponent, primeng_dialog__WEBPACK_IMPORTED_MODULE_14__.Dialog, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, primeng_ripple__WEBPACK_IMPORTED_MODULE_15__.Ripple, primeng_table__WEBPACK_IMPORTED_MODULE_16__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SortIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5761:
/*!************************************************!*\
  !*** ./src/app/components/model/insertArea.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertArea": () => (/* binding */ insertArea)
/* harmony export */ });
class insertArea {
  constructor(nombre_area, idlugar) {
    this.nombre_area = nombre_area;
    this.idlugar = idlugar;
  }
}

/***/ }),

/***/ 2594:
/*!**************************************************!*\
  !*** ./src/app/components/model/insertTicket.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertTicket": () => (/* binding */ insertTicket)
/* harmony export */ });
class insertTicket {
  constructor(idfolios, idusuarios, idtipo_servicio, asunto, mensaje, foto1, foto2, foto3, foto4, solucion, firma, estado_ticket, nombre, Descripcion, num_folio, num_empleado, idstatusTicket, nombre_area, lugares) {
    this.idfolios = idfolios;
    this.idusuarios = idusuarios;
    this.idtipo_servicio = idtipo_servicio;
    this.asunto = asunto;
    this.mensaje = mensaje;
    this.foto1 = foto1;
    this.foto2 = foto2;
    this.foto3 = foto3;
    this.foto4 = foto4;
    this.solucion = solucion;
    this.firma = firma;
    this.estado_ticket = estado_ticket;
    this.nombre = nombre;
    this.Descripcion = Descripcion;
    this.num_folio = num_folio;
    this.num_empleado = num_empleado;
    this.idstatusTicket = idstatusTicket;
    this.nombre_area = nombre_area;
    this.lugares = lugares;
  }
}

/***/ }),

/***/ 4807:
/*!***************************************************!*\
  !*** ./src/app/components/model/insertUsuario.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertUsuario": () => (/* binding */ insertUsuario)
/* harmony export */ });
class insertUsuario {
  constructor(nombre, apellidoP, apellidoM, email, idrol, num_empleado, idlugar, idarea, password, status) {
    this.nombre = nombre;
    this.apellidoP = apellidoP;
    this.apellidoM = apellidoM;
    this.email = email;
    this.idrol = idrol;
    this.num_empleado = num_empleado;
    this.idlugar = idlugar;
    this.idarea = idarea;
    this.password = password;
    this.status = status;
  }
}

/***/ }),

/***/ 6818:
/*!*******************************************************************!*\
  !*** ./src/app/components/nuevo-activo/nuevo-activo.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NuevoActivoComponent": () => (/* binding */ NuevoActivoComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var src_app_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/auth-guard.service */ 1557);
/* harmony import */ var _service_CustomerService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/CustomerService */ 8205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/steps */ 2420);












function NuevoActivoComponent_div_10_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Tipo de Activo ");
  }
}
function NuevoActivoComponent_div_10_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "A quien pertenece el activo");
  }
}
function NuevoActivoComponent_div_10_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Tipo de Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 11)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 9)(6, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function NuevoActivoComponent_div_10_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NuevoActivoComponent_div_10_ng_template_6_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.activeIndex = 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function NuevoActivoComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "form", 4)(2, "p-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NuevoActivoComponent_div_10_ng_template_3_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NuevoActivoComponent_div_10_ng_template_4_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NuevoActivoComponent_div_10_ng_template_5_Template, 9, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NuevoActivoComponent_div_10_ng_template_6_Template, 3, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.step1Form);
  }
}
function NuevoActivoComponent_div_11_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Datos Personales");
  }
}
function NuevoActivoComponent_div_11_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Datos del usuario acargo del activo nuevo");
  }
}
function NuevoActivoComponent_div_11_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "span", 18)(3, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Nombre del propietario");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 20)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 21)(8, "div", 9)(9, "span", 18)(10, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Numero de Empleado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 22)(13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 17)(15, "span", 18)(16, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 23)(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function NuevoActivoComponent_div_11_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NuevoActivoComponent_div_11_ng_template_6_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.activeIndex = 2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function NuevoActivoComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "form", 4)(2, "p-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NuevoActivoComponent_div_11_ng_template_3_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NuevoActivoComponent_div_11_ng_template_4_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NuevoActivoComponent_div_11_ng_template_5_Template, 21, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NuevoActivoComponent_div_11_ng_template_6_Template, 3, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.step2Form);
  }
}
function NuevoActivoComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "form", 4)(2, "div", 9)(3, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 9)(7, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NuevoActivoComponent_div_12_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.activeIndex = 3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.step3Form);
  }
}
function NuevoActivoComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "form", 4)(2, "div", 9)(3, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 9)(7, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NuevoActivoComponent_div_13_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.activeIndex = 4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.step4Form);
  }
}
function NuevoActivoComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "form", 4)(2, "div", 9)(3, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 9)(7, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NuevoActivoComponent_div_14_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.activeIndex = 5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r4.step5Form);
  }
}
class NuevoActivoComponent {
  constructor(messageService, _authGuardService, ticketService, fb) {
    this.messageService = messageService;
    this._authGuardService = _authGuardService;
    this.ticketService = ticketService;
    this.fb = fb;
    this.items = [{
      label: 'Tipo de Activo'
    }, {
      label: 'Datos del cliente'
    }, {
      label: 'Ubicacion'
    }, {
      label: 'Datos del Equipo'
    }, {
      label: 'Accesorio'
    }];
    this.activeIndex = 0;
  }
  ngOnInit() {
    this.step1Form = this.fb.group({
      pertenencias: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      idtipoactivo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]]
    });
    this.step2Form = this.fb.group({
      nombre_propietario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      num_empleado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
    this.step3Form = this.fb.group({
      idlugar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      idarea: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
    this.step4Form = this.fb.group({
      nombre_equipo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      valor_monetario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
    this.step5Form = this.fb.group({
      descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
  }
  onActiveIndexChange(event) {}
}
NuevoActivoComponent.ɵfac = function NuevoActivoComponent_Factory(t) {
  return new (t || NuevoActivoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.authGuardService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_CustomerService__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
};
NuevoActivoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NuevoActivoComponent,
  selectors: [["app-nuevo-activo"]],
  decls: 15,
  vars: 8,
  consts: [[1, "container"], [1, "flex", "align-items-center", "justify-content-between", "fondo"], [3, "model", "readonly", "activeIndex", "activeIndexChange"], [4, "ngIf"], [3, "formGroup"], ["pTemplate", "title"], ["pTemplate", "subtitle"], ["pTemplate", "content"], ["pTemplate", "footer"], [1, "form-group"], ["for", "firstname"], ["formControlName", "pertenencia", "type", "text", "required", "", "pInputText", ""], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], [1, "grid", "grid-nogutter", "justify-content-end"], ["type", "button", "label", "Siguiente", "icon", "pi pi-angle-right", "iconPos", "right", 3, "click"], [1, "grid"], [1, "form-group", "col-6"], [1, "p-float-label"], ["for", "float-input"], ["formControlName", "nombre", "type", "text", "pInputText", ""], [1, "col-6"], ["formControlName", "num_empleado", "type", "text", "pInputText", ""], ["formControlName", "password", "type", "text", "pInputText", ""], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
  template: function NuevoActivoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div")(2, "div", 1)(3, "div")(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Nuevo Activo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Alta de activos");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p-steps", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activeIndexChange", function NuevoActivoComponent_Template_p_steps_activeIndexChange_9_listener($event) {
        return ctx.activeIndex = $event;
      })("activeIndexChange", function NuevoActivoComponent_Template_p_steps_activeIndexChange_9_listener($event) {
        return ctx.onActiveIndexChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NuevoActivoComponent_div_10_Template, 7, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, NuevoActivoComponent_div_11_Template, 7, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, NuevoActivoComponent_div_12_Template, 12, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, NuevoActivoComponent_div_13_Template, 12, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, NuevoActivoComponent_div_14_Template, 12, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx.items)("readonly", false)("activeIndex", ctx.activeIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeIndex === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeIndex === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeIndex === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeIndex === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeIndex === 4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_card__WEBPACK_IMPORTED_MODULE_7__.Card, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_steps__WEBPACK_IMPORTED_MODULE_10__.Steps],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6582:
/*!*********************************************************************!*\
  !*** ./src/app/components/nuevo-usuario/nuevo-usuario.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NuevoUsuarioComponent": () => (/* binding */ NuevoUsuarioComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class NuevoUsuarioComponent {} /*
                                        validarFormUsr: boolean = false;
                                      token: any;
                                      usuario: Usuario;
                                      usuarios !: Usuario[];
                                      rol: any;
                                      displayDialog !: boolean;
                                      perfilSelect !: SelectItem[];
                                      usuarioForm!: FormGroup;
                                      @ViewChild('formDirective', { static: false }) private formDirective !: NgForm;
                                      @ViewChild(AlertaComponent, { static: false }) mensajeAlerta !: AlertaComponent;
                                      selectedUsuario !: Usuario;
                                      idUsuario !: number;
                                      cols !: any[];
                                      nuevoUsuario !: boolean;
                                      msgs: Message[] = [];
                                      permisos;
                                      menuId: number = 6;
                                        show: boolean = true;
                                        constructor(
                                        private _usuarioService: UsuarioService,
                                        private service: MessageService,
                                        private PagActualService: PagActualService,
                                        private _authGuardService: authGuardService,
                                        private fb: FormBuilder,
                                        private _cdr: ChangeDetectorRef,
                                        private router: Router,
                                        private confirmationService: ConfirmationService
                                      ) {
                                        this.token = this._authGuardService.getToken();
                                        this.usuario = this._authGuardService.getUser();
                                        this.permisos = this._authGuardService.getPermisos();
                                        // this.obtenerPermiso(this.permisos,this.menuId)
                                        this.PagActualService.setItems([ //administracion de label en que ubicacion se encuentra
                                          { label: 'Configuración' },
                                          { label: 'Usuarios', routerLink: ['/usuarios'] }
                                        ]);
                                      }
                                      
                                      
                                      showSuccessViaToast() {
                                        this.service.add({ key: 'agregar', severity: 'success', summary: 'Mensaje', detail: 'Los datos han sido guardados.' });
                                      }
                                        showInfoViaToast() {
                                        this.service.add({ key: 'eliminar', severity: 'info', summary: 'Mensaje', detail: 'Los datos han sido elimimnados' });
                                      }
                                        ngOnInit() {
                                        // if(!this.accesoPermitido){
                                        //   this.router.navigate(['/inicio'])
                                        // }
                                        this.cols = [//valor de columna del result
                                          { field: 'descripcion', header: 'Perfil' },
                                          { field: 'num_empleado', header: 'num_empleado' },
                                          { field: 'nombre', header: 'Nombre' },
                                          { field: 'usuario_ap', header: 'Apellido Paterno' }
                                        ];
                                        this.fnusuario();
                                        this.validadorFormSucursal();
                                        this.obtenerUsuarios();
                                        }
                                        validadorFormSucursal() {
                                        this.usuarioForm = this.fb.group({
                                          status: [''],
                                          idrol: ['', [Validators.required]],
                                          num_empleado: ['', [Validators.required]],
                                          password: ['', [Validators.required]],
                                          nipConfirm: ['', [Validators.required]],
                                          nombre: ['', [Validators.required]],
                                          apellidoM: ['', [Validators.required]],
                                          apelllidoP: ['', [Validators.required]]
                                          //, { validator: atLeastOne(Validators.required, ['sistema', 'region', 'localidad', 'estado', 'nombre_nodo']) }
                                          //atLeasOne se colocan los nombres de los campos y de todos solo uno debe estar lleno
                                        });
                                      
                                        //detecta los cambios de los validators
                                        this.usuarioForm.valueChanges.subscribe(value => {
                                          this.usuarioForm.valid;
                                          console.log("this.usuarioForm", this.usuarioForm)
                                          this._cdr.detectChanges();
                                        });
                                      }
                                      
                                      cargando(): void {
                                        setTimeout(() => {
                                          if (this._cdr !== null &&
                                            this._cdr !== undefined &&
                                            !(this._cdr as ViewRef).destroyed) {
                                            this._cdr.detectChanges();
                                          }
                                        }, 250);
                                      }
                                        showDialogToAdd() {
                                        this.nuevoUsuario = true;
                                        this.validarFormUsr = false;
                                        this.displayDialog = true;
                                        this.formDirective.resetForm();
                                      }
                                        save() {
                                        let objSucursal = [...this.usuarios];
                                        console.log("entro para pushear", this.nuevoUsuario)
                                        let descripcion_perfil = this.rol.filter;
                                        this.usuarioForm.value.descripcion = descripcion_perfil[0].descripcion;
                                          if (this.nuevoUsuario) {
                                            objSucursal.push(this.usuarioForm.value);
                                        }
                                          else {
                                          objSucursal[this.usuarios.indexOf(this.selectedUsuario)] = this.usuarioForm.value;
                                        }
                                      
                                      
                                        this.usuarios = objSucursal;
                                        //  this.gasera = null;
                                        this.displayDialog = false;
                                        this.showSuccessViaToast();
                                      }
                                        delete() {
                                        let index = this.usuarios.indexOf(this.selectedUsuario);
                                        this.usuarios = this.usuarios.filter((val, i) => i != index);
                                        // this.gasera = null;
                                        this.displayDialog = false;
                                        this.showInfoViaToast();
                                      }
                                      
                                      fnusuario() {
                                        this.perfilSelect = [];
                                        this.show = true;
                                        this._usuarioService.fnusuario(this.token)
                                          .subscribe(resp => {
                                            let respuestaDto = <RespuestaDto>resp;
                                            if (!respuestaDto.ok) {
                                              this.mensajeAlerta.alerta("AVISO", "", respuestaDto.mensaje, "");
                                              this.show = false;
                                            } else {
                                              this.rol = respuestaDto.addenda;
                                              for (let key in this.rol) {
                                                this.perfilSelect.push({ label: this.rol[key].descripcion, value: this.rol[key].idrol });
                                              }
                                              this.show = false;
                                            } // if
                                          },
                                            error => {
                                              let mensaje = <any>error;
                                              this.show = false;
                                              this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
                                            }
                                          );
                                      }
                                      
                                        obtenerUsuarios() {
                                        this.show = true;
                                        this._usuarioService.fnusuario(this.token)
                                          .subscribe(resp => {
                                            let respuestaDto = <RespuestaDto>resp;
                                            if (!respuestaDto.ok) {
                                              this.show = false;
                                              this.mensajeAlerta.alerta("AVISO", "", respuestaDto.mensaje, "");
                                            } else {
                                              this.usuarios = <Usuario[]>respuestaDto.addenda;
                                              this.cargando();
                                              this.show = false;
                                              console.log(" this.usuarios ", this.usuarios)
                                            } // if
                                          },
                                            error => {
                                              this.show = false;
                                              let mensaje = <any>error;
                                              this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
                                            }
                                          );
                                      }
                                      
                                        saveUsuario() {
                                          if (this.usuarioForm.valid && this.usuarioForm.value.password == this.usuarioForm.value.nipConfirm) {
                                            this._usuarioService.saveUsuario(this.usuarioForm.value)
                                            .subscribe(resp => {
                                              let respuestaDto = <RespuestaDto>resp;
                                              if (!respuestaDto.ok) {
                                                this.mensajeAlerta.alerta("AVISO", "", respuestaDto.mensaje, "");
                                              } else {
                                                this.usuarioForm.value.idUsuario = respuestaDto.addenda[0].id_insertado;
                                                //   this.mensajeAlerta.alerta("AVISO", "", respuestaDto.mensaje, "");
                                                this.save();
                                                } // if
                                            },
                                              error => {
                                                let mensaje = <any>error;
                                                this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
                                              }
                                            );
                                        }
                                        }
                                      onRowSelect() {
                                        this.validarFormUsr = false;
                                          console.log(this.usuarioForm)
                                          // this.usuarioForm.get('username').clearValidators();
                                        this.nuevoUsuario = false;
                                        
                                        this.displayDialog = true;
                                      }
                                        cloneUsuario(c: Usuario) {
                                        this.idUsuario = c.idUsuario;
                                        this.usuarioForm.setValue({
                                          num_empleado: c.num_empleado,
                                          nombre: c.nombre,
                                          idrol: c.idrol,
                                          password: c.password,
                                          nipConfirm: c.password,
                                          status: c.status,
                                          apellidoM: c.apellidoM,
                                          apelllidoP: c.apelllidoP,
                                        });
                                        }
                                      
                                      btnActualizarUsuario() {
                                          if (this.usuarioForm.valid) {
                                          this.usuarioForm.value.status = 1;
                                          this.usuarioForm.value.idrol = this.idUsuario;
                                          console.log("EL ID Sucursal", this.usuarioForm.value)
                                          this._usuarioService.saveUsuario(this.usuarioForm.value)
                                            .subscribe(resp => {
                                              let respuestaDto = <RespuestaDto>resp;
                                              if (!respuestaDto.ok) {
                                                this.mensajeAlerta.alerta("AVISO", "", respuestaDto.mensaje, "");
                                              } else {
                                                this.usuarioForm.value.status = 1;
                                                this.save();
                                              } // if
                                            },
                                              error => {
                                                let mensaje = <any>error;
                                                this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
                                              }
                                            );
                                        }
                                      }
                                        eliminarUsuario() {
                                        this.confirmationService.confirm({
                                          message: 'Esta seguro de eliminar este perfil?',
                                          accept: () => {
                                            this.usuarioForm.value.status = 0;
                                            this.usuarioForm.value.idUsuario = this.idUsuario;
                                            this._usuarioService.saveUsuario(this.usuarioForm.value)
                                              .subscribe(resp => {
                                                let respuestaDto = <RespuestaDto>resp;
                                                if (!respuestaDto.ok) {
                                                  this.mensajeAlerta.alerta("AVISO", "", respuestaDto.mensaje, "");
                                                } else {
                                                  this.delete();
                                                } // if
                                              },
                                                error => {
                                                  let mensaje = <any>error;
                                                  this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
                                                }
                                              );
                                          }
                                        });
                                      
                                      }
                                      onGlobalFilter(table: any, event: Event) {
                                        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
                                      }
                                      }
                                      */
NuevoUsuarioComponent.ɵfac = function NuevoUsuarioComponent_Factory(t) {
  return new (t || NuevoUsuarioComponent)();
};
NuevoUsuarioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NuevoUsuarioComponent,
  selectors: [["app-nuevo-usuario"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService])],
  decls: 0,
  vars: 0,
  template: function NuevoUsuarioComponent_Template(rf, ctx) {},
  encapsulation: 2
});

/***/ }),

/***/ 7887:
/*!*******************************************************!*\
  !*** ./src/app/components/perfil/perfil.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilComponent": () => (/* binding */ PerfilComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PerfilComponent {}
PerfilComponent.ɵfac = function PerfilComponent_Factory(t) {
  return new (t || PerfilComponent)();
};
PerfilComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PerfilComponent,
  selectors: [["app-perfil"]],
  decls: 2,
  vars: 0,
  template: function PerfilComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "perfil works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5194:
/*!*******************************************************************!*\
  !*** ./src/app/components/reasignacion/reasignacion.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReasignacionComponent": () => (/* binding */ ReasignacionComponent)
/* harmony export */ });
/* harmony import */ var _util_alerta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/alerta.component */ 5845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_CustomerService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/CustomerService */ 8205);
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth-guard.service */ 1557);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 7485);











function ReasignacionComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Folio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "N\u00B0 Empleado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Estado de Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Mensaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReasignacionComponent_ng_template_10_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 11);
  }
}
function ReasignacionComponent_ng_template_10_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r2.num_folio, " ");
  }
}
function ReasignacionComponent_ng_template_10_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 11);
  }
}
function ReasignacionComponent_ng_template_10_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r2.num_empleado, " ");
  }
}
function ReasignacionComponent_ng_template_10_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-dropdown", 12);
  }
}
function ReasignacionComponent_ng_template_10_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r2.Descripcion, " ");
  }
}
function ReasignacionComponent_ng_template_10_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 11);
  }
}
function ReasignacionComponent_ng_template_10_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r2.mensaje, " ");
  }
}
function ReasignacionComponent_ng_template_10_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 11);
  }
}
function ReasignacionComponent_ng_template_10_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r2.fecha_registro, " ");
  }
}
function ReasignacionComponent_ng_template_10_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReasignacionComponent_ng_template_10_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.onRowEditInit(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReasignacionComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 6)(1, "td")(2, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ReasignacionComponent_ng_template_10_ng_template_3_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ReasignacionComponent_ng_template_10_ng_template_4_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td")(6, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ReasignacionComponent_ng_template_10_ng_template_7_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ReasignacionComponent_ng_template_10_ng_template_8_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ReasignacionComponent_ng_template_10_ng_template_11_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ReasignacionComponent_ng_template_10_ng_template_12_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td")(14, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ReasignacionComponent_ng_template_10_ng_template_15_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ReasignacionComponent_ng_template_10_ng_template_16_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td")(18, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ReasignacionComponent_ng_template_10_ng_template_19_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ReasignacionComponent_ng_template_10_ng_template_20_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td")(22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ReasignacionComponent_ng_template_10_button_23_Template, 1, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const editing_r3 = ctx.editing;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pEditableRow", product_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !editing_r3);
  }
}
const _c0 = function () {
  return {
    "min-width": "50rem"
  };
};
class ReasignacionComponent {
  constructor(customerService, _authGuardService) {
    this.customerService = customerService;
    this._authGuardService = _authGuardService;
    this.clonedProducts = {};
    this.token = this._authGuardService.getToken();
  }
  ngOnInit() {
    this.obtenerTickets();
  }
  //
  obtenerTickets() {
    console.log("Token", this.token);
    this.customerService.getTicket(this.token).subscribe({
      next: resp => {
        console.log("Obtener tickets", resp);
        let respuestaDto = resp;
        if (respuestaDto.ok) {
          this.lugar = resp.addenda;
        } else {} // if
      },

      error: error => {
        let mensaje = error;
        this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
      }
    });
  }
  onRowEditInit(product) {
    this.clonedProducts[product.idlugar] = {
      ...product
    };
  }
}
ReasignacionComponent.ɵfac = function ReasignacionComponent_Factory(t) {
  return new (t || ReasignacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_CustomerService__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.authGuardService));
};
ReasignacionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ReasignacionComponent,
  selectors: [["app-reasignacion"]],
  viewQuery: function ReasignacionComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_util_alerta_component__WEBPACK_IMPORTED_MODULE_0__.AlertaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mensajeAlerta = _t.first);
    }
  },
  decls: 11,
  vars: 3,
  consts: [[1, "container"], [1, "flex", "align-items-center", "justify-content-between", "fondo"], ["dataKey", "id", "editMode", "row", 3, "value", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], [2, "width", "20%"], [3, "pEditableRow"], ["pTemplate", "input"], ["pTemplate", "output"], [1, "flex", "align-items-center", "justify-content-center", "gap-2"], ["pButton", "", "pRipple", "", "type", "button", "pInitEditableRow", "", "icon", "pi pi-pencil", "class", "p-button-rounded p-button-text", 3, "click", 4, "ngIf"], ["pInputText", "", "type", "text"], ["appendTo", "body"], ["pButton", "", "pRipple", "", "type", "button", "pInitEditableRow", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-text", 3, "click"]],
  template: function ReasignacionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div")(2, "div", 1)(3, "div")(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "REASIGNACION");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Reasigna al tecnico");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p-table", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ReasignacionComponent_ng_template_9_Template, 12, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ReasignacionComponent_ng_template_10_Template, 24, 2, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.lugar)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.Ripple, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_10__.CellEditor, primeng_table__WEBPACK_IMPORTED_MODULE_10__.EditableRow, primeng_table__WEBPACK_IMPORTED_MODULE_10__.InitEditableRow],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7918:
/*!*******************************************************!*\
  !*** ./src/app/components/select/select.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* binding */ SelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



function SelectComponent_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
  }
}
class SelectComponent {
  constructor() {
    this.lista = ["hola", "que", "tal", "estas"];
  }
  ngOnInit() {}
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) {
  return new (t || SelectComponent)();
};
SelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SelectComponent,
  selectors: [["app-select"]],
  decls: 3,
  vars: 1,
  consts: [["name", "miselect"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
  template: function SelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p")(1, "select", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectComponent_option_2_Template, 2, 2, "option", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lista);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"]],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9032:
/*!*************************************************************!*\
  !*** ./src/app/components/solicitud/solicitud.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudComponent": () => (/* binding */ SolicitudComponent)
/* harmony export */ });
/* harmony import */ var _util_alerta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/alerta.component */ 5845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _service_CustomerService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/CustomerService */ 8205);
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth-guard.service */ 1557);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);










class SolicitudComponent {
  constructor(messageService, customerService, _authGuardService, route, fb) {
    this.messageService = messageService;
    this.customerService = customerService;
    this._authGuardService = _authGuardService;
    this.route = route;
    this.fb = fb;
    this.recoInfo = this.fb.group({
      idfolios: [''],
      idusuarios: [''],
      idtipo_servicio: [''],
      asunto: [''],
      mensaje: [''],
      foto1: [''],
      foto2: [''],
      foto3: [''],
      foto4: [''],
      solucion: [''],
      firma: [''],
      estado_ticket: [''],
      nombre: [''],
      Descripcion: [''],
      num_folio: [''],
      num_empleado: [''],
      idstatusTicket: ['']
    });
    this.token = this._authGuardService.getToken();
    this.id = this.route.snapshot.params['idfolios'];
  }
  ngOnInit() {
    this.obtenerTickets();
  }
  obtenerTickets() {
    console.log("Token", this.token);
    this.customerService.getTicket(this.token).subscribe({
      next: resp => {
        console.log("Obtener tickets", resp);
        let respuestaDto = resp;
        if (respuestaDto.ok) {
          this.tickets = resp.addenda;
        } else {} // if
      },

      error: error => {
        let mensaje = error;
        this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
      }
    });
  }
  selectProduct(solicitud) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Selected',
      detail: solicitud.nombre
    });
  }
  guardar(f) {
    console.log('submit disparado', f);
    console.log(f.value);
  }
}
SolicitudComponent.ɵfac = function SolicitudComponent_Factory(t) {
  return new (t || SolicitudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_CustomerService__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.authGuardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder));
};
SolicitudComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SolicitudComponent,
  selectors: [["app-solicitud"]],
  viewQuery: function SolicitudComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_util_alerta_component__WEBPACK_IMPORTED_MODULE_0__.AlertaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mensajeAlerta = _t.first);
    }
  },
  decls: 65,
  vars: 5,
  consts: [[1, "container"], [1, "flex", "align-items-center", "justify-content-between", "fondo"], [3, "ngSubmit"], ["f", "ngForm"], [1, "grid"], [1, "col-6"], ["for", "folio", "type", "text"], [1, "field", "md"], [1, "p-float-label"], ["id", "float-input", "type", "text", "pInputText", ""], ["for", "float-input"], [1, "field"], ["rows", "5", "cols", "30", "pInputTextarea", "", 3, "autoResize"], [1, "col-4"], [1, "col-8"], [1, "col-12"], ["label", "Guargar"], ["styleClass", "p-button-secondary", "label", "Cancelar"]],
  template: function SolicitudComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div")(2, "div", 1)(3, "div")(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "INFORMACION DEL TICKET");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "FORMULARIO PARA EL TECNICO");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SolicitudComponent_Template_form_ngSubmit_8_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.guardar(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4)(11, "div", 5)(12, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 5)(15, "div", 7)(16, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Modalidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 5)(21, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 5)(24, "div", 7)(25, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Prioridad");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 4)(30, "div", 5)(31, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 5)(34, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Especialista");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 5)(39, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 5)(42, "div", 11)(43, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "textarea", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Solucion");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 4)(49, "div", 14)(50, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "div", 5)(52, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "p-button", 16)(55, "p-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 13)(57, "div")(58, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "imagenes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div")(61, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "imagenes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "firma");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("FOLIO: ", ctx.tickets[1].num_folio, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Nombre: ", ctx.tickets[1].nombre, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Asunto: ", ctx.tickets[1].asunto, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Mensaje: ", ctx.tickets[1].mensaje, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autoResize", true);
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__.InputTextarea],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6075:
/*!*****************************************************************!*\
  !*** ./src/app/components/solicitudes/solicitudes.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudesComponent": () => (/* binding */ SolicitudesComponent)
/* harmony export */ });
/* harmony import */ var _util_alerta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/alerta.component */ 5845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _service_CustomerService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/CustomerService */ 8205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth-guard.service */ 1557);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 7485);









function SolicitudesComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "SOLICITUDES");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Atiende los nuevos tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function SolicitudesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "ID Folios");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Folio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Asunto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Lugar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["../solicitud", a1];
};
function SolicitudesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td")(16, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ticket_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ticket_r3.idfolios);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ticket_r3.num_folio);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ticket_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ticket_r3.asunto);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ticket_r3.estado_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ticket_r3.ubicacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ticket_r3.nombre_area);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ticket_r3.idfolios));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ticket_r3.num_folio);
  }
}
const _c1 = function () {
  return [10, 25, 50];
};
class SolicitudesComponent {
  constructor(messageService, customerService, activatedRoute, router, fb, _authGuardService) {
    this.messageService = messageService;
    this.customerService = customerService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.fb = fb;
    this._authGuardService = _authGuardService;
    this.recoInfo = this.fb.group({
      idfolios: ['1'],
      idusuarios: ['26'],
      idtipo_servicio: ['1'],
      asunto: [''],
      mensaje: [''],
      foto1: ['1'],
      foto2: ['1'],
      foto3: ['1'],
      foto4: ['1'],
      solucion: ['1'],
      firma: ['1'],
      estado_ticket: ['1'],
      nombre: [''],
      Descripcion: [''],
      num_folio: [''],
      num_empleado: [''],
      idstatusTicket: ['2'],
      nombre_area: [],
      lugares: []
    });
    this.token = this._authGuardService.getToken();
  }
  ngOnInit() {
    this.obtenerTickets();
  }
  btnClick() {
    this.router.navigate(['info', 'recoInfo[1]']);
  }
  obtenerTickets() {
    this.customerService.getTicket(this.token).subscribe({
      next: resp => {
        let respuestaDto = resp;
        if (respuestaDto.ok) {
          this.tickets = resp.addenda;
        }
      },
      error: error => {
        let mensaje = error;
        this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
      }
    });
  }
  selectProduct(solicitud) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Selected',
      detail: solicitud.nombre
    });
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, 'contains');
  }
  guardar(forma) {
    console.log('submit disparado', forma);
    console.log(forma.value);
  }
}
SolicitudesComponent.ɵfac = function SolicitudesComponent_Factory(t) {
  return new (t || SolicitudesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_CustomerService__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.authGuardService));
};
SolicitudesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SolicitudesComponent,
  selectors: [["app-solicitudes"]],
  viewQuery: function SolicitudesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_util_alerta_component__WEBPACK_IMPORTED_MODULE_0__.AlertaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mensajeAlerta = _t.first);
    }
  },
  decls: 6,
  vars: 8,
  consts: [[1, "container"], ["styleClass", "p-datatable-sm", "selectionMode", "single", 3, "value", "paginator", "rows", "showCurrentPageReport", "scrollable", "rowsPerPageOptions", "selection"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "flex", "align-items-center", "justify-content-between", "fondo"], [2, "width", "5rem"], ["pButton", "", 3, "routerLink"]],
  template: function SolicitudesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div")(2, "p-table", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SolicitudesComponent_ng_template_3_Template, 6, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SolicitudesComponent_ng_template_4_Template, 16, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SolicitudesComponent_ng_template_5_Template, 18, 11, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.tickets)("paginator", true)("rows", 10)("showCurrentPageReport", true)("scrollable", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c1))("selection", ctx.selectedProduct1);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table],
  encapsulation: 2
});

/***/ }),

/***/ 6333:
/*!*********************************************************************!*\
  !*** ./src/app/components/table-activos/table-activos.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableActivosComponent": () => (/* binding */ TableActivosComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _util_alerta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/alerta.component */ 5845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_CustomerService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/CustomerService */ 8205);
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth-guard.service */ 1557);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/fileupload */ 6193);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 7485);














function TableActivosComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "div")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Activos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "button", 8)(6, "button", 9)(7, "p-fileUpload", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TableActivosComponent_ng_template_3_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.exportCSV());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function TableActivosComponent_ng_template_3_Template_input_input_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.onGlobalFilter(_r0, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.selectedProducts || !ctx_r1.selectedProducts.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("maxFileSize", 1000000);
  }
}
function TableActivosComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Nombre de equipo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Nombre Propietario");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Modelo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Marca ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "p-sortIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Num. Serie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Tipo de Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "p-sortIcon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function TableActivosComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 21)(2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 21)(6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 23)(10, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 21)(14, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Pertenencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td", 21)(18, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Numero");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td", 21)(22, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Tipo de Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 21)(26, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td")(31, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "button", 25)(33, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r7.nombre_equipo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r7.nombre_propietario, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r7.modelo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r7.marca, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r7.num_serie, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r7.tipo_activo_desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r7.estado);
  }
}
const _c0 = function () {
  return ["nombre_equipo", "country.nombre_equipo", "representative.nombre_equipo", "status"];
};
const _c1 = function () {
  return [10, 20, 30];
};
class TableActivosComponent {
  constructor(customerService, messageService, confirmationService, _authGuardService, fb) {
    this.customerService = customerService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this._authGuardService = _authGuardService;
    this.fb = fb;
    this.activos = [];
    this.product = {};
    this.selectedProducts = [];
    this.deleteProductDialog = false;
    this.deleteProductsDialog = false;
    this.cols = [];
    this.statuses = [];
    this.rowsPerPageOptions = [5, 10, 20];
    this.nuevoActivo = false;
    this.recoInfo = this.fb.group({
      id: [''],
      idactivos: [''],
      idlugar: [''],
      idarea: [''],
      nombre_propietario: [''],
      nombre_equipo: [''],
      num_empleado: [''],
      password: [''],
      fecha_mantenimien: [''],
      valor_monetario: [''],
      estado: [''],
      descripcion: [''],
      tipo_de_conexion: [''],
      iddetallepc: [''],
      idLicencias: [''],
      idtipoactivo: [''],
      host_teamviewer: [''],
      password_teamviewer: [''],
      calculoEstimado: [''],
      Pertenencia: ['']
    });
    this.token = this._authGuardService.getToken();
  }
  ngOnInit() {
    this.obtenerActivos();
    this.estado = [{
      label: 'INSTOCK',
      value: '1'
    }, {
      label: 'LOWSTOCK',
      value: '0'
    }, {
      label: 'OUTOFSTOCK',
      value: '0'
    }];
  }
  obtenerActivos() {
    console.log("Token", this.token);
    this.customerService.getActivos(this.token).subscribe({
      next: resp => {
        console.log("Obtener Activos", resp);
        let respuestaDto = resp;
        if (respuestaDto.ok) {
          this.activos = resp.addenda;
        }
      },
      error: error => {
        let mensaje = error;
        this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
      }
    });
  }
  confirmDelete() {
    this.deleteProductDialog = false;
    this.activos = this.activos.filter(val => val.id !== this.product.id);
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Product Deleted',
      life: 3000
    });
    this.product = {};
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
  saveProduct() {}
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, 'contains');
  }
  guardar() {
    console.log(this.recoInfo.value);
  }
}
TableActivosComponent.ɵfac = function TableActivosComponent_Factory(t) {
  return new (t || TableActivosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_CustomerService__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.authGuardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
};
TableActivosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TableActivosComponent,
  selectors: [["app-table-activos"]],
  viewQuery: function TableActivosComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_util_alerta_component__WEBPACK_IMPORTED_MODULE_0__.AlertaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mensajeAlerta = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService])],
  decls: 6,
  vars: 12,
  consts: [[1, "container"], ["responsiveLayout", "scroll", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "selectionMode", "multiple", "dataKey", "id", 3, "value", "columns", "rows", "globalFilterFields", "paginator", "rowsPerPageOptions", "showCurrentPageReport", "selection", "rowHover", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "flex", "justify-content-between", "fondo"], [1, "inline-flex"], ["pButton", "", "pRipple", "", "label", "Nuevo", "icon", "pi pi-plus", "routerLink", "../NuevoActivo", 1, "p-button-success", "mr-2"], ["pButton", "", "pRipple", "", "label", "Delete", "icon", "pi pi-trash", 1, "p-button-danger", "mr-2", 3, "disabled"], ["mode", "basic", "accept", "Pertenencia/*", "label", "Import", "chooseLabel", "Import", 1, "mr-2", 3, "maxFileSize"], ["pButton", "", "pRipple", "", "label", "Export", "icon", "pi pi-upload", 1, "p-button-help", "mr-2", 3, "click"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search...", 1, "w-full", "sm:w-auto", 3, "input"], ["field", "nombre_equipo"], ["field", "price"], ["field", ""], ["field", "Pertenencia"], ["field", "tipo_activo_desc"], ["field", "estado"], [2, "width", "14%", "min-width", "10rem"], [1, "p-column-title"], [2, "width", "14%", "min-width", "8rem"], ["c", ""], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-success", "mr-2"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-warning"]],
  template: function TableActivosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "p-table", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function TableActivosComponent_Template_p_table_selectionChange_1_listener($event) {
        return ctx.selectedProducts = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TableActivosComponent_ng_template_3_Template, 12, 2, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TableActivosComponent_ng_template_4_Template, 21, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, TableActivosComponent_ng_template_5_Template, 34, 7, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.activos)("columns", ctx.cols)("rows", 10)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0))("rows", 10)("paginator", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1))("showCurrentPageReport", true)("selection", ctx.selectedProducts)("rowHover", true);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__.FileUpload, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.Ripple, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_11__.SortIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5212:
/*!*******************************************************************!*\
  !*** ./src/app/components/table-ticket/table-ticket.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableTicketComponent": () => (/* binding */ TableTicketComponent)
/* harmony export */ });
/* harmony import */ var C_Mesa_de_Ayuda_Front_Front_end_728963e443877477536b5c628cd6d800a198e819_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _util_alerta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/alerta.component */ 5845);
/* harmony import */ var _model_insertTicket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/insertTicket */ 2594);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _service_CustomerService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/CustomerService */ 8205);
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth-guard.service */ 1557);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/fileupload */ 6193);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ 7485);



















function TableTicketComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "div")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "TICKETS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Atiende los nuevos tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div")(7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TableTicketComponent_ng_template_3_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.openNew());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function TableTicketComponent_ng_template_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " foto1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TableTicketComponent_ng_template_4_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " solucion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TableTicketComponent_ng_template_4_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Firma");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TableTicketComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "idfolios");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "fecha_registro");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "idtipo_servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "asunto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "estado_ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "nombre Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "mensaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, TableTicketComponent_ng_template_4_div_16_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, TableTicketComponent_ng_template_4_div_18_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, TableTicketComponent_ng_template_4_div_20_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.sesionUsuario.clave == "ADM" || ctx_r1.sesionUsuario.clave == "TEC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.sesionUsuario.clave == "ADM" || ctx_r1.sesionUsuario.clave == "TEC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.sesionUsuario.clave == "ADM" || ctx_r1.sesionUsuario.clave == "TEC");
  }
}
function TableTicketComponent_ng_template_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ticket_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, ticket_r12.foto1, 0, 4), " ");
  }
}
function TableTicketComponent_ng_template_5_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ticket_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ticket_r12.Solucion, " ");
  }
}
function TableTicketComponent_ng_template_5_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ticket_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, ticket_r12.firma, 0, 4), " ");
  }
}
function TableTicketComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, TableTicketComponent_ng_template_5_div_17_Template, 3, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, TableTicketComponent_ng_template_5_div_19_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, TableTicketComponent_ng_template_5_div_21_Template, 3, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ticket_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ticket_r12.num_folio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 10, ticket_r12.fecha_registro, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ticket_r12.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ticket_r12.asunto);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ticket_r12.estado_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ticket_r12.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ticket_r12.mensaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.sesionUsuario.clave == "ADM" || ctx_r2.sesionUsuario.clave == "TEC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.sesionUsuario.clave == "ADM" || ctx_r2.sesionUsuario.clave == "TEC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.sesionUsuario.clave == "ADM" || ctx_r2.sesionUsuario.clave == "TEC");
  }
}
function TableTicketComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Agregar Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TableTicketComponent_small_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TableTicketComponent_small_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TableTicketComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TableTicketComponent_ng_template_20_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TableTicketComponent_ng_template_20_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.addTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return [10, 25, 50];
};
class TableTicketComponent {
  constructor(fb, messageService, customerService, _authGuardService) {
    this.fb = fb;
    this.messageService = messageService;
    this.customerService = customerService;
    this._authGuardService = _authGuardService;
    this.clickClose = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.products = {};
    this.ticket = [];
    this.arrayImagenes = new Array();
    this.displayAddModal = false;
    this.deleteProductDialog = false;
    this.recoInfo = this.fb.group({
      idfolios: ['1'],
      idusuarios: ['26'],
      idtipo_servicio: ['1'],
      asunto: [''],
      mensaje: [''],
      foto1: ['1'],
      foto2: ['1'],
      foto3: ['1'],
      foto4: ['1'],
      solucion: ['1'],
      firma: ['1'],
      estado_ticket: ['1'],
      nombre: [''],
      Descripcion: [''],
      num_folio: [''],
      num_empleado: [''],
      idstatusTicket: ['2'],
      nombre_area: [''],
      ubicacion: ['']
    });
    this.token = this._authGuardService.getToken();
    this.sesionUsuario = this._authGuardService.getUser();
  }
  ngOnInit() {
    console.log("entraa");
    this.obtenerTickets();
  }
  openNew() {
    this.displayAddModal = true;
  }
  closeModal() {
    this.recoInfo.reset();
    this.obtenerTickets();
  }
  obtenerTickets() {
    console.log("Token", this.token);
    this.customerService.getTicket(this.token).subscribe({
      next: resp => {
        console.log("Obtener tickets", resp);
        let respuestaDto = resp;
        if (respuestaDto.ok) {
          this.tickets = resp.addenda;
        } else {} // if
      },

      error: error => {
        let mensaje = error;
        this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
      }
    });
  }
  addTicket() {
    console.log("this.recoInfo", this.recoInfo.value);
    if (this.recoInfo.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Porfavor verifique todos los campos'
      });
    } else {
      console.log("this.ecolecta informacion nombre", this.recoInfo.value.asunto);
      this.saveTicket(this.recoInfo.value.idfolios, this.recoInfo.value.idusuarios, this.recoInfo.value.idtipo_servicio, this.recoInfo.value.asunto, this.recoInfo.value.mensaje, this.recoInfo.value.foto1, this.recoInfo.value.foto2, this.recoInfo.value.foto3, this.recoInfo.value.foto4, this.recoInfo.value.solucion, this.recoInfo.value.firma, this.recoInfo.value.estado_ticket, this.recoInfo.value.nombre, this.recoInfo.value.Descripcion, this.recoInfo.value.num_folio, this.recoInfo.value.num_empleado, this.recoInfo.value.idstatusTicket, this.recoInfo.value.nombre_area, this.recoInfo.value.ubicacion);
    }
    this.obtenerTickets;
  }
  saveTicket(idfolios, idusuarios, idtipo_servicio, asunto, mensaje, foto1, foto2, foto3, foto4, solucion, firma, estado_ticket, nombre, Descripcion, num_folio, num_empleado, idstatusTicket, nombre_area, ubicacion) {
    var _this = this;
    return (0,C_Mesa_de_Ayuda_Front_Front_end_728963e443877477536b5c628cd6d800a198e819_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("asunto", asunto, "descripcion", mensaje);
      let datosT = new _model_insertTicket__WEBPACK_IMPORTED_MODULE_2__.insertTicket(idfolios, idusuarios, idtipo_servicio, asunto, mensaje, foto1, foto2, foto3, foto4, solucion, firma, estado_ticket, nombre, Descripcion, num_folio, num_empleado, idstatusTicket, nombre_area, ubicacion);
      console.log("Datos Ticket", datosT);
      _this.customerService.saveTicket(datosT).subscribe({
        next: resp => {
          console.log("VERRRRRRRRRRRRRREEEEEEEE", _this.saveTicket);
          let respuestaDto = resp;
          if (respuestaDto.valido == 0) {
            console.log("next", respuestaDto.mensaje);
            _this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: respuestaDto.mensaje
            });
          } else {
            _this.ticke = respuestaDto.addenda;
            console.log("obtenerTickets", _this.obtenerTickets);
            _this.obtenerTickets();
          }
        },
        error: error => {
          let mensaje = error;
          _this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
        }
      });
    })();
  }
  confirmDelete() {
    this.deleteProductDialog = false;
    this.ticket = this.ticket.filter(val => val.idfolios !== this.products.idfolios);
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Product Deleted',
      life: 3000
    });
    this.products = {};
  }
}
TableTicketComponent.ɵfac = function TableTicketComponent_Factory(t) {
  return new (t || TableTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_CustomerService__WEBPACK_IMPORTED_MODULE_3__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__.authGuardService));
};
TableTicketComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: TableTicketComponent,
  selectors: [["app-table-ticket"]],
  viewQuery: function TableTicketComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_util_alerta_component__WEBPACK_IMPORTED_MODULE_1__.AlertaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.mensajeAlerta = _t.first);
    }
  },
  inputs: {
    clickClose: "clickClose"
  },
  outputs: {
    clickClose: "clickClose"
  },
  decls: 23,
  vars: 16,
  consts: [[1, "container"], ["styleClass", "p-datatable-sm", 3, "value", "paginator", "rows", "showCurrentPageReport", "scrollable", "rowsPerPageOptions"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["styleClass", "p-fluid", 3, "visible", "modal", "visibleChange"], [3, "formGroup", "ngSubmit"], [1, "field"], ["for", "insertUsuario"], ["formControlName", "asunto", "pInputText", "", "id", "asunto", "required", "", "autofocus", ""], ["class", "p-error", 4, "ngIf"], ["for", "name"], ["formControlName", "mensaje", "inputId", "mensaje", "rows", "3", "cols", "30", "pInputTextarea", "", 2, "resize", "none"], ["name", "foto1", "accept", ".jpg, .jpeg, .png", 3, "customUpload", "fileLimit", "maxFileSize", "multiple"], ["pTemplate", "footer"], ["position", "top-right"], [1, "flex", "align-items-center", "justify-content-between", "fondo"], ["pButton", "", "pRipple", "", "type", "button", "label", "Nuevo", 3, "click"], [4, "ngIf"], [1, "p-error"], ["icon", "pi pi-trash", "label", "Limpiar", "styleClass", "p-button-text", 3, "click"], ["icon", "pi pi-check", "label", "Confirmar", "styleClass", "p-button-text", 3, "click"]],
  template: function TableTicketComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div")(2, "p-table", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TableTicketComponent_ng_template_3_Template, 8, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TableTicketComponent_ng_template_4_Template, 21, 3, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TableTicketComponent_ng_template_5_Template, 22, 13, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p-dialog", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("visibleChange", function TableTicketComponent_Template_p_dialog_visibleChange_6_listener($event) {
        return ctx.displayAddModal = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TableTicketComponent_ng_template_7_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function TableTicketComponent_Template_form_ngSubmit_8_listener() {
        return ctx.addTicket();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7)(10, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "ASUNTO");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, TableTicketComponent_small_13_Template, 2, 0, "small", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 7)(15, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "mensaje");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "textarea", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, TableTicketComponent_small_18_Template, 2, 0, "small", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "p-fileUpload", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, TableTicketComponent_ng_template_20_Template, 2, 0, "ng-template", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "p-toast", 15)(22, "app-alerta");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.tickets)("paginator", true)("rows", 10)("showCurrentPageReport", true)("scrollable", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", ctx.displayAddModal)("modal", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.recoInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.text && !ctx.ticke.asunto);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.text && !ctx.ticke.mensaje);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("customUpload", true)("fileLimit", 4)("maxFileSize", 2000000)("multiple", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__.InputTextarea, primeng_toast__WEBPACK_IMPORTED_MODULE_12__.Toast, _util_alerta_component__WEBPACK_IMPORTED_MODULE_1__.AlertaComponent, primeng_dialog__WEBPACK_IMPORTED_MODULE_13__.Dialog, primeng_fileupload__WEBPACK_IMPORTED_MODULE_14__.FileUpload, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, primeng_ripple__WEBPACK_IMPORTED_MODULE_15__.Ripple, primeng_table__WEBPACK_IMPORTED_MODULE_16__.Table, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7570:
/*!*********************************************************************!*\
  !*** ./src/app/components/table-usuario/table-usuario.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableUsuarioComponent": () => (/* binding */ TableUsuarioComponent)
/* harmony export */ });
/* harmony import */ var C_Mesa_de_Ayuda_Front_Front_end_728963e443877477536b5c628cd6d800a198e819_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_util_alerta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/util/alerta.component */ 5845);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _model_insertUsuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/insertUsuario */ 4807);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _service_CustomerService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/CustomerService */ 8205);
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth-guard.service */ 1557);
/* harmony import */ var _service_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/usuario.service */ 375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/fileupload */ 6193);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ 7485);



















function TableUsuarioComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "div")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Usuarios");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 9)(5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TableUsuarioComponent_ng_template_3_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.openNew());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "p-fileUpload", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TableUsuarioComponent_ng_template_3_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r0.exportCSV());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function TableUsuarioComponent_ng_template_3_Template_input_input_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.onGlobalFilter(_r0, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxFileSize", 1000000);
  }
}
function TableUsuarioComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Numero de Usuario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "p-sortIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Apellido Paterno");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Apellido Materno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TableUsuarioComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 20)(2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 20)(6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td", 20)(10, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 22)(14, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td", 20)(18, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Pertenencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td")(22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "button", 24)(24, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const altaEmpleado_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", altaEmpleado_r9.num_empleado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", altaEmpleado_r9.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", altaEmpleado_r9.apellidoP, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", altaEmpleado_r9.apellidoM, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", altaEmpleado_r9.email, " ");
  }
}
function TableUsuarioComponent_ng_template_7_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TableUsuarioComponent_ng_template_7_small_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TableUsuarioComponent_ng_template_7_small_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TableUsuarioComponent_ng_template_7_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TableUsuarioComponent_ng_template_7_small_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TableUsuarioComponent_ng_template_7_small_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TableUsuarioComponent_ng_template_7_small_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TableUsuarioComponent_ng_template_7_small_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TableUsuarioComponent_ng_template_7_small_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TableUsuarioComponent_ng_template_7_small_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TableUsuarioComponent_ng_template_7_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Are you sure you want to delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r20.products.num_empleado);
  }
}
function TableUsuarioComponent_ng_template_7_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TableUsuarioComponent_ng_template_7_ng_template_57_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.deleteProductDialog = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TableUsuarioComponent_ng_template_7_ng_template_57_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.confirmDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    width: "450px"
  };
};
function TableUsuarioComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function TableUsuarioComponent_ng_template_7_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r25.addUsuario());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 27)(2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "N\u00B0 Empleado");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TableUsuarioComponent_ng_template_7_small_5_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 27)(7, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, TableUsuarioComponent_ng_template_7_small_10_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 27)(12, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Apellido Paterno");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, TableUsuarioComponent_ng_template_7_small_15_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 27)(17, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Apellido Materno");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, TableUsuarioComponent_ng_template_7_small_20_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 27)(22, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, TableUsuarioComponent_ng_template_7_small_25_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 27)(27, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, TableUsuarioComponent_ng_template_7_small_30_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 27)(32, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "p-dropdown", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, TableUsuarioComponent_ng_template_7_small_35_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 27)(37, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Lugar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "p-dropdown", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, TableUsuarioComponent_ng_template_7_small_40_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 27)(42, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "p-dropdown", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, TableUsuarioComponent_ng_template_7_small_45_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 27)(47, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, TableUsuarioComponent_ng_template_7_small_50_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "p-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TableUsuarioComponent_ng_template_7_Template_p_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "p-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TableUsuarioComponent_ng_template_7_Template_p_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.addUsuario());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "p-dialog", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function TableUsuarioComponent_ng_template_7_Template_p_dialog_visibleChange_53_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.deleteProductDialog = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, TableUsuarioComponent_ng_template_7_span_56_Template, 5, 1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, TableUsuarioComponent_ng_template_7_ng_template_57_Template, 2, 0, "ng-template", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r4.recoInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.text && !ctx_r4.usuari.num_empleado);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.text && !ctx_r4.usuari.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.text && !ctx_r4.usuari.apellidoP);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.text && !ctx_r4.usuari.apellidoM);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.text && !ctx_r4.usuari.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.text && !ctx_r4.usuari.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r4.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.text && !ctx_r4.usuari.idrol);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r4.lugares);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.text && !ctx_r4.usuari.idlugar);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r4.area);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.text && !ctx_r4.usuari.idarea);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.text && !ctx_r4.usuari.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.usuari.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](20, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx_r4.deleteProductDialog)("modal", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.products);
  }
}
const _c1 = function () {
  return ["num_empleado", "country.num_empleado", "representative.num_empleado", "status"];
};
const _c2 = function () {
  return [10, 20, 30];
};
class TableUsuarioComponent {
  constructor(fb, messageService, customerService, _authGuardService, usuarioService) {
    this.fb = fb;
    this.messageService = messageService;
    this.customerService = customerService;
    this._authGuardService = _authGuardService;
    this.usuarioService = usuarioService;
    this.displayAddModal = true;
    this.clickClose = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.usuarios = [];
    this.products = {};
    this.cols = [];
    this.selectedProducts = [];
    this.deleteProductDialog = false;
    this.recoInfo = this.fb.group({
      num_empleado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      apellidoP: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      apellidoM: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      idrol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      idlugar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      idarea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    this.token = this._authGuardService.getToken();
  }
  ngOnInit() {
    this.obtenerUsuarios();
    this.obtenerArea();
    this.obtenerLugar();
    this.obtenerRol();
  }
  obtenerArea() {
    console.log("Token", this.token);
    this.customerService.getArea(this.token).subscribe({
      next: resp => {
        console.log("Obtener Area", resp);
        let respuestaDto = resp;
        if (respuestaDto.ok) {
          this.area = resp.addenda;
        } else {} // if
      },

      error: error => {
        let mensaje = error;
        this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
      }
    });
  }
  obtenerLugar() {
    console.log("Token", this.token);
    this.customerService.getLugar(this.token).subscribe({
      next: resp => {
        console.log("Lugaaaaaaaaaaaaar", resp);
        let respuestaDto = resp;
        if (respuestaDto.ok) {
          this.lugares = resp.addenda;
        }
      },
      error: error => {
        let mensaje = error;
        this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
      }
    });
  }
  obtenerRol() {
    console.log("Token", this.token);
    this.customerService.getRol(this.token).subscribe({
      next: resp => {
        console.log("Rol", resp);
        let respuestaDto = resp;
        if (respuestaDto.ok) {
          this.roles = resp.addenda;
        }
      },
      error: error => {
        let mensaje = error;
        this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
      }
    });
  }
  obtenerUsuarios() {
    console.log("Token", this.token);
    this.customerService.fnusuario(this.token).subscribe({
      next: resp => {
        console.log("Obtener usuarios", resp);
        let respuestaDto = resp;
        if (respuestaDto.ok) {
          this.usuarios = resp.addenda;
        } else {} // if
      },

      error: error => {
        let mensaje = error;
        this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
      }
    });
  }
  addUsuario() {
    console.log("this.recoInfo", this.recoInfo.value);
    if (this.recoInfo.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'No es posible acceder',
        detail: 'Porfavor verifique todos los campos'
      });
    } else {
      console.log("this.ecolecta informacion nombre", this.recoInfo.value.nombre);
      this.saveUsuario(this.recoInfo.value.nombre, this.recoInfo.value.apellidoP, this.recoInfo.value.apellidoM, this.recoInfo.value.email, this.recoInfo.value.idrol, this.recoInfo.value.num_empleado, this.recoInfo.value.idlugar, this.recoInfo.value.idarea, this.recoInfo.value.password, this.recoInfo.value.status);
    }
  }
  saveUsuario(nombre, apellidoP, apellidoM, email, idrol, num_empleado, idlugar, idarea, password, status) {
    var _this = this;
    return (0,C_Mesa_de_Ayuda_Front_Front_end_728963e443877477536b5c628cd6d800a198e819_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("VERRRRRRRRRRRRRREEEEEEEE", _this.saveUsuario);
      console.log("Usuario", nombre, "apellidoP", apellidoP, "apellidoM", apellidoM, "email", email, "idrol", idrol, "num_empleado", num_empleado, "idlugar", idlugar, "idarea", idarea, "password", password, "status", status);
      let datosA = new _model_insertUsuario__WEBPACK_IMPORTED_MODULE_2__.insertUsuario(nombre, apellidoP, apellidoM, email, idrol, num_empleado, idlugar, idarea, password, status);
      console.log("VERRRRRRRRRRRRRREEEEEEEE", _this.saveUsuario);
      console.log("Datos Area", datosA);
      _this.usuarioService.saveUsuario(datosA).subscribe({
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
            _this.usuari = respuestaDto.addenda;
            console.log("obtenerUsuarios", _this.obtenerUsuarios);
            _this.obtenerUsuarios();
          }
        },
        error: error => {
          let mensaje = error;
          _this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
        }
      });
    })();
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, 'contains');
  }
  confirmDelete() {
    this.deleteProductDialog = false;
    this.usuarios = this.usuarios.filter(val => val.idUsuario !== this.products.idUsuario);
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Product Deleted',
      life: 3000
    });
    this.products = {};
  }
  openNew() {
    this.usuari = {};
    this.text = false;
    this.texts = true;
  }
  closeModal() {
    this.recoInfo.reset();
    this.obtenerUsuarios();
  }
}
TableUsuarioComponent.ɵfac = function TableUsuarioComponent_Factory(t) {
  return new (t || TableUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_CustomerService__WEBPACK_IMPORTED_MODULE_3__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__.authGuardService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_usuario_service__WEBPACK_IMPORTED_MODULE_5__.UsuarioService));
};
TableUsuarioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TableUsuarioComponent,
  selectors: [["app-table-usuario"]],
  viewQuery: function TableUsuarioComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_util_alerta_component__WEBPACK_IMPORTED_MODULE_1__.AlertaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.mensajeAlerta = _t.first);
    }
  },
  inputs: {
    displayAddModal: "displayAddModal"
  },
  outputs: {
    clickClose: "clickClose"
  },
  decls: 8,
  vars: 17,
  consts: [[1, "container"], ["responsiveLayout", "scroll", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "dataKey", "id", 3, "value", "columns", "rows", "globalFilterFields", "paginator", "rowsPerPageOptions", "showCurrentPageReport", "selection", "rowHover", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["header", "Agregar Usuario", "styleClass", "p-fluid", 3, "visible", "modal", "visibleChange"], ["pTemplate", "content"], [1, "flex", "justify-content-between", "fondo"], [1, "inline-flex"], ["pButton", "", "pRipple", "", "label", "Nuevo", "icon", "pi pi-plus", 1, "p-button-success", "mr-2", 3, "click"], ["mode", "basic", "accept", "Pertenencia/*", "label", "Importar", "chooseLabel", "Importar", 1, "mr-2", 3, "maxFileSize"], ["pButton", "", "pRipple", "", "label", "Exportar", "icon", "pi pi-upload", 1, "p-button-help", "mr-2", 3, "click"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Numero de Empleado", 1, "w-full", "sm:w-auto", 3, "input"], ["field", "code"], ["field", "nombre"], ["field", "price"], ["field", ""], [2, "width", "14%", "min-width", "10rem"], [1, "p-column-title"], [2, "width", "14%", "min-width", "8rem"], [1, "flex", 2, "padding-left", "10rem"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-success", "mr-2"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-warning"], [3, "formGroup", "ngSubmit"], [1, "field"], ["for", "insertUsuario"], ["formControlName", "num_empleado", "type", "number", "pInputText", "", "id", "num_empleado", "required", "", "autofocus", ""], ["class", "p-error", 4, "ngIf"], ["for", "name"], ["formControlName", "nombre", "pInputText", "", "id", "ubi", "required", "", "autofocus", ""], ["for", "apellidoP"], ["formControlName", "apellidoP", "pInputText", "", "id", "apellidoP", "required", "", "autofocus", ""], ["for", "apellidoM"], ["formControlName", "apellidoM", "pInputText", "", "id", "apellidoM", "required", "", "autofocus", ""], ["for", "email"], ["formControlName", "email", "pInputText", "", "id", "email", "required", "", "autofocus", ""], ["for", "status"], ["formControlName", "status", "type", "number", "pInputText", "", "id", "status", "required", "", "autofocus", ""], ["for", "idrol"], ["placeholder", "Seleccione un Rol", "formControlName", "idrol", "optionLabel", "descripcion_rol", "optionValue", "idrol", 3, "options"], ["for", "ubi"], ["placeholder", "Seleccione un lugar", "formControlName", "idlugar", "optionLabel", "ubicacion", "optionValue", "idlugar", 3, "options"], ["for", "idarea"], ["placeholder", "Seleccione un Area", "formControlName", "idarea", "optionLabel", "nombre_area", "optionValue", "idarea", 3, "options"], ["for", "password"], ["formControlName", "password", "pInputText", "", "id", "password", "required", "", "autofocus", ""], ["label", "Cancel", "styleClass", "p-button-text", 3, "click"], ["label", "A\u00D1ADIR", 3, "disabled", "click"], ["header", "Confirm", 3, "visible", "modal", "visibleChange"], [1, "flex", "align-items-center", "justify-content-center"], [1, "pi", "pi-exclamation-triangle", "mr-3", 2, "font-size", "2rem"], [4, "ngIf"], ["pTemplate", "footer"], [1, "p-error"], ["pButton", "", "pRipple", "", "icon", "pi pi-times", "label", "No", 1, "p-button-text", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", "label", "Yes", 1, "p-button-text", 3, "click"]],
  template: function TableUsuarioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0)(1, "p-table", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function TableUsuarioComponent_Template_p_table_selectionChange_1_listener($event) {
        return ctx.selectedProducts = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TableUsuarioComponent_ng_template_3_Template, 11, 1, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TableUsuarioComponent_ng_template_4_Template, 16, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TableUsuarioComponent_ng_template_5_Template, 25, 5, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p-dialog", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function TableUsuarioComponent_Template_p_dialog_visibleChange_6_listener($event) {
        return ctx.texts = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, TableUsuarioComponent_ng_template_7_Template, 58, 21, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.usuarios)("columns", ctx.cols)("rows", 10)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](14, _c1))("rows", 10)("paginator", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](15, _c2))("showCurrentPageReport", true)("selection", ctx.selectedProducts)("rowHover", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](16, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.texts)("modal", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, primeng_dialog__WEBPACK_IMPORTED_MODULE_13__.Dialog, primeng_fileupload__WEBPACK_IMPORTED_MODULE_14__.FileUpload, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, primeng_ripple__WEBPACK_IMPORTED_MODULE_15__.Ripple, primeng_table__WEBPACK_IMPORTED_MODULE_16__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SortIcon],
  encapsulation: 2
});

/***/ }),

/***/ 6779:
/*!*********************************************************!*\
  !*** ./src/app/components/usuario/usuario.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioComponent": () => (/* binding */ UsuarioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class UsuarioComponent {}
UsuarioComponent.ɵfac = function UsuarioComponent_Factory(t) {
  return new (t || UsuarioComponent)();
};
UsuarioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UsuarioComponent,
  selectors: [["app-usuario"]],
  decls: 2,
  vars: 0,
  template: function UsuarioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "usuario works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 4656:
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainRoutingModule": () => (/* binding */ MainRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_lugar_area_lugar_area_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/lugar-area/lugar-area.component */ 9604);
/* harmony import */ var _components_reasignacion_reasignacion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/reasignacion/reasignacion.component */ 5194);
/* harmony import */ var _components_solicitudes_solicitudes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/solicitudes/solicitudes.component */ 6075);
/* harmony import */ var _components_table_activos_table_activos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/table-activos/table-activos.component */ 6333);
/* harmony import */ var _components_table_ticket_table_ticket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/table-ticket/table-ticket.component */ 5212);
/* harmony import */ var _components_table_usuario_table_usuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/table-usuario/table-usuario.component */ 7570);
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/inicio/inicio.component */ 8647);
/* harmony import */ var _components_nuevo_activo_nuevo_activo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/nuevo-activo/nuevo-activo.component */ 6818);
/* harmony import */ var _paso1_activo_paso1_activo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../paso1-activo/paso1-activo.component */ 8941);
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/select/select.component */ 7918);
/* harmony import */ var _components_info_ticket_info_ticket_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/info-ticket/info-ticket.component */ 2049);
/* harmony import */ var _components_solicitud_solicitud_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/solicitud/solicitud.component */ 9032);
/* harmony import */ var _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/perfil/perfil.component */ 7887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
















const routes = [{
  path: 'main',
  component: _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__.InicioComponent,
  children: [{
    path: 'Tusuario',
    component: _components_table_usuario_table_usuario_component__WEBPACK_IMPORTED_MODULE_5__.TableUsuarioComponent
  }, {
    path: 'Ticket',
    component: _components_table_ticket_table_ticket_component__WEBPACK_IMPORTED_MODULE_4__.TableTicketComponent
  }, {
    path: 'Tactivos',
    component: _components_table_activos_table_activos_component__WEBPACK_IMPORTED_MODULE_3__.TableActivosComponent
  }, {
    path: 'lugarArea',
    component: _components_lugar_area_lugar_area_component__WEBPACK_IMPORTED_MODULE_0__.LugarAreaComponent
  }, {
    path: 'reasignacion',
    component: _components_reasignacion_reasignacion_component__WEBPACK_IMPORTED_MODULE_1__.ReasignacionComponent
  }, {
    path: 'NuevoActivo',
    component: _components_nuevo_activo_nuevo_activo_component__WEBPACK_IMPORTED_MODULE_7__.NuevoActivoComponent
  }, {
    path: 'Paso1',
    component: _paso1_activo_paso1_activo_component__WEBPACK_IMPORTED_MODULE_8__.Paso1ActivoComponent
  }, {
    path: 'select',
    component: _components_select_select_component__WEBPACK_IMPORTED_MODULE_9__.SelectComponent
  }, {
    path: 'info',
    component: _components_info_ticket_info_ticket_component__WEBPACK_IMPORTED_MODULE_10__.InfoTicketComponent
  }, {
    path: 'solicitudes',
    component: _components_solicitudes_solicitudes_component__WEBPACK_IMPORTED_MODULE_2__.SolicitudesComponent
  }, {
    path: 'solicitud/:id',
    component: _components_solicitud_solicitud_component__WEBPACK_IMPORTED_MODULE_11__.SolicitudComponent
  }, {
    path: 'perfil',
    component: _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_12__.PerfilComponent
  }]
}];
class MainRoutingModule {}
MainRoutingModule.ɵfac = function MainRoutingModule_Factory(t) {
  return new (t || MainRoutingModule)();
};
MainRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
  type: MainRoutingModule
});
MainRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](MainRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ }),

/***/ 9580:
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainModule": () => (/* binding */ MainModule)
/* harmony export */ });
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-routing.module */ 4656);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ 721);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.module */ 5687);
/* harmony import */ var _components_table_ticket_table_ticket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/table-ticket/table-ticket.component */ 5212);
/* harmony import */ var _components_lugar_area_lugar_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/lugar-area/lugar-area.component */ 9604);
/* harmony import */ var _components_reasignacion_reasignacion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/reasignacion/reasignacion.component */ 5194);
/* harmony import */ var _components_solicitudes_solicitudes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/solicitudes/solicitudes.component */ 6075);
/* harmony import */ var _components_table_activos_table_activos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/table-activos/table-activos.component */ 6333);
/* harmony import */ var _components_table_usuario_table_usuario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/table-usuario/table-usuario.component */ 7570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_nuevo_activo_nuevo_activo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/nuevo-activo/nuevo-activo.component */ 6818);
/* harmony import */ var _paso1_activo_paso1_activo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../paso1-activo/paso1-activo.component */ 8941);
/* harmony import */ var _components_nuevo_usuario_nuevo_usuario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/nuevo-usuario/nuevo-usuario.component */ 6582);
/* harmony import */ var _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/usuario/usuario.component */ 6779);
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/select/select.component */ 7918);
/* harmony import */ var _components_info_ticket_info_ticket_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/info-ticket/info-ticket.component */ 2049);
/* harmony import */ var _components_solicitud_solicitud_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/solicitud/solicitud.component */ 9032);
/* harmony import */ var _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/perfil/perfil.component */ 7887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);



















class MainModule {}
MainModule.ɵfac = function MainModule_Factory(t) {
  return new (t || MainModule)();
};
MainModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
  type: MainModule
});
MainModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
  imports: [_main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](MainModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_table_ticket_table_ticket_component__WEBPACK_IMPORTED_MODULE_3__.TableTicketComponent, _components_table_usuario_table_usuario_component__WEBPACK_IMPORTED_MODULE_8__.TableUsuarioComponent, _components_table_activos_table_activos_component__WEBPACK_IMPORTED_MODULE_7__.TableActivosComponent, _components_solicitudes_solicitudes_component__WEBPACK_IMPORTED_MODULE_6__.SolicitudesComponent, _components_lugar_area_lugar_area_component__WEBPACK_IMPORTED_MODULE_4__.LugarAreaComponent, _components_reasignacion_reasignacion_component__WEBPACK_IMPORTED_MODULE_5__.ReasignacionComponent, _components_nuevo_activo_nuevo_activo_component__WEBPACK_IMPORTED_MODULE_9__.NuevoActivoComponent, _paso1_activo_paso1_activo_component__WEBPACK_IMPORTED_MODULE_10__.Paso1ActivoComponent, _components_nuevo_usuario_nuevo_usuario_component__WEBPACK_IMPORTED_MODULE_11__.NuevoUsuarioComponent, _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_12__.UsuarioComponent, _components_select_select_component__WEBPACK_IMPORTED_MODULE_13__.SelectComponent, _components_info_ticket_info_ticket_component__WEBPACK_IMPORTED_MODULE_14__.InfoTicketComponent, _components_solicitud_solicitud_component__WEBPACK_IMPORTED_MODULE_15__.SolicitudComponent, _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_16__.PerfilComponent],
    imports: [_main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 8941:
/*!********************************************************!*\
  !*** ./src/app/paso1-activo/paso1-activo.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Paso1ActivoComponent": () => (/* binding */ Paso1ActivoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_CustomerService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/CustomerService */ 8205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class Paso1ActivoComponent {
  constructor(ticketService, router) {
    this.ticketService = ticketService;
    this.router = router;
    this.submitted = false;
  }
}
Paso1ActivoComponent.ɵfac = function Paso1ActivoComponent_Factory(t) {
  return new (t || Paso1ActivoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_CustomerService__WEBPACK_IMPORTED_MODULE_0__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
Paso1ActivoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: Paso1ActivoComponent,
  selectors: [["app-paso1-activo"]],
  decls: 2,
  vars: 0,
  template: function Paso1ActivoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "hola");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_module_ts.js.map