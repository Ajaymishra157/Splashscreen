import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomRadioButton = ({ label, isSelected, onPress }) => {
  return (
    <TouchableOpacity style={{flexDirection:'row', alignItems: 'center'}} >
      <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
      <View style={[styles.radioButton, isSelected && styles.selected]}>
        {isSelected && <View style={styles.innerCircle} />}
      </View>
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const RadioScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (value) => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      <CustomRadioButton
        label="Box"
        isSelected={selectedOption === 'Box'}
        onPress={() => handleSelect('Box')}
      />
      <CustomRadioButton
        label="Pcs"
        isSelected={selectedOption === 'Pcs'}
        onPress={() => handleSelect('Pcs')}
      />
      <CustomRadioButton
        label="Qty"
        isSelected={selectedOption === 'Qty'}
        onPress={() => handleSelect('Qty')}
      />
      <Text style={styles.selectedValue}>
        Selected Option: {selectedOption ? selectedOption : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderWidth:1
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  selected: {
    backgroundColor: '#007bff',
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
  },
  selectedValue: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RadioScreen;
