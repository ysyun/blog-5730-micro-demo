import {
    Compiler,
    Injectable,
    Injector,
    NgModuleFactory,
    Type,
    ViewContainerRef,
    ComponentRef,
    ComponentFactory,
    ComponentFactoryResolver,
} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LazyLoaderService {
    constructor(private compiler: Compiler, private injector: Injector, private resolver: ComponentFactoryResolver) {}

    loadModule(path: any, viewContainer: ViewContainerRef): void {
        (path() as Promise<Type<any>>)
            .then((elementModule) => {
                try {
                    return this.compiler.compileModuleAsync(elementModule);
                } catch (err) {
                    throw err;
                }
            })
            .then((moduleFactory) => {
                try {
                    const elementModuleRef = moduleFactory.create(this.injector);
                    const moduleInstance = elementModuleRef.instance;

                    // instantiate component dynamically.
                    this.addComponent(moduleInstance.bootstrapComponent(), viewContainer);
                } catch (err) {
                    throw err;
                }
            });
    }

    addComponent(cmpType: any, viewContainer: ViewContainerRef): ComponentRef<any> {
        const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(cmpType);
        let cmp: ComponentRef<any>;
        if (viewContainer) {
            viewContainer.clear();
            cmp = viewContainer.createComponent(factory);
        }
        return cmp;
    }
}
