import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { LocalEvent } from './local-event.entity';

@Entity('event_registrations')
export class EventRegistration {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => LocalEvent, { onDelete: 'CASCADE' })
  event: LocalEvent;

  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  user: UserEntity;

  @Column({ type: 'enum', enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' })
  status: string;

  @Column({ type: 'jsonb', nullable: true })
  registrationDetails: Record<string, any>;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
