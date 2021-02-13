import 'package:CabBookFlutterTemplate/widget/DatePicker.dart';
import 'package:CabBookFlutterTemplate/widget/TimePicker.dart';
import 'package:flutter_web/material.dart';

class DateTimePicker extends StatelessWidget {
  const DateTimePicker(
      {Key key,
      this.labelText,
      this.selectedDate,
      this.selectedTime,
      this.selectDate,
      this.selectTime})
      : super(key: key);

  final String labelText;
  final DateTime selectedDate;
  final TimeOfDay selectedTime;
  final ValueChanged<DateTime> selectDate;
  final ValueChanged<TimeOfDay> selectTime;

  @override
  Widget build(BuildContext context) {
    final TextStyle valueStyle = Theme.of(context).textTheme.title;
    final _selected_time = const TimeOfDay(hour: 7, minute: 28);
    return Column(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: <Widget>[
          Row(children: <Widget>[
            DatePicker(labelText: 'Ongoing Date', selectedDate: DateTime.now()),
            TimePicker(labelText: 'time', selectedTime: _selected_time),
          ]),
          const SizedBox(width: 12.0),
          Row(children: <Widget>[
            DatePicker(labelText: 'Return Date', selectedDate: DateTime.now()),
            TimePicker(labelText: 'time', selectedTime: _selected_time),
          ]),
          const SizedBox(width: 12.0),
        ]);
  }
}
