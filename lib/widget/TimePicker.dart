import 'package:flutter_web/material.dart';

class TimePicker extends StatelessWidget {
  const TimePicker(
      {Key key,
      this.labelText,
      this.selectedTime,
      this.selectTime,
      this.controller})
      : super(key: key);

  final String labelText;
  final TimeOfDay selectedTime;
  final ValueChanged<TimeOfDay> selectTime;
  final TextEditingController controller;

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
    if (picked != null && picked != selectedTime) {
      controller.text = picked.format(context);
    }
    ;
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
              color: Colors.yellow[50],
              child: InkWell(
                onTap: () {
                  _selectTime(context);
                },
                child: TextField(
                  controller: controller,
                  decoration: InputDecoration(
                      enabled: false,
                      hintText: labelText,
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
