import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import AIChart from "./ai-chart";

export const AIUsage = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  let availableCredit;
  let totalUsage: number = 0;

  const userAIOutputs = await db.aIOutput.findMany({
    where: {
      userId: userId as string,
    },
  });

  if (userAIOutputs.length > 0) {
    userAIOutputs.forEach((output) => {
      totalUsage = totalUsage + Number(output.description?.length);
    });

    revalidatePath("/");
  }

  const userCredit = await db.user.findUnique({
    where: { userId: userId as string },
  });

  availableCredit = userCredit ? Number(userCredit?.totalCredit) : 10000;

  return (
    <div className="bg-white">
      <AIChart availableCredit={availableCredit} totalUsage={totalUsage} />
    </div>
  );
};
