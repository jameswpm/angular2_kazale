System.register(['angular2/core', './client'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, client_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (client_1_1) {
                client_1 = client_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.txtList = 'Clients List';
                    this.clients = [
                        new client_1.Client(1, 'Fulano'),
                        new client_1.Client(2, 'Ciclano')
                    ];
                    this.client = this.clients[0];
                }
                AppComponent.prototype.select = function (index) {
                    if (index < this.clients.length) {
                        this.client = this.clients[index];
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>Angular 2 - Third Class</h1>\n  \t\t\t<h2>{{txtList | uppercase}}</h2>\n  \t\t\t<p>Selected Client: {{client.name}}</p>\n  \t\t\t<ul>\n  \t\t\t\t<li *ngFor=\"#cli of clients; #i = index\">\n\t\t\t\t\t<a href=\"#\" (click)=\"select(i)\">{{cli.id}} - {{cli.name}}</a>\n  \t\t\t\t</li>\n  \t\t\t</ul>"
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