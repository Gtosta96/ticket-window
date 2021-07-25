export const deliveryPlatforms = [
  { label: "ifood", value: "ifood" },
  { label: "Uber Eats", value: "Uber Eats" },
  { label: "99Food", value: "99Food" },
];

export type OrderStatus =
  | "Em Preparação"
  | "Preparado"
  | "Entregue ao Motoboy"
  | "Cancelado";

export type Order = {
  id: string | number;
  deliveryMan: string;
  platform: string;
  status: OrderStatus;
  createdAt: number;
  updatedAt: number;
};

export type AddOrderRequest = Order;
export type AddOrderResponse = Order;

export type GetOrdersRequest = {
  orders: Array<Order>;
};

export type GetOrdersResponse = GetOrdersRequest;
