export const deliveryPlatforms = [
  { label: "iFood", value: "iFood", img: "/assets/img/ifood.png" },
  { label: "Uber Eats", value: "Uber Eats", img: "/assets/img/ubereats.png" },
  { label: "99Food", value: "99Food", img: "/assets/img/99.png" },
  { label: "Interno", value: "Interno", img: "/assets/img/interno.png" },
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
