import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/auth";
import ListData from "./ListData";

export default async function ListDataPage() {
  const session = await getServerSession(authOptions);

  // Secure route: redirect to signin if not authenticated
  if (!session) {
    redirect(`/api/auth/signin?callbackUrl=/list`);
  }else{

    return <ListData session={session}/>;
  }
}