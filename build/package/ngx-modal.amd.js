var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define("ngx-modal/Modal", ["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModalHeader = /** @class */ (function () {
        function ModalHeader() {
        }
        ModalHeader = __decorate([
            core_1.Component({
                selector: "modal-header",
                template: "<ng-content></ng-content>"
            })
        ], ModalHeader);
        return ModalHeader;
    }());
    exports.ModalHeader = ModalHeader;
    var ModalContent = /** @class */ (function () {
        function ModalContent() {
        }
        ModalContent = __decorate([
            core_1.Component({
                selector: "modal-content",
                template: "<ng-content></ng-content>"
            })
        ], ModalContent);
        return ModalContent;
    }());
    exports.ModalContent = ModalContent;
    var ModalFooter = /** @class */ (function () {
        function ModalFooter() {
        }
        ModalFooter = __decorate([
            core_1.Component({
                selector: "modal-footer",
                template: "<ng-content></ng-content>"
            })
        ], ModalFooter);
        return ModalFooter;
    }());
    exports.ModalFooter = ModalFooter;
    var Modal = /** @class */ (function () {
        // -------------------------------------------------------------------------
        // Constructor
        // -------------------------------------------------------------------------
        function Modal() {
            this.closeOnEscape = true;
            this.closeOnOutsideClick = true;
            this.hideCloseButton = false;
            this.backdrop = true;
            // -------------------------------------------------------------------------
            // Outputs
            // -------------------------------------------------------------------------
            this.onOpen = new core_1.EventEmitter(false);
            this.onClose = new core_1.EventEmitter(false);
            this.onSubmit = new core_1.EventEmitter(false);
            // -------------------------------------------------------------------------
            // Public properties
            // -------------------------------------------------------------------------
            this.isOpened = false;
            this.createBackDrop();
        }
        // -------------------------------------------------------------------------
        // Lifecycle Methods
        // -------------------------------------------------------------------------
        Modal.prototype.ngOnDestroy = function () {
            document.body.className = document.body.className.replace(/modal-open\b/, "");
            if (this.backdropElement && this.backdropElement.parentNode === document.body)
                document.body.removeChild(this.backdropElement);
        };
        // -------------------------------------------------------------------------
        // Public Methods
        // -------------------------------------------------------------------------
        Modal.prototype.open = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.isOpened)
                return;
            this.isOpened = true;
            this.onOpen.emit(args);
            document.body.appendChild(this.backdropElement);
            window.setTimeout(function () { return _this.modalRoot.nativeElement.focus(); }, 0);
            document.body.className += " modal-open";
        };
        Modal.prototype.close = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!this.isOpened)
                return;
            this.isOpened = false;
            this.onClose.emit(args);
            document.body.removeChild(this.backdropElement);
            document.body.className = document.body.className.replace(/modal-open\b/, "");
        };
        // -------------------------------------------------------------------------
        // Private Methods
        // -------------------------------------------------------------------------
        Modal.prototype.preventClosing = function (event) {
            event.stopPropagation();
        };
        Modal.prototype.createBackDrop = function () {
            this.backdropElement = document.createElement("div");
            this.backdropElement.classList.add("fade");
            this.backdropElement.classList.add("in");
            if (this.backdrop) {
                this.backdropElement.classList.add("modal-backdrop");
            }
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", String)
        ], Modal.prototype, "modalClass", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Boolean)
        ], Modal.prototype, "closeOnEscape", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Boolean)
        ], Modal.prototype, "closeOnOutsideClick", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", String)
        ], Modal.prototype, "title", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], Modal.prototype, "hideCloseButton", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", String)
        ], Modal.prototype, "cancelButtonLabel", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", String)
        ], Modal.prototype, "submitButtonLabel", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Boolean)
        ], Modal.prototype, "backdrop", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], Modal.prototype, "onOpen", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], Modal.prototype, "onClose", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], Modal.prototype, "onSubmit", void 0);
        __decorate([
            core_1.ViewChild("modalRoot"),
            __metadata("design:type", core_1.ElementRef)
        ], Modal.prototype, "modalRoot", void 0);
        Modal = __decorate([
            core_1.Component({
                selector: "modal",
                template: "\n<div class=\"modal\" \n     tabindex=\"-1\"\n     role=\"dialog\"\n     #modalRoot\n     (keydown.esc)=\"closeOnEscape ? close() : 0\"\n     [ngClass]=\"{ in: isOpened, fade: isOpened }\"\n     [ngStyle]=\"{ display: isOpened ? 'block' : 'none' }\"\n     (click)=\"closeOnOutsideClick ? close() : 0\">\n    <div [class]=\"'modal-dialog ' + modalClass\" (click)=\"preventClosing($event)\">\n        <div class=\"modal-content\" tabindex=\"0\" *ngIf=\"isOpened\">\n            <div class=\"modal-header\">\n                <button *ngIf=\"!hideCloseButton\" type=\"button\" class=\"close\" data-dismiss=\"modal\" [attr.aria-label]=\"cancelButtonLabel || 'Close'\" (click)=\"close()\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\" *ngIf=\"title\">{{ title }}</h4>\n                <ng-content select=\"modal-header\"></ng-content>\n            </div>\n            <div class=\"modal-body\">\n                <ng-content select=\"modal-content\"></ng-content>\n            </div>\n            <div class=\"modal-footer\">\n                <ng-content select=\"modal-footer\"></ng-content>\n                <button *ngIf=\"cancelButtonLabel\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"close()\">{{ cancelButtonLabel }}</button>\n                <button *ngIf=\"submitButtonLabel\" type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit.emit(undefined)\">{{ submitButtonLabel }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n"
            }),
            __metadata("design:paramtypes", [])
        ], Modal);
        return Modal;
    }());
    exports.Modal = Modal;
});
define("ngx-modal/RouteModal", ["require", "exports", "@angular/core", "@angular/router"], function (require, exports, core_2, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RouteModal = /** @class */ (function () {
        // -------------------------------------------------------------------------
        // Constructor
        // -------------------------------------------------------------------------
        function RouteModal(router, activatedRoute) {
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.closeOnEscape = true;
            this.closeOnOutsideClick = true;
            this.hideCloseButton = false;
            this.backdrop = true;
            // -------------------------------------------------------------------------
            // Outputs
            // -------------------------------------------------------------------------
            this.onOpen = new core_2.EventEmitter(false);
            this.onClose = new core_2.EventEmitter(false);
            this.onSubmit = new core_2.EventEmitter(false);
            this.isOpened = false;
            this.createBackDrop();
        }
        // -------------------------------------------------------------------------
        // Lifecycle Methods
        // -------------------------------------------------------------------------
        RouteModal.prototype.ngOnInit = function () {
            this.open();
        };
        RouteModal.prototype.ngOnDestroy = function () {
            document.body.className = document.body.className.replace(/modal-open\b/, "");
            if (this.backdropElement && this.backdropElement.parentNode === document.body)
                document.body.removeChild(this.backdropElement);
        };
        // -------------------------------------------------------------------------
        // Public Methods
        // -------------------------------------------------------------------------
        RouteModal.prototype.open = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.isOpened)
                return;
            this.isOpened = true;
            this.onOpen.emit(args);
            document.body.appendChild(this.backdropElement);
            window.setTimeout(function () { return _this.modalRoot.nativeElement.focus(); }, 0);
            document.body.className += " modal-open";
        };
        RouteModal.prototype.close = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!this.isOpened)
                return;
            this.isOpened = false;
            this.onClose.emit(args);
            document.body.className = document.body.className.replace(/modal-open\b/, "");
            if (this.cancelUrl) {
                var navigationExtras = {};
                if (this.cancelUrlExtras) {
                    if (this.cancelUrlExtras.relative) {
                        navigationExtras.relativeTo = this.activatedRoute;
                    }
                    navigationExtras = Object.assign(navigationExtras, this.cancelUrlExtras);
                }
                this.router.navigate(this.cancelUrl, navigationExtras);
            }
            else {
                window.history.back();
            }
        };
        // -------------------------------------------------------------------------
        // Private Methods
        // -------------------------------------------------------------------------
        RouteModal.prototype.preventClosing = function (event) {
            event.stopPropagation();
        };
        RouteModal.prototype.createBackDrop = function () {
            this.backdropElement = document.createElement("div");
            this.backdropElement.classList.add("fade");
            this.backdropElement.classList.add("in");
            if (this.backdrop) {
                this.backdropElement.classList.add("modal-backdrop");
            }
        };
        __decorate([
            core_2.Input(),
            __metadata("design:type", Array)
        ], RouteModal.prototype, "cancelUrl", void 0);
        __decorate([
            core_2.Input(),
            __metadata("design:type", Object)
        ], RouteModal.prototype, "cancelUrlExtras", void 0);
        __decorate([
            core_2.Input(),
            __metadata("design:type", String)
        ], RouteModal.prototype, "modalClass", void 0);
        __decorate([
            core_2.Input(),
            __metadata("design:type", Boolean)
        ], RouteModal.prototype, "closeOnEscape", void 0);
        __decorate([
            core_2.Input(),
            __metadata("design:type", Boolean)
        ], RouteModal.prototype, "closeOnOutsideClick", void 0);
        __decorate([
            core_2.Input(),
            __metadata("design:type", String)
        ], RouteModal.prototype, "title", void 0);
        __decorate([
            core_2.Input(),
            __metadata("design:type", Object)
        ], RouteModal.prototype, "hideCloseButton", void 0);
        __decorate([
            core_2.Input(),
            __metadata("design:type", String)
        ], RouteModal.prototype, "cancelButtonLabel", void 0);
        __decorate([
            core_2.Input(),
            __metadata("design:type", String)
        ], RouteModal.prototype, "submitButtonLabel", void 0);
        __decorate([
            core_2.Input(),
            __metadata("design:type", Boolean)
        ], RouteModal.prototype, "backdrop", void 0);
        __decorate([
            core_2.Output(),
            __metadata("design:type", Object)
        ], RouteModal.prototype, "onOpen", void 0);
        __decorate([
            core_2.Output(),
            __metadata("design:type", Object)
        ], RouteModal.prototype, "onClose", void 0);
        __decorate([
            core_2.Output(),
            __metadata("design:type", Object)
        ], RouteModal.prototype, "onSubmit", void 0);
        __decorate([
            core_2.ViewChild("modalRoot"),
            __metadata("design:type", core_2.ElementRef)
        ], RouteModal.prototype, "modalRoot", void 0);
        RouteModal = __decorate([
            core_2.Component({
                selector: "route-modal",
                template: "\n<div class=\"modal route-modal\" \n     tabindex=\"-1\"\n     role=\"dialog\"\n     #modalRoot\n     (keydown.esc)=\"closeOnEscape ? close() : 0\"\n     [ngClass]=\"{ in: isOpened, fade: isOpened }\"\n     [ngStyle]=\"{ display: isOpened ? 'block' : 'none' }\"\n     (click)=\"closeOnOutsideClick ? close() : 0\">\n    <div [class]=\"'modal-dialog ' + modalClass\" (click)=\"preventClosing($event)\">\n        <div class=\"modal-content\" tabindex=\"0\" *ngIf=\"isOpened\">\n            <div class=\"modal-header\">\n                <button *ngIf=\"!hideCloseButton\" type=\"button\" class=\"close\" data-dismiss=\"modal\" [attr.aria-label]=\"cancelButtonLabel || 'Close'\" (click)=\"close()\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\" *ngIf=\"title\">{{ title }}</h4>\n                <ng-content select=\"modal-header\"></ng-content>\n            </div>\n            <div class=\"modal-body\">\n                <ng-content select=\"modal-content\"></ng-content>\n            </div>\n            <div class=\"modal-footer\">\n                <ng-content select=\"modal-footer\"></ng-content>\n                <button *ngIf=\"cancelButtonLabel\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"close()\">{{ cancelButtonLabel }}</button>\n                <button *ngIf=\"submitButtonLabel\" type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit.emit(undefined)\">{{ submitButtonLabel }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n"
            }),
            __metadata("design:paramtypes", [router_1.Router,
                router_1.ActivatedRoute])
        ], RouteModal);
        return RouteModal;
    }());
    exports.RouteModal = RouteModal;
});
define("ngx-modal/index", ["require", "exports", "ngx-modal/Modal", "ngx-modal/RouteModal", "@angular/core", "@angular/common", "ngx-modal/Modal", "ngx-modal/RouteModal"], function (require, exports, Modal_1, RouteModal_1, core_3, common_1, Modal_2, RouteModal_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Modal = Modal_2.Modal;
    exports.ModalContent = Modal_2.ModalContent;
    exports.ModalFooter = Modal_2.ModalFooter;
    exports.ModalHeader = Modal_2.ModalHeader;
    exports.RouteModal = RouteModal_2.RouteModal;
    var ModalModule = /** @class */ (function () {
        function ModalModule() {
        }
        ModalModule = __decorate([
            core_3.NgModule({
                imports: [common_1.CommonModule],
                declarations: [
                    Modal_1.Modal,
                    RouteModal_1.RouteModal,
                    Modal_1.ModalHeader,
                    Modal_1.ModalContent,
                    Modal_1.ModalFooter,
                ],
                exports: [
                    Modal_1.Modal,
                    RouteModal_1.RouteModal,
                    Modal_1.ModalHeader,
                    Modal_1.ModalContent,
                    Modal_1.ModalFooter,
                ],
            })
        ], ModalModule);
        return ModalModule;
    }());
    exports.ModalModule = ModalModule;
});
define("ngx-modal", ["require", "exports", "ngx-modal/index"], function (require, exports, index_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(index_1);
});
