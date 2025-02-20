import { columns } from "./columns";
import { DataTable } from "./data-table";

/**
 * Fetch data from your API here.
 * @returns {Promise<Array>} Promise resolving to an array of payments
 */
async function getData() {
  return [
    {
      id: "728ed52f",
      name:"Aishwarya Ghorprade",
      role:"ECT",
      progress: "89%",
    },
    // ...
  ];
}

/**
 * Demo Page Component
 * @returns {JSX.Element} The rendered component
 */
export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
