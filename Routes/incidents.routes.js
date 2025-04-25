const express = require('express');
const router = express.Router();


const { getAllIncidents, registerAnIncident, getParticularIncident, deleteParticularIncident } = require('../Controllers/incidents.controller.js');


router.route('/').get(getAllIncidents);
router.route('/').post(registerAnIncident);
router.route('/:id').get(getParticularIncident);
router.route('/:id').delete(deleteParticularIncident);


module. exports = router