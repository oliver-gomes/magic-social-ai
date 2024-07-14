import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { format } from "date-fns";

const History = async () => {
  const { userId } = auth();

  const userHistory = await db.aIOutput.findMany({
    where: {
      userId: userId as string,
    },
  });

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <h2 className="font-medium">Output History</h2>
      </div>
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <Table>
          <TableCaption>A list of your ai output history.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Template</TableHead>
              <TableHead className="w-[250px]">Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userHistory && userHistory.length > 0
              ? userHistory.map((history) => (
                  <TableRow key={history.id}>
                    <TableCell>{history.templateUsed}</TableCell>
                    <TableCell className="w-[250px]">{history.title}</TableCell>
                    <TableCell className="whitespace-pre-wrap">
                      {history.description}
                    </TableCell>
                    <TableCell className="text-right">
                      {format(history.createdAt, "MM/dd/yyyy")}
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default History;
