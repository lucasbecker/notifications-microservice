import { Content } from './content';
import { Replece } from '@helpers/Replace';
import { randomUUID } from 'node:crypto';

export interface NotificationData {
  recipientId: string;
  category: string;
  content: Content;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private data: NotificationData;

  constructor(
    props: Replece<
      NotificationData,
      { createdAt?: Date; content: Content | string }
    >,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.data = {
      ...props,
      content:
        typeof props.content === 'string'
          ? new Content(props.content)
          : props.content,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get recipientId(): string {
    return this.data.recipientId;
  }

  public set category(value: string) {
    this.data.category = value;
  }

  public get category(): string {
    return this.data.category;
  }

  public set content(value: Content) {
    this.data.content = value;
  }

  public get content(): Content {
    return this.data.content;
  }

  public read() {
    this.data.readAt = new Date();
  }

  public unread() {
    this.data.readAt = null;
  }

  public get readAt(): Date | null | undefined {
    return this.data.readAt;
  }

  public cancel() {
    this.data.canceledAt = new Date();
  }

  public get canceledAt(): Date | null | undefined {
    return this.data.canceledAt;
  }

  public get createdAt(): Date {
    return this.data.createdAt;
  }
}
