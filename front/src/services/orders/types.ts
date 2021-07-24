export enum DeliveryPlatforms {
  IFOOD = `ifood`,
  UBER_EATS = `Uber Eats`,
  NINENINE_FOOD = `99Food`,
}

export enum OrderStatus {
  REQUESTED = `requested`,
  SENT = `sent`,
  CANCELED = `canceled`,
}

export type Order = {
  id: string | number;
  deliveryMan: string;
  clientName: string;
  status: OrderStatus;
  platform: DeliveryPlatforms;

  createdAt: number;
  updatedAt: number;
};

export type AddOrderRequest = Order;
export type AddOrderResponse = Order;

export type GetOrdersRequest = {
  orders: Array<Order>;
};

export type GetOrdersResponse = GetOrdersRequest;
