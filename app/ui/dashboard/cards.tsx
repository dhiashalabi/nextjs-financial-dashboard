import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'
import { fetchCardData } from '@/app/lib/data'
const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
}

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData()
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  )
}

export function Card({
  title,
  value,
  type,
}: {
  title: string
  value: number | string
  type: 'invoices' | 'customers' | 'pending' | 'collected'
}) {
  const Icon = iconMap[type]

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm dark:bg-gray-800 dark:shadow-lg">
      <div className="flex p-4">
        {Icon ? (
          <Icon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        ) : null}
        <h3 className="ml-2 text-sm font-medium text-gray-800 dark:text-gray-200">
          {title}
        </h3>
      </div>
      <p
        className={`${lusitana.className}
            truncate rounded-md bg-white px-4 py-8 text-center text-2xl text-gray-800 dark:bg-gray-700 dark:text-gray-100`}
      >
        {value}
      </p>
    </div>
  )
}
