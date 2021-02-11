import 'package:flutter_web/material.dart';

class LocationTextField extends StatelessWidget {
  const LocationTextField({Key key, this.lableText}) : super(key: key);
  final String lableText;
  @override
  Widget build(BuildContext context) {
    return new Container(
      margin: const EdgeInsets.only(top: 20.0),
      height: 45,
      child: ClipRRect(
          borderRadius: BorderRadius.circular(22),
          child: new Container(
            padding: EdgeInsets.only(left: 16.0, right: 16.0),
            color: Colors.pink[50],
            child: TextFormField(
              style: TextStyle(color: Colors.black),
              controller: TextEditingController(),
              textCapitalization: TextCapitalization.characters,
              keyboardType: TextInputType.text,
              enabled: true,
              // maxLength: 20,
              // onChanged: _aboutAction(),
              decoration: InputDecoration(
                  prefixIcon: Icon(Icons.map),
                  hintText: lableText,
                  hintStyle: TextStyle(
                      fontWeight: FontWeight.w300, color: Colors.black87)),
            ),
          )),
    );
  }
}
