import { NotificationNotFound } from '@app/use-cases/errors/notification-not-found';
import { Notification } from '../../src/app/entities/notification';
import { NotificationsRepository } from '../../src/app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Array<Notification> = [];

  async findOneById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId,
    );

    return notification ? notification : null;
  }

  async findManyByRecipientId(
    recipientId: string,
  ): Promise<Array<Notification>> {
    const notifications = this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );

    return notifications;
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const notifications = this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );

    return notifications.length;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async update(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex < 0) {
      throw new NotificationNotFound();
    }

    this.notifications[notificationIndex] = notification;
  }
}
