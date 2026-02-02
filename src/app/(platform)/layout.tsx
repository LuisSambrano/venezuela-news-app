import { HeaderClearance } from "@/components/layout/HeaderClearance";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderClearance />
      {children}
    </>
  );
}
