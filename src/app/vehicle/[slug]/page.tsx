import { VehicleDetails } from "~/app/_features/vehicle/VehicleDetails";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Vehicle({ params }: Props) {
  return <VehicleDetails vehicleName={params.slug} />;
}
