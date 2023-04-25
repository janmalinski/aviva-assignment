import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface ISaveCityNameProps {
    cityNameSaved: boolean;
    disabled: boolean;
    handleSaveCity: () => void;
    testID?: string;
};

const SaveCityName = ({cityNameSaved, handleSaveCity, disabled, testID}: ISaveCityNameProps) => {
  return (
    <TouchableOpacity testID={testID} style={styles.row} onPress={handleSaveCity} disabled={disabled} >
        <View style={styles.checkboxContainer}>
        {cityNameSaved && <Ionicons testID='checkbox-icon' name={'checkmark-sharp'} size={12} />}
        </View>
        <Text style={styles.saveFavouriteCityNameText}>Save name of favourite city</Text>
  </TouchableOpacity>
  )
};

export default React.memo(SaveCityName);

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkboxContainer: {
        height: 16,
        width: 16,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    saveFavouriteCityNameText: {
        fontSize: 16
      },
})