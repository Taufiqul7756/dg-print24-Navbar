import { Button } from "@nextui-org/react";
import TableComponent from "./Components/Table/TableComponent";

export default function HomePage() {
  return (
    <main
      className="grid justify-center items-center gap-10 p-20 sm:p-5
    "
    >
      <TableComponent />
      <TableComponent />
      <TableComponent />
    </main>
  );
}
