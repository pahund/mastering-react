import React from "react";
import OrderRow from "./OrderRow";

class OrdersTable extends React.Component {
    render() {
        const rows = this.props.orders.map((order, i) => <OrderRow order={order} key={i} />);
        return (
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Bestellnr.</th>
                        <th>Kunde</th>
                        <th className="sorted-by">Bestelldatum</th>
                        <th>Produkt(e)</th>
                        <th className="amount">Betrag</th>
                        <th className="status">Bezahlstatus</th>
                        <th className="status">Bestellstatus</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default OrdersTable;
