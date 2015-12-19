import moment from "moment";

const ORDERS_DATA = [
    {
        reference: "ASX13X",
        customer: "Otto Biersack",
        orderedAt: moment("2015-03-09T17:14:00.000Z"),
        products: [
            {name: "Blaues Wollhemd", amount: 120.25},
            {name: "Weißes T-Shirt", amount: 220.50}
        ],
        amount: 340.75,
        paymentStatus: "autorisiert",
        orderStatus: "offen"
    },
    {
        reference: "KCA31F",
        customer: "Mandy Frompompen",
        orderedAt: moment("2015-03-09T17:08:00.000Z"),
        products: [
            {name: "Kleines Schwarzes", amount: 29.75}
        ],
        amount: 29.75,
        paymentStatus: "autorisiert",
        orderStatus: "offen"
    },
    {
        reference: "MCZ96G",
        customer: "Fritjof Semmelring",
        orderedAt: moment("2015-02-28T16:17:00.000Z"),
        products: [
            {name: "Lila Unterhose", amount: 5.50}
        ],
        amount: 5.50,
        paymentStatus: "beglichen",
        orderStatus: "offen"
    },
    {
        reference: "LPX77Q",
        customer: "Walter Heinz",
        orderedAt: moment("2015-03-09T15:49:00.000Z"),
        products: [
            {name: "Fedora-Hut", amount: 65.50},
            {name: "Brauner Trenchcoat", amount: 250.50}
        ],
        amount: 316.00,
        paymentStatus: "beglichen",
        orderStatus: "verschickt"
    }
];

export default ORDERS_DATA;
