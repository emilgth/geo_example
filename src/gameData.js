const gameArea = {
    "type": "Polygon",
    "coordinates": [
        [
            [
                14.957199096679688,
                55.21286659730581
            ],
            [
                14.966039657592772,
                55.20512875751574
            ],
            [
                14.97114658355713,
                55.204320605229874
            ],
            [
                14.97711181640625,
                55.20723477427426
            ],
            [
                14.976167678833008,
                55.2112016195452
            ],
            [
                14.968013763427733,
                55.21504565414743
            ],
            [
                14.96256351470947,
                55.214311153934595
            ],
            [
                14.957199096679688,
                55.21286659730581
            ]
        ]
    ]
};

const players = [
    {
        "type": "Feature",
        "properties": {"name": "TeamHome"},
        "geometry": {
            "type": "Point",
            "coordinates": [
                14.96961236000061,
                55.21151380818035
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {"name": "TeamBrugs"},
        "geometry": {
            "type": "Point",
            "coordinates": [
                14.973812699317932,
                55.20674195184886
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {"name": "TeamVest"},
        "geometry": {
            "type": "Point",
            "coordinates": [
                14.955568313598633,
                55.21032013253498
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {"name": "TeamOst"},
        "geometry": {
            "type": "Point",
            "coordinates": [
                14.975996017456056,
                55.20468794921152
            ]
        }
    }
];

module.exports = {gameArea, players};
