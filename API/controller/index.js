const express = require('express');

const path = require('path');

const parser = require('body-parser');

const router = express.Router();

const {User, Product, Cart} = require('../model');

const user = new User();

const product = new Product();

const cart = new Cart();

router.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})

// =========USER's Router========
// Register user
router.post('/register', parser.json(), (req, res)=> {
    user.createUser(req, res);
})
// Login
router.post('/login', parser.json(), (req, res)=>{
    user.login(req, res);
})
// View all users
router.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
})
// View single user
router.get('/user/:id', 
(req, res)=> {
    user.fetchUser(req, res);
})
// Update users
router.put('/user/:id',parser.json(), (req, res)=>{
    user.updateUser(req, res);
})
// Delete user
router.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
});

// =====Products======
// Create a new product
router.post('/product', 
parser.json(), 
(req, res)=> {
    product.addProduct(req, res);
})
// View all products
router.get('/products', (req, res)=> {
    product.fetchProducts(req, res);
})
// View a single product
router.get('/product/:id', 
(req, res)=> {
    product.fetchProduct(req, res);
})
// Update a product
router.put('/product/:id', 
parser.json(),
(req, res)=> {
    product.updateProduct(req, res);
})
// Delete a product
router.delete('/product/:id', 
(req, res)=> {
    product.deleteProduct(req, res);
});

// =========CART===============
// Add item to cart
router.post('/cart', 
parser.json(), 
(req, res)=> {
    cart.addToCart(req, res);
})

// Show user cart
router.get('/user/:id/carts', (req, res)=> {
    cart.showCart(req, res);
})
// Delete all items from cart
router.delete('/user/:id/cart', (req, res) => {
    cart.deleteAllCart(req, res);
})

// Delete single item from cart
router.delete('/user/:id/cart/:id', (req, res) => {
    cart.deleteItemCart(req, res);
})
module.exports = router;