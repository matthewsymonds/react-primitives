const {
  Animated,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} = require('react-native');

const Touchable = require('./Touchable/Touchable')(Animated, StyleSheet);

module.exports = {
  Animated,
  StyleSheet,
  View,
  Text,
  Image,
  Touchable,
  Platform,
};
