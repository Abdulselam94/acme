import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
  CustomersTableType,
  FormattedCustomersTable,
} from '@/app/lib/definitions';
import CustomerActions from '@/app/ui/customers/customer-actions';
import Avatar from '@/app/ui/customers/avatar';
import CreateCustomer from '@/app/ui/customers/create-customer';

export default async function CustomersTable({
  customers,
}: {
  customers: FormattedCustomersTable[];
}) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Search placeholder="Search customers..." />
        <div className="hidden md:block">
          <CreateCustomer />
        </div>
      </div>
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden space-y-3">
                {customers?.map((customer) => (
                  <div
                    key={customer.id}
                    className="mb-2 w-full rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Avatar name={customer.name} src={customer.image_url} size={40} />
                            <div>
                              <p className="font-medium text-slate-900">{customer.name}</p>
                              <p className="text-sm text-slate-500">{customer.email}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs text-slate-400">Pending</p>
                        <p className="font-medium">{customer.total_pending}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs text-slate-400">Paid</p>
                        <p className="font-medium">{customer.total_paid}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm flex items-center justify-between">
                      <p className="text-slate-600">{customer.total_invoices} invoices</p>
                      <CustomerActions id={customer.id} name={customer.name} email={customer.email} />
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Invoices
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Pending
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Total Paid
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium text-right">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {customers.map((customer) => (
                    <tr key={customer.id} className="group hover:bg-white hover:shadow-sm transition">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Avatar name={customer.name} src={customer.image_url} size={36} />
                          <div>
                            <p className="font-medium text-slate-900">{customer.name}</p>
                            <p className="text-sm text-slate-500">{customer.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">{customer.email}</td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">{customer.total_invoices}</td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">{customer.total_pending}</td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">{customer.total_paid}</td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm text-right">
                        <CustomerActions id={customer.id} name={customer.name} email={customer.email} {...customer} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {(!customers || customers.length === 0) && (
        <div className="mt-12 flex flex-col items-center justify-center rounded-md bg-white p-8 text-center shadow">
          <p className="mb-4 text-lg font-semibold text-slate-900">No customers found</p>
          <p className="mb-6 text-sm text-slate-500">Start by creating a new customer to populate this list.</p>
          <CreateCustomer />
        </div>
      )}
    </div>
  );
}
