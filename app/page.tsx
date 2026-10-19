const sections = [
  { title: "Getting started", items: ["Introduction", "Quickstart", "Installation"] },
  { title: "Guides", items: ["Sending events", "Webhooks", "Retries & idempotency"] },
  { title: "Reference", items: ["REST API", "SDKs", "Error codes"] },
];

export default function Home() {
  return (
    <div className="flex-1 bg-white text-slate-800">
      <header className="border-b border-slate-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-md bg-indigo-600" />
            <span className="font-semibold">Relay</span>
            <span className="text-slate-400">/ docs</span>
          </div>
          <div className="hidden w-72 justify-between rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-400 sm:flex">
            <span>Search docs…</span>
            <span className="font-mono text-xs">⌘K</span>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="hidden w-60 shrink-0 border-r border-slate-200 px-6 py-8 text-sm md:block">
          {sections.map((s) => (
            <div key={s.title} className="mb-6">
              <div className="mb-2 font-medium text-slate-900">{s.title}</div>
              <ul className="space-y-1.5 text-slate-500">
                {s.items.map((i) => (
                  <li key={i} className={i === "Quickstart" ? "font-medium text-indigo-600" : ""}>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        <main className="max-w-3xl px-6 py-10 md:px-12">
          <p className="text-sm font-medium text-indigo-600">Getting started</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900">Quickstart</h1>
          <p className="mt-4 text-lg text-slate-600">
            Send your first event with Relay in under five minutes. You&apos;ll install the SDK, create an
            API key and deliver a test event to a webhook.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">1. Install the SDK</h2>
          <pre className="mt-3 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-100">
            <code>npm install @relay/sdk</code>
          </pre>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">2. Send an event</h2>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 font-mono text-sm leading-relaxed text-slate-100">
            <code>{`import { Relay } from "@relay/sdk";

const relay = new Relay(process.env.RELAY_KEY);

await relay.events.send({
  type: "order.created",
  data: { id: "ord_1042", total: 4800 },
});`}</code>
          </pre>

          <div className="mt-8 rounded-lg border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-900">
            <strong>Tip:</strong> use a test key while you build. Test events never reach production
            endpoints.
          </div>
        </main>
      </div>
    </div>
  );
}
