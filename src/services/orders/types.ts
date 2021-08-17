export const deliveryPlatforms = [
  { label: "iFood", value: "iFood" },
  { label: "Uber Eats", value: "Uber Eats" },
  { label: "99Food", value: "99Food" },
  { label: "Interno", value: "Interno" },
];

export type OrderStatus =
  | "Em Preparação"
  | "Preparado"
  | "Entregue ao Motoboy"
  | "Cancelado";

export type Order = {
  id: string;
  orderNumber: string;
  deliveryMan: string;
  platform: string;
  status: OrderStatus;
  createdAt: number;

  readyAt?: number;
  deliveryAt?: number;
  updatedAt?: number;

  alerts?: number;
};

export type AddOrderRequest = Order;
export type AddOrderResponse = Order;

export type GetOrdersRequest = {
  orders: Array<Order>;
};

export type GetOrdersResponse = GetOrdersRequest;
