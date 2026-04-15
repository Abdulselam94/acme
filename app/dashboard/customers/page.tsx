import CustomersTable from '@/app/ui/customers/table';
import CreateCustomer from '@/app/ui/customers/create-customer';
import Pagination from '@/app/ui/customers/pagination';
import { fetchFilteredCustomersPaged, fetchCustomersPages } from '@/app/lib/data';

type Props = {
    searchParams?: { query?: string };
};

export default async function Page({ searchParams }: Props) {
    const query = (searchParams?.query as string) || '';
    const currentPage = Number(searchParams?.page ?? 1) || 1;

    const [customers, totalPages] = await Promise.all([
        fetchFilteredCustomersPaged(query, currentPage),
        fetchCustomersPages(query),
    ]);

    return (
        <div className="px-6 py-8">
            <div className="mb-6">
                <CreateCustomer />
            </div>

            <CustomersTable customers={customers} />

            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
}