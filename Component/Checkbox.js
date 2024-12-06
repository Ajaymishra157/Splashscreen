import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Checkbox = () => {
  const [isCricketChecked, setIsCricketChecked] = useState(false);
  const [isBadmintonChecked, setIsBadmintonChecked] = useState(false);
  const [isvolleyChecked, setIsvolleyChecked] = useState(false);

  const toggleCricketCheckbox = () => {
    setIsCricketChecked(!isCricketChecked);
  };

  const toggleBadmintonCheckbox = () => {
    setIsBadmintonChecked(!isBadmintonChecked);
  };
const togglevolleychecked=()=>{
    setIsvolleyChecked(!isvolleyChecked);
}
  return (
    <View style={styles.container}>
      {/* Custom Cricket checkbox */}
      <TouchableOpacity 
        style={[styles.checkbox, isCricketChecked && styles.checked]} 
        onPress={toggleCricketCheckbox}
      >
        {isCricketChecked && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
      <Text style={styles.text}>Cricket</Text>

      {/* Custom Badminton checkbox */}
      <TouchableOpacity 
        style={[styles.checkbox, isBadmintonChecked && styles.checked]} 
        onPress={toggleBadmintonCheckbox}
      >
        {isBadmintonChecked && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
      <Text style={styles.text}>Badminton</Text>
      <TouchableOpacity style={[styles.checkbox,isvolleyChecked && styles.checked]}
      onPress={togglevolleychecked}>
{isvolleyChecked && <Text style={styles.checkmark}>A</Text>}

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#000',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#4CAF50', // Green background when checked
  },
  checkmark: {
    fontSize: 16,
    color: '#fff', 
  },
  text: {
    fontSize: 16,
  },
});

export default Checkbox;
