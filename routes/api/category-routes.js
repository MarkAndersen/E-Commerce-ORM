const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint
//TODO: JOIN ASSOCIATED DATA

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories = await Category.findAll({
      // include: [{ model: Tag, through: ProductTag, as: 'product_tag'}]
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const singleCategory = await Category.findByPk(req.params.id, {
      // include: [{ model: Product, through: Product, as: 'categorized_products'}]
    });
       if (!singleCategory) {
      res.status(404).json({ message: 'No Category found!' });
      return;
    }
    res.status(200).json(singleCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try { 
    const makeCategory= await Category.create(req.body);
    res.status(200).json(makeCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCatgeory = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!updateCatgeory) {
      res.status(404).json({ message: 'no Category found!' });
      return;
    }
    res.status(200).json(updateCatgeory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({ where: { id: req.params.id } })
    if (!deleteCategory) {
      res.status(404).json({ message: 'No Category found!' });
      return;
  }
  res.status(200).json('Deleted Category!');
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;
