import { fetchFilteredCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
import { TableRowSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import Table from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function CustomersPage({
  searchParams,
}: {
  searchParams?: { customers?: string };
}) {
  const customers = searchParams?.customers || '';

  const totalcustomers = await fetchFilteredCustomers(customers);
  return (
    <div className="w-full">
      <Suspense key={customers} fallback={<TableRowSkeleton />}>
        <Table customers={totalcustomers} />
      </Suspense>
    </div>
  );
}
