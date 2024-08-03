import { Button } from "@nextui-org/react";
import TableComponent from "./Components/Table/TableComponent";

export default function Home() {
  return (
    <main className="grid justify-center items-center gap-10 p-20">
      <TableComponent />
      <TableComponent />
      <TableComponent />
    </main>
  );
}
