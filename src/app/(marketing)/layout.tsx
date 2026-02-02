import { HeaderClearance } from "@/components/layout/HeaderClearance";

export default function MarketingLayout({
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
