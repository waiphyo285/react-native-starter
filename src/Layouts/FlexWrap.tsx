import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const FlexWrap = () => {
    const [flexWrap, setFlexWrap] = useState('wrap');

  return (
    <PreviewLayout
      label="flexWrap"
      values={['wrap', 'nowrap']}
      selectedValue={flexWrap}
      setSelectedValue={setFlexWrap}>
      <View style={[styles.box, {backgroundColor: 'lightgreen'}]} />
      <View style={[styles.box, {backgroundColor: 'green'}]} />
      <View style={[styles.box, {backgroundColor: 'darkgreen'}]} />
      <View style={[styles.box, {backgroundColor: 'lightblue'}]} />
      <View style={[styles.box, {backgroundColor: 'blue'}]} />
      <View style={[styles.box, {backgroundColor: 'darkblue'}]} />
      <View style={[styles.box, {backgroundColor: 'navyblue'}]} />

      <View style={[styles.box, {backgroundColor: 'lightgreen'}]} />
      <View style={[styles.box, {backgroundColor: 'green'}]} />
      <View style={[styles.box, {backgroundColor: 'darkgreen'}]} />
      <View style={[styles.box, {backgroundColor: 'lightblue'}]} />
      <View style={[styles.box, {backgroundColor: 'blue'}]} />
      <View style={[styles.box, {backgroundColor: 'darkblue'}]} />
      <View style={[styles.box, {backgroundColor: 'navyblue'}]} />
    </PreviewLayout>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    backgroundColor: 'aliceblue',
    maxHeight: 400,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginVertical: '1%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'green',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    color: 'green',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default FlexWrap;
