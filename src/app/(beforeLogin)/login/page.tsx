import { redirect } from "next/navigation";

function page() {
  console.log("This is a before login page.");
  redirect("/i/flow/login");
}

export default page;
