/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/query_list';
import * as import9 from '../src/chart.component';
import * as import10 from '../src/chart.component.ngfactory';
import * as import11 from '@angular/core/src/linker/element_ref';
import * as import12 from '@angular/core/src/zone/ng_zone';
export class Wrapper_AppComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AppComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.AppComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_AppComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AppComponent>;
  _AppComponent_0_3:Wrapper_AppComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent_Host0,renderType_AppComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AppComponent0(this.viewUtils,this,0,this._el_0);
    this._AppComponent_0_3 = new Wrapper_AppComponent();
    this.compView_0.create(this._AppComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._AppComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AppComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AppComponentNgFactory:import7.ComponentFactory<import0.AppComponent> = new import7.ComponentFactory<import0.AppComponent>('app',View_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = ([] as any[]);
var renderType_AppComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_AppComponent,{});
export class View_AppComponent0 extends import1.AppView<import0.AppComponent> {
  _viewQuery_ChartComponent_0:import8.QueryList<any>;
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import1.AppView<import9.ChartComponent>;
  _ChartComponent_2_3:import10.Wrapper_ChartComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent0,renderType_AppComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_ChartComponent_0 = new import8.QueryList<any>();
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'button',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Change',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,parentRenderNode,'chart',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_2 = new import10.View_ChartComponent0(this.viewUtils,this,2,this._el_2);
    this._ChartComponent_2_3 = new import10.Wrapper_ChartComponent(new import11.ElementRef(this._el_2),this.parentView.injectorGet(import12.NgZone,this.parentIndex));
    this.compView_2.create(this._ChartComponent_2_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this._viewQuery_ChartComponent_0.reset([this._ChartComponent_2_3.context]);
    this.context.chartComponent = this._viewQuery_ChartComponent_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.ChartComponent) && (2 === requestNodeIndex))) { return this._ChartComponent_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.type;
    this._ChartComponent_2_3.check_type(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.context.data;
    this._ChartComponent_2_3.check_data(currVal_2_0_1,throwOnChange,false);
    const currVal_2_0_2:any = this.context.options;
    this._ChartComponent_2_3.check_options(currVal_2_0_2,throwOnChange,false);
    this._ChartComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
    this._ChartComponent_2_3.ngOnDestroy();
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.change()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}