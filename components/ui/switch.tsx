"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const { setTheme, resolvedTheme } = useTheme();
  const checked = resolvedTheme === "dark" ? false : true;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="opacity-50 relative transition-all bg-surface outline-none hover:bg-surface-muted border border-stroke backdrop-blur w-16 h-6 rounded-full">
        <div className="flex items-center justify-center bg-text text-background size-8 absolute rounded-full left-0 top-1/2 -translate-y-1/2" />
      </div>
    );
  }

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "relative transition-all bg-surface outline-none hover:bg-surface-muted border border-stroke backdrop-blur w-16 h-6 rounded-full",
        className
      )}
      checked={checked}
      onCheckedChange={(newChecked) => setTheme(newChecked ? "light" : "dark")}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "flex items-center justify-center bg-text text-background size-8 absolute rounded-full left-0  top-1/2 -translate-y-1/2 data-[state=checked]:translate-x-8 transition-transform"
        )}
      >
        {resolvedTheme === "dark" ? (
          <MoonStarsIcon size={16} />
        ) : (
          <SunIcon size={16} />
        )}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };
