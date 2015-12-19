import { should } from "chai";
import React from "react";
import moment from "moment";
import { renderShallow } from "../../helpers";
import OrderRow from "../../../src/components/orders/OrderRow";

should();

describe("[components/orders/OrderRow", () => {
    let subject;
    let order;

    beforeEach(() => {
        order = {
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
        };
        subject = renderShallow(<OrderRow order={order} />);
    });

    it("renders the columns", () => {
        const tds = subject.props.children.filter(c => c.type === "td");
        const tdsContent = tds.map(td => td.props.children);
        tdsContent.should.deep.equal([
            "ASX13X",
            "Otto Biersack",
            "9. Mrz., 06:14 Uhr",
            "Blaues Wollhemd, Weißes T-Shirt",
            "€340,75",
            "Autorisiert",
            "Offen"
        ]);
    });
});
