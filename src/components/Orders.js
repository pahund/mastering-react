import React from "react";
import PageHeader from "./PageHeader";
import OrdersTable from "./orders/OrdersTable";
import orders from "../data/orders";
import { toTitleCase } from "../util/formatters";

const STATUSES = [ "alle", "offen", "verschickt" ];

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStatus: "alle"
        };
    }

    render() {
        const { selectedStatus } = this.state;
        const statuses = STATUSES.map((status, i) => (
            <a key={i} className={selectedStatus ? "selected status" : "status"}
                    onClick={this.handleStatusClick.bind(this, status)}>
                {toTitleCase(status)}
            </a>
        ));
        const displayedOrders = selectedStatus !== "alle" ?
                orders.filter(order => order.orderStatus === selectedStatus) : orders;
        return (
            <div className="orders">
                <PageHeader>
                    <h1>Bestellungen</h1>
                    <nav className="status-nav">{statuses}</nav>
                </PageHeader>
                <OrdersTable orders={displayedOrders} />
            </div>
        );
    }

    handleStatusClick(status) {
        this.setState({
            selectedStatus: status
        });
    }
}

export default Orders;
