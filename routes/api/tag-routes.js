const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//TODO JOIN PRODUCT DATA IN GET ROUTES

//TODO JOIN product data.
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll();
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const singleTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'tagged_products' }]
    });
       if (!singleTag) {
      res.status(404).json({ message: 'No Tag found!' });
      return;
    }
    res.status(200).json(singleTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

//works
router.post('/', async (req, res) => {
  // create a new tag
  try { 
    const makeTag = await Tag.create(req.body);
    res.status(200).json(makeTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

//works
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!updateTag) {
      res.status(404).json({ message: 'no Tag found!' });
      return;
    }
    res.status(200).json(updateTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

//works
router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({ where: { id: req.params.id } })
    if (!deleteTag) {
      res.status(404).json({ message: 'No Tag found!' });
      return;
  }
  res.status(200).json('Deleted tag!');
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;
