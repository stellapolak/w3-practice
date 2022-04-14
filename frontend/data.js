let myFavoriteCountry = {
    "name": {
        "common": "Lesotho",
        "official": "Kingdom of Lesotho",
        "nativeName": {
            "eng": {
                "official": "Kingdom of Lesotho",
                "common": "Lesotho"
            },
            "sot": {
                "official": "Kingdom of Lesotho",
                "common": "Lesotho"
            }
        }
    },
    "tld": [
        ".ls"
    ],
    "cca2": "LS",
    "ccn3": "426",
    "cca3": "LSO",
    "cioc": "LES",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
        "LSL": {
            "name": "Lesotho loti",
            "symbol": "L"
        },
        "ZAR": {
            "name": "South African rand",
            "symbol": "R"
        }
    },
    "idd": {
        "root": "+2",
        "suffixes": [
            "66"
        ]
    },
    "capital": [
        "Maseru"
    ],
    "altSpellings": [
        "LS",
        "Kingdom of Lesotho",
        "Muso oa Lesotho"
    ],
    "region": "Africa",
    "subregion": "Southern Africa",
    "languages": {
        "eng": "English",
        "sot": "Sotho"
    },
    "translations": {
        "ara": {
            "official": "مملكة ليسوتو",
            "common": "ليسوتو"
        },
        "ces": {
            "official": "Lesothské království",
            "common": "Lesotho"
        },
        "cym": {
            "official": "Kingdom of Lesotho",
            "common": "Lesotho"
        },
        "deu": {
            "official": "Königreich Lesotho",
            "common": "Lesotho"
        },
        "est": {
            "official": "Lesotho Kuningriik",
            "common": "Lesotho"
        },
        "fin": {
            "official": "Lesothon kuningaskunta",
            "common": "Lesotho"
        },
        "fra": {
            "official": "Royaume du Lesotho",
            "common": "Lesotho"
        },
        "hrv": {
            "official": "Kraljevina Lesoto",
            "common": "Lesoto"
        },
        "hun": {
            "official": "Lesothói Királyság",
            "common": "Lesotho"
        },
        "ita": {
            "official": "Regno del Lesotho",
            "common": "Lesotho"
        },
        "jpn": {
            "official": "レソト王国",
            "common": "レソト"
        },
        "kor": {
            "official": "레소토 왕국",
            "common": "레소토"
        },
        "nld": {
            "official": "Koninkrijk Lesotho",
            "common": "Lesotho"
        },
        "per": {
            "official": "پادشاهی لسوتو",
            "common": "لسوتو"
        },
        "pol": {
            "official": "Królestwo Lesotho",
            "common": "Lesotho"
        },
        "por": {
            "official": "Reino do Lesoto",
            "common": "Lesoto"
        },
        "rus": {
            "official": "Королевство Лесото",
            "common": "Лесото"
        },
        "slk": {
            "official": "Lesothské kráľovstvo",
            "common": "Lesotho"
        },
        "spa": {
            "official": "Reino de Lesotho",
            "common": "Lesotho"
        },
        "swe": {
            "official": "Konungariket Lesotho",
            "common": "Lesotho"
        },
        "urd": {
            "official": "مملکتِ لیسوتھو",
            "common": "لیسوتھو"
        },
        "zho": {
            "official": "莱索托王国",
            "common": "莱索托"
        }
    },
    "latlng": [
        -29.5,
        28.5
    ],
    "landlocked": true,
    "borders": [
        "ZAF"
    ],
    "area": 30355,
    "demonyms": {
        "eng": {
            "f": "Mosotho",
            "m": "Mosotho"
        },
        "fra": {
            "f": "Lésothienne",
            "m": "Lésothien"
        }
    },
    "flag": "🇱🇸",
    "maps": {
        "googleMaps": "https://goo.gl/maps/H8gJi5mL4Cmd1SF28",
        "openStreetMaps": "https://www.openstreetmap.org/relation/2093234"
    },
    "population": 2142252,
    "gini": {
        "2017": 44.9
    },
    "fifa": "LES",
    "car": {
        "signs": [
            "LS"
        ],
        "side": "left"
    },
    "timezones": [
        "UTC+02:00"
    ],
    "continents": [
        "Africa"
    ],
    "flags": {
        "png": "https://flagcdn.com/w320/ls.png",
        "svg": "https://flagcdn.com/ls.svg"
    },
    "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/ls.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/ls.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
        "latlng": [
            -29.32,
            27.48
        ]
    },
    "postalCode": {
        "format": "###",
        "regex": "^(\\d{3})$"
    }
}

let v1 = myFavoriteCountry.tld[0]
console.log(v1) 

let v2 = myFavoriteCountry.name.nativeName.eng.official
console.log(v2) 

let v3 = myFavoriteCountry.idd.suffixes[0]
console.log(v3) 