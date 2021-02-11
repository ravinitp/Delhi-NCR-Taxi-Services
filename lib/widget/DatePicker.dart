import 'package:flutter_web/material.dart';

class DatePicker extends StatelessWidget {
  const DatePicker(
      {Key key, this.labelText, this.selectedDate, this.selectDate})
      : super(key: key);

  final String labelText;
  final DateTime selectedDate;
  final ValueChanged<DateTime> selectDate;

  Future<void> _selectDate(BuildContext context) async {
    final DateTime picked = await showDatePicker(
        context: context,
        initialDate: selectedDate,
        firstDate: DateTime(2015, 8),
        lastDate: DateTime(2101));
    if (picked != null && picked != selectedDate) selectDate(picked);
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
                  _selectDate(context);
                },
                child: InputDecorator(
                  baseStyle: valueStyle,
                  decoration: InputDecoration(
                      labelText: labelText,
                      prefixIcon: Icon(Icons.calendar_today,
                          size: 20, color: Colors.blueAccent),
                      labelStyle: TextStyle(
                          fontWeight: FontWeight.w500, color: Colors.black87)),
                ),
              )))
//          _InputDropdown(
//            labelText: labelText,
//            valueText: DateFormat.yMMMd().format(selectedDate),
//            valueStyle: valueStyle,
//            onPressed: () {
//              _selectDate(context);
//            },
//          )
      ,
    );
  }
}
