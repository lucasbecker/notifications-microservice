import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract findOneById(notificationId: string): Promise<Notification | null>;
  abstract findManyByRecipientId(
    recipientId: string,
  ): Promise<Array<Notification>>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
  abstract create(notification: Notification): Promise<void>;
  abstract update(notification: Notification): Promise<void>;
}
