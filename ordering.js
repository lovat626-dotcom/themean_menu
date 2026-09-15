/* Links decoded from the supplied iCHEF table-card PDFs. */
const MenuOrdering = (() => {
  const tables = Object.freeze({
    A1: 'https://shop.ichefpos.com/store/kndxXbmQ/instore/qrcode?tableName=QTE',
    A2: 'https://shop.ichefpos.com/store/kndxXbmQ/instore/qrcode?tableName=QTI',
    A3: 'https://shop.ichefpos.com/store/kndxXbmQ/instore/qrcode?tableName=QTM',
    B1: 'https://shop.ichefpos.com/store/kndxXbmQ/instore/qrcode?tableName=QjE',
    B2: 'https://shop.ichefpos.com/store/kndxXbmQ/instore/qrcode?tableName=QjI',
    B3: 'https://shop.ichefpos.com/store/kndxXbmQ/instore/qrcode?tableName=QjM',
    W1: 'https://shop.ichefpos.com/store/kndxXbmQ/instore/qrcode?tableName=VzE'
  });
  const takeaway = 'https://shop.ichefpos.com/store/kndxXbmQ/ordering';
  function resolve(search) {
    const params = new URLSearchParams(search);
    const values = params.getAll('table');
    if (values.length === 0) return { kind: 'takeaway', url: takeaway };
    if (values.length !== 1) return { kind: 'invalid', url: null };
    const table = values[0].trim().toUpperCase();
    if (!Object.prototype.hasOwnProperty.call(tables, table)) return { kind: 'invalid', url: null };
    return { kind: 'table', table, url: tables[table] };
  }
  return Object.freeze({ resolve, tables, takeaway });
})();
