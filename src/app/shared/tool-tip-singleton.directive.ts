import { AfterViewInit, ContentChildren, Directive, QueryList } from '@angular/core';
import { createSingleton } from 'tippy.js';
import { ToolTipDirective } from './tool-tip.directive';

@Directive({
  selector: '[appToolTipSingleton]'
})
export class ToolTipSingletonDirective implements AfterViewInit {

  @ContentChildren(ToolTipDirective, {descendants: true})
  elementsWithTooltips: QueryList<ToolTipDirective>
  constructor() { }

  ngAfterViewInit() {
    console.log(this.elementsWithTooltips)
    createSingleton(this.getTippyInstances(), {
      moveTransition: 'transform 0.2s ease-out',
      delay: [200, 0]
    })
  }

  getTippyInstances() {
    return this.elementsWithTooltips.toArray().map((t) => {
      return t.tippyInstance;
    })
  }
}
