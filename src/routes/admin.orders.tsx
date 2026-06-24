import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/orders")({
  head: () => ({ meta: [{ title: "Orders — Flamora Admin" }] }),
  component: AdminOrders,
});

const orders = [
  { id: "FLM-208441", c: "Isabella Moreau", p: "Halcyon Chain", a: 4280, pay: "Paid", s: "Shipped" },
  { id: "FLM-208440", c: "Anaïs Petit", p: "Noir Gown", a: 3120, pay: "Paid", s: "Processing" },
  { id: "FLM-208439", c: "Luca Conti", p: "Verão Coat", a: 2340, pay: "Paid", s: "Delivered" },
  { id: "FLM-208438", c: "Hana Yamada", p: "Solène Hoop", a: 420, pay: "Refunded", s: "Returned" },
  { id: "FLM-208437", c: "Margot Lévy", p: "Aurum Cuff", a: 1180, pay: "Paid", s: "Shipped" },
];

const statusColor: Record<string,string> = {
  Shipped: "bg-blue-500/15 text-blue-300 border-blue-400/30",
  Processing: "bg-gold/15 text-gold border-gold/30",
  Delivered: "bg-green-500/15 text-green-300 border-green-400/30",
  Returned: "bg-red-500/15 text-red-300 border-red-400/30",
};

function AdminOrders() {
  return (
    <>
      <header>
        <p className="eyebrow">Operations</p>
        <h1 className="mt-3 font-display text-4xl gold-text">Orders</h1>
      </header>

      <div className="mt-10 glass overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-left text-[10px] uppercase tracking-[0.28em] text-cream/40 border-b border-white/10">
            <tr><th className="p-5">Order</th><th>Customer</th><th>Product</th><th>Amount</th><th>Payment</th><th>Status</th><th className="pr-5">Update</th></tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b border-white/5 text-cream/80 hover:bg-white/5">
                <td className="p-5 font-mono text-xs">{o.id}</td>
                <td>{o.c}</td>
                <td>{o.p}</td>
                <td className="text-gold">€{o.a.toLocaleString()}</td>
                <td><span className="text-xs">{o.pay}</span></td>
                <td><span className={`px-2 py-1 text-[10px] uppercase tracking-wider border ${statusColor[o.s]}`}>{o.s}</span></td>
                <td className="pr-5">
                  <select className="bg-transparent border border-white/20 px-2 py-1 text-xs text-cream/80 outline-none">
                    <option>Processing</option><option>Shipped</option><option>Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
