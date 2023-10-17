import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const vehicleRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.vehicle.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  vehicleDetails: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.vehicle.findFirst({
        where: {
          name: input.name,
        },
        include: {
          vehicleOrder: true,
          vehicleStatus: true,
        },
      });
    }),
});
