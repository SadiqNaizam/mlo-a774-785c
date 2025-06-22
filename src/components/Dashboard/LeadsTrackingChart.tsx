import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ChartData {
  month: string;
  'Closed won': number;
  'Closed lost': number;
}

const chartData: ChartData[] = [
  { month: 'March', 'Closed won': 88, 'Closed lost': 65 },
  { month: 'April', 'Closed won': 65, 'Closed lost': 45 },
  { month: 'May', 'Closed won': 80, 'Closed lost': 98 },
  { month: 'June', 'Closed won': 88, 'Closed lost': 12 },
  { month: 'July', 'Closed won': 70, 'Closed lost': 48 },
  { month: 'August', 'Closed won': 30, 'Closed lost': 90 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-3 border rounded-lg shadow-lg">
        <p className="font-bold mb-2">{label}</p>
        <p style={{ color: payload[0].stroke }} className="text-sm">{`${payload[0].name}: ${payload[0].value}`}</p>
        <p style={{ color: payload[1].stroke }} className="text-sm">{`${payload[1].name}: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const LeadsTrackingChart: React.FC = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <CardTitle>Leads tracking</CardTitle>
          <div className="flex items-baseline gap-4 mt-2">
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold">680</p>
              <p className="text-sm text-muted-foreground">total closed</p>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold">70</p>
              <p className="text-sm text-muted-foreground">total lost</p>
            </div>
          </div>
        </div>
        <Button variant="outline" size="sm" className="flex items-center gap-2 text-muted-foreground w-full sm:w-auto">
          <Calendar className="h-4 w-4" />
          <span>last 6 months</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} dy={10} tick={{ fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }} />
              <Area type="monotone" dataKey="Closed won" stroke="#14b8a6" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" dot={{ r: 4, fill: '#14b8a6', strokeWidth: 2, stroke: 'hsl(var(--card))' }} activeDot={{ r: 6, strokeWidth: 2, stroke: '#14b8a6' }} />
              <Area type="monotone" dataKey="Closed lost" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" dot={{ r: 4, fill: '#ef4444', strokeWidth: 2, stroke: 'hsl(var(--card))' }} activeDot={{ r: 6, strokeWidth: 2, stroke: '#ef4444' }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#14b8a6]"></div>
            <span className="text-sm text-muted-foreground">Closed won</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#ef4444]"></div>
            <span className="text-sm text-muted-foreground">Closed lost</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
