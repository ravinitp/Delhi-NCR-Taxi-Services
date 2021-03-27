import 'package:CabBookFlutterTemplate/widget/DatePicker.dart';
import 'package:CabBookFlutterTemplate/widget/TimePicker.dart';
import 'package:flutter_web/material.dart';

class DateTimePicker extends StatelessWidget {
  const DateTimePicker(
      {Key key,
      this.pickupDateController,
      this.pickupTimeController,
      this.returnDateController,
      this.returnTimeController})
      : super(key: key);

  final TextEditingController pickupDateController;
  final TextEditingController pickupTimeController;
  final TextEditingController returnDateController;
  final TextEditingController returnTimeController;

  @override
  Widget build(BuildContext context) {
    final TextStyle valueStyle = Theme.of(context).textTheme.title;
    final _selected_time = const TimeOfDay(hour: 7, minute: 28);
    return Column(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: <Widget>[
          Row(children: <Widget>[
            DatePicker(
              labelText: 'Pickup Date',
              selectedDate: DateTime.now(),
              controller: pickupDateController,
            ),
            SizedBox(width: 10),
            TimePicker(
                labelText: 'Pickup Time',
                selectedTime: TimeOfDay(hour: 18, minute: 28),
                controller: pickupTimeController),
          ]),
          SizedBox(width: 12.0, height: 12.0),
          Row(children: <Widget>[
            DatePicker(
              labelText: 'Return Date',
              selectedDate: DateTime.now(),
              controller: returnDateController,
            ),
            SizedBox(width: 10),
            TimePicker(
                labelText: 'Return Time',
                selectedTime: TimeOfDay(hour: 18, minute: 28),
                controller: returnTimeController),
          ]),
          const SizedBox(width: 12.0),
        ]);
  }
}
