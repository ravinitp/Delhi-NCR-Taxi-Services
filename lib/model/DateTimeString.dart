class DateTimeString {
  String date;
  String time;

  DateTimeString({
    this.date,
    this.time,
  });

  Map<String, dynamic> toJson() => {
        'dateTimeString': date + ' ' + time,
      };
}
