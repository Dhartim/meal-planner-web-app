const preferenceController = require('../controllers').preference;
const checkAuth = require('../middleware/checkAuth');

module.exports = (app) => {
  app.get('/api/preferences', checkAuth, preferenceController.getPreferences);
  app.post('/api/preferences', checkAuth, preferenceController.createPreferences);
  app.put('/api/preferences', checkAuth, preferenceController.updatePreferences);
};
