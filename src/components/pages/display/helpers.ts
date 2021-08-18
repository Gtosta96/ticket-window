import { differenceInSeconds } from "date-fns";
import { Order } from "../../../services/orders/types";

export function getOrdersToAlert(orders: Order[], interval: number) {
  const ordersToAlert = orders
    .filter((order) => {
      const diffInSeconds = differenceInSeconds(
        new Date(),
        new Date(order.updatedAt)
      );

      return order.alerts === 0 || diffInSeconds >= interval;
    })
    .sort((a, b) => a?.updatedAt - b?.updatedAt);

  return ordersToAlert;
}
