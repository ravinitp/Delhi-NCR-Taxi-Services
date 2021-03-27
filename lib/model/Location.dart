class Location {
  String locationName;
  Location({
    this.locationName,
  });

  Map<String, dynamic> toJson() => {
        'locationName': locationName,
      };
}
