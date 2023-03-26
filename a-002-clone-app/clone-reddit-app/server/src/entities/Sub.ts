import { Expose } from "class-transformer";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import BaseEntity from "./Entity";
import Post from "./Post";
import { User } from "./User";

/**

    @JoinColumn()
    - 관계쪽이 외래 키(Foreign Key)를 가지고 있는지 나타냄
    - @JoinColumn을 설정하면 데이터베이스에 propertyName + referencedColumnName이라는 열이 자동으로 생성
    - 이 데코레이터는 @ManyToOne의 경우 선택 사항이지만 @OneToOne의 경우 필수

    name
    - 외래 키 속성명 입니다.
    - 이 name이 없다면 propertyName + referencedColumnName 이 default (ex user_id)
    
    Sub 테이블 User 테이블
    referencedColumnName
    - 참조 엔티티의 참조 속성명
    - id가 default 둘다 없으면 FK필드는 FK속성명 Id됨 (user_id)
    
    @ManyToOne(type => Category) @JoinColumn({ name: "cat_id" }) category: Category;
        이 코드는 데이터베이스에 categoryId 열을 생성
        데이터베이스에서 이 이름을 변경하려면 사용자 정의 조인 열 이름을 지정할 수 있음

    @ManyToOne(type => Category)
    @JoinColumn({ referencedColumnName: "name" }) category: Category;
    조인 열은 항상 다른 열에 대한 참조(외래 키 사용). 
    기본적으로 관계는 항상 관련 엔터티의 기본 열을 참조. 
    관련 엔터티의 다른 열과 관계를 생성하려면 @JoinColumn에서도 지정할 수 있음
    이제 관계는 id 대신 Category 엔터티의 이름을 참조
    해당 관계의 열 이름은 categoryName이 됨

 */

@Entity("subs")
export default class Sub extends BaseEntity {
  @Index()
  @Column({ unique: true })
  name: string;

  @Column()
  title: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ nullable: true })
  imageUrn: string;

  @Column({ nullable: true })
  bannerUrn: string;

  @Column()
  username: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "username", referencedColumnName: "username" })
  user: User;

  @OneToMany(() => Post, (post) => post.sub)
  posts: Post[];

  @Expose()
  get imageUrl(): string {
    return this.imageUrn
      ? `${process.env.APP_URL}/images/${this.imageUrn}`
      : "https://www.gravatar.com/avatar?d=mp&f=y";
  }

  @Expose()
  get bannerUrl(): string | undefined {
    return this.bannerUrn
      ? `${process.env.APP_URL}/images/${this.bannerUrn}`
      : undefined;
  }
}
