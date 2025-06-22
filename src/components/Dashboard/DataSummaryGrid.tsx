import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Reason {
  percentage: number;
  description: string;
}

const reasonsForLoss: Reason[] = [
  { percentage: 40, description: 'The proposal is unclear' },
  { percentage: 20, description: 'However venture pursuit' },
  { percentage: 10, description: 'Other' },
  { percentage: 30, description: 'The proposal is unclear' }, // As per image
];

interface OtherData {
  value: string;
  description: string;
  hasTooltip?: boolean;
  tooltipText?: string;
}

const otherData: OtherData[] = [
  { value: '900', description: 'total leads count' },
  { value: '12', description: 'days in average to convert lead' },
  { value: '30', description: 'inactive leads', hasTooltip: true, tooltipText: 'Leads that have not been contacted in 30+ days.' },
];

const DataSummaryGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {reasonsForLoss.map((reason, index) => (
              <div key={index} className="space-y-1">
                <p className="text-4xl font-bold">{reason.percentage}%</p>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {otherData.map((data, index) => (
              <div key={index} className="space-y-1">
                <p className="text-4xl font-bold">{data.value}</p>
                <div className="flex items-center gap-1">
                  <p className="text-sm text-muted-foreground">{data.description}</p>
                  {data.hasTooltip && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-muted-foreground cursor-pointer flex-shrink-0" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{data.tooltipText}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataSummaryGrid;
