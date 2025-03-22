import { Spinner } from "@heroui/spinner";

function loading() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Spinner
        classNames={{ label: "text-foreground mt-4" }}
        label="Powered by Estepano"
        variant="wave"
        color="primary"
      />
    </div>
  );
}

export default loading;
