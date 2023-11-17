"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express = __importStar(require("express"));
const items_1 = require("../controllers/items");
const router = (0, express_1.Router)();
exports.router = router;
router.use(express.json());
router.get('/', (req, res) => { (0, items_1.getItems)(req, res, "posts"); });
router.get('/:id', (req, res) => { (0, items_1.getItemById)(req, res, "posts"); });
router.post('/', (req, res) => { (0, items_1.createItem)(req, res, "posts"); });
router.put('/:id', (req, res) => { (0, items_1.updateItem)(req, res, "posts"); });
router.delete('/:id', (req, res) => { (0, items_1.deleteItem)(req, res, "posts"); });
router.get('/search', (req, res) => {
    (0, items_1.searchItem)(req, res, "posts");
});
//# sourceMappingURL=posts.js.map