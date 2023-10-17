import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const vehicleOrderRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.vehicleOrder.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        vehicle: true,
      },
    });
  }),
});
