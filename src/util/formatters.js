import numeral from "numeral";
import moment from "moment";
import de from "moment/locale/de";

// load a language
numeral.language("de", {
    delimiters: {
        thousands: " ",
        decimal: ","
    },
    abbreviations: {
        thousand: "k",
        million: "m",
        billion: "b",
        trillion: "t"
    },
    ordinal: () => ".",

    currency: {
        symbol: "€"
    }
});

// switch between languages
numeral.language("de");

// switch locale for date format
moment.locale("de");

function toMoney(num) {
    return numeral(num).format("$0,0.00");
};

function toDateTime(mom) {
    return mom.format("D. MMM, hh:mm") + " Uhr";
};

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

export { toMoney, toDateTime, toTitleCase };
