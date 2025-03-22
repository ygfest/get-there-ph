import { Spinner } from "@heroui/spinner";

function loading() {
  return (
    <div className="bg-zinc-900 h-screen w-screen flex items-center justify-center">
      <Spinner
        classNames={{ label: "text-foreground mt-4" }}
        label="wave"
        variant="wave"
      />
    </div>
  );
}

export default loading;
