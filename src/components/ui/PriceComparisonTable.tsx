/**
 * PRICE COMPARISON TABLE — Tabel perbandingan harga alat dari berbagai brand.
 * Menampilkan bar visual relatif (% dari harga tertinggi),
 * badge "Terjangkau"/"Mahal", dan keterangan per item.
 * Data: Tool.comparisons[] dari products.ts.
 */
import type { PriceComparison } from "@/types";

export default function PriceComparisonTable({
  comparisons,
}: {
  comparisons: PriceComparison[];
}) {
  const maxPrice = Math.max(...comparisons.map((c) => c.priceValue));

  return (
    <div className="price-table-wrapper">
      <table className="price-table">
        <thead>
          <tr>
            <th>Nama Alat</th>
            <th>Brand / Sumber</th>
            <th>Kisaran Harga</th>
            <th>Asal</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((item, i) => {
            const percent = (item.priceValue / maxPrice) * 100;
            const isExpensive = percent > 70;
            const isCheap = percent < 20;
            return (
              <tr key={i} className={isExpensive ? "row-expensive" : isCheap ? "row-cheap" : ""}>
                <td className="td-name">
                  {item.name}
                  {isCheap && <span className="badge badge-green">Terjangkau</span>}
                  {isExpensive && <span className="badge badge-red">Mahal</span>}
                </td>
                <td>{item.brand}</td>
                <td className="td-price">
                  <span>{item.price}</span>
                  <div className="price-bar">
                    <div className="price-bar-fill" style={{ width: `${percent}%` }} />
                  </div>
                </td>
                <td>{item.origin}</td>
                <td className="td-notes">{item.notes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
