import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function MessagesSkeleton() {
    return (
        <div className="flex h-full flex-col">
            <header className="flex h-14 shrink-0 items-center border-b px-4 lg:hidden">
                <Skeleton className="h-6 w-32" />
            </header>
            <main className="flex flex-1 overflow-hidden">
                <div className="h-full w-full flex-shrink-0 border-r lg:w-80 xl:w-96">
                    <div className="hidden h-14 flex-shrink-0 items-center border-b px-4 lg:flex">
                        <Skeleton className="h-6 w-32" />
                    </div>
                    <div className="p-4 space-y-4">
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-12 w-12 rounded-full" />
                            <div className="w-full space-y-2">
                                <Skeleton className="h-4 w-1/2" />
                                <Skeleton className="h-3 w-full" />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-12 w-12 rounded-full" />
                            <div className="w-full space-y-2">
                                <Skeleton className="h-4 w-1/2" />
                                <Skeleton className="h-3 w-full" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full flex-1 flex-col hidden lg:flex">
                     <div className="hidden h-full flex-col items-center justify-center bg-muted/30 p-4 text-center lg:flex">
                        <Skeleton className="h-16 w-16 rounded-full" />
                        <Skeleton className="mt-4 h-8 w-48" />
                        <Skeleton className="mt-2 h-4 w-64" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default function MessagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<MessagesSkeleton />}>{children}</Suspense>;
}
