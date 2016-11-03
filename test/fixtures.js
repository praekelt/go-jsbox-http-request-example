// we make the fixtures function that simply returns the fixtures. This ensures
// we have a deep copy of all the fixtures.
module.exports = function() {
    return [
    {
      "request": {
          "method": "GET",
          "url": "http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=red&outputType=JSON",
          "params": {
            "rt": "red",
            "key": "33305d8dcece4aa58c651c740f88d1e2",
            "outputType": "JSON"
          }
      },
        "response": {
        "code": 200,
        "data": {
                "ctatt":{ 
                  "tmst":"2016-11-03T08:06:18",
                  "errCd":"0",
                  "errNm":null,
                  "route":[ 
                        { 
                            "@name":"red",
                            "train":[ 
                                { 
                                  "rn":"827",
                                  "destSt":"30173",
                                  "destNm":"Howard",
                                  "trDr":"1",
                                  "nextStaId":"40650",
                                  "nextStpId":"30125",
                                  "nextStaNm":"North/Clybourn"
                                },
                                { 
                                  "rn":"811",
                                  "destSt":"30089",
                                  "destNm":"95th/Dan Ryan",
                                  "trDr":"2",
                                  "nextStaId":"41230",
                                  "nextStpId":"30238",
                                  "nextStaNm":"47th"
                                }
                            ]
                        }
                    ]
                }
            }
        }
      },
    {
      "request": {
          "method": "GET",
          "url": "http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=blue&outputType=JSON",
          "params": {
            "rt": "blue",
            "key": "33305d8dcece4aa58c651c740f88d1e2",
            "outputType": "JSON"
          }
      },
        "response": {
        "code": 200,
        "data": {
                "ctatt":{ 
                  "tmst":"2016-11-03T08:06:18",
                  "errCd":"0",
                  "errNm":null,
                  "route":[ 
                        { 
                            "@name":"blue",
                            "train":[ 
                                { 
                                  "rn":"101",
                                  "destSt":"0",
                                  "destNm":"UIC-Halsted",
                                  "trDr":"5",
                                  "nextStaId":"40590",
                                  "nextStpId":"30116",
                                  "nextStaNm":"Damen"
                                },
                                { 
                                  "rn":"105",
                                  "destSt":"30171",
                                  "destNm":"O'Hare",
                                  "trDr":"1",
                                  "nextStaId":"40890",
                                  "nextStpId":"30171",
                                  "nextStaNm":"O'Hare"
                                },
                                { 
                                  "rn":"116",
                                  "destSt":"30077",
                                  "destNm":"Forest Park",
                                  "trDr":"5",
                                  "nextStaId":"40220",
                                  "nextStpId":"30043",
                                  "nextStaNm":"Western (Forest Park Branch)"
                                }
                            ]
                        }
                    ]
                }
            }
        }
      },
      {
        "request": {
          "method": "GET",
          "url": "http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=brn&outputType=JSON",
          "params": {
            "rt": "brn",
            "key": "33305d8dcece4aa58c651c740f88d1e2",
            "outputType": "JSON"
          }
        },
        "response": {
        "code": 200,
        "data": {
                "ctatt":{ 
                  "tmst":"2016-11-03T08:06:18",
                  "errCd":"0",
                  "errNm":null,
                  "route":[ 
                        { 
                            "@name":"brn",
                            "train":[ 
                                { 
                                  "rn":"401",
                                  "destSt":"30249",
                                  "destNm":"Loop",
                                  "trDr":"5",
                                  "nextStaId":"40800",
                                  "nextStpId":"30156",
                                  "nextStaNm":"Sedgwick"
                                },
                                { 
                                  "rn":"405",
                                  "destSt":"30249",
                                  "destNm":"Kimball",
                                  "trDr":"1",
                                  "nextStaId":"41460",
                                  "nextStpId":"30281",
                                  "nextStaNm":"Irving Park"
                                }
                            ]
                        }
                    ]
                }
            }
        }
      },
      {
      "request": {
          "method": "GET",
          "url": "http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=g&outputType=JSON",
          "params": {
            "rt": "g",
            "key": "33305d8dcece4aa58c651c740f88d1e2",
            "outputType": "JSON"
          }
      },
        "response": {
        "code": 200,
        "data": {
                "ctatt":{ 
                  "tmst":"2016-11-03T08:06:18",
                  "errCd":"0",
                  "errNm":null,
                  "route":[ 
                        { 
                            "@name":"g",
                            "train":[ 
                                { 
                                  "rn":"003",
                                  "destSt":"30057",
                                  "destNm":"Ashland/63rd",
                                  "trDr":"5",
                                  "nextStaId":"41080",
                                  "nextStpId":"30210",
                                  "nextStaNm":"47th"
                                },
                                { 
                                  "rn":"008",
                                  "destSt":"30004",
                                  "destNm":"Harlem/Lake",
                                  "trDr":"1",
                                  "nextStaId":"41400",
                                  "nextStpId":"30080",
                                  "nextStaNm":"Roosevelt"
                                },
                                { 
                                  "rn":"009",
                                  "destSt":"30139",
                                  "destNm":"Cottage Grove",
                                  "trDr":"5",
                                  "nextStaId":"40720",
                                  "nextStpId":"30139",
                                  "nextStaNm":"Cottage Grove"
                                }
                            ]
                        }
                    ]
                }
            }
        }
      },
    {
      "request": {
          "method": "GET",
          "url": "http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=org&outputType=JSON",
          "params": {
            "rt": "org",
            "key": "33305d8dcece4aa58c651c740f88d1e2",
            "outputType": "JSON"
          }
      },
        "response": {
        "code": 200,
        "data": {
                "ctatt":{ 
                  "tmst":"2016-11-03T08:06:18",
                  "errCd":"0",
                  "errNm":null,
                  "route":[ 
                        { 
                            "@name":"org",
                            "train":[ 
                                { 
                                  "rn":"703",
                                  "destSt":"30182",
                                  "destNm":"Midway",
                                  "trDr":"5",
                                  "nextStaId":"40310",
                                  "nextStpId":"30061",
                                  "nextStaNm":"Western"
                                },
                                { 
                                  "rn":"706",
                                  "destSt":"30182",
                                  "destNm":"Loop",
                                  "trDr":"1",
                                  "nextStaId":"41150",
                                  "nextStpId":"30219",
                                  "nextStaNm":"Kedzie"
                                }
                            ]
                        }
                    ]
                }
            }
        }
      },
    {
      "request": {
          "method": "GET",
          "url": "http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=p&outputType=JSON",
          "params": {
            "rt": "p",
            "key": "33305d8dcece4aa58c651c740f88d1e2",
            "outputType": "JSON"
          }
      },
        "response": {
        "code": 200,
        "data": {
                "ctatt":{ 
                  "tmst":"2016-11-03T08:06:18",
                  "errCd":"0",
                  "errNm":null,
                  "route":[ 
                        { 
                            "@name":"p",
                            "train":[ 
                                { 
                                  "rn":"501",
                                  "destSt":"30203",
                                  "destNm":"Loop",
                                  "trDr":"5",
                                  "nextStaId":"40540",
                                  "nextStpId":"30106",
                                  "nextStaNm":"Wilson"
                                },
                                { 
                                  "rn":"505",
                                  "destSt":"30203",
                                  "destNm":"Linden",
                                  "trDr":"1",
                                  "nextStaId":"40520",
                                  "nextStpId":"30101",
                                  "nextStaNm":"Foster"
                                }
                            ]
                        }
                    ]
                }
            }
        }
      },
    {
      "request": {
          "method": "GET",
          "url": "http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=pink&outputType=JSON",
          "params": {
            "rt": "pink",
            "key": "33305d8dcece4aa58c651c740f88d1e2",
            "outputType": "JSON"
          }
      },
        "response": {
        "code": 200,
        "data": {
                "ctatt":{ 
                  "tmst":"2016-11-03T08:06:18",
                  "errCd":"0",
                  "errNm":null,
                  "route":[ 
                        { 
                            "@name":"pink",
                            "train":[ 
                                { 
                                  "rn":"301",
                                  "destSt":"30114",
                                  "destNm":"54th/Cermak",
                                  "trDr":"1",
                                  "nextStaId":"41160",
                                  "nextStpId":"30222",
                                  "nextStaNm":"Clinton"
                                },
                                { 
                                  "rn":"304",
                                  "destSt":"30114",
                                  "destNm":"Loop",
                                  "trDr":"5",
                                  "nextStaId":"41160",
                                  "nextStpId":"30221",
                                  "nextStaNm":"Clinton"
                                }
                            ]
                        }
                    ]
                }
            }
        }
      },
    // {
    //   "request": {
    //       "method": "GET",
    //       "url": "http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=y&outputType=JSON",
    //       "params": {
    //         "rt": "y",
    //         "key": "33305d8dcece4aa58c651c740f88d1e2",
    //         "outputType": "JSON"
    //       }
    //   }
      //   "response": {
      //   "code": 200,
      //   "data": {
      //           "ctatt":{ 
      //             "tmst":"2016-11-03T08:06:18",
      //             "errCd":"0",
      //             "errNm":null,
      //             "route":[ 
      //                   { 
      //                       "@name":"y",
      //                       "train":[ 
      //                           { 
      //                             "rn":"592",
      //                             "destSt":"30176",
      //                             "destNm":"Skokie",
      //                             "trDr":"1",
      //                             "nextStaId":"41680",
      //                             "nextStpId":"30297",
      //                             "nextStaNm":"Oakton-Skokie"
      //                           },
      //                           { 
      //                             "rn":"594",
      //                             "destSt":"30176",
      //                             "destNm":"Howard",
      //                             "trDr":"5",
      //                             "nextStaId":"40900",
      //                             "nextStpId":"30176",
      //                             "nextStaNm":"Howard"
      //                           }
      //                       ]
      //                   }
      //               ]
      //           }
      //       }
      //   }
      // } 
    ];
};
