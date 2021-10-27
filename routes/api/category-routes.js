const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singleCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
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
  try { 
    const makeCategory= await Category.create(req.body);
    res.status(200).json(makeCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
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
    res.status(200).json('Updated Category!');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({ where: { id: req.params.id } })
    if (!deleteCategory) {
      res.status(404).json({ message: 'No Category found!' });
      return;
  }
  res.status(200).json(`Deleted Category!`);
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;
