import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DATA from "../../data/data.ts";

const COMMANDS = [
  "help",
  "clear",
  "cd",
  "ls",
  "open",
  "cat",
  "mail",
  "whoami",
  "neofetch",
  "sudo",
  "exit",
];

const ROUTES = ["home", "about", "projects", "impressum", "datenschutz"];

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: min(16vh, 120px) 20px 24px;
  background: rgba(3, 7, 10, 0.76);
  backdrop-filter: blur(6px);
`;

const Palette = styled(motion.div)`
  width: min(100%, 680px);
  overflow: hidden;
  border: 1px solid var(--term-border);
  border-radius: 8px;
  background: var(--term-surface);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 28px rgba(0, 255, 136, 0.08);
  font-family: "JetBrains Mono", monospace;
`;

const PaletteHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--term-border);
  color: var(--term-text-secondary);
  font-size: 12px;
`;

const ShortcutHint = styled.span`
  color: var(--term-text-muted);
`;

const Output = styled.div`
  max-height: min(48vh, 400px);
  overflow-y: auto;
  padding: 16px 18px 8px;
  color: var(--term-text-secondary);
  font-size: 12px;
  line-height: 1.8;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`;

const OutputLine = styled.div<{ $isCommand?: boolean }>`
  color: ${(p) =>
    p.$isCommand ? "var(--term-green)" : "var(--term-text-secondary)"};
`;

const InputRow = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px 16px;
  border-top: 1px solid var(--term-border);
`;

const Prompt = styled.span`
  color: var(--term-green);
  user-select: none;
`;

const CommandInput = styled.input`
  min-width: 0;
  flex: 1;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--term-text);
  font: inherit;
  font-size: 13px;

  &::placeholder {
    color: var(--term-text-muted);
  }
`;

interface CommandPaletteProps {
  onRequestOpen?: () => void;
}

const isEditableTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
  );
};

const normalizeProjectName = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, "");

function CommandPalette({ onRequestOpen }: CommandPaletteProps) {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([
    `Welcome to ${DATA.main.name}'s portfolio terminal.`,
    'Type "help" to see available commands.',
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const openPalette = useCallback(() => {
    if (isOpen) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    setIsOpen(true);
    onRequestOpen?.();
  }, [isOpen, onRequestOpen]);

  const closePalette = useCallback(() => {
    setIsOpen(false);
    window.setTimeout(() => previousFocusRef.current?.focus(), 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isShortcut =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      const isSlashShortcut =
        event.key === "/" && !isOpen && !isEditableTarget(event.target);

      if (isShortcut || isSlashShortcut) {
        event.preventDefault();
        if (isOpen) closePalette();
        else openPalette();
      } else if (isOpen && event.key === "Escape") {
        event.preventDefault();
        closePalette();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closePalette, isOpen, openPalette]);

  useEffect(() => {
    const handleOpenRequest = () => openPalette();
    window.addEventListener("open-command-palette", handleOpenRequest);
    return () =>
      window.removeEventListener("open-command-palette", handleOpenRequest);
  }, [openPalette]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const executeCommand = async (rawCommand: string) => {
    const trimmedCommand = rawCommand.trim();
    if (!trimmedCommand) return;

    setHistory((previousHistory) => [...previousHistory, trimmedCommand]);
    setHistoryIndex(-1);
    setCommand("");

    const [name, ...argumentParts] = trimmedCommand.split(/\s+/);
    const args = argumentParts.join(" ");
    const argument = args.toLowerCase();
    const result: string[] = [];

    if (name.toLowerCase() === "clear") {
      setOutput([]);
      return;
    }

    switch (name.toLowerCase()) {
      case "help":
        result.push(
          "help · clear · cd <home|about|projects|impressum|datenschutz>",
          "ls [projects] · open <github|linkedin|stackoverflow|project>",
          "cat <project> · mail · whoami · neofetch · sudo hire-me · exit",
          "Use Tab to autocomplete and ↑ / ↓ to browse command history.",
        );
        break;
      case "cd": {
        const routes: Record<string, string> = {
          "": "/",
          "~": "/",
          home: "/",
          "..": "/",
          about: "/about",
          projects: "/projects",
          impressum: "/impressum",
          datenschutz: "/datenschutz",
        };
        const route = routes[argument];
        if (route) {
          navigate(route);
          result.push(`Navigating to ${route === "/" ? "home" : route.slice(1)}.`);
        } else {
          result.push(`cd: no such directory: ${args}`);
        }
        break;
      }
      case "ls":
        if (!argument || argument === "projects" || argument === "projects/") {
          result.push(
            ...DATA.projects.map(
              (project) => `${project.title}  ·  ${project.tech.join(", ")}`,
            ),
          );
        } else {
          result.push(`ls: no such directory: ${args}`);
        }
        break;
      case "open": {
        const socials: Record<string, string> = {
          github: DATA.socials.github,
          linkedin: DATA.socials.linkedin,
          stackoverflow: DATA.socials.stackoverflow,
        };
        const url =
          socials[argument] ??
          DATA.projects.find(
            (project) => normalizeProjectName(project.title) === normalizeProjectName(args),
          )?.link;
        if (url) {
          window.open(url, "_blank", "noopener,noreferrer");
          result.push(`Opening ${args} in a new tab.`);
        } else {
          result.push(`open: couldn't find ${args || "that destination"}.`);
        }
        break;
      }
      case "cat": {
        const project = DATA.projects.find(
          (item) => normalizeProjectName(item.title) === normalizeProjectName(args),
        );
        if (project) {
          result.push(
            project.description,
            `Stack: ${project.tech.join(", ")}`,
            `Year: ${project.year}  ·  Status: ${project.status}`,
          );
        } else {
          result.push(`cat: project not found: ${args || "(missing name)"}`);
        }
        break;
      }
      case "mail":
        try {
          if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
          await navigator.clipboard.writeText(DATA.main.email);
          result.push(`${DATA.main.email} copied to clipboard.`);
        } catch {
          window.location.href = `mailto:${DATA.main.email}`;
          result.push(`Opening a new email to ${DATA.main.email}.`);
        }
        break;
      case "whoami":
        result.push(`${DATA.main.name} — Software Architect in Vienna.`);
        break;
      case "neofetch": {
        const stack = [...new Set(DATA.projects.flatMap((project) => project.tech))];
        result.push(
          "      .--.       ",
          "     |o_o |      ",
          "     |:_/ |      ",
          `    //   \\      ${DATA.main.name}`,
          `   (|     | )    Software Architect`,
          `  /'\\_   _/ \\   Vienna, Austria`,
          `  \\___)=(___/    ${stack.slice(0, 5).join(" · ")}`,
        );
        break;
      }
      case "sudo":
        if (argument === "hire-me") {
          result.push(`Permission granted. Let's talk: ${DATA.main.email}`);
        } else {
          result.push("sudo: permission denied — try `sudo hire-me`");
        }
        break;
      case "exit":
        closePalette();
        return;
      default:
        result.push(`command not found: ${name}`);
    }

    setOutput((previousOutput) => [
      ...previousOutput,
      `$ ${trimmedCommand}`,
      ...result,
    ]);
  };

  const getCompletions = (value: string) => {
    const parts = value.split(/\s+/);
    const hasTrailingSpace = /\s$/.test(value);
    if (parts.length === 1 && !hasTrailingSpace) {
      return COMMANDS.filter((item) => item.startsWith(parts[0].toLowerCase()));
    }

    const commandName = parts[0].toLowerCase();
    const currentArgument = hasTrailingSpace ? "" : parts[parts.length - 1];
    let candidates: string[] = [];
    if (commandName === "cd") candidates = ROUTES;
    if (commandName === "open") {
      candidates = [
        "github",
        "linkedin",
        "stackoverflow",
        ...DATA.projects.map((project) => project.title),
      ];
    }
    if (commandName === "cat") {
      candidates = DATA.projects.map((project) => project.title);
    }
    return candidates
      .filter((item) => item.toLowerCase().startsWith(currentArgument.toLowerCase()))
      .map((item) => `${parts[0]} ${item}`);
  };

  const handleInputKeyDown = (
    event: import("react").KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!history.length) return;
      const nextIndex =
        historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setCommand(history[nextIndex]);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex < 0) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setCommand("");
      } else {
        setHistoryIndex(nextIndex);
        setCommand(history[nextIndex]);
      }
    } else if (event.key === "Tab") {
      event.preventDefault();
      const completions = getCompletions(command);
      if (completions.length === 1) {
        setCommand(`${completions[0]} `);
      } else if (completions.length > 1) {
        const prefix = completions.reduce((commonPrefix, item) => {
          let index = 0;
          while (
            index < commonPrefix.length &&
            commonPrefix[index].toLowerCase() === item[index]?.toLowerCase()
          ) {
            index += 1;
          }
          return commonPrefix.slice(0, index);
        });
        if (prefix.length > command.length) setCommand(prefix);
        else {
          setOutput((previousOutput) => [
            ...previousOutput,
            ...completions.map((item) => `  ${item}`),
          ]);
        }
      }
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void executeCommand(command);
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.16 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePalette();
          }}
        >
          <Palette
            role="dialog"
            aria-modal="true"
            aria-labelledby="command-palette-title"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.16 }}
            onKeyDown={(event) => {
              if (event.key === "Tab") {
                event.preventDefault();
                inputRef.current?.focus();
              }
            }}
          >
            <PaletteHeader>
              <span id="command-palette-title">moritzreis.dev — terminal</span>
              <ShortcutHint>ESC to close</ShortcutHint>
            </PaletteHeader>
            <Output ref={outputRef} aria-live="polite" aria-relevant="additions">
              {output.map((line, index) => (
                <OutputLine key={`${index}-${line}`} $isCommand={line.startsWith("$ ")}>
                  {line}
                </OutputLine>
              ))}
            </Output>
            <InputRow onSubmit={handleSubmit}>
              <Prompt aria-hidden="true">&gt;</Prompt>
              <CommandInput
                ref={inputRef}
                aria-label="Enter a terminal command"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                placeholder='try "help"'
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                onKeyDown={handleInputKeyDown}
              />
            </InputRow>
          </Palette>
        </Overlay>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default CommandPalette;