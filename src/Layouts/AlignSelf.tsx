import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {FlexAlignType, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AlignSelf = () => {
  const [alignSelf, setAlignSelf] = useState<FlexAlignType>('stretch');

  return (
    <PreviewLayout
      label="alignSelf"
      values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
      selectedValue={alignSelf}
      setSelectedValue={setAlignSelf}>
      <View style={[styles.box, {backgroundColor: 'lightgreen'}]} />
      <View style={[styles.box, {backgroundColor: 'green'}]} />
      <View style={[styles.box, {backgroundColor: 'darkgreen'}]} />
    </PreviewLayout>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: FlexAlignType) => void;
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
          onPress={() => setSelectedValue(value as FlexAlignType)}
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

export default AlignSelf;
