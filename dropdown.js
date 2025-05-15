import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native'

const Dropdown = ({
                    open,
                    value,
                    onChange,
                    options = [],
                    placeholder = 'Select an option',
                    testID,
                  }) => {
  const [isOpen, setIsOpen] = useState(open)
  const selectedOption = options.find(opt => opt.value === value)

  const toggleDropdown = () => setIsOpen(!isOpen)
  const handleSelect = val => {
    onChange(val)
    setIsOpen(false)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectedOption}
        onPress={toggleDropdown}
        testID={testID}
      >
        <Text style={styles.optionText}>
          {selectedOption ? selectedOption.label : placeholder}
          {isOpen ? '▵' : '▿'}
        </Text>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdownList}>
          {options.map(({ label, value: optVal, ...props }, idx) => (
            <TouchableOpacity
              key={optVal}
              style={[
                styles.dropdownItem,
                idx === options.length - 1 && styles.noBorder,
              ]}
              onPress={() => handleSelect(optVal)}
              testID={`${testID}:${optVal}`}
              {...props}
            >
              <Text style={styles.optionText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  )
}

export default Dropdown

const styles = StyleSheet.create({
  container: {
    zIndex: 5,
    width: '100%',
  },
  selectedOption: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#a0a0a0',
    backgroundColor: '#fff',
  },
  optionText: {
    fontSize: 15,
    color: '#000',
  },
  dropdownList: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    maxHeight: 350,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#a0a0a0',
    backgroundColor: '#fff',
    zIndex: 10,
  },
  dropdownItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  noBorder: {
    borderBottomWidth: 0,
  },
})
