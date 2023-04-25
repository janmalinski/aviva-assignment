import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface ISearchInputProps {
    text?: string;
    handleSetText: (text: string) => void;
    navigateToWeatherDetails: () => void;
    testID?: string
};

const SearchInput = ({text, handleSetText, navigateToWeatherDetails, testID}: ISearchInputProps) => {
  return (
    <View testID={testID} style={[styles.row, styles.searchContainer]}>
        <TextInput testID='search-text-input' value={text} style={styles.textInput} placeholder='Search' onChangeText={text => handleSetText(text)} />
        <Ionicons testID='search-button' style={styles.searchButton} name='search-outline' size={30} onPress={navigateToWeatherDetails} />
    </View>
  )
};

export default React.memo(SearchInput);

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        height: 40,
        marginTop: 30,
        marginBottom: 15
    },
    textInput:  {
        flex: 1,
        borderBottomWidth: 1,
        height: 40,
        paddingHorizontal: 5,
      },
    searchButton: {
    alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
    },
})