import { ProductWithPrimaryVariant } from "./product";

export interface NotificationType {
  id: number;
  product: ProductWithPrimaryVariant;
  productId: number;
  message: string;
  notification_type: string;
  read: boolean;
  read_at: null | Date;
  recipient_id: number;
}
