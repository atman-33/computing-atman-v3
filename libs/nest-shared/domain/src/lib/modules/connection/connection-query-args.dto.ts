import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class ConnectionQueryArgs {
    @Field(() => Int, { nullable: true })
    first?: number;

    @Field({ nullable: true })
    after?: string;

    @Field(() => Int, { nullable: true })
    last?: number;

    @Field({ nullable: true })
    before?: string;

    @Field({ nullable: true })
    query?: string;
}
