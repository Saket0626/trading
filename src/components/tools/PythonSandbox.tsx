import { useState, useEffect, useCallback, useRef } from "react";
import Editor from "@monaco-editor/react";

interface Pyodide {
  runPython: (code: string) => string;
}

declare global {
  interface Window {
    loadPyodide?: () => Promise<Pyodide>;
    pyodide?: Pyodide;
  }
}

const DEFAULT_CODE = `# Python for Trading - Try it!
# Run with the Run button below

# Example: Simple moving average calculation
prices = [100, 102, 101, 105, 103, 107, 106]
period = 3

def sma(prices, period):
    result = []
    for i in range(len(prices)):
        if i < period - 1:
            result.append(None)
        else:
            avg = sum(prices[i-period+1:i+1]) / period
            result.append(round(avg, 2))
    return result

sma_values = sma(prices, period)
print(f"Prices: {prices}")
print(f"SMA({period}): {sma_values}")
`;

export function PythonSandbox() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pyodide, setPyodide] = useState<Pyodide | null>(null);
  const outputRef = useRef<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    outputRef.current = [];

    async function load() {
      try {
        if (!window.loadPyodide) {
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/pyodide/v0.29.3/full/pyodide.js";
          script.async = true;
          await new Promise<void>((resolve, reject) => {
            script.onload = () => resolve();
            script.onerror = () => reject(new Error("Failed to load Pyodide"));
            document.head.appendChild(script);
          });
        }
        if (cancelled) return;
        const loadPyodideFn = window.loadPyodide as (opts?: { stdout?: (m: string) => void; stderr?: (m: string) => void }) => Promise<Pyodide>;
        const p = await loadPyodideFn({
          stdout: (msg: string) => outputRef.current.push(msg),
          stderr: (msg: string) => outputRef.current.push(msg),
        });
        if (!cancelled) {
          setPyodide(p);
          setOutput("Python environment ready! Click Run to execute your code.");
        }
      } catch (e) {
        if (!cancelled) {
          setError(
            e instanceof Error ? e.message : "Failed to load Python. Check your connection."
          );
          setOutput("Error: Could not load Pyodide. Try refreshing or check console.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const run = useCallback(() => {
    if (!pyodide) {
      setOutput("Python not loaded yet. Please wait...");
      return;
    }
    setError(null);
    outputRef.current = [];
    try {
      const result = pyodide.runPython(code);
      const out = outputRef.current.join("").trim();
      const display = out || (result !== undefined && result !== null ? String(result) : "(no output)");
      setOutput(display);
    } catch (e) {
      const errOut = outputRef.current.join("").trim();
      setOutput(errOut || `Error: ${e instanceof Error ? e.message : String(e)}`);
    }
  }, [code, pyodide]);

  return (
    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 overflow-hidden">
      <h2 className="font-semibold text-lg p-4 border-b border-surface-200 dark:border-surface-700">
        Python Sandbox (Pyodide)
      </h2>
      <p className="text-sm text-surface-600 dark:text-surface-400 px-4 pb-4">
        Run Python in your browser. Supports pandas, numpy (may need micropip). First run may take
        10-30 seconds to load.
      </p>

      {loading && (
        <div className="px-4 pb-4">
          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
            <div className="animate-spin h-5 w-5 border-2 border-primary-500 border-t-transparent rounded-full" />
            Loading Python runtime (~10MB)...
          </div>
        </div>
      )}

      {error && (
        <div className="mx-4 mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-sm">
          {error}
        </div>
      )}

      <div className="border-t border-surface-200 dark:border-surface-700">
        <Editor
          height="300px"
          defaultLanguage="python"
          value={code}
          onChange={(v) => setCode(v || "")}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
          }}
        />
      </div>

      <div className="p-4 border-t border-surface-200 dark:border-surface-700 flex gap-4">
        <button
          onClick={run}
          disabled={loading || !pyodide}
          className="px-6 py-2 bg-primary-500 hover:bg-primary-600 disabled:opacity-50 text-white font-semibold rounded-lg"
        >
          Run
        </button>
      </div>

      <div className="p-4 border-t border-surface-200 dark:border-surface-700 bg-surface-900 text-surface-100 font-mono text-sm min-h-[80px] whitespace-pre-wrap overflow-x-auto">
        {output || "Output will appear here..."}
      </div>
    </div>
  );
}
