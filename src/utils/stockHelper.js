const searchFunc = (stock, item) => (
  stock.companyName.toLowerCase().includes(item.toLowerCase().trim())
  || stock.ticker.toLowerCase().includes(item.toLowerCase().trim()));

export default searchFunc;
