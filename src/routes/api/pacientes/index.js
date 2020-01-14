const express = require('express');
const router = express.Router();

const auth = require('../../../auth');
const pacientesController = require('../../../controllers/pacientes');

router.use(async (err, req, res, next) => {
  res.status(err.status)
    .json({
      status: err.status,
      message: err.message
    });
})

.get('/', auth.required, pacientesController.getPacientes)

.get('/:id_paciente', auth.required, pacientesController.getPacientePorId)

.get('/:parametro/:valor', auth.required, pacientesController.getPacientePorParametro)

.post('/', auth.required, pacientesController.createPaciente)

.patch('/:id_paciente', auth.required, pacientesController.patchPaciente)

.put('/:id_paciente', auth.required, pacientesController.putPaciente)

.delete('/:id_paciente', auth.required, pacientesController.deletePaciente)

.get("*", (req, res) => {
  res.status(404).json({message: 'Rota inexistente'});
})

.put("*", (req, res) => {
  res.status(404).json({message: 'Rota inexistente'});
})

.post("*", (req, res) => {
  res.status(404).json({message: 'Rota inexistente'});
})

.patch("*", (req, res) => {
  res.status(404).json({message: 'Rota inexistente'});
});

module.exports = router;