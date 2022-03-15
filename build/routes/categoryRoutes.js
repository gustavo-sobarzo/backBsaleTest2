"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = require("../controllers/categoryController");
class CategoryRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', categoryController_1.categoryController.categoryIndex);
    }
}
const categoryRoutes = new CategoryRoutes();
exports.default = categoryRoutes.router;
