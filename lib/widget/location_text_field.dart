import 'package:CabBookFlutterTemplate/google_map/address_search.dart';
import 'package:CabBookFlutterTemplate/google_map/place_service.dart';
import 'package:flutter_web/material.dart';
import 'package:uuid/uuid.dart';

class LocationTextField extends StatefulWidget {
  const LocationTextField({Key key, this.lableText}) : super(key: key);
  final String lableText;
  _LocationSearch createState() => _LocationSearch(lableText);
}

class _LocationSearch extends State<LocationTextField> {
  final _controller = TextEditingController();
  String _streetNumber = '';
  String _street = '';
  String _city = '';
  String _zipCode = '';
  String _lableText;
  _LocationSearch(String lable_text) {
    this._lableText = lable_text;
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final _controller = TextEditingController();
    return new Container(
      margin: const EdgeInsets.only(top: 20.0),
      height: 45,
      child: ClipRRect(
          borderRadius: BorderRadius.circular(22),
          child: new Container(
            padding: EdgeInsets.only(left: 16.0, right: 16.0),
            color: Colors.pink[50],
            child: TextField(
              controller: _controller,
              // readOnly: true,
              // onTap: () async {
              //   // generate a new token here
              //   final sessionToken = Uuid().v4();
              //   final Suggestion result = await showSearch(
              //     context: context,
              //     delegate: AddressSearch(sessionToken),
              //   );
              //   // This will change the text displayed in the TextField
              //   if (result != null) {
              //     final placeDetails = await PlaceApiProvider(sessionToken)
              //         .getPlaceDetailFromId(result.placeId);
              //     setState(() {
              //       _controller.text = result.description;
              //       _streetNumber = placeDetails.streetNumber;
              //       _street = placeDetails.street;
              //       _city = placeDetails.city;
              //       _zipCode = placeDetails.zipCode;
              //     });
              //   }
              // },
              // style: TextStyle(color: Colors.black),
              textCapitalization: TextCapitalization.characters,
              keyboardType: TextInputType.text,
              enabled: true,
              // maxLength: 20,
              // onChanged: _aboutAction(),
              decoration: InputDecoration(
                  prefixIcon: Icon(Icons.map),
                  hintText: _lableText,
                  hintStyle: TextStyle(
                      fontWeight: FontWeight.w300, color: Colors.black87)),
            ),
          )),
    );
  }
}
