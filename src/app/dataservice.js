"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataService = (function () {
    function DataService() {
        this.data = [];
    }
    DataService.prototype.addData = function (msg) {
        this.data.push(msg);
    };
    DataService.prototype.getData = function () {
        return this.data;
    };
    DataService.prototype.deleteMsg = function (msg) {
        var index = this.data.indexOf(msg);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable()
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=dataservice.js.map