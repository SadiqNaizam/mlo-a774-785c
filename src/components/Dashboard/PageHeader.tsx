import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
    className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <Tabs defaultValue="leads" className="w-auto">
        <TabsList className="bg-transparent p-0">
          <TabsTrigger value="sales" className="text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-1">Sales</TabsTrigger>
          <TabsTrigger value="leads" className="text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-1">Leads</TabsTrigger>
        </TabsList>
      </Tabs>
      <Button variant="outline" size="sm" className="flex items-center gap-2 text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <span>last 6 months</span>
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default PageHeader;
