var app = angular.module("ContactApp", []);
app.controller("ContactCtrl", ContactCtrl);
function ContactCtrl() {
  this.contacts = [
    {
      "gender": "male",
      "name": {
        "title": "monsieur",
        "first": "ramadan",
        "last": "joly"
      },
      "location": {
        "street": "5632 place des 44 enfants d'izieu",
        "city": "spiez",
        "state": "nidwalden",
        "postcode": 9525,
        "coordinates": {
          "latitude": "-55.0532",
          "longitude": "-127.0693"
        },
        "timezone": {
          "offset": "-9:00",
          "description": "Alaska"
        }
      },
      "email": "ramadan.joly@example.com",
      "login": {
        "uuid": "c7194d88-5d21-4f29-9fd7-73e0ff2d4518",
        "username": "smallladybug537",
        "password": "yankees",
        "salt": "v1kf0hKZ",
        "md5": "ea4c5e151187e1c6c48624984ed7735f",
        "sha1": "bf719c71e9ad57a4410f1d45eb5924a25dd2cbeb",
        "sha256": "9c152abaf6eb53d415882f17da0e72b72b56d272730af722f38990a4a6db1c92"
      },
      "dob": {
        "date": "1956-01-25T16:07:15Z",
        "age": 63
      },
      "registered": {
        "date": "2016-12-08T05:12:22Z",
        "age": 2
      },
      "phone": "(918)-330-5642",
      "cell": "(211)-724-4223",
      "id": {
        "name": "AVS",
        "value": "756.6587.9116.73"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/2.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/2.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/2.jpg"
      },
      "nat": "CH"
    }
  ];
}