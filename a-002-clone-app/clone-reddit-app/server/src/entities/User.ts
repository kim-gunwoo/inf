import { IsEmail, Length } from "class-validator";
import { Entity, Column, Index, OneToMany, BeforeInsert } from "typeorm";
import BaseEntity from "./Entity";
import bcrypt from "bcryptjs";
import Post from "./Post";
import Vote from "./Vote";

/** 
 @Entity()
    - 데코레이터 클래스는 User 클래스가 엔티티임을 나타내는 데 사용, CREATE TABLE user 부분

 @Column()
    - 데코레이터 클래스는 User 엔터티의 email 및 username과 같은 다른 열을 나타내는 데 사용

 @Index()
    - 데이터베이스 인덱스를 생성. 
    엔터티 속성 또는 엔터티에 사용 할 수 있음, 엔티티에 사용될 때 복합 열로 인덱스를 생성할 수 있음
*/

@Entity("users")
export class User extends BaseEntity {
  @Index()
  @IsEmail(undefined, { message: "이메일 주소가 문제" })
  @Length(1, 255, { message: "이메일 주소 길이" })
  @Column({ unique: true })
  email: string;

  @Index()
  @Length(3, 32, { message: "사용자 이름은 3자 이상" })
  @Column({ unique: true })
  username: string;

  @Column()
  @Length(6, 255, { message: "비밀번호는 6자리 이상" })
  password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Vote, (vote) => vote.user)
  votes: Vote[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 6);
  }
}
