import { cn } from "@/lib/utils";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main
      className={cn(
        "max-w-240 min-h-screen mb-8 flex flex-col items-center justify-center space-y-8",
        "mx-5 mt-100",
        "md:mx-auto md:mt-146"
      )}
    >
      {children}
    </main>
  );
};

export default layout;
