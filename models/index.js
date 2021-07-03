// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  //foreign keys
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  //foreign keys
});


//Many to Many
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
  through: {
      model: ProductTag,
      unique: false
    },
    as: 'tagged_products' 
  });
  //ProductTag id.
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: {
    model: ProductTag,
    unique: false,
},
as: 'tagged_products'
});
  //Foreign Keys

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
