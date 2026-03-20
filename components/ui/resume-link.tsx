import { profile } from "@/data/site-content";

type ResumeLinkProps = {
  className?: string;
  label: string;
};

export function ResumeLink({ className, label }: ResumeLinkProps) {
  return (
    <a className={className} href={profile.resumeUrl} rel="noreferrer" target="_blank">
      {label}
    </a>
  );
}
