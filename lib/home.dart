import 'package:CabBookFlutterTemplate/widget/location_text_field.dart';
import 'package:CabBookFlutterTemplate/widget/date_time_picker.dart';
import 'package:flutter_web/material.dart';
import 'package:CabBookFlutterTemplate/utils/responsive_layout.dart';
import 'package:CabBookFlutterTemplate/widget/button_row.dart';
import 'package:CabBookFlutterTemplate/utils/flutter_swiper.dart';
import 'package:flutter_web/widgets.dart';
import 'package:intl/intl.dart';

void main() {
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Furniture(),
    ),
  );
}

class Furniture extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    void _aboutAction() {
      showDialog(
          context: context,
          builder: (BuildContext context) {
            return const AlertDialog(
                title: Text('call me at'), content: Text('+91-9910638818'));
          });
    }

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0.0,
        centerTitle: false,
        title: Text(
          "Delhi NCR Taxi outstation services",
          style: TextStyle(
              color: Colors.black,
              fontSize: 24.0,
              fontFamily: "Open Sans",
              fontWeight: FontWeight.w800,
              fontStyle: FontStyle.normal),
        ),
        leading: Padding(
            padding: const EdgeInsets.all(10),
            child: Image.asset("icon/nav-logo.png")),
        actions: <Widget>[
          IconButton(
            icon: const Icon(Icons.call, color: Colors.blueAccent),
            onPressed: _aboutAction,
          ),
          IconButton(
            icon: const Icon(Icons.message, color: Colors.blueAccent),
            onPressed: _aboutAction,
          ),
          IconButton(
            icon: const Icon(Icons.email, color: Colors.blueAccent),
            onPressed: _aboutAction,
            padding: const EdgeInsets.fromLTRB(10, 0, 30, 0),
          ),
        ],
      ),
      body: ResponsiveLayout(
        largeChild: Stack(
          children: [
            Align(
              alignment: Alignment.bottomRight,
              child: Padding(
                padding: const EdgeInsets.all(0),
                child: SizedBox(
                  height: 0,
                  child: ButtonRow(),
                ),
              ),
            ),
            Body(),
          ],
        ),
        // smallChild: Body(),
      ),
    );
  }
}

class Body extends StatelessWidget {
  const Body({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    List<Image> imageSlider = <Image>[
      new Image.asset('marutisuzuki-dzire-front-seats4.jpg', fit: BoxFit.cover),
      new Image.asset('tajmahal.jpg', fit: BoxFit.cover),
      new Image.asset('mat60sa_1458595.jpg', fit: BoxFit.cover),
      new Image.asset('Solang-near-Manali-Kullu-min-1.jpg', fit: BoxFit.cover),
      new Image.asset('56buusa_1483112.jpg', fit: BoxFit.cover),
    ];
    DateTime _toDate = DateTime.now();
    TimeOfDay _toTime = const TimeOfDay(hour: 7, minute: 28);

    return new Material(
        child: new Container(
            child: new ConstrainedBox(
      constraints: new BoxConstraints(),
      child: Row(mainAxisAlignment: MainAxisAlignment.end, children: <Widget>[
        new Container(
          color: Colors.grey,
          child: new Swiper(
            itemCount: imageSlider.length,
            itemBuilder: (cx, i) {
              return Container(
                  child: ClipRRect(
                borderRadius: BorderRadius.circular(20),
                child: Hero(tag: i, child: imageSlider[i]),
              ));
            },
            itemHeight: 800.0,
            itemWidth: 1000,
            viewportFraction: 0.80,
            scale: 0.9,
            autoplay: true,
            layout: SwiperLayout.STACK,
          ),
        ),
        Card(
            child: SizedBox(
          width: MediaQuery.of(context).size.width / 3,
          height: 800,
          child: Container(
              color: Colors.transparent,
              child: ListView(
                  padding: const EdgeInsets.all(16.0),
                  children: <Widget>[
                    new Container(
                      padding:
                          EdgeInsets.only(left: 0, right: 0, top: 0, bottom: 0),
                      alignment: AlignmentDirectional.center,
                      color: Colors.transparent,
                      child: new Text(
                        'Book Your Ride',
                        style: new TextStyle(
                          fontSize: 22.0,
                          fontWeight: FontWeight.w600,
                          color: Colors.black,
                        ),
                      ),
                    ),
                    new Container(
                      padding: EdgeInsets.only(
                          left: 0, right: 0, top: 26.0, bottom: 0),
                      alignment: AlignmentDirectional.center,
                      color: Colors.transparent,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        mainAxisSize: MainAxisSize.min,
                        children: <Widget>[
                          new Icon(Icons.layers, color: Colors.blueAccent),
                          new Icon(Icons.layers, color: Colors.blueAccent),
                          new Icon(Icons.layers, color: Colors.blueAccent)
                        ],
                      ),
                    ),
                    LocationTextField(lableText: "Pickup Location"),
                    LocationTextField(lableText: "Drop Location")
                    // new Container(
                    //   margin: const EdgeInsets.only(top: 20.0),
                    //   height: 45,
                    //   child: ClipRRect(
                    //       borderRadius: BorderRadius.circular(22),
                    //       child: new Container(
                    //         padding: EdgeInsets.only(left: 16.0, right: 16.0),
                    //         color: Colors.pink[50],
                    //         child: TextField(
                    //           textCapitalization: TextCapitalization.characters,
                    //           autocorrect: true,
                    //           autofocus: true,
                    //           keyboardType: TextInputType.text,
                    //           decoration: InputDecoration(
                    //               hintText: 'Drop Location',
                    //               prefixIcon: Icon(Icons.map),
                    //               hintStyle: TextStyle(
                    //                   fontWeight: FontWeight.w300,
                    //                   color: Colors.black87)),
                    //         ),
                    //       )),
                    // )
                    ,
                    SizedBox(height: 12.0),
                    DateTimePicker(
                      selectedDate: _toDate,
                      selectedTime: _toTime,
                    ),
                    new Container(
                      height: 35,
                      width: 200,
                      margin: const EdgeInsets.only(top: 20.0),
                      child: ClipRRect(
                          borderRadius: BorderRadius.circular(15),
                          child: new Container(
                            color: Colors.blueAccent[200],
                            child: new FlatButton(
                              padding: const EdgeInsets.all(8.0),
                              textColor: Colors.black,
                              onPressed: null,
                              child: new Text(
                                "Book",
                                style: TextStyle(
                                    fontSize: 20.0,
                                    color: Colors.white,
                                    fontWeight: FontWeight.w500),
                              ),
                            ),
                          )),
                    ),
                    new Container(
                      padding: EdgeInsets.only(
                          left: 16.0, right: 16.0, top: 26.0, bottom: 0),
                      alignment: AlignmentDirectional.center,
                      color: Colors.transparent,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        mainAxisSize: MainAxisSize.min,
                        children: <Widget>[
                          new Icon(Icons.layers, color: Colors.blueAccent),
                          new Icon(Icons.layers, color: Colors.blueAccent),
                          new Icon(Icons.layers, color: Colors.blueAccent)
                        ],
                      ),
                    ),
                  ])),
        )),
        // new Image.asset('header_background.png'),
        // new Container(
        //   padding:
        //       EdgeInsets.only(left: 16.0, right: 16.0, top: 16.0, bottom: 16.0),
        //   color: Colors.grey,
        //   child: new Text(
        //     'Cast Light life style Here',
        //     style: new TextStyle(
        //       fontSize: 40.0,
        //       fontWeight: FontWeight.bold,
        //       color: Colors.black,
        //     ),
        //   ),
        // ),
      ]),
    )));
  }
}
