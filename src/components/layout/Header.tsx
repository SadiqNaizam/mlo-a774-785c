import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("flex items-center justify-between h-16 px-6 bg-card border-b border-border flex-shrink-0", className)}>
      <h1 className="text-3xl font-bold text-foreground">
        Dashboard
      </h1>
      <Button size="sm">
        Create
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
    </header>
  );
};

export default Header;
