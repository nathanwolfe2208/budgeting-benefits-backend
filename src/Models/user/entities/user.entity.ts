import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column('jsonb', { nullable: true })
  monthlyInc: Record<string, number>;

  @Column({ default: 0 })
  emgfund: number;

  @Column({ default: 0 })
  savings: number;
}