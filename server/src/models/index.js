const User = require('./user.model');
const Category = require('./category.model');
const Product = require('./product.model');
const { Order, OrderItem } = require('./order.model');

// Define relationships
Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(OrderItem, { foreignKey: 'productId' });
OrderItem.belongsTo(Product, { foreignKey: 'productId' });

module.exports = {
  User,
  Category,
  Product,
  Order,
  OrderItem,
};
