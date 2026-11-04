import { lazy, Suspense, useCallback, useEffect, useState } from "react";

const CommandPalette = lazy(() => import("./CommandPalette.tsx"));

const isEditableTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
  );
};

function CommandPaletteLauncher() {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadAndOpen = useCallback(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const isShortcut =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      const isSlashShortcut =
        event.key === "/" && !isEditableTarget(event.target);

      if (isShortcut || isSlashShortcut) {
        event.preventDefault();
        loadAndOpen();
      }
    };
    const handleOpenRequest = () => loadAndOpen();

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleOpenRequest);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleOpenRequest);
    };
  }, [isLoaded, loadAndOpen]);

  if (!isLoaded) return null;

  return (
    <Suspense fallback={null}>
      <CommandPalette initialOpen />
    </Suspense>
  );
}

export default CommandPaletteLauncher;