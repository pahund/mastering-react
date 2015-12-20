import React from "react";
import { spy } from "sinon";
import Orders from "../../src/components/Orders";
import OrdersTable from "../../src/components/orders/OrdersTable";
import { should } from "chai";
import { setupFakeDOM } from "../helpers";
import { renderIntoDocument } from "react-addons-test-utils";
import { findRenderedComponentWithType } from "react-addons-test-utils";

should();
setupFakeDOM();

describe("[components/Orders]", () => {
    let subject;

    beforeEach(() => subject = renderIntoDocument(<Orders />));

    describe("#render", () => {
        describe("when “selected status” is “alle”", () => {
            beforeEach(() => subject.setState({ selectedStatus: "alle" }));
            it("renders all orders", () => {
                const table = findRenderedComponentWithType(subject, OrdersTable);
                const statuses = table.props.orders.map(order => order.orderStatus);
                statuses.should.deep.equal([
                    "offen", "offen", "offen", "verschickt"
                ]);
            });
        });
        describe("when “selected status” is “offen”", () => {
            beforeEach(() => subject.setState({ selectedStatus: "offen" }));
            it("renders open orders", () => {
                const table = findRenderedComponentWithType(subject, OrdersTable);
                const statuses = table.props.orders.map(order => order.orderStatus);
                statuses.should.deep.equal([
                    "offen", "offen", "offen"
                ]);
            });
        });
        describe("when “selected status” is “verschickt”", () => {
            beforeEach(() => subject.setState({ selectedStatus: "verschickt" }));
            it("renders shipped orders", () => {
                const table = findRenderedComponentWithType(subject, OrdersTable);
                const statuses = table.props.orders.map(order => order.orderStatus);
                statuses.should.deep.equal([
                    "verschickt"
                ]);
            });
        });
    });

    describe("#handleStatusClick", () => {
        it("calls “set state” with the new selected status", () => {
            spy(subject, "setState");
            subject.handleStatusClick("foo");
            subject.setState.calledWith({ selectedStatus: "foo" }).should.be.ok;
        });
    });
});
