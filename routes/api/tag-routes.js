const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({ include: [{ model: Product }] });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const singleTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
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


router.post('/', async (req, res) => {
try { 
    const makeTag = await Tag.create(req.body);
    res.status(200).json(makeTag);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
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
    res.status(200).json('Updated Tag!');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
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
