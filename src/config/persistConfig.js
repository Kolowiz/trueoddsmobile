import createSensitiveStorage from 'redux-persist-sensitive-storage';

// Settings for sensitive storage
const SensitiveStorage = createSensitiveStorage({
  keychainService: 'pimsKeychain',
  sharedPreferencesName: 'pimsSharedPrefs',
  encrypt: true,
});

export const persistConfig = {
  key: 'root',
  storage: SensitiveStorage,
  whitelist: ['profile', 'auth'],
};

export default persistConfig;
