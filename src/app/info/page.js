import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/auth";
import Info from "./InfoPage";

export default async function InfoMain() {
  const session = await getServerSession(authOptions);

  // Secure route: redirect to signin if not authenticated
  if (!session) {
    redirect(`/api/auth/signin?callbackUrl=/info`);
  }else{

    return <Info session={session}/>;
  }
}