import { api } from "..";
import { GetOrdersRequest, Order } from "./types";

export const ordersMock: GetOrdersRequest = {
  orders: [
    {
      id: `4561`,
      deliveryMan: `Gabriel`,
      platform: "ifood",
      status: `Em Preparação`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: `2867`,
      deliveryMan: `Guilherme`,
      platform: "99",
      status: `Em Preparação`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: `22378`,
      deliveryMan: `João`,
      platform: "ifood",
      status: `Em Preparação`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: `7827`,
      deliveryMan: `Pedro`,
      platform: "ifood",
      status: `Em Preparação`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: `78532`,
      deliveryMan: `Rafael`,
      platform: "ifood",
      status: `Em Preparação`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: `75382`,
      deliveryMan: `Gustavo`,
      platform: "ifood",
      status: `Em Preparação`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ],
};

export async function saveOrder(order: Order): Promise<Order> {
  const payload: Order = {
    ...order,
    status: `Em Preparação`,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  const response = await api<Order>("http://localhost:3333/orders", {
    method: `POST`,
    body: JSON.stringify(payload),
  });

  return response;
}
