import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import tippy from 'tippy.js'

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements AfterViewInit, OnChanges {
  @Input('appToolTip') toolTipContent: string;
  public tippyInstance: any;
  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
   this.tippyInstance = tippy(this.elRef.nativeElement, {
      content: this.toolTipContent
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['toolTipContent']){
      this.updateToolTipConent()
    }
  }

  updateToolTipConent() {
    if(this.tippyInstance) {
      this.tippyInstance.setContent(this.toolTipContent)
    }
  }
}
