import 'package:flutter_web/material.dart';

class Gcomment extends StatefulWidget {
  String labelText;
  TextEditingController controller;
  Gcomment({
    Key key,
    this.labelText,
    this.controller,
  }) : super(key: key);

  @override
  _GTextFieldState createState() => _GTextFieldState(labelText, controller);
}

class _GTextFieldState extends State<Gcomment> {
  String labelText;
  TextEditingController controller;
  _GTextFieldState(String labelText, TextEditingController controller) {
    this.labelText = labelText;
    this.controller = controller;
  }

  @override
  Widget build(BuildContext context) {
    return Expanded(
      // margin: const EdgeInsets.only(top: 20.0),
      // height: 45,

      child: ClipRRect(
          borderRadius: BorderRadius.circular(22),
          child: new Container(
            padding: EdgeInsets.only(left: 16.0, right: 16.0),
            color: Colors.yellow[50],
            width: 350,
            // height: 250,
            child: TextFormField(
              controller: controller,
              textCapitalization: TextCapitalization.characters,
              keyboardType: TextInputType.multiline,
              maxLines: 10,
              maxLength: 600,
              enabled: true,
              onEditingComplete: () => {},
              decoration: InputDecoration(
                  // prefixIcon: Icon(Icons.comment),
                  hintText: labelText,
                  hintStyle: TextStyle(
                      fontWeight: FontWeight.w300,
                      color: Colors.grey,
                      fontStyle: FontStyle.italic)),
            ),
          )),
    );
  }
}
