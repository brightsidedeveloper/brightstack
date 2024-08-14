import { z } from "zod";


export const ExampleSchema = z.object({
    random: z.array(z.number()),
    name: z.string(),
    age: z.number(),
    isCool: z.boolean(),
    nested: z.object({
        nestedName: z.string(),
        nestedAge: z.number(),
        nestedIsCool: z.boolean(),
    }),
    nestedArray: z.array(z.object({
        nestedArrayName: z.string(),
        nestedArrayAge: z.number(),
        nestedArrayIsCool: z.boolean(),
    })),
});

export type Example = z.infer<typeof ExampleSchema>;