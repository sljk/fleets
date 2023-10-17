import { ErrorIcon } from "../icons/ErrorIcon";
import { SuccessIcon } from "../icons/SuccessIcon";
import { WarningIcon } from "../icons/WarningIcon";

type Props = {
  variant: string;
  className?: string;
};

export const StatusIcon = ({ className, variant }: Props) => {
  if (variant === "error") return <ErrorIcon className={className} />;

  if (variant === "success") return <SuccessIcon className={className} />;

  return <WarningIcon className={className} />;
};
