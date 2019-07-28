import { EventEmitter, ElementRef, OnDestroy, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
export declare class RouteModal implements OnInit, OnDestroy {
    private router;
    private activatedRoute;
    cancelUrl: any[];
    cancelUrlExtras: {
        relative: boolean;
    } & NavigationExtras;
    modalClass: string;
    closeOnEscape: boolean;
    closeOnOutsideClick: boolean;
    title: string;
    hideCloseButton: boolean;
    cancelButtonLabel: string;
    submitButtonLabel: string;
    backdrop: boolean;
    onOpen: EventEmitter<{}>;
    onClose: EventEmitter<{}>;
    onSubmit: EventEmitter<{}>;
    modalRoot: ElementRef;
    isOpened: boolean;
    private backdropElement;
    constructor(router: Router, activatedRoute: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
    open(...args: any[]): void;
    close(...args: any[]): void;
    preventClosing(event: MouseEvent): void;
    private createBackDrop;
}
