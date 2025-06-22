import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
  hasTooltip?: boolean;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '2 days', color: 'bg-slate-700', hasTooltip: true },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

const totalFunnelLeads = funnelData.reduce((sum, item) => sum + item.count, 0);

interface SourceData {
  name: string;
  value: number;
  amount: number;
  color: string;
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 50, amount: 3000, color: '#ef4444' },
  { name: 'Behance', value: 40, amount: 1000, color: '#f59e0b' },
  { name: 'Instagram', value: 10, amount: 1000, color: '#14b8a6' },
  { name: 'Dribbble', value: 10, amount: 1000, color: '#84cc16' },
];

const StatsCardGrid: React.FC = () => {
  const [activeSourceTab, setActiveSourceTab] = React.useState<'came' | 'converted' | 'size'>('converted');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Funnel count</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-bold">600</p>
            <p className="text-muted-foreground">active leads</p>
          </div>
          <div className="mt-4">
            <div className="flex w-full h-2 rounded-full overflow-hidden bg-muted">
              {funnelData.map((item, index) => (
                <div key={index} className={item.color} style={{ width: `${(item.count / totalFunnelLeads) * 100}%` }} />
              ))}
            </div>
          </div>
          <div className="mt-6 space-y-4 text-sm">
            {funnelData.map((item) => (
              <div key={item.name} className="grid grid-cols-[minmax(0,2fr)_1fr_1fr_1fr] items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className={cn("w-2.5 h-2.5 rounded-sm", item.color)} />
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
                <span className="text-right text-foreground font-medium">{item.count}</span>
                <span className="text-right text-muted-foreground">$ {item.value}</span>
                <div className="text-right text-muted-foreground">
                  {item.hasTooltip ? (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-help underline decoration-dotted">{item.duration}</span>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-800 text-white border-none">
                          <p>average time on this stage</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    <span>{item.duration}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sources</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sourcesData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                  {sourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full mt-6 space-y-2 text-sm">
            {sourcesData.map((source) => (
              <div key={source.name} className="grid grid-cols-3 items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: source.color }} />
                  <span className="text-muted-foreground">{source.name}</span>
                </div>
                <span className="text-right text-foreground font-medium">$ {source.amount.toLocaleString()}</span>
                <span className="text-right text-muted-foreground">{source.value}%</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center p-1 rounded-lg bg-muted w-auto space-x-1 relative">
             <Button variant={activeSourceTab === 'came' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveSourceTab('came')} className="text-xs h-8 px-3">Leads came</Button>
            <Button variant={activeSourceTab === 'converted' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveSourceTab('converted')} className="text-xs h-8 px-3">Leads Converted</Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant={activeSourceTab === 'size' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveSourceTab('size')} className="text-xs h-8 px-3">Total deals size</Button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 text-white border-none">
                  <p>from leads total</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCardGrid;
