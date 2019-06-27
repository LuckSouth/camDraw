import { NgModule } from '@angular/core';
import { CanvasDraw } from './canvas-draw/canvas-draw';
import { ExitCanvasDrawComponent } from './exit-canvas-draw/exit-canvas-draw';
@NgModule({
	declarations: [CanvasDraw,
    ExitCanvasDrawComponent],
	imports: [],
	exports: [CanvasDraw,
    ExitCanvasDrawComponent]
})
export class ComponentsModule {}
