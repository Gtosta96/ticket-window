import { DeliveryPlatforms, GetOrdersRequest, OrderStatus } from "./types";

export const ordersMock: GetOrdersRequest = {
  orders: [
    {
      id: `1`,
      deliveryMan: `Gabriel`,
      platform: DeliveryPlatforms.IFOOD,
      status: OrderStatus.REQUESTED,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: `2`,
      deliveryMan: `Guilherme`,
      platform: DeliveryPlatforms.NINENINE_FOOD,
      status: OrderStatus.SENT,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ],
};
