/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CompileReflector, DirectiveResolver, ERROR_COMPONENT_TYPE, NgModuleResolver, PipeResolver } from '@angular/compiler';
import { MockDirectiveResolver, MockNgModuleResolver, MockPipeResolver } from '@angular/compiler/testing';
import { Component, Directive, NgModule, Pipe, ɵstringify } from '@angular/core';
import { MetadataOverrider } from './metadata_overrider';
export var COMPILER_PROVIDERS = [
    { provide: MockPipeResolver, deps: [CompileReflector] },
    { provide: PipeResolver, useExisting: MockPipeResolver },
    { provide: MockDirectiveResolver, deps: [CompileReflector] },
    { provide: DirectiveResolver, useExisting: MockDirectiveResolver },
    { provide: MockNgModuleResolver, deps: [CompileReflector] },
    { provide: NgModuleResolver, useExisting: MockNgModuleResolver },
];
var TestingCompilerFactoryImpl = /** @class */ (function () {
    function TestingCompilerFactoryImpl(_injector, _compilerFactory) {
        this._injector = _injector;
        this._compilerFactory = _compilerFactory;
    }
    TestingCompilerFactoryImpl.prototype.createTestingCompiler = function (options) {
        var compiler = this._compilerFactory.createCompiler(options);
        return new TestingCompilerImpl(compiler, compiler.injector.get(MockDirectiveResolver), compiler.injector.get(MockPipeResolver), compiler.injector.get(MockNgModuleResolver));
    };
    return TestingCompilerFactoryImpl;
}());
export { TestingCompilerFactoryImpl };
var TestingCompilerImpl = /** @class */ (function () {
    function TestingCompilerImpl(_compiler, _directiveResolver, _pipeResolver, _moduleResolver) {
        this._compiler = _compiler;
        this._directiveResolver = _directiveResolver;
        this._pipeResolver = _pipeResolver;
        this._moduleResolver = _moduleResolver;
        this._overrider = new MetadataOverrider();
    }
    Object.defineProperty(TestingCompilerImpl.prototype, "injector", {
        get: function () { return this._compiler.injector; },
        enumerable: true,
        configurable: true
    });
    TestingCompilerImpl.prototype.compileModuleSync = function (moduleType) {
        return this._compiler.compileModuleSync(moduleType);
    };
    TestingCompilerImpl.prototype.compileModuleAsync = function (moduleType) {
        return this._compiler.compileModuleAsync(moduleType);
    };
    TestingCompilerImpl.prototype.compileModuleAndAllComponentsSync = function (moduleType) {
        return this._compiler.compileModuleAndAllComponentsSync(moduleType);
    };
    TestingCompilerImpl.prototype.compileModuleAndAllComponentsAsync = function (moduleType) {
        return this._compiler.compileModuleAndAllComponentsAsync(moduleType);
    };
    TestingCompilerImpl.prototype.getComponentFactory = function (component) {
        return this._compiler.getComponentFactory(component);
    };
    TestingCompilerImpl.prototype.checkOverrideAllowed = function (type) {
        if (this._compiler.hasAotSummary(type)) {
            throw new Error(ɵstringify(type) + " was AOT compiled, so its metadata cannot be changed.");
        }
    };
    TestingCompilerImpl.prototype.overrideModule = function (ngModule, override) {
        this.checkOverrideAllowed(ngModule);
        var oldMetadata = this._moduleResolver.resolve(ngModule, false);
        this._moduleResolver.setNgModule(ngModule, this._overrider.overrideMetadata(NgModule, oldMetadata, override));
        this.clearCacheFor(ngModule);
    };
    TestingCompilerImpl.prototype.overrideDirective = function (directive, override) {
        this.checkOverrideAllowed(directive);
        var oldMetadata = this._directiveResolver.resolve(directive, false);
        this._directiveResolver.setDirective(directive, this._overrider.overrideMetadata(Directive, oldMetadata, override));
        this.clearCacheFor(directive);
    };
    TestingCompilerImpl.prototype.overrideComponent = function (component, override) {
        this.checkOverrideAllowed(component);
        var oldMetadata = this._directiveResolver.resolve(component, false);
        this._directiveResolver.setDirective(component, this._overrider.overrideMetadata(Component, oldMetadata, override));
        this.clearCacheFor(component);
    };
    TestingCompilerImpl.prototype.overridePipe = function (pipe, override) {
        this.checkOverrideAllowed(pipe);
        var oldMetadata = this._pipeResolver.resolve(pipe, false);
        this._pipeResolver.setPipe(pipe, this._overrider.overrideMetadata(Pipe, oldMetadata, override));
        this.clearCacheFor(pipe);
    };
    TestingCompilerImpl.prototype.loadAotSummaries = function (summaries) { this._compiler.loadAotSummaries(summaries); };
    TestingCompilerImpl.prototype.clearCache = function () { this._compiler.clearCache(); };
    TestingCompilerImpl.prototype.clearCacheFor = function (type) { this._compiler.clearCacheFor(type); };
    TestingCompilerImpl.prototype.getComponentFromError = function (error) { return error[ERROR_COMPONENT_TYPE] || null; };
    TestingCompilerImpl.prototype.getModuleId = function (moduleType) {
        return this._moduleResolver.resolve(moduleType, true).id;
    };
    return TestingCompilerImpl;
}());
export { TestingCompilerImpl };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy90ZXN0aW5nL3NyYy9jb21waWxlcl9mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1SCxPQUFPLEVBQUMscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RyxPQUFPLEVBQTZDLFNBQVMsRUFBb0IsU0FBUyxFQUFzRCxRQUFRLEVBQW1CLElBQUksRUFBNEQsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSTVRLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXZELE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFxQjtJQUNsRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO0lBQ3JELEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUM7SUFDdEQsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQztJQUMxRCxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUM7SUFDaEUsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQztJQUN6RCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUM7Q0FDL0QsQ0FB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QUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0QsOENBQWdCLEdBQWhCLFVBQWlCLFNBQXNCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEYsd0NBQVUsR0FBVixjQUFxQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRCwyQ0FBYSxHQUFiLFVBQWMsSUFBZSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV0RSxtREFBcUIsR0FBckIsVUFBc0IsS0FBWSxJQUFJLE1BQU0sQ0FBRSxLQUFhLENBQUMsb0JBQW9CLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTVGLHlDQUFXLEdBQVgsVUFBWSxVQUFxQjtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVSZWZsZWN0b3IsIERpcmVjdGl2ZVJlc29sdmVyLCBFUlJPUl9DT01QT05FTlRfVFlQRSwgTmdNb2R1bGVSZXNvbHZlciwgUGlwZVJlc29sdmVyfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQge01vY2tEaXJlY3RpdmVSZXNvbHZlciwgTW9ja05nTW9kdWxlUmVzb2x2ZXIsIE1vY2tQaXBlUmVzb2x2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3Rlc3RpbmcnO1xuaW1wb3J0IHtDb21waWxlciwgQ29tcGlsZXJGYWN0b3J5LCBDb21waWxlck9wdGlvbnMsIENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgRGlyZWN0aXZlLCBJbmplY3RhYmxlLCBJbmplY3RvciwgTW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllcywgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeSwgUGlwZSwgUGxhdGZvcm1SZWYsIFN0YXRpY1Byb3ZpZGVyLCBUeXBlLCBjcmVhdGVQbGF0Zm9ybUZhY3RvcnksIMm1c3RyaW5naWZ5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWV0YWRhdGFPdmVycmlkZSwgybVUZXN0aW5nQ29tcGlsZXIgYXMgVGVzdGluZ0NvbXBpbGVyLCDJtVRlc3RpbmdDb21waWxlckZhY3RvcnkgYXMgVGVzdGluZ0NvbXBpbGVyRmFjdG9yeX0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7ybVDb21waWxlckltcGwgYXMgQ29tcGlsZXJJbXBsLCDJtXBsYXRmb3JtQ29yZUR5bmFtaWMgYXMgcGxhdGZvcm1Db3JlRHluYW1pY30gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcblxuaW1wb3J0IHtNZXRhZGF0YU92ZXJyaWRlcn0gZnJvbSAnLi9tZXRhZGF0YV9vdmVycmlkZXInO1xuXG5leHBvcnQgY29uc3QgQ09NUElMRVJfUFJPVklERVJTOiBTdGF0aWNQcm92aWRlcltdID0gW1xuICB7cHJvdmlkZTogTW9ja1BpcGVSZXNvbHZlciwgZGVwczogW0NvbXBpbGVSZWZsZWN0b3JdfSxcbiAge3Byb3ZpZGU6IFBpcGVSZXNvbHZlciwgdXNlRXhpc3Rpbmc6IE1vY2tQaXBlUmVzb2x2ZXJ9LFxuICB7cHJvdmlkZTogTW9ja0RpcmVjdGl2ZVJlc29sdmVyLCBkZXBzOiBbQ29tcGlsZVJlZmxlY3Rvcl19LFxuICB7cHJvdmlkZTogRGlyZWN0aXZlUmVzb2x2ZXIsIHVzZUV4aXN0aW5nOiBNb2NrRGlyZWN0aXZlUmVzb2x2ZXJ9LFxuICB7cHJvdmlkZTogTW9ja05nTW9kdWxlUmVzb2x2ZXIsIGRlcHM6IFtDb21waWxlUmVmbGVjdG9yXX0sXG4gIHtwcm92aWRlOiBOZ01vZHVsZVJlc29sdmVyLCB1c2VFeGlzdGluZzogTW9ja05nTW9kdWxlUmVzb2x2ZXJ9LFxuXTtcblxuZXhwb3J0IGNsYXNzIFRlc3RpbmdDb21waWxlckZhY3RvcnlJbXBsIGltcGxlbWVudHMgVGVzdGluZ0NvbXBpbGVyRmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBfY29tcGlsZXJGYWN0b3J5OiBDb21waWxlckZhY3RvcnkpIHt9XG5cbiAgY3JlYXRlVGVzdGluZ0NvbXBpbGVyKG9wdGlvbnM6IENvbXBpbGVyT3B0aW9uc1tdKTogVGVzdGluZ0NvbXBpbGVyIHtcbiAgICBjb25zdCBjb21waWxlciA9IDxDb21waWxlckltcGw+dGhpcy5fY29tcGlsZXJGYWN0b3J5LmNyZWF0ZUNvbXBpbGVyKG9wdGlvbnMpO1xuICAgIHJldHVybiBuZXcgVGVzdGluZ0NvbXBpbGVySW1wbChcbiAgICAgICAgY29tcGlsZXIsIGNvbXBpbGVyLmluamVjdG9yLmdldChNb2NrRGlyZWN0aXZlUmVzb2x2ZXIpLFxuICAgICAgICBjb21waWxlci5pbmplY3Rvci5nZXQoTW9ja1BpcGVSZXNvbHZlciksIGNvbXBpbGVyLmluamVjdG9yLmdldChNb2NrTmdNb2R1bGVSZXNvbHZlcikpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXN0aW5nQ29tcGlsZXJJbXBsIGltcGxlbWVudHMgVGVzdGluZ0NvbXBpbGVyIHtcbiAgcHJpdmF0ZSBfb3ZlcnJpZGVyID0gbmV3IE1ldGFkYXRhT3ZlcnJpZGVyKCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfY29tcGlsZXI6IENvbXBpbGVySW1wbCwgcHJpdmF0ZSBfZGlyZWN0aXZlUmVzb2x2ZXI6IE1vY2tEaXJlY3RpdmVSZXNvbHZlcixcbiAgICAgIHByaXZhdGUgX3BpcGVSZXNvbHZlcjogTW9ja1BpcGVSZXNvbHZlciwgcHJpdmF0ZSBfbW9kdWxlUmVzb2x2ZXI6IE1vY2tOZ01vZHVsZVJlc29sdmVyKSB7fVxuICBnZXQgaW5qZWN0b3IoKTogSW5qZWN0b3IgeyByZXR1cm4gdGhpcy5fY29tcGlsZXIuaW5qZWN0b3I7IH1cblxuICBjb21waWxlTW9kdWxlU3luYzxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTogTmdNb2R1bGVGYWN0b3J5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGlsZXIuY29tcGlsZU1vZHVsZVN5bmMobW9kdWxlVHlwZSk7XG4gIH1cblxuICBjb21waWxlTW9kdWxlQXN5bmM8VD4obW9kdWxlVHlwZTogVHlwZTxUPik6IFByb21pc2U8TmdNb2R1bGVGYWN0b3J5PFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBpbGVyLmNvbXBpbGVNb2R1bGVBc3luYyhtb2R1bGVUeXBlKTtcbiAgfVxuICBjb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c1N5bmM8VD4obW9kdWxlVHlwZTogVHlwZTxUPik6IE1vZHVsZVdpdGhDb21wb25lbnRGYWN0b3JpZXM8VD4ge1xuICAgIHJldHVybiB0aGlzLl9jb21waWxlci5jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c1N5bmMobW9kdWxlVHlwZSk7XG4gIH1cblxuICBjb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c0FzeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOlxuICAgICAgUHJvbWlzZTxNb2R1bGVXaXRoQ29tcG9uZW50RmFjdG9yaWVzPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBpbGVyLmNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmMobW9kdWxlVHlwZSk7XG4gIH1cblxuICBnZXRDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBvbmVudDogVHlwZTxUPik6IENvbXBvbmVudEZhY3Rvcnk8VD4ge1xuICAgIHJldHVybiB0aGlzLl9jb21waWxlci5nZXRDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG4gIH1cblxuICBjaGVja092ZXJyaWRlQWxsb3dlZCh0eXBlOiBUeXBlPGFueT4pIHtcbiAgICBpZiAodGhpcy5fY29tcGlsZXIuaGFzQW90U3VtbWFyeSh0eXBlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke8m1c3RyaW5naWZ5KHR5cGUpfSB3YXMgQU9UIGNvbXBpbGVkLCBzbyBpdHMgbWV0YWRhdGEgY2Fubm90IGJlIGNoYW5nZWQuYCk7XG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGVNb2R1bGUobmdNb2R1bGU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8TmdNb2R1bGU+KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja092ZXJyaWRlQWxsb3dlZChuZ01vZHVsZSk7XG4gICAgY29uc3Qgb2xkTWV0YWRhdGEgPSB0aGlzLl9tb2R1bGVSZXNvbHZlci5yZXNvbHZlKG5nTW9kdWxlLCBmYWxzZSk7XG4gICAgdGhpcy5fbW9kdWxlUmVzb2x2ZXIuc2V0TmdNb2R1bGUoXG4gICAgICAgIG5nTW9kdWxlLCB0aGlzLl9vdmVycmlkZXIub3ZlcnJpZGVNZXRhZGF0YShOZ01vZHVsZSwgb2xkTWV0YWRhdGEsIG92ZXJyaWRlKSk7XG4gICAgdGhpcy5jbGVhckNhY2hlRm9yKG5nTW9kdWxlKTtcbiAgfVxuICBvdmVycmlkZURpcmVjdGl2ZShkaXJlY3RpdmU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8RGlyZWN0aXZlPik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tPdmVycmlkZUFsbG93ZWQoZGlyZWN0aXZlKTtcbiAgICBjb25zdCBvbGRNZXRhZGF0YSA9IHRoaXMuX2RpcmVjdGl2ZVJlc29sdmVyLnJlc29sdmUoZGlyZWN0aXZlLCBmYWxzZSk7XG4gICAgdGhpcy5fZGlyZWN0aXZlUmVzb2x2ZXIuc2V0RGlyZWN0aXZlKFxuICAgICAgICBkaXJlY3RpdmUsIHRoaXMuX292ZXJyaWRlci5vdmVycmlkZU1ldGFkYXRhKERpcmVjdGl2ZSwgb2xkTWV0YWRhdGEgISwgb3ZlcnJpZGUpKTtcbiAgICB0aGlzLmNsZWFyQ2FjaGVGb3IoZGlyZWN0aXZlKTtcbiAgfVxuICBvdmVycmlkZUNvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8Q29tcG9uZW50Pik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tPdmVycmlkZUFsbG93ZWQoY29tcG9uZW50KTtcbiAgICBjb25zdCBvbGRNZXRhZGF0YSA9IHRoaXMuX2RpcmVjdGl2ZVJlc29sdmVyLnJlc29sdmUoY29tcG9uZW50LCBmYWxzZSk7XG4gICAgdGhpcy5fZGlyZWN0aXZlUmVzb2x2ZXIuc2V0RGlyZWN0aXZlKFxuICAgICAgICBjb21wb25lbnQsIHRoaXMuX292ZXJyaWRlci5vdmVycmlkZU1ldGFkYXRhKENvbXBvbmVudCwgb2xkTWV0YWRhdGEgISwgb3ZlcnJpZGUpKTtcbiAgICB0aGlzLmNsZWFyQ2FjaGVGb3IoY29tcG9uZW50KTtcbiAgfVxuICBvdmVycmlkZVBpcGUocGlwZTogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxQaXBlPik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tPdmVycmlkZUFsbG93ZWQocGlwZSk7XG4gICAgY29uc3Qgb2xkTWV0YWRhdGEgPSB0aGlzLl9waXBlUmVzb2x2ZXIucmVzb2x2ZShwaXBlLCBmYWxzZSk7XG4gICAgdGhpcy5fcGlwZVJlc29sdmVyLnNldFBpcGUocGlwZSwgdGhpcy5fb3ZlcnJpZGVyLm92ZXJyaWRlTWV0YWRhdGEoUGlwZSwgb2xkTWV0YWRhdGEsIG92ZXJyaWRlKSk7XG4gICAgdGhpcy5jbGVhckNhY2hlRm9yKHBpcGUpO1xuICB9XG4gIGxvYWRBb3RTdW1tYXJpZXMoc3VtbWFyaWVzOiAoKSA9PiBhbnlbXSkgeyB0aGlzLl9jb21waWxlci5sb2FkQW90U3VtbWFyaWVzKHN1bW1hcmllcyk7IH1cbiAgY2xlYXJDYWNoZSgpOiB2b2lkIHsgdGhpcy5fY29tcGlsZXIuY2xlYXJDYWNoZSgpOyB9XG4gIGNsZWFyQ2FjaGVGb3IodHlwZTogVHlwZTxhbnk+KSB7IHRoaXMuX2NvbXBpbGVyLmNsZWFyQ2FjaGVGb3IodHlwZSk7IH1cblxuICBnZXRDb21wb25lbnRGcm9tRXJyb3IoZXJyb3I6IEVycm9yKSB7IHJldHVybiAoZXJyb3IgYXMgYW55KVtFUlJPUl9DT01QT05FTlRfVFlQRV0gfHwgbnVsbDsgfVxuXG4gIGdldE1vZHVsZUlkKG1vZHVsZVR5cGU6IFR5cGU8YW55Pik6IHN0cmluZ3x1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tb2R1bGVSZXNvbHZlci5yZXNvbHZlKG1vZHVsZVR5cGUsIHRydWUpLmlkO1xuICB9XG59XG4iXX0=