import { Directive, ElementRef, Renderer2, Input, Output, EventEmitter, HostListener } from '@angular/core';


@Directive({
    selector: '[formatPhoneNumber]'
})

export class FormatPhoneNumber {

    @Input() public shouldTrimStrating0or1: boolean;
    @Output() public updateModel: EventEmitter<string> = new EventEmitter();

    
    private oldElementValue: string = '';
    private pasteEventOccured: boolean = false;
    private backspaceOccured: boolean= false;

    constructor(
       private element: ElementRef,
       private renderer: Renderer2

    ){}

    // @HostListener('keydown', ['$event'])
    // public onKeyDown(keyEvent: any) : void {
    //     this.in
    // }
}