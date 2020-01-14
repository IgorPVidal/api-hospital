const express = require('express');
const router = express.Router();

const auth = require('../../../auth');
const profissionaisController = require('../../../controllers/profissionais');

router.use(async (err, req, res, next) => {

  res.status(err.status)
    .json({
      status: err.status,
      message: err.message
    });
})

.get('/', auth.required, profissionaisController.getProfissionais)

.post('/', auth.optional, profissionaisController.createProfissionais)

.post('/login', auth.optional, profissionaisController.loginProfissionais)

.post('/logout', auth.required, profissionaisController.logoutProfissionais)

.get('/current', auth.required, profissionaisController.currentProfissionais)

.patch('/:id_profissional', auth.required, profissionaisController.patchProfissional)

.put('/:id_profissional', auth.required, profissionaisController.putProfissional)

.delete('/:id_profissional', auth.required, profissionaisController.deleteProfissional)

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