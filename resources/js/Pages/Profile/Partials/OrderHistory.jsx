import { ScrollArea } from "@/Components/ui/scroll-area";
import React from "react";
import OrderCard from "../Components/OrderCard";

const OrderHistory = () => {
    return (
        <div className="bg-secondary w-full p-4 sm:p-8 rounded-lg space-y-8">
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Order History
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    List of your order with status information.
                </p>
            </header>
            <div className="flex flex-col gap-4">
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>
        </div>
    );
};

export default OrderHistory;
