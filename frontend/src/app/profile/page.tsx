import { stackServerApp } from "@/stack";
import { UserButton } from "@stackframe/stack";

export default async function Page() {
  const user = await stackServerApp.getUser();
  return (
    <div>
      {user ? (
        <div className="p-8 m-8">
          <UserButton />
          <p>Welcome, {user.displayName ?? "anonymous user"}</p>
          <p>Your e-mail: {user.primaryEmail}</p>
          <p><a href={stackServerApp.urls.signOut}>Sign Out</a></p>
        </div>
      ) : (
        <div className="p-8 m-8">
          <p>You are not logged in</p>
          <p><a href={stackServerApp.urls.signIn}>Sign in</a></p>
          <p><a href={stackServerApp.urls.signUp}>Sign up</a></p>
        </div>
      )}
    </div>
  );
}
