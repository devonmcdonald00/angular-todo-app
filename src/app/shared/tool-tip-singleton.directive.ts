import { AfterViewInit, ContentChildren, Directive, QueryList } from '@angular/core';
import { createSingleton } from 'tippy.js';
import { ToolTipDirective } from './tool-tip.directive';

@Directive({
  selector: '[appToolTipSingleton]'
})
export class ToolTipSingletonDirective implements AfterViewInit {

  @ContentChildren(ToolTipDirective, {descendants: true})
  elementsWithTooltips: QueryList<ToolTipDirective>
  singletonInstance: any;
  constructor() { }

  ngAfterViewInit() {
    console.log(this.elementsWithTooltips)
    this.singletonInstance = createSingleton(this.getTippyInstances(), {
      moveTransition: 'transform 0.2s ease-out',
      delay: [200, 0]
    })

    this.elementsWithTooltips.changes.subscribe(() => {
      this.singletonInstance.setInstances(this.getTippyInstances())
    })
  }

  getTippyInstances() {
    return this.elementsWithTooltips.toArray().map((t) => {
      return t.tippyInstance;
    })
  }
}
