module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
    'react-hooks/exhaustive-deps': 'off', // Desactiva la advertencia sobre dependencias de useEffect
    'react-native/no-inline-styles': 'off', // Desactiva la advertencia sobre estilos en línea
    'react/no-unstable-nested-components': 'off', // Desactiva la advertencia sobre componentes anidados inestables
  },
};
