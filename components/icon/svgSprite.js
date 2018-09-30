const sprite = symbols => `
<?xml version="1.0" encoding="utf-8"?>
<svg
  id="__SVG_SPRITE_PILE__"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  style="position: absolute; width: 0; height: 0"
>
  ${symbols}
</svg>
`;

const icons = {
  artboardAdd: '<svg viewBox="0 0 32 32"><path d="M6 7.333v17.333c0 .741.594 1.333 1.333 1.333h17.333c.741 0 1.333-.594 1.333-1.333V7.333c0-.741-.594-1.333-1.333-1.333H7.333C6.592 6 6 6.594 6 7.333zm9.333 8h-4v1.333h4v4h1.333v-4h4v-1.333h-4v-4h-1.333v4zm-10.666-8a2.662 2.662 0 0 1 2.667-2.667h17.333a2.662 2.662 0 0 1 2.667 2.667v17.333a2.662 2.662 0 0 1-2.667 2.667H7.334a2.662 2.662 0 0 1-2.667-2.667V7.333z"/></svg>',
  artboardReduce: '<svg viewBox="0 0 32 32"><path d="M6 7.333v17.333c0 .741.594 1.333 1.333 1.333h17.333c.741 0 1.333-.594 1.333-1.333V7.333c0-.741-.594-1.333-1.333-1.333H7.333C6.592 6 6 6.594 6 7.333zm-1.333 0a2.662 2.662 0 0 1 2.667-2.667h17.333a2.662 2.662 0 0 1 2.667 2.667v17.333a2.662 2.662 0 0 1-2.667 2.667H7.334a2.662 2.662 0 0 1-2.667-2.667V7.333zm6.666 8v1.333h9.333v-1.333h-9.333z"/></svg>',
  batchExport: '<svg viewBox="0 0 32 32"><path d="M15 24.093V14h2v10.235l3.435-3.435 1.414 1.414L18.063 26h9.936V8H13.527l-4-2H3.999v20h10.079l-3.786-3.786 1.414-1.414 3.293 3.293zM14.079 26H10v2h12v-2h-3.936l-1.992 1.992L14.08 26zM2 4h8l4 2h16v22H2V4z"/></svg>',
};

const getSymbols = (icon) => {
  const symbols = Object.entries(icon).map(([id, value]) => {
    const content = value.split('svg')[1];
    return `<symbol id=${id}${content}symbol>`;
  }).join('');
  return symbols;
};


export default sprite(getSymbols(icons));
