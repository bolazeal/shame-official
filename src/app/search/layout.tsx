import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { SearchIcon } from 'lucide-react';


function SearchSkeleton() {
    return (
        <div>
            <header className="sticky top-0 z-10 border-b border-border bg-background/80 p-2 backdrop-blur-sm sm:p-4">
                <div className="relative mx-auto max-w-xl">
                <SearchIcon className="absolute left-3 top-1/2 z-10 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Skeleton className="w-full h-10 rounded-full bg-muted pl-10" />
                </div>
            </header>
            <div className="p-4 space-y-4">
                <Skeleton className="h-8 w-48" />
                <div className="flex items-center space-x-4 p-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[150px]" />
                        <Skeleton className="h-4 w-[100px]" />
                    </div>
                </div>
                 <div className="flex items-center space-x-4 p-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[150px]" />
                        <Skeleton className="h-4 w-[100px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<SearchSkeleton/>}>{children}</Suspense>;
}
