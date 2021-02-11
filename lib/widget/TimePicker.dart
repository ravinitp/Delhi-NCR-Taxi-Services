import 'package:flutter_web/material.dart';

class TimePicker extends StatelessWidget {
  const TimePicker(
      {Key key, this.labelText, this.selectedTime, this.selectTime})
      : super(key: key);

  final String labelText;
  final TimeOfDay selectedTime;
  final ValueChanged<TimeOfDay> selectTime;

  // Future<void> _selectDate(BuildContext context) async {
  //   final DateTime picked = await showDatePicker(
  //       context: context,
  //       initialDate: selectedDate,
  //       firstDate: DateTime(2015, 8),
  //       lastDate: DateTime(2101));
  //   if (picked != null && picked != selectedDate) selectDate(picked);
  // }

  Future<void> _selectTime(BuildContext context) async {
    final TimeOfDay picked =
        await showTimePicker(context: context, initialTime: selectedTime);
    if (picked != null && picked != selectedTime) selectTime(picked);
  }

  Widget build(BuildContext context) {
    final TextStyle valueStyle = Theme.of(context).textTheme.title;
    return Expanded(
      flex: 2,
      child: ClipRRect(
          borderRadius: BorderRadius.circular(22),
          child: new Container(
              height: 40,
              padding: EdgeInsets.only(left: 16.0, right: 16.0, bottom: 5.0),
              color: Colors.pink[50],
              child: InkWell(
                onTap: () {
                  _selectTime(context);
                },
                child: InputDecorator(
                  baseStyle: valueStyle,
                  decoration: InputDecoration(
                      labelText: "time",
                      prefixIcon:
                          Icon(Icons.timer, size: 20, color: Colors.blueAccent),
                      labelStyle: TextStyle(
                          fontWeight: FontWeight.w500, color: Colors.black87)),
                ),
              )))
//          _InputDropdown(
//            valueText: selectedTime.format(context),
//            valueStyle: valueStyle,
//            onPressed: () {
//              _selectTime(context);
//            },
//          )
      ,
    );
  }
}
