class FormUtil {
  static String formatDate(DateTime date, String defaultValue) {
    if (date == null) {
      return defaultValue;
    }
    int day = date.day;
    int month = date.month;
    int year = date.year;
    return _formatInt(day) + '/' + _formatInt(month) + '/' + year.toString();
  }

  static String _formatInt(int value) {
    if (value < 10) {
      return '0' + value.toString();
    }
    return value.toString();
  }
}
