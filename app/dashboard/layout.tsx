import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { NuqsProvider } from '@/components/nuqs-provider'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-1 flex-col">
        <NuqsProvider>
          {children}
        </NuqsProvider>
      </main>
    </SidebarProvider>
  );
}
