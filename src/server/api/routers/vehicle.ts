import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const vehicleRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.vehicle.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        vehicleOrder: true,
      },
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

  crashVehicle: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const vehicle = await ctx.db.vehicle.findFirst({
        where: {
          name: input.name,
        },
      });

      if (!vehicle) return;

      const order = await ctx.db.vehicleOrder.findFirst({
        where: {
          vehicleId: vehicle.id,
          status: "in progress",
        },
      });

      if (order) {
        await ctx.db.vehicleOrder.update({
          where: {
            id: order.id,
          },
          data: {
            status: "stopped",
            variant: "error",
          },
        });
      }

      return ctx.db.vehicleStatus.create({
        data: {
          vehicleId: vehicle.id,
          title: "Engine failure",
          text: "There was an fatal failure in the engine",
          variant: "error",
        },
      });
    }),
});
