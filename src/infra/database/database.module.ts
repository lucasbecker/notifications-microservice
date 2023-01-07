import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepostiory } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepostiory,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
