export interface Order {
  id: number;
  date: string;
  status: "Delivered" | "Shipped";
  price: number;
}
