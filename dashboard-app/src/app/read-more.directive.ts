
import { Component, Input,OnChanges} from '@angular/core';
@Component({    
    selector: 'read-more',
    template: `
        <div [innerHTML]="currentText"></div>
        <span *ngIf="showToggleButton">
            <a (click)="toggleView()" style="color: blue">Read {{isCollapsed? 'more':'less'}}</a>
        </span>`
})

export class ReadMoreDirective implements OnChanges {

    @Input('text') text: any  = '';
    @Input('maxLength') maxLength: number = 100;
    @Input('showToggleButton')showToggleButton:boolean = false;

    currentText: string = '';

    public isCollapsed: boolean = true;

    constructor(
        //private elementRef: ElementRef
    ) {

    }
    toggleView() {
        this.isCollapsed = !this.isCollapsed;
        this.determineView();
    }

    determineView() {

        if (this.text.length <= this.maxLength) {
            this.currentText = this.text;
            this.isCollapsed = false;
            return;
        }

        if (this.isCollapsed == true) {
            this.currentText = this.text.substring(0, this.maxLength) + "...";
        } else if(this.isCollapsed == false)  {
            this.currentText = this.text;
        }

    }

    ngOnChanges() {
        if(!this.validateSource(this.text)) {
            //throw 'Source must be a string.';
            console.error('Source must be a string.');
        }
        else{
            this.determineView();
        }
    }

    validateSource(s: any) {
        if(typeof s !== 'string') {
            return false;
        } else {
            return true;
        }
    }
}