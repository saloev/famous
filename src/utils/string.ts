/**
 *
 * @param {string | number} number
 * @param {number} decimals
 * @param {string} decPoint
 * @param {string} thousandsSep
 * @returns {string}
 */
function numberFormat(
  number: string | number,
  decimals = 0,
  decPoint = ",",
  thousandsSep = " ",
): string {
  const replaceNotNumbers = (`${number}`).replace(/[^0-9+\-Ee.]/g, "");
  const n = !Number.isFinite(+replaceNotNumbers) ? 0 : +replaceNotNumbers;
  const prec = !Number.isFinite(+decimals) ? 0 : Math.abs(decimals);
  const sep = thousandsSep;
  const dec = decPoint;
  const toFixedFix = (num: number, pre: number) => {
    const k = 10 ** pre;
    return `${Math.round(num * k) / k}`;
  };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  const s = (prec ? toFixedFix(n, prec) : `${Math.round(n)}`).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}

export default numberFormat;
