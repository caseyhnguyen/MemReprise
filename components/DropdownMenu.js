import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../assets/Themes/colors";

const DropdownMenu = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.dropdownContainer}>
      <Pressable
        style={styles.dropdownHeader}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.dropdownHeaderText}>
          {selectedOption
            ? options.find((opt) => opt.value === selectedOption).label
            : "Privacy Setting"}
        </Text>
      </Pressable>
      {isOpen &&
        options.map((option, index) => (
          <Pressable
            key={index}
            style={styles.dropdownItem}
            onPress={() => {
              setSelectedOption(option.value);
              setIsOpen(false);
            }}
          >
            <Text style={styles.dropdownText}>{option.label}</Text>
          </Pressable>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    borderWidth: 1,
    borderColor: colors.offWhite75,
    borderRadius: 10,
  },
  dropdownHeader: {
    padding: 10,
    backgroundColor: colors.offWhite75,
    borderRadius: 4,
  },
  dropdownHeaderText: {
    fontSize: 16,
    color: colors.darkGray,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGray,
    borderBlockColor: colors.darkGray,
    borderEndColor: colors.darkGray,
  },
  dropdownText: {
    fontSize: 16,
  },
});

export default DropdownMenu;
