import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { NuqsAdapter } from 'nuqs/adapters/next/app'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-1 flex-col">
        <NuqsAdapter>
          {children}
        </NuqsAdapter>
      </main>
    </SidebarProvider>
  );
}
