// const personModule = require('../model/model')
const personModule = require('../models/index')

const getAllPerson = async (req, res) => {
  try {
    const user = await personModule.find()
    if (!user) {
      res.status().send('no user found')
    }
    res.status(200).send({ user: user })
  } catch (error) {
    console.log(error)
    return res.status(500).send('something went wrong')
  }
}

const getSinglePerson = async (req, res) => {
  try {
    const id = req.params.id
    if (!id) {
      res.status().send('no id provided')
    }
    const user = await personModule.findById(id)
    res.status(200).send({ user: user })
  } catch (error) {
    console.log(error)
    return res.status(500).send('something went wrong')
  }
}

const createPerson = async (req, res) => {
  try {
    const { name } = req.body
    if (!name) {
      res.status().send('no field provided')
    }
    const user = await personModule.create({ name })
    if (!user) {
      res.status().send('could not create user')
    }
    res.status(200).send({ user: user })
  } catch (error) {
    console.log(error)
    return res.status(500).send('something went wrong')
  }
}

const updatePerson = async (req, res) => {
  try {
    const id = req.params.id
    if (!id) {
      res.status().send('no id provided')
    }
    const user = await personModule.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!user) {
      res.status().send('could not update')
    }
    res.status(200).send({ user: user })
  } catch (error) {
    console.log(error)
    return res.status(500).send('something went wrong')
  }
}

const deletePerson = async (req, res) => {
  try {
    const id = req.params.id
    if (!id) {
      res.status().send('no id provided')
    }
    await personModule.findByIdAndDelete({ _id: id })
    res.status(200).send('done')
  } catch (error) {
    console.log(error)
    return res.status(500).send('something went wrong')
  }
}

module.exports = {
  getAllPerson,
  createPerson,
  updatePerson,
  deletePerson,
  getSinglePerson,
}
