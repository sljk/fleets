import { ErrorIcon } from "../icons/ErrorIcon";
import { BadgeCheck } from "lucide-react";
import { WarningIcon } from "../icons/WarningIcon";

type Props = {
  variant: string;
  className?: string;
};

export const StatusIcon = ({ className, variant }: Props) => {
  if (variant === "error") return <ErrorIcon className={className} />;

  if (variant === "success") return <BadgeCheck className={className} />;

  return <WarningIcon className={className} />;
};
