System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.tasks = [];
                }
                AppComponent.prototype.add = function () {
                    if (this.txtTask != '') {
                        this.tasks.push(this.txtTask);
                        this.txtTask = '';
                    }
                };
                AppComponent.prototype.remove = function (index) {
                    this.tasks.splice(index, 1);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t<h1>Angular 2- Second Class</h1>\n\t<h2>Todo List</h2>\n\t<ul>\n\t\t<li *ngFor=\"#task of tasks; #i = index\">\n\t\t\t{{task}} <a href=\"#\" (click)=\"remove(i)\">[ X ]</a>\n\t\t</li>\n\t</ul>\n\t<input type=\"text\" name=\"task\" placeholder=\"Enter your task...\"\n\t\t[(ngModel)]=\"txtTask\">\n\t<button (click)=\"add()\">Adicionar</button>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-component.js.map