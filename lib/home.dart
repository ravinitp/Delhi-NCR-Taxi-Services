import 'package:CabBookFlutterTemplate/widget/BookingForm.dart';
import 'package:CabBookFlutterTemplate/widget/GTextField.dart';
import 'package:CabBookFlutterTemplate/widget/location_text_field.dart';
import 'package:CabBookFlutterTemplate/widget/date_time_picker.dart';
import 'package:flutter_web/material.dart';
import 'package:CabBookFlutterTemplate/utils/responsive_layout.dart';
import 'package:CabBookFlutterTemplate/widget/button_row.dart';
import 'package:CabBookFlutterTemplate/utils/flutter_swiper.dart';
import 'package:flutter_web/widgets.dart';

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
      backgroundColor: Colors.black,
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
            padding: const EdgeInsets.all(0),
            child: Image.network(
                "https://firebasestorage.googleapis.com/v0/b/delhi-ncr-taxi.appspot.com/o/ncr-taxi-logo.jpeg?alt=media&token=63dc6647-ba84-4496-8728-df286a99160e")),
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
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: NetworkImage(
                "https://firebasestorage.googleapis.com/v0/b/delhi-ncr-taxi.appspot.com/o/delhi-ncr-map-bg.jpg?alt=media&token=07c62a23-166f-48b2-b2d9-969d9e7c9648"),
            fit: BoxFit.cover,
          ),
        ),
        // new Center(
        // child: BookingForm()
        // )
        child: Center(
          child: BookingForm(),
        ) /* add child content here */,
      ),
      // body: ResponsiveLayout(
      //   largeChild: Stack(
      //     children: [
      //       Align(
      //         alignment: Alignment.bottomRight,
      //         child: Padding(
      //           padding: const EdgeInsets.all(0),
      //           child: SizedBox(
      //             height: 0,
      //             child: ButtonRow(),
      //           ),
      //         ),
      //       ),
      //       Body(),
      //     ],
      //   ),
      //   // smallChild: Body(),
      // ),
    );
  }
}

class Body extends StatelessWidget {
  const Body({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    List<Image> imageSlider = <Image>[
      new Image.network(
          "https://firebasestorage.googleapis.com/v0/b/delhi-ncr-taxi.appspot.com/o/delhi-ncr-map-bg.jpg?alt=media&token=07c62a23-166f-48b2-b2d9-969d9e7c9648"),
    ];

    return new Material(
        child: new Container(
            child: new ConstrainedBox(
      constraints: new BoxConstraints(),
      child: Row(mainAxisAlignment: MainAxisAlignment.end, children: <Widget>[
        new Container(
          // width: MediaQuery.of(context).size.width / 3,
          // height: MediaQuery.of(context).size.height / 2,
          color: Colors.grey,
          child: new Swiper(
            itemCount: imageSlider.length,
            itemBuilder: (cx, i) {
              return Container(
                  child: ClipRRect(
                borderRadius: BorderRadius.circular(0),
                child: Hero(tag: i, child: imageSlider[i]),
              ));
            },
            itemHeight: 800.0,
            itemWidth: 1000,
            viewportFraction: 1.00,
            scale: 1,
            autoplay: true,
            layout: SwiperLayout.STACK,
          ),
        ),

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
