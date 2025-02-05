import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';

const PositionLayout = () => {
  const [position, setPosition] = useState<'relative' | 'absolute' | 'static'>(
    'relative',
  );

  return (
    <PreviewLayout
      label="position"
      selectedValue={position}
      values={['relative', 'absolute', 'static']}
      setSelectedValue={setPosition}>
      <View
        style={[
          styles.box,
          {
            top: 25,
            left: 25,
            position,
            backgroundColor: 'lightgreen',
          },
        ]}
      />
      <View
        style={[
          styles.box,
          {
            top: 50,
            left: 50,
            position,
            backgroundColor: 'green',
          },
        ]}
      />
      <View
        style={[
          styles.box,
          {
            top: 75,
            left: 75,
            position,
            backgroundColor: 'darkgreen',
          },
        ]}
      />
    </PreviewLayout>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: Array<'relative' | 'absolute' | 'static'>;
  selectedValue: string;
  setSelectedValue: (value: 'relative' | 'absolute' | 'static') => void;
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
    <View style={styles.container}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
    minHeight: 200,
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
    marginBottom: 6,
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'green',
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

export default PositionLayout;