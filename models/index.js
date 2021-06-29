// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  //foreign keys
});

// Categories have many Products
Category.hasMany(Product, {
  //foreign keys
});


//Many to Many
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  //ProductTag id.
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  //Foreign Keys
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
