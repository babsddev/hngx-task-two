const express = require('express')

const {
  getAllPerson,
  createPerson,
  updatePerson,
  deletePerson,
  getSinglePerson,
} = require('../controllers/index')

const router = express.Router()

router.get('/', getAllPerson)
router.get('/:id', getSinglePerson)
router.post('/', createPerson)
router.delete('/:id', deletePerson)
router.patch('/:id', updatePerson)

module.exports = router
