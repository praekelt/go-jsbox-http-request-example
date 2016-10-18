// we make the fixtures function that simply returns the fixtures. This ensures
// we have a deep copy of all the fixtures.
module.exports = function() {
    return [
    {
        "request": {
          "method": "GET",
          "url": "http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=4ba28f6b2b8843bf9cef1c0fcc05f874&rt=red&outputType=JSON"
        },
        "response": {
        "code": 200,
        "data": {
                "ctatt":{ 
                  "tmst":"2015-04-30T20:29:44",
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
                                  "nextStaNm":"North/Clybourn",
                                  "prdt":"2015-04-30T20:29:24",
                                  "arrT":"2015-04-30T20:31:24",
                                  "isApp":"0",
                                  "isDly":"0",
                                  "flags":null,
                                  "lat":"41.90383",
                                  "lon":"-87.63685",
                                  "heading":"269"
                                },
                                { 
                                  "rn":"811",
                                  "destSt":"30089",
                                  "destNm":"95th/Dan Ryan",
                                  "trDr":"2",
                                  "nextStaId":"41230",
                                  "nextStpId":"30238",
                                  "nextStaNm":"47th",
                                  "prdt":"2016-10-18T15:10:46",
                                  "arrT":"2016-10-18T15:12:46",
                                  "isApp":"0",
                                  "isDly":"0",
                                  "flags":null,
                                  "lat":"41.83119",
                                  "lon":"-87.63064",
                                  "heading":"178"
                                }
                            ]
                        }
                    ]
                }
            }
        }
    ];
};
