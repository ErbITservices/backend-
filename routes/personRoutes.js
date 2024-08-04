const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const Person = require(`./../models/Person`);



router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    console.log("data save");
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await Person.find();
    console.log('data fatch');
    res.status(200).json(data);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == 'Engineer' || workType == "Doctor" || workType== 'Teacher') {
      const data = await Person.find({ work: workType });
      console.log('data fatch');
      res.status(202).json(data);
    } else {
      res.status(404).json({ error: "Invalid Work Type!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const updateField = req.body;
    const response = await Person.findByIdAndUpdate(personId, updateField, {
      new: true,
      runValidators: true
    });
    console.log("data updated");
    res.status(200).json(response);
    
    if (!response) {
      return res.status(404).json({ message: 'Person not found!' });

    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const reminder = await Person.findOneAndDelete(personId);
    if (!reminder) {
      return res.status(404).json({ message: "No Menu with this ID" });
    }
    console.log('data deleted');
    res.status(200).json({ message: 'person deleted success' });


  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/unjha/:city', async (req, res) => {
  try {
    console.log('start')
    const cityType = req.params.city;
    console.log(req.params.city);
    if (cityType == 'gandhinagar' || cityType == "ahmedabad" || cityType == 'unjha') {
      const data = await Person.find({ city: cityType });
      console.log('data fatch');
      res.status(202).json(data);
    } else {
      console.log('faile');
      res.status(404).json({ error: "Invalid Work Type!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
