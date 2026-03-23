const SAMPLE = [
  { hotel:'Koloa Landing', checkin:'2026-05-18', checkout:'2026-05-24', nights:6, price:3402, netCost:3210, netValue:2720, shopCard:192, resortCredit:250, breakfastVal:0, flightTotal:549, tripCost:3759, tripValue:3269, tier:'cheap' },
  { hotel:'Koa Kea', checkin:'2026-05-18', checkout:'2026-05-24', nights:6, price:4660, netCost:4660, netValue:4210, shopCard:0, resortCredit:150, breakfastVal:0, flightTotal:549, tripCost:5209, tripValue:4759, tier:'cheap' },
  { hotel:'Grand Hyatt Kauai', checkin:'2026-05-18', checkout:'2026-05-24', nights:6, price:5545, netCost:5545, netValue:4345, shopCard:0, resortCredit:600, breakfastVal:300, flightTotal:549, tripCost:6094, tripValue:4894, tier:'cheap' },
  { hotel:'1 Hotel Hanalei Bay', checkin:'2026-05-18', checkout:'2026-05-24', nights:6, price:12097, netCost:11324, netValue:11324, shopCard:773, resortCredit:0, breakfastVal:0, flightTotal:549, tripCost:11873, tripValue:11873, tier:'mid' },
  { hotel:'Koloa Landing', checkin:'2026-05-25', checkout:'2026-06-01', nights:7, price:3914, netCost:3691, netValue:3191, shopCard:223, resortCredit:250, breakfastVal:0, flightTotal:630, tripCost:4321, tripValue:3821, tier:'cheap' },
  { hotel:'Koa Kea', checkin:'2026-05-25', checkout:'2026-06-01', nights:7, price:5582, netCost:5582, netValue:5082, shopCard:0, resortCredit:150, breakfastVal:0, flightTotal:630, tripCost:6212, tripValue:5712, tier:'mid' },
  { hotel:'Grand Hyatt Kauai', checkin:'2026-05-25', checkout:'2026-06-01', nights:7, price:6210, netCost:6210, netValue:4860, shopCard:0, resortCredit:700, breakfastVal:350, flightTotal:630, tripCost:6840, tripValue:5490, tier:'cheap' },
  { hotel:'1 Hotel Hanalei Bay', checkin:'2026-05-25', checkout:'2026-06-01', nights:7, price:9304, netCost:8729, netValue:8429, shopCard:575, resortCredit:300, breakfastVal:0, flightTotal:630, tripCost:9359, tripValue:9059, tier:'mid' },
];

const HOTEL_COLORS = { 'Koloa Landing':'koloa', 'Grand Hyatt Kauai':'hyatt', '1 Hotel Hanalei Bay':'hanalei', 'Koa Kea':'koakea' };
const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const months = ['Jan','Feb','Mar','Apr','May','Jun'];
function fmtDate(s) { const d = new Date(s+'T12:00:00'); return `<span style="font-family:'SF Mono',Consolas,'Courier New',monospace">${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()}</span>`; }
function fmtPrice(p) { return '$'+Math.round(p).toLocaleString('en-US'); }

function renderTable(containerId) {
  const el = document.getElementById(containerId);
  el.innerHTML = `<table><thead><tr>
    <th>Hotel</th><th>Check-in</th><th>Check-out</th><th>N</th>
    <th>Hotel Total</th><th>Shop Card</th><th>Resort Credit</th><th>Bfast Value</th>
    <th>Net Cost</th><th>Net Value</th><th>Flights (2p)</th>
    <th>Trip Cost</th><th>Trip Value</th><th>Value</th>
  </tr></thead><tbody>${SAMPLE.map(r => {
    const hc = HOTEL_COLORS[r.hotel]||'';
    const tier = r.tier==='cheap'?'<span class="tag tag-cheap">Cheapest</span>':r.tier==='mid'?'<span class="tag tag-mid">Middle</span>':'<span class="tag tag-expensive">Priciest</span>';
    return `<tr class="hotel-${hc}">
      <td>${r.hotel}</td>
      <td>${fmtDate(r.checkin)}</td><td>${fmtDate(r.checkout)}</td>
      <td>${r.nights}</td>
      <td class="price-cell">${fmtPrice(r.price)}</td>
      <td class="val-cell">${r.shopCard?fmtPrice(r.shopCard):'—'}</td>
      <td class="val-cell">${r.resortCredit?fmtPrice(r.resortCredit):'—'}</td>
      <td class="val-cell">${r.breakfastVal?fmtPrice(r.breakfastVal):'—'}</td>
      <td class="price-cell">${fmtPrice(r.netCost)}</td>
      <td class="net-cell">${fmtPrice(r.netValue)}</td>
      <td class="price-cell">${fmtPrice(r.flightTotal)}</td>
      <td class="price-cell">${fmtPrice(r.tripCost)}</td>
      <td class="net-cell">${fmtPrice(r.tripValue)}</td>
      <td>${tier}</td>
    </tr>`;
  }).join('')}</tbody></table>`;
}
