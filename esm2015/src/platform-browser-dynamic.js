/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ResourceLoader } from '@angular/compiler';
import { createPlatformFactory } from '@angular/core';
import { platformCoreDynamic } from './platform_core_dynamic';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from './platform_providers';
import { CachedResourceLoader } from './resource_loader/resource_loader_cache';
export { ɵCompilerImpl, ɵplatformCoreDynamic, ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, ɵResourceLoaderImpl } from './private_export';
export { VERSION } from './version';
export { JitCompilerFactory } from './compiler_factory';
/**
 * \@publicApi
 * @type {?}
 */
export const RESOURCE_CACHE_PROVIDER = [{ provide: ResourceLoader, useClass: CachedResourceLoader, deps: [] }];
/**
 * \@publicApi
 * @type {?}
 */
export const platformBrowserDynamic = createPlatformFactory(platformCoreDynamic, 'browserDynamic', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0tYnJvd3Nlci1keW5hbWljLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLyIsInNvdXJjZXMiOlsicGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3NyYy9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUF5RCxxQkFBcUIsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUUxSCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsMkNBQTJDLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUU3RSx1SEFBYyxrQkFBa0IsQ0FBQztBQUNqQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDOzs7OztBQUt0RCxNQUFNLE9BQU8sdUJBQXVCLEdBQ2hDLENBQUMsRUFBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7Ozs7O0FBS3pFLE1BQU0sT0FBTyxzQkFBc0IsR0FBRyxxQkFBcUIsQ0FDdkQsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsMkNBQTJDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UmVzb3VyY2VMb2FkZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCB7Q29tcGlsZXJGYWN0b3J5LCBQbGF0Zm9ybVJlZiwgUHJvdmlkZXIsIFN0YXRpY1Byb3ZpZGVyLCBjcmVhdGVQbGF0Zm9ybUZhY3RvcnksIHBsYXRmb3JtQ29yZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7cGxhdGZvcm1Db3JlRHluYW1pY30gZnJvbSAnLi9wbGF0Zm9ybV9jb3JlX2R5bmFtaWMnO1xuaW1wb3J0IHtJTlRFUk5BTF9CUk9XU0VSX0RZTkFNSUNfUExBVEZPUk1fUFJPVklERVJTfSBmcm9tICcuL3BsYXRmb3JtX3Byb3ZpZGVycyc7XG5pbXBvcnQge0NhY2hlZFJlc291cmNlTG9hZGVyfSBmcm9tICcuL3Jlc291cmNlX2xvYWRlci9yZXNvdXJjZV9sb2FkZXJfY2FjaGUnO1xuXG5leHBvcnQgKiBmcm9tICcuL3ByaXZhdGVfZXhwb3J0JztcbmV4cG9ydCB7VkVSU0lPTn0gZnJvbSAnLi92ZXJzaW9uJztcbmV4cG9ydCB7Sml0Q29tcGlsZXJGYWN0b3J5fSBmcm9tICcuL2NvbXBpbGVyX2ZhY3RvcnknO1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IFJFU09VUkNFX0NBQ0hFX1BST1ZJREVSOiBQcm92aWRlcltdID1cbiAgICBbe3Byb3ZpZGU6IFJlc291cmNlTG9hZGVyLCB1c2VDbGFzczogQ2FjaGVkUmVzb3VyY2VMb2FkZXIsIGRlcHM6IFtdfV07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyA9IGNyZWF0ZVBsYXRmb3JtRmFjdG9yeShcbiAgICBwbGF0Zm9ybUNvcmVEeW5hbWljLCAnYnJvd3NlckR5bmFtaWMnLCBJTlRFUk5BTF9CUk9XU0VSX0RZTkFNSUNfUExBVEZPUk1fUFJPVklERVJTKTtcbiJdfQ==