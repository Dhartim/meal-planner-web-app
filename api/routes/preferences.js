const preferenceController = require('../controllers/preference');
const checkAuth = require('../middleware/checkAuth');

module.exports = (app) => {
  app.get('/api/preferences', preferenceController.getPreferences);
  app.post('/api/preferences', preferenceController.createPreferences);
  app.put('/api/preferences', preferenceController.updatePreferences);
};
