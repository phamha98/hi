import _ from 'lodash';
import moment from 'moment';
import 'moment-lunar';
import React, { useState, Fragment } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Switch } from 'react-native';
import { Calendar } from 'react-native-vietnamese-lunar-calendars';

const testIDs = require('../testIDs');

const CalendarsScreen = () => {
  const [selected, setSelected] = useState('');
  const [showMarkedDatesExamples, setShowMarkedDatesExamples] = useState(false);

  const onDayPress = day => {
    setSelected(day.dateString);
    const lunarDate = moment('2018-08-31').lunar();
    const solarDate = lunarDate.solar().format('YYYY-MM-DD');
    const lunarTest =  moment().year(2021).month(10).date(22).lunar().format('YYYY-MM-DD');
    // const lunarTest = moment().year(2021).month(10).date(22).solar().format('YYYY-MM-DD');
    console.log('solarDate', lunarTest);
    console.log(day)
  };
  const renderCalendarWithLunarDate = () => {
    return (
      <Fragment>
        <Text style={styles.text}>Calendar with lunar date</Text>
        <Calendar
          testID={testIDs.calendars.FIRST}
          allowLunarDate
          style={styles.calendar}
          onDayPress={onDayPress}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: 'orange',
              selectedTextColor: 'red'
            }
          }}
          enableSwipeMonths={true}
        />
      </Fragment>
    );
  };
  const initialNumToRender = 100; // Workaround for Detox 18 migration bug
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      testID={testIDs.calendars.CONTAINER}
      initialNumToRender={initialNumToRender}
    >

      {renderCalendarWithLunarDate()}
    </ScrollView>
  );
};
export default CalendarsScreen;
const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  }
});
