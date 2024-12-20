const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const { auth, adminAuth } = require('../middleware/auth');

// User routes
router.post('/', auth, orderController.createOrder);
router.get('/user', auth, orderController.getUserOrders);
router.get('/user/:id', auth, orderController.getOrderById);

// Admin routes
router.get('/', adminAuth, orderController.getAllOrders);
router.put('/:id/status', adminAuth, orderController.updateOrderStatus);

module.exports = router;
