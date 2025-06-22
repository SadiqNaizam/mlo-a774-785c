import React from 'react';
import DataSummaryGrid from '@/components/Dashboard/DataSummaryGrid';
import LeadsTrackingChart from '@/components/Dashboard/LeadsTrackingChart';
import PageHeader from '@/components/Dashboard/PageHeader';
import StatsCardGrid from '@/components/Dashboard/StatsCardGrid';
import MainAppLayout from '@/components/layout/MainAppLayout';

/**
 * The main dashboard page for the application.
 * This page orchestrates the assembly of various high-level dashboard components
 * such as headers, statistical grids, and charts within a consistent application layout.
 * It serves as the central view for the "Dashboard Overview".
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="space-y-6">
        <PageHeader />
        <StatsCardGrid />
        <LeadsTrackingChart />
        <DataSummaryGrid />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
