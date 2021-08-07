import { Order } from "./types";

export async function saveOrder(order: Order): Promise<Order> {
  const payload: Order = {
    ...order,
    status: `Em Preparação`,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  // const response = await api<Order>("http://localhost:3333/orders", {
  //   method: `POST`,
  //   body: JSON.stringify(payload),
  // });

  // return response;
  return payload;
}
