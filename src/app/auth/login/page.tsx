import LoginView from "@/app/components/views/auth/login";
import RegistrationView from "@/app/components/views/auth/register";
import { useServerAuthSession } from "@/server/auth/index";

export default async function RegistrationPage() {
  const session = await useServerAuthSession();
  return (
    <main className="w-screen">
      <LoginView />
    </main>
  );
}