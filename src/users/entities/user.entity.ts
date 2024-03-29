import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 16, unique: true })
  username: string;

  @Column({
    length: 255,
    transformer: {
      from: (value: string) => value,
      to: (value: string) => value.toLowerCase(),
    },
  })
  email: string;

  @Column({ length: 32 })
  password: string;

  @Column({ default: true })
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;

  @VersionColumn({ nullable: true })
  revision: number;
}
