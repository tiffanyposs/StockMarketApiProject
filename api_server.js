var allSp = [{ticker: "MMM", company: "3M Company", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "ABT", company: "Abbott Laboratories", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "ABBV", company: "AbbVie", industry: "Health Care", sub_industry: "Pharmaceuticals"},
{ticker: "ACE", company: "ACE Limited", industry: "Financials", sub_industry: "Property & Casualty Insurance"},
{ticker: "ACN", company: "Accenture plc", industry: "Information Technology", sub_industry: "IT Consulting & Services"},
{ticker: "ACT", company: "Actavis plc", industry: "Health Care", sub_industry: "Pharmaceuticals"},
{ticker: "ADBE", company: "Adobe Systems Inc", industry: "Information Technology", sub_industry: "Application Software"},
{ticker: "ADT", company: "ADT Corp", industry: "Industrials", sub_industry: "Diversified Commercial Services"},
{ticker: "AES", company: "AES Corp", industry: "Utilities", sub_industry: "Electric Utilities"},
{ticker: "AET", company: "Aetna Inc", industry: "Health Care", sub_industry: "Managed Health Care"},
{ticker: "AFL", company: "AFLAC Inc", industry: "Financials", sub_industry: "Life & Health Insurance"},
{ticker: "AMG", company: "Affiliated Managers Group Inc", industry: "Financials", sub_industry: "Asset Management & Custody Banks"},
{ticker: "A", company: "Agilent Technologies Inc", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "GAS", company: "AGL Resources Inc.", industry: "Utilities", sub_industry: "Gas Utilities"},
{ticker: "APD", company: "Air Products & Chemicals Inc", industry: "Materials", sub_industry: "Industrial Gases"},
{ticker: "ARG", company: "Airgas Inc", industry: "Materials", sub_industry: "Industrial Gases"},
{ticker: "AKAM", company: "Akamai Technologies Inc", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "AA", company: "Alcoa Inc", industry: "Materials", sub_industry: "Aluminum"},
{ticker: "ALXN", company: "Alexion Pharmaceuticals", industry: "Health Care", sub_industry: "Biotechnology"},
{ticker: "ATI", company: "Allegheny Technologies Inc", industry: "Materials", sub_industry: "Diversified Metals & Mining"},
{ticker: "ALLE", company: "Allegion", industry: "Industrials", sub_industry: "Building Products"},
{ticker: "AGN", company: "Allergan Inc", industry: "Health Care", sub_industry: "Pharmaceuticals"},
{ticker: "ADS", company: "Alliance Data Systems", industry: "Information Technology", sub_industry: "Data Processing & Outsourced Services"},
{ticker: "ALL", company: "Allstate Corp", industry: "Financials", sub_industry: "Property & Casualty Insurance"},
{ticker: "ALTR", company: "Altera Corp", industry: "Information Technology", sub_industry: "Semiconductors"},
{ticker: "MO", company: "Altria Group Inc", industry: "Consumer Staples", sub_industry: "Tobacco"},
{ticker: "AMZN", company: "Amazon.com Inc", industry: "Consumer Discretionary", sub_industry: "Internet Retail"},
{ticker: "AEE", company: "Ameren Corp", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "AEP", company: "American Electric Power", industry: "Utilities", sub_industry: "Electric Utilities"},
{ticker: "AXP", company: "American Express Co", industry: "Financials", sub_industry: "Consumer Finance"},
{ticker: "AIG", company: "American International Group, Inc.", industry: "Financials", sub_industry: "Property & Casualty Insurance"},
{ticker: "AMT", company: "American Tower Corp A", industry: "Financials", sub_industry: "REITs"},
{ticker: "AMP", company: "Ameriprise Financial", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "ABC", company: "AmerisourceBergen Corp", industry: "Health Care", sub_industry: "Health Care Distribution & Services"},
{ticker: "AME", company: "Ametek", industry: "Industrials", sub_industry: "Electrical Components and Equipment"},
{ticker: "AMGN", company: "Amgen Inc", industry: "Health Care", sub_industry: "Biotechnology"},
{ticker: "APH", company: "Amphenol Corp A", industry: "Industrials", sub_industry: "Electrical Components & Equipment"},
{ticker: "APC", company: "Anadarko Petroleum Corp", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "ADI", company: "Analog Devices, Inc.", industry: "Information Technology", sub_industry: "Semiconductors"},
{ticker: "AON", company: "Aon plc", industry: "Financials", sub_industry: "Insurance Brokers"},
{ticker: "APA", company: "Apache Corporation", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "AIV", company: "Apartment Investment & Mgmt", industry: "Financials", sub_industry: "REITs"},
{ticker: "AAPL", company: "Apple Inc.", industry: "Information Technology", sub_industry: "Computer Hardware"},
{ticker: "AMAT", company: "Applied Materials Inc", industry: "Information Technology", sub_industry: "Semiconductor Equipment"},
{ticker: "ADM", company: "Archer-Daniels-Midland Co", industry: "Consumer Staples", sub_industry: "Agricultural Products"},
{ticker: "AIZ", company: "Assurant Inc", industry: "Financials", sub_industry: "Multi-line Insurance"},
{ticker: "T", company: "AT&T Inc", industry: "Telecommunications Services", sub_industry: "Integrated Telecommunications Services"},
{ticker: "ADSK", company: "Autodesk Inc", industry: "Information Technology", sub_industry: "Application Software"},
{ticker: "ADP", company: "Automatic Data Processing", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "AN", company: "AutoNation Inc", industry: "Consumer Discretionary", sub_industry: "Specialty Stores"},
{ticker: "AZO", company: "AutoZone Inc", industry: "Consumer Discretionary", sub_industry: "Specialty Stores"},
{ticker: "AVGO", company: "Avago Technologies", industry: "Information Technology", sub_industry: "Semiconductors"},
{ticker: "AVB", company: "AvalonBay Communities, Inc.", industry: "Financials", sub_industry: "REITs"},
{ticker: "AVY", company: "Avery Dennison Corp", industry: "Materials", sub_industry: "Paper Packaging"},
{ticker: "AVP", company: "Avon Products", industry: "Consumer Staples", sub_industry: "Personal Products"},
{ticker: "BHI", company: "Baker Hughes Inc", industry: "Energy", sub_industry: "Oil & Gas Equipment & Services"},
{ticker: "BLL", company: "Ball Corp", industry: "Materials", sub_industry: "Metal & Glass Containers"},
{ticker: "BAC", company: "Bank of America Corp", industry: "Financials", sub_industry: "Banks"},
{ticker: "BK", company: "The Bank of New York Mellon Corp.", industry: "Financials", sub_industry: "Banks"},
{ticker: "BCR", company: "Bard (C.R.) Inc.", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "BAX", company: "Baxter International Inc.", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "BBT", company: "BB&T Corporation", industry: "Financials", sub_industry: "Banks"},
{ticker: "BDX", company: "Becton Dickinson", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "BBBY", company: "Bed Bath & Beyond", industry: "Consumer Discretionary", sub_industry: "Specialty Stores"},
{ticker: "BRK.B", company: "Berkshire Hathaway", industry: "Financials", sub_industry: "Multi-Sector Holdings"},
{ticker: "BBY", company: "Best Buy Co. Inc.", industry: "Consumer Discretionary", sub_industry: "Computer & Electronics Retail"},
{ticker: "BIIB", company: "BIOGEN IDEC Inc.", industry: "Health Care", sub_industry: "Biotechnology"},
{ticker: "BLK", company: "BlackRock", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "HRB", company: "Block H&R", industry: "Financials", sub_industry: "Consumer Finance"},
{ticker: "BA", company: "Boeing Company", industry: "Industrials", sub_industry: "Aerospace & Defense"},
{ticker: "BWA", company: "BorgWarner", industry: "Consumer Discretionary", sub_industry: "Auto Parts & Equipment"},
{ticker: "BXP", company: "Boston Properties", industry: "Financials", sub_industry: "REITs"},
{ticker: "BSX", company: "Boston Scientific", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "BMY", company: "Bristol-Myers Squibb", industry: "Health Care", sub_industry: "Health Care Distributors & Services"},
{ticker: "BRCM", company: "Broadcom Corporation", industry: "Information Technology", sub_industry: "Semiconductors"},
{ticker: "BF.B", company: "Brown-Forman Corporation", industry: "Consumer Staples", sub_industry: "Distillers & Vintners"},
{ticker: "CHRW", company: "C. H. Robinson Worldwide", industry: "Industrials", sub_industry: "Air Freight & Logistics"},
{ticker: "CA", company: "CA, Inc.", industry: "Information Technology", sub_industry: "Systems Software"},
{ticker: "CVC", company: "Cablevision Systems Corp.", industry: "Consumer Discretionary", sub_industry: "Broadcasting & Cable TV"},
{ticker: "COG", company: "Cabot Oil & Gas", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "CAM", company: "Cameron International Corp.", industry: "Energy", sub_industry: "Oil & Gas Equipment & Services"},
{ticker: "CPB", company: "Campbell Soup", industry: "Consumer Staples", sub_industry: "Packaged Foods & Meats"},
{ticker: "COF", company: "Capital One Financial", industry: "Financials", sub_industry: "Consumer Finance"},
{ticker: "CAH", company: "Cardinal Health Inc.", industry: "Health Care", sub_industry: "Health Care Distributors & Services"},
{ticker: "CFN", company: "Carefusion", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "KMX", company: "Carmax Inc", industry: "Consumer Discretionary", sub_industry: "Specialty Stores"},
{ticker: "CCL", company: "Carnival Corp.", industry: "Consumer Discretionary", sub_industry: "Hotels, Resorts & Cruise Lines"},
{ticker: "CAT", company: "Caterpillar Inc.", industry: "Industrials", sub_industry: "Construction & Farm Machinery & Heavy Trucks"},
{ticker: "CBG", company: "CBRE Group", industry: "Financials", sub_industry: "Real Estate Management & Development"},
{ticker: "CBS", company: "CBS Corp.", industry: "Consumer Discretionary", sub_industry: "Broadcasting & Cable TV"},
{ticker: "CELG", company: "Celgene Corp.", industry: "Health Care", sub_industry: "Biotechnology"},
{ticker: "CNP", company: "CenterPoint Energy", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "CTL", company: "CenturyLink Inc", industry: "Telecommunications Services", sub_industry: "Integrated Telecommunications Services"},
{ticker: "CERN", company: "Cerner", industry: "Health Care", sub_industry: "Health Care Distributors & Services"},
{ticker: "CF", company: "CF Industries Holdings Inc", industry: "Materials", sub_industry: "Fertilizers & Agricultural Chemicals"},
{ticker: "SCHW", company: "Charles Schwab Corporation", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "CHK", company: "Chesapeake Energy", industry: "Energy", sub_industry: "Integrated Oil & Gas"},
{ticker: "CVX", company: "Chevron Corp.", industry: "Energy", sub_industry: "Integrated Oil & Gas"},
{ticker: "CMG", company: "Chipotle Mexican Grill", industry: "Consumer Discretionary", sub_industry: "Restaurants"},
{ticker: "CB", company: "Chubb Corp.", industry: "Financials", sub_industry: "Property & Casualty Insurance"},
{ticker: "CI", company: "CIGNA Corp.", industry: "Health Care", sub_industry: "Managed Health Care"},
{ticker: "XEC", company: "Cimarex Energy", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "CINF", company: "Cincinnati Financial", industry: "Financials", sub_industry: "Property & Casualty Insurance"},
{ticker: "CTAS", company: "Cintas Corporation", industry: "Industrials", sub_industry: "Diversified Commercial Services"},
{ticker: "CSCO", company: "Cisco Systems", industry: "Information Technology", sub_industry: "Networking Equipment"},
{ticker: "C", company: "Citigroup Inc.", industry: "Financials", sub_industry: "Banks"},
{ticker: "CTXS", company: "Citrix Systems", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "CLX", company: "The Clorox Company", industry: "Consumer Staples", sub_industry: "Household Products"},
{ticker: "CME", company: "CME Group Inc.", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "CMS", company: "CMS Energy", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "COH", company: "Coach Inc.", industry: "Consumer Discretionary", sub_industry: "Apparel, Accessories & Luxury Goods"},
{ticker: "KO", company: "The Coca Cola Company", industry: "Consumer Staples", sub_industry: "Soft Drinks"},
{ticker: "CCE", company: "Coca-Cola Enterprises", industry: "Consumer Staples", sub_industry: "Soft Drinks"},
{ticker: "CTSH", company: "Cognizant Technology Solutions", industry: "Information Technology", sub_industry: "IT Consulting & Services"},
{ticker: "CL", company: "Colgate-Palmolive", industry: "Consumer Staples", sub_industry: "Household Products"},
{ticker: "CMCSA", company: "Comcast Corp.", industry: "Consumer Discretionary", sub_industry: "Broadcasting & Cable TV"},
{ticker: "CMA", company: "Comerica Inc.", industry: "Financials", sub_industry: "Banks"},
{ticker: "CSC", company: "Computer Sciences Corp.", industry: "Information Technology", sub_industry: "IT Consulting & Services"},
{ticker: "CAG", company: "ConAgra Foods Inc.", industry: "Consumer Staples", sub_industry: "Packaged Foods & Meats"},
{ticker: "COP", company: "ConocoPhillips", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "CNX", company: "CONSOL Energy Inc.", industry: "Energy", sub_industry: "Coal & Consumable Fuels"},
{ticker: "ED", company: "Consolidated Edison", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "STZ", company: "Constellation Brands", industry: "Consumer Staples", sub_industry: "Distillers & Vintners"},
{ticker: "GLW", company: "Corning Inc.", industry: "Industrials", sub_industry: "Construction & Engineering"},
{ticker: "COST", company: "Costco Co.", industry: "Consumer Staples", sub_industry: "Hypermarkets & Super Centers"},
{ticker: "COV", company: "Covidien plc", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "CCI", company: "Crown Castle International Corp.", industry: "Financials", sub_industry: "REITs"},
{ticker: "CSX", company: "CSX Corp.", industry: "Industrials", sub_industry: "Railroads"},
{ticker: "CMI", company: "Cummins Inc.", industry: "Industrials", sub_industry: "Industrial Machinery"},
{ticker: "CVS", company: "CVS Caremark Corp.", industry: "Consumer Staples", sub_industry: "Drug Retail"},
{ticker: "DHI", company: "D. R. Horton", industry: "Consumer Discretionary", sub_industry: "Construction"},
{ticker: "DHR", company: "Danaher Corp.", industry: "Industrials", sub_industry: "Industrial Machinery"},
{ticker: "DRI", company: "Darden Restaurants", industry: "Consumer Discretionary", sub_industry: "Restaurants"},
{ticker: "DVA", company: "DaVita Inc.", industry: "Health Care", sub_industry: "Health Care Facilities"},
{ticker: "DE", company: "Deere & Co.", industry: "Industrials", sub_industry: "Construction & Farm Machinery & Heavy Trucks"},
{ticker: "DLPH", company: "Delphi Automotive", industry: "Consumer Discretionary", sub_industry: "Auto Parts & Equipment"},
{ticker: "DAL", company: "Delta Air Lines", industry: "Industrials", sub_industry: "Airlines"},
{ticker: "DNR", company: "Denbury Resources Inc.", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "XRAY", company: "Dentsply International", industry: "Health Care", sub_industry: "Health Care Supplies"},
{ticker: "DVN", company: "Devon Energy Corp.", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "DO", company: "Diamond Offshore Drilling", industry: "Energy", sub_industry: "Oil & Gas Drilling"},
{ticker: "DTV", company: "DirecTV", industry: "Consumer Discretionary", sub_industry: "Broadcasting & Cable TV"},
{ticker: "DFS", company: "Discover Financial Services", industry: "Financials", sub_industry: "Consumer Finance"},
{ticker: "DISCA", company: "Discovery Communications-A", industry: "Consumer Discretionary", sub_industry: "Broadcasting & Cable TV"},
{ticker: "DISCK", company: "Discovery Communications-C", industry: "Consumer Discretionary", sub_industry: "Broadcasting & Cable TV"},
{ticker: "DG", company: "Dollar General", industry: "Consumer Discretionary", sub_industry: "General Merchandise Stores"},
{ticker: "DLTR", company: "Dollar Tree", industry: "Consumer Discretionary", sub_industry: "General Merchandise Stores"},
{ticker: "D", company: "Dominion Resources", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "DOV", company: "Dover Corp.", industry: "Industrials", sub_industry: "Industrial Machinery"},
{ticker: "DOW", company: "Dow Chemical", industry: "Materials", sub_industry: "Diversified Chemicals"},
{ticker: "DPS", company: "Dr Pepper Snapple Group", industry: "Consumer Staples", sub_industry: "Soft Drinks"},
{ticker: "DTE", company: "DTE Energy Co.", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "DD", company: "Du Pont (E.I.)", industry: "Materials", sub_industry: "Diversified Chemicals"},
{ticker: "DUK", company: "Duke Energy", industry: "Utilities", sub_industry: "Electric Utilities"},
{ticker: "DNB", company: "Dun & Bradstreet", industry: "Industrials", sub_industry: "Data Processing Services"},
{ticker: "ETFC", company: "E-Trade", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "EMN", company: "Eastman Chemical", industry: "Materials", sub_industry: "Diversified Chemicals"},
{ticker: "ETN", company: "Eaton Corporation", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "EBAY", company: "eBay Inc.", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "ECL", company: "Ecolab Inc.", industry: "Materials", sub_industry: "Specialty Chemicals"},
{ticker: "EIX", company: "Edison Int'l", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "EW", company: "Edwards Lifesciences", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "EA", company: "Electronic Arts", industry: "Information Technology", sub_industry: "Application Software"},
{ticker: "EMC", company: "EMC Corp.", industry: "Information Technology", sub_industry: "IT Consulting & Services"},
{ticker: "EMR", company: "Emerson Electric", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "ESV", company: "Ensco plc", industry: "Energy", sub_industry: "Oil & Gas Drilling"},
{ticker: "ETR", company: "Entergy Corp.", industry: "Utilities", sub_industry: "Electric Utilities"},
{ticker: "EOG", company: "EOG Resources", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "EQT", company: "EQT Corporation", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "EFX", company: "Equifax Inc.", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "EQR", company: "Equity Residential", industry: "Financials", sub_industry: "REITs"},
{ticker: "ESS", company: "Essex Property Trust Inc", industry: "Financials", sub_industry: "Residential REITs"},
{ticker: "EL", company: "Estee Lauder Cos.", industry: "Consumer Staples", sub_industry: "Personal Products"},
{ticker: "EXC", company: "Exelon Corp.", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "EXPE", company: "Expedia Inc.", industry: "Consumer Discretionary", sub_industry: "Hotels, Resorts & Cruise Lines"},
{ticker: "EXPD", company: "Expeditors Int'l", industry: "Industrials", sub_industry: "Air Freight & Logistics"},
{ticker: "ESRX", company: "Express Scripts", industry: "Health Care", sub_industry: "Health Care Distributors & Services"},
{ticker: "XOM", company: "Exxon Mobil Corp.", industry: "Energy", sub_industry: "Integrated Oil & Gas"},
{ticker: "FFIV", company: "F5 Networks", industry: "Information Technology", sub_industry: "Networking Equipment"},
{ticker: "FB", company: "Facebook", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "FDO", company: "Family Dollar Stores", industry: "Consumer Discretionary", sub_industry: "General Merchandise Stores"},
{ticker: "FAST", company: "Fastenal Co", industry: "Industrials", sub_industry: "Building Products"},
{ticker: "FDX", company: "FedEx Corporation", industry: "Industrials", sub_industry: "Air Freight & Logistics"},
{ticker: "FIS", company: "Fidelity National Information Services", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "FITB", company: "Fifth Third Bancorp", industry: "Financials", sub_industry: "Banks"},
{ticker: "FSLR", company: "First Solar Inc", industry: "Information Technology", sub_industry: "Semiconductors"},
{ticker: "FE", company: "FirstEnergy Corp", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "FISV", company: "Fiserv Inc", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "FLIR", company: "FLIR Systems", industry: "Industrials", sub_industry: "Aerospace & Defense"},
{ticker: "FLS", company: "Flowserve Corporation", industry: "Industrials", sub_industry: "Industrial Machinery"},
{ticker: "FLR", company: "Fluor Corp.", industry: "Industrials", sub_industry: "Diversified Commercial Services"},
{ticker: "FMC", company: "FMC Corporation", industry: "Materials", sub_industry: "Diversified Chemicals"},
{ticker: "FTI", company: "FMC Technologies Inc.", industry: "Energy", sub_industry: "Oil & Gas Equipment & Services"},
{ticker: "F", company: "Ford Motor", industry: "Consumer Discretionary", sub_industry: "Automobile Manufacturers"},
{ticker: "FOSL", company: "Fossil, Inc.", industry: "Consumer Discretionary", sub_industry: "Apparel, Accessories & Luxury Goods"},
{ticker: "BEN", company: "Franklin Resources", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "FCX", company: "Freeport-McMoran Cp & Gld", industry: "Materials", sub_industry: "Diversified Metals & Mining"},
{ticker: "FTR", company: "Frontier Communications", industry: "Telecommunications Services", sub_industry: "Integrated Telecommunications Services"},
{ticker: "GME", company: "GameStop Corp.", industry: "Consumer Discretionary", sub_industry: "Specialty Stores"},
{ticker: "GCI", company: "Gannett Co.", industry: "Consumer Discretionary", sub_industry: "Publishing"},
{ticker: "GPS", company: "Gap (The)", industry: "Consumer Discretionary", sub_industry: "Apparel Retail"},
{ticker: "GRMN", company: "Garmin Ltd.", industry: "Consumer Discretionary", sub_industry: "Consumer Electronics"},
{ticker: "GD", company: "General Dynamics", industry: "Industrials", sub_industry: "Aerospace & Defense"},
{ticker: "GE", company: "General Electric", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "GGP", company: "General Growth Properties Inc.", industry: "Financials", sub_industry: "REITs"},
{ticker: "GIS", company: "General Mills", industry: "Consumer Staples", sub_industry: "Packaged Foods & Meats"},
{ticker: "GM", company: "General Motors", industry: "Consumer Discretionary", sub_industry: "Automobile Manufacturers"},
{ticker: "GPC", company: "Genuine Parts", industry: "Consumer Discretionary", sub_industry: "Specialty Stores"},
{ticker: "GNW", company: "Genworth Financial Inc.", industry: "Financials", sub_industry: "Life & Health Insurance"},
{ticker: "GILD", company: "Gilead Sciences", industry: "Health Care", sub_industry: "Biotechnology"},
{ticker: "GS", company: "Goldman Sachs Group", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "GT", company: "Goodyear Tire & Rubber", industry: "Consumer Discretionary", sub_industry: "Tires & Rubber"},
{ticker: "GOOGL", company: "Google Inc Class A", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "GOOG", company: "Google Inc Class C", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "GWW", company: "Grainger (W.W.) Inc.", industry: "Industrials", sub_industry: "Industrial Materials"},
{ticker: "HAL", company: "Halliburton Co.", industry: "Energy", sub_industry: "Oil & Gas Equipment & Services"},
{ticker: "HOG", company: "Harley-Davidson", industry: "Consumer Discretionary", sub_industry: "Motorcycle Manufacturers"},
{ticker: "HAR", company: "Harman Int'l Industries", industry: "Consumer Discretionary", sub_industry: "Consumer Electronics"},
{ticker: "HRS", company: "Harris Corporation", industry: "Information Technology", sub_industry: "Telecommunications Equipment"},
{ticker: "HIG", company: "Hartford Financial Svc.Gp.", industry: "Financials", sub_industry: "Property & Casualty Insurance"},
{ticker: "HAS", company: "Hasbro Inc.", industry: "Consumer Discretionary", sub_industry: "Leisure Products"},
{ticker: "HCP", company: "HCP Inc.", industry: "Financials", sub_industry: "REITs"},
{ticker: "HCN", company: "Health Care REIT, Inc.", industry: "Financials", sub_industry: "REITs"},
{ticker: "HP", company: "Helmerich & Payne", industry: "Energy", sub_industry: "Oil & Gas Drilling"},
{ticker: "HES", company: "Hess Corporation", industry: "Energy", sub_industry: "Integrated Oil & Gas"},
{ticker: "HPQ", company: "Hewlett-Packard", industry: "Information Technology", sub_industry: "Computer Hardware"},
{ticker: "HD", company: "Home Depot", industry: "Consumer Discretionary", sub_industry: "Home Improvement Retail"},
{ticker: "HON", company: "Honeywell Int'l Inc.", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "HRL", company: "Hormel Foods Corp.", industry: "Consumer Staples", sub_industry: "Packaged Foods & Meats"},
{ticker: "HSP", company: "Hospira Inc.", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "HST", company: "Host Hotels & Resorts", industry: "Financials", sub_industry: "REITs"},
{ticker: "HCBK", company: "Hudson City Bancorp", industry: "Financials", sub_industry: "Banks"},
{ticker: "HUM", company: "Humana Inc.", industry: "Health Care", sub_industry: "Managed Health Care"},
{ticker: "HBAN", company: "Huntington Bancshares", industry: "Financials", sub_industry: "Banks"},
{ticker: "ITW", company: "Illinois Tool Works", industry: "Industrials", sub_industry: "Industrial Machinery"},
{ticker: "IR", company: "Ingersoll-Rand PLC", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "TEG", company: "Integrys Energy Group Inc.", industry: "Utilities", sub_industry: "Gas Utilities"},
{ticker: "INTC", company: "Intel Corp.", industry: "Information Technology", sub_industry: "Semiconductors"},
{ticker: "ICE", company: "Intercontinental Exchange", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "IBM", company: "International Bus. Machines", industry: "Information Technology", sub_industry: "IT Consulting & Services"},
{ticker: "IP", company: "International Paper", industry: "Materials", sub_industry: "Paper Products"},
{ticker: "IPG", company: "Interpublic Group", industry: "Consumer Discretionary", sub_industry: "Advertising"},
{ticker: "IFF", company: "Intl Flavors & Fragrances", industry: "Materials", sub_industry: "Specialty Chemicals"},
{ticker: "INTU", company: "Intuit Inc.", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "ISRG", company: "Intuitive Surgical Inc.", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "IVZ", company: "Invesco Ltd.", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "IRM", company: "Iron Mountain Incorporated", industry: "Industrials", sub_industry: "Data Processing Services"},
{ticker: "JEC", company: "Jacobs Engineering Group", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "JNJ", company: "Johnson & Johnson", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "JCI", company: "Johnson Controls", industry: "Consumer Discretionary", sub_industry: "Auto Parts & Equipment"},
{ticker: "JOY", company: "Joy Global Inc.", industry: "Industrials", sub_industry: "Industrial Machinery"},
{ticker: "JPM", company: "JPMorgan Chase & Co.", industry: "Financials", sub_industry: "Banks"},
{ticker: "JNPR", company: "Juniper Networks", industry: "Information Technology", sub_industry: "Networking Equipment"},
{ticker: "KSU", company: "Kansas City Southern", industry: "Industrials", sub_industry: "Railroads"},
{ticker: "K", company: "Kellogg Co.", industry: "Consumer Staples", sub_industry: "Packaged Foods & Meats"},
{ticker: "KEY", company: "KeyCorp", industry: "Financials", sub_industry: "Banks"},
{ticker: "GMCR", company: "Keurig Green Mountain", industry: "Consumer Staples", sub_industry: "Packaged Foods & Meats"},
{ticker: "KMB", company: "Kimberly-Clark", industry: "Consumer Staples", sub_industry: "Household Products"},
{ticker: "KIM", company: "Kimco Realty", industry: "Financials", sub_industry: "REITs"},
{ticker: "KMI", company: "Kinder Morgan", industry: "Energy", sub_industry: "Oil & Gas Refining & Marketing & Transportation"},
{ticker: "KLAC", company: "KLA-Tencor Corp.", industry: "Information Technology", sub_industry: "Semiconductor Equipment"},
{ticker: "KSS", company: "Kohl's Corp.", industry: "Consumer Discretionary", sub_industry: "General Merchandise Stores"},
{ticker: "KRFT", company: "Kraft Foods Group", industry: "Consumer Staples", sub_industry: "Packaged Foods & Meats"},
{ticker: "KR", company: "Kroger Co.", industry: "Consumer Staples", sub_industry: "Food Retail"},
{ticker: "LB", company: "L Brands Inc.", industry: "Consumer Discretionary", sub_industry: "Apparel Retail"},
{ticker: "LLL", company: "L-3 Communications Holdings", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "LH", company: "Laboratory Corp. of America Holding", industry: "Health Care", sub_industry: "Health Care Facilities"},
{ticker: "LRCX", company: "Lam Research", industry: "Information Technology", sub_industry: "Semiconductor Equipment"},
{ticker: "LM", company: "Legg Mason", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "LEG", company: "Leggett & Platt", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "LEN", company: "Lennar Corp.", industry: "Consumer Discretionary", sub_industry: "Homebuilding"},
{ticker: "LVLT", company: "Level 3 Communications", industry: "Telecommunications Services", sub_industry: "Alternative Carriers"},
{ticker: "LUK", company: "Leucadia National Corp.", industry: "Financials", sub_industry: "Multi-Sector Holdings"},
{ticker: "LLY", company: "Lilly (Eli) & Co.", industry: "Health Care", sub_industry: "Pharmaceuticals"},
{ticker: "LNC", company: "Lincoln National", industry: "Financials", sub_industry: "Multi-line Insurance"},
{ticker: "LLTC", company: "Linear Technology Corp.", industry: "Information Technology", sub_industry: "Semiconductors"},
{ticker: "LMT", company: "Lockheed Martin Corp.", industry: "Industrials", sub_industry: "Aerospace & Defense"},
{ticker: "L", company: "Loews Corp.", industry: "Financials", sub_industry: "Multi-Sector Holdings"},
{ticker: "LO", company: "Lorillard Inc.", industry: "Consumer Staples", sub_industry: "Tobacco"},
{ticker: "LOW", company: "Lowe's Cos.", industry: "Consumer Discretionary", sub_industry: "Home Improvement Retail"},
{ticker: "LYB", company: "LyondellBasell", industry: "Materials", sub_industry: "Diversified Chemicals"},
{ticker: "MTB", company: "M&T Bank Corp.", industry: "Financials", sub_industry: "Banks"},
{ticker: "MAC", company: "Macerich", industry: "Financials", sub_industry: "Retail REITs"},
{ticker: "M", company: "Macy's Inc.", industry: "Consumer Discretionary", sub_industry: "Department Stores"},
{ticker: "MNK", company: "Mallinckrodt Plc", industry: "Health Care", sub_industry: "Pharmaceuticals"},
{ticker: "MRO", company: "Marathon Oil Corp.", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "MPC", company: "Marathon Petroleum", industry: "Energy", sub_industry: "Oil & Gas Refining & Marketing & Transportation"},
{ticker: "MAR", company: "Marriott Int'l.", industry: "Consumer Discretionary", sub_industry: "Hotels, Resorts & Cruise Lines"},
{ticker: "MMC", company: "Marsh & McLennan", industry: "Financials", sub_industry: "Insurance Brokers"},
{ticker: "MAS", company: "Masco Corp.", industry: "Industrials", sub_industry: "Building Products"},
{ticker: "MA", company: "Mastercard Inc.", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "MAT", company: "Mattel Inc.", industry: "Consumer Discretionary", sub_industry: "Leisure Products"},
{ticker: "MKC", company: "McCormick & Co.", industry: "Consumer Staples", sub_industry: "Packaged Foods & Meats"},
{ticker: "MCD", company: "McDonald's Corp.", industry: "Consumer Discretionary", sub_industry: "Restaurants"},
{ticker: "MHFI", company: "McGraw Hill Financial", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "MCK", company: "McKesson Corp.", industry: "Health Care", sub_industry: "Health Care Distributors & Services"},
{ticker: "MJN", company: "Mead Johnson", industry: "Consumer Staples", sub_industry: "Packaged Foods & Meats"},
{ticker: "MWV", company: "MeadWestvaco Corporation", industry: "Materials", sub_industry: "Paper Packaging"},
{ticker: "MDT", company: "Medtronic Inc.", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "MRK", company: "Merck & Co.", industry: "Health Care", sub_industry: "Pharmaceuticals"},
{ticker: "MET", company: "MetLife Inc.", industry: "Financials", sub_industry: "Life & Health Insurance"},
{ticker: "KORS", company: "Michael Kors Holdings", industry: "Consumer Discretionary", sub_industry: "Apparel, Accessories & Luxury Goods"},
{ticker: "MCHP", company: "Microchip Technology", industry: "Information Technology", sub_industry: "Semiconductors"},
{ticker: "MU", company: "Micron Technology", industry: "Information Technology", sub_industry: "Semiconductors"},
{ticker: "MSFT", company: "Microsoft Corp.", industry: "Information Technology", sub_industry: "Systems Software"},
{ticker: "MHK", company: "Mohawk Industries", industry: "Consumer Discretionary", sub_industry: "Home Furnishings"},
{ticker: "TAP", company: "Molson Coors Brewing Company", industry: "Consumer Staples", sub_industry: "Brewers"},
{ticker: "MDLZ", company: "Mondelez International", industry: "Consumer Staples", sub_industry: "Packaged Foods & Meats"},
{ticker: "MON", company: "Monsanto Co.", industry: "Materials", sub_industry: "Fertilizers & Agricultural Chemicals"},
{ticker: "MNST", company: "Monster Beverage", industry: "Consumer Staples", sub_industry: "Soft Drinks"},
{ticker: "MCO", company: "Moody's Corp", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "MS", company: "Morgan Stanley", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "MOS", company: "The Mosaic Company", industry: "Materials", sub_industry: "Fertilizers & Agricultural Chemicals"},
{ticker: "MSI", company: "Motorola Solutions Inc.", industry: "Information Technology", sub_industry: "Telecommunications Equipment"},
{ticker: "MUR", company: "Murphy Oil", industry: "Energy", sub_industry: "Integrated Oil & Gas"},
{ticker: "MYL", company: "Mylan Inc.", industry: "Health Care", sub_industry: "Pharmaceuticals"},
{ticker: "NBR", company: "Nabors Industries Ltd.", industry: "Energy", sub_industry: "Oil & Gas Drilling"},
{ticker: "NDAQ", company: "NASDAQ OMX Group", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "NOV", company: "National Oilwell Varco Inc.", industry: "Energy", sub_industry: "Oil & Gas Equipment & Services"},
{ticker: "NAVI", company: "Navient", industry: "Financials", sub_industry: "Consumer Finance"},
{ticker: "NTAP", company: "NetApp", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "NFLX", company: "Netflix Inc.", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "NWL", company: "Newell Rubbermaid Co.", industry: "Consumer Discretionary", sub_industry: "Housewares & Specialties"},
{ticker: "NFX", company: "Newfield Exploration Co", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "NEM", company: "Newmont Mining Corp. (Hldg. Co.)", industry: "Materials", sub_industry: "Gold"},
{ticker: "NWSA", company: "News Corporation", industry: "Consumer Discretionary", sub_industry: "Publishing"},
{ticker: "NEE", company: "NextEra Energy", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "NLSN", company: "Nielsen Holdings", industry: "Industrials", sub_industry: "Research & Consulting Services"},
{ticker: "NKE", company: "NIKE Inc.", industry: "Consumer Discretionary", sub_industry: "Apparel, Accessories & Luxury Goods"},
{ticker: "NI", company: "NiSource Inc.", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "NE", company: "Noble Corp", industry: "Energy", sub_industry: "Oil & Gas Drilling"},
{ticker: "NBL", company: "Noble Energy Inc", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "JWN", company: "Nordstrom", industry: "Consumer Discretionary", sub_industry: "Department Stores"},
{ticker: "NSC", company: "Norfolk Southern Corp.", industry: "Industrials", sub_industry: "Railroads"},
{ticker: "NTRS", company: "Northern Trust Corp.", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "NOC", company: "Northrop Grumman Corp.", industry: "Industrials", sub_industry: "Aerospace & Defense"},
{ticker: "NU", company: "Northeast Utilities", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "NRG", company: "NRG Energy", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "NUE", company: "Nucor Corp.", industry: "Materials", sub_industry: "Steel"},
{ticker: "NVDA", company: "Nvidia Corporation", industry: "Information Technology", sub_industry: "Semiconductors"},
{ticker: "ORLY", company: "O'Reilly Automotive", industry: "Consumer Discretionary", sub_industry: "Specialty Stores"},
{ticker: "OXY", company: "Occidental Petroleum", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "OMC", company: "Omnicom Group", industry: "Consumer Discretionary", sub_industry: "Advertising"},
{ticker: "OKE", company: "ONEOK", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "ORCL", company: "Oracle Corp.", industry: "Information Technology", sub_industry: "Application Software"},
{ticker: "OI", company: "Owens-Illinois Inc", industry: "Materials", sub_industry: "Metal & Glass Containers"},
{ticker: "PCG", company: "P G & E Corp.", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "PCAR", company: "PACCAR Inc.", industry: "Industrials", sub_industry: "Construction & Farm Machinery & Heavy Trucks"},
{ticker: "PLL", company: "Pall Corp.", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "PH", company: "Parker-Hannifin", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "PDCO", company: "Patterson Companies", industry: "Health Care", sub_industry: "Health Care Supplies"},
{ticker: "PAYX", company: "Paychex Inc.", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "PNR", company: "Pentair Ltd.", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "PBCT", company: "People's United Bank", industry: "Financials", sub_industry: "Banks"},
{ticker: "POM", company: "Pepco Holdings Inc.", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "PEP", company: "PepsiCo Inc.", industry: "Consumer Staples", sub_industry: "Soft Drinks"},
{ticker: "PKI", company: "PerkinElmer", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "PRGO", company: "Perrigo", industry: "Health Care", sub_industry: "Pharmaceuticals"},
{ticker: "PETM", company: "PetSmart, Inc.", industry: "Consumer Discretionary", sub_industry: "Specialty Stores"},
{ticker: "PFE", company: "Pfizer Inc.", industry: "Health Care", sub_industry: "Pharmaceuticals"},
{ticker: "PM", company: "Philip Morris International", industry: "Consumer Staples", sub_industry: "Tobacco"},
{ticker: "PSX", company: "Phillips 66", industry: "Energy", sub_industry: "Oil & Gas Refining & Marketing & Transportation"},
{ticker: "PNW", company: "Pinnacle West Capital", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "PXD", company: "Pioneer Natural Resources", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "PBI", company: "Pitney-Bowes", industry: "Industrials", sub_industry: "Office Services & Supplies"},
{ticker: "PCL", company: "Plum Creek Timber Co.", industry: "Financials", sub_industry: "REITs"},
{ticker: "PNC", company: "PNC Financial Services", industry: "Financials", sub_industry: "Banks"},
{ticker: "RL", company: "Polo Ralph Lauren Corp.", industry: "Consumer Discretionary", sub_industry: "Apparel, Accessories & Luxury Goods"},
{ticker: "PPG", company: "PPG Industries", industry: "Materials", sub_industry: "Diversified Chemicals"},
{ticker: "PPL", company: "PPL Corp.", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "PX", company: "Praxair Inc.", industry: "Materials", sub_industry: "Industrial Gases"},
{ticker: "PCP", company: "Precision Castparts", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "PCLN", company: "Priceline.com Inc", industry: "Consumer Discretionary", sub_industry: "Hotels, Resorts & Cruise Lines"},
{ticker: "PFG", company: "Principal Financial Group", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "PG", company: "Procter & Gamble", industry: "Consumer Staples", sub_industry: "Personal Products"},
{ticker: "PGR", company: "Progressive Corp.", industry: "Financials", sub_industry: "Property & Casualty Insurance"},
{ticker: "PLD", company: "Prologis", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "PRU", company: "Prudential Financial", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "PEG", company: "Public Serv. Enterprise Inc.", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "PSA", company: "Public Storage", industry: "Financials", sub_industry: "REITs"},
{ticker: "PHM", company: "Pulte Homes Inc.", industry: "Consumer Discretionary", sub_industry: "Homebuilding"},
{ticker: "PVH", company: "PVH Corp.", industry: "Consumer Discretionary", sub_industry: "Apparel, Accessories & Luxury Goods"},
{ticker: "QEP", company: "QEP Resources", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "PWR", company: "Quanta Services Inc.", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "QCOM", company: "QUALCOMM Inc.", industry: "Information Technology", sub_industry: "Semiconductors"},
{ticker: "DGX", company: "Quest Diagnostics", industry: "Health Care", sub_industry: "Health Care Facilities"},
{ticker: "RRC", company: "Range Resources Corp.", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "RTN", company: "Raytheon Co.", industry: "Industrials", sub_industry: "Aerospace & Defense"},
{ticker: "RHT", company: "Red Hat Inc.", industry: "Information Technology", sub_industry: "Systems Software"},
{ticker: "REGN", company: "Regeneron", industry: "Health Care", sub_industry: "Biotechnology"},
{ticker: "RF", company: "Regions Financial Corp.", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "RSG", company: "Republic Services Inc", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "RAI", company: "Reynolds American Inc.", industry: "Consumer Staples", sub_industry: "Tobacco"},
{ticker: "RHI", company: "Robert Half International", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "ROK", company: "Rockwell Automation Inc.", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "COL", company: "Rockwell Collins", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "ROP", company: "Roper Industries", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "ROST", company: "Ross Stores", industry: "Consumer Discretionary", sub_industry: "Apparel Retail"},
{ticker: "RCL", company: "Royal Caribbean Cruises Ltd", industry: "Consumer Discretionary", sub_industry: "Hotel, Resorts and Cruise Lines"},
{ticker: "R", company: "Ryder System", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "SWY", company: "Safeway Inc.", industry: "Consumer Staples", sub_industry: "Food Retail"},
{ticker: "CRM", company: "Salesforce.com", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "SNDK", company: "SanDisk Corporation", industry: "Information Technology", sub_industry: "Computer Storage & Peripherals"},
{ticker: "SCG", company: "SCANA Corp", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "SLB", company: "Schlumberger Ltd.", industry: "Energy", sub_industry: "Oil & Gas Equipment & Services"},
{ticker: "SNI", company: "Scripps Networks Interactive Inc.", industry: "Consumer Discretionary", sub_industry: "Broadcasting & Cable TV"},
{ticker: "STX", company: "Seagate Technology", industry: "Information Technology", sub_industry: "Computer Storage & Peripherals"},
{ticker: "SEE", company: "Sealed Air Corp.(New)", industry: "Materials", sub_industry: "Paper Packaging"},
{ticker: "SRE", company: "Sempra Energy", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "SHW", company: "Sherwin-Williams", industry: "Materials", sub_industry: "Specialty Chemicals"},
{ticker: "SIAL", company: "Sigma-Aldrich", industry: "Materials", sub_industry: "Diversified Chemicals"},
{ticker: "SPG", company: "Simon Property Group Inc", industry: "Financials", sub_industry: "REITs"},
{ticker: "SJM", company: "Smucker (J.M.)", industry: "Consumer Staples", sub_industry: "Packaged Foods & Meats"},
{ticker: "SNA", company: "Snap-On Inc.", industry: "Consumer Discretionary", sub_industry: "Household Appliances"},
{ticker: "SO", company: "Southern Co.", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "LUV", company: "Southwest Airlines", industry: "Industrials", sub_industry: "Airlines"},
{ticker: "SWN", company: "Southwestern Energy", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "SE", company: "Spectra Energy Corp.", industry: "Energy", sub_industry: "Oil & Gas Refining & Marketing & Transportation"},
{ticker: "STJ", company: "St Jude Medical", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "SWK", company: "Stanley Black & Decker", industry: "Consumer Discretionary", sub_industry: "Household Appliances"},
{ticker: "SPLS", company: "Staples Inc.", industry: "Consumer Discretionary", sub_industry: "Specialty Stores"},
{ticker: "SBUX", company: "Starbucks Corp.", industry: "Consumer Discretionary", sub_industry: "Restaurants"},
{ticker: "HOT", company: "Starwood Hotels & Resorts", industry: "Consumer Discretionary", sub_industry: "Hotels, Resorts & Cruise Lines"},
{ticker: "STT", company: "State Street Corp.", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "SRCL", company: "Stericycle Inc", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "SYK", company: "Stryker Corp.", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "STI", company: "SunTrust Banks", industry: "Financials", sub_industry: "Banks"},
{ticker: "SYMC", company: "Symantec Corp.", industry: "Information Technology", sub_industry: "Application Software"},
{ticker: "SYY", company: "Sysco Corp.", industry: "Consumer Staples", sub_industry: "Food Distributors"},
{ticker: "TROW", company: "T. Rowe Price Group", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "TGT", company: "Target Corp.", industry: "Consumer Discretionary", sub_industry: "General Merchandise Stores"},
{ticker: "TEL", company: "TE Connectivity Ltd.", industry: "Information Technology", sub_industry: "Electronic Equipment & Instruments"},
{ticker: "TE", company: "TECO Energy", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "THC", company: "Tenet Healthcare Corp.", industry: "Health Care", sub_industry: "Health Care Facilities"},
{ticker: "TDC", company: "Teradata Corp.", industry: "Information Technology", sub_industry: "Application Software"},
{ticker: "TSO", company: "Tesoro Petroleum Co.", industry: "Energy", sub_industry: "Oil & Gas Refining & Marketing & Transportation"},
{ticker: "TXN", company: "Texas Instruments", industry: "Information Technology", sub_industry: "Semiconductors"},
{ticker: "TXT", company: "Textron Inc.", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "HSY", company: "The Hershey Company", industry: "Consumer Staples", sub_industry: "Packaged Foods & Meats"},
{ticker: "TRV", company: "The Travelers Companies Inc.", industry: "Financials", sub_industry: "Property & Casualty Insurance"},
{ticker: "TMO", company: "Thermo Fisher Scientific", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "TIF", company: "Tiffany & Co.", industry: "Consumer Discretionary", sub_industry: "Apparel, Accessories & Luxury Goods"},
{ticker: "TWX", company: "Time Warner Inc.", industry: "Consumer Discretionary", sub_industry: "Broadcasting & Cable TV"},
{ticker: "TWC", company: "Time Warner Cable Inc.", industry: "Consumer Discretionary", sub_industry: "Broadcasting & Cable TV"},
{ticker: "TJX", company: "TJX Companies Inc.", industry: "Consumer Discretionary", sub_industry: "Apparel Retail"},
{ticker: "TMK", company: "Torchmark Corp.", industry: "Financials", sub_industry: "Life & Health Insurance"},
{ticker: "TSS", company: "Total System Services", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "TSCO", company: "Tractor Supply Company", industry: "Consumer Discretionary", sub_industry: "Specialty Retail"},
{ticker: "RIG", company: "Transocean", industry: "Energy", sub_industry: "Oil & Gas Drilling"},
{ticker: "TRIP", company: "TripAdvisor", industry: "Consumer Discretionary", sub_industry: "Internet Retail"},
{ticker: "FOXA", company: "Twenty-First Century Fox", industry: "Consumer Discretionary", sub_industry: "Publishing"},
{ticker: "TSN", company: "Tyson Foods", industry: "Consumer Staples", sub_industry: "Packaged Foods & Meats"},
{ticker: "TYC", company: "Tyco International", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "USB", company: "U.S. Bancorp", industry: "Financials", sub_industry: "Banks"},
{ticker: "UA", company: "Under Armour", industry: "Consumer Discretionary", sub_industry: "Apparel, Accessories & Luxury Goods"},
{ticker: "UNP", company: "Union Pacific", industry: "Industrials", sub_industry: "Railroads"},
{ticker: "UNH", company: "United Health Group Inc.", industry: "Health Care", sub_industry: "Managed Health Care"},
{ticker: "UPS", company: "United Parcel Service", industry: "Industrials", sub_industry: "Air Freight & Logistics"},
{ticker: "MLM", company: "Martin Marietta Materials", industry: "Materials", sub_industry: "Construction Materials"},
{ticker: "URI", company: "United Rentals, Inc.", industry: "Industrials", sub_industry: "Trading Companies & Distributors"},
{ticker: "UTX", company: "United Technologies", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "UHS", company: "Universal Health Services, Inc.", industry: "Health Care", sub_industry: "Health Care Facilities"},
{ticker: "UNM", company: "Unum Group", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "URBN", company: "Urban Outfitters", industry: "Consumer Discretionary", sub_industry: "Apparel Retail"},
{ticker: "VFC", company: "V.F. Corp.", industry: "Consumer Discretionary", sub_industry: "Apparel, Accessories & Luxury Goods"},
{ticker: "VLO", company: "Valero Energy", industry: "Energy", sub_industry: "Oil & Gas Refining & Marketing & Transportation"},
{ticker: "VAR", company: "Varian Medical Systems", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "VTR", company: "Ventas Inc", industry: "Financials", sub_industry: "Diversified Financial Services"},
{ticker: "VRSN", company: "Verisign Inc.", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "VZ", company: "Verizon Communications", industry: "Telecommunications Services", sub_industry: "Integrated Telecommunications Services"},
{ticker: "VRTX", company: "Vertex Pharmaceuticals Inc", industry: "Health Care", sub_industry: "Biotechnology"},
{ticker: "VIAB", company: "Viacom Inc.", industry: "Consumer Discretionary", sub_industry: "Broadcasting & Cable TV"},
{ticker: "V", company: "Visa Inc.", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "VNO", company: "Vornado Realty Trust", industry: "Financials", sub_industry: "REITs"},
{ticker: "VMC", company: "Vulcan Materials", industry: "Materials", sub_industry: "Construction Materials"},
{ticker: "WMT", company: "Wal-Mart Stores", industry: "Consumer Staples", sub_industry: "Hypermarkets & Super Centers"},
{ticker: "WBA", company: "Walgreens Boots Alliance", industry: "Consumer Staples", sub_industry: "Drug Retail"},
{ticker: "DIS", company: "The Walt Disney Company", industry: "Consumer Discretionary", sub_industry: "Broadcasting & Cable TV"},
{ticker: "WM", company: "Waste Management Inc.", industry: "Industrials", sub_industry: "Environmental Services"},
{ticker: "WAT", company: "Waters Corporation", industry: "Health Care", sub_industry: "Health Care Distributors & Services"},
{ticker: "ANTM", company: "Anthem Inc.", industry: "Health Care", sub_industry: "Managed Health Care"},
{ticker: "WFC", company: "Wells Fargo", industry: "Financials", sub_industry: "Banks"},
{ticker: "WDC", company: "Western Digital", industry: "Information Technology", sub_industry: "Computer Storage & Peripherals"},
{ticker: "WU", company: "Western Union Co", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "WY", company: "Weyerhaeuser Corp.", industry: "Financials", sub_industry: "REITs"},
{ticker: "WHR", company: "Whirlpool Corp.", industry: "Consumer Discretionary", sub_industry: "Household Appliances"},
{ticker: "WFM", company: "Whole Foods Market", industry: "Consumer Staples", sub_industry: "Food Retail"},
{ticker: "WMB", company: "Williams Cos.", industry: "Energy", sub_industry: "Oil & Gas Exploration & Production"},
{ticker: "WIN", company: "Windstream Communications", industry: "Telecommunications Services", sub_industry: "Integrated Telecommunications Services"},
{ticker: "WEC", company: "Wisconsin Energy Corporation", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "WYN", company: "Wyndham Worldwide", industry: "Consumer Discretionary", sub_industry: "Hotels, Resorts & Cruise Lines"},
{ticker: "WYNN", company: "Wynn Resorts Ltd", industry: "Consumer Discretionary", sub_industry: "Casinos & Gaming"},
{ticker: "XEL", company: "Xcel Energy Inc", industry: "Utilities", sub_industry: "Multi-Utilities & Unregulated Power"},
{ticker: "XRX", company: "Xerox Corp.", industry: "Information Technology", sub_industry: "IT Consulting & Services"},
{ticker: "XLNX", company: "Xilinx Inc", industry: "Information Technology", sub_industry: "Semiconductors"},
{ticker: "XL", company: "XL Capital", industry: "Financials", sub_industry: "Property & Casualty Insurance"},
{ticker: "XYL", company: "Xylem Inc.", industry: "Industrials", sub_industry: "Industrial Conglomerates"},
{ticker: "YHOO", company: "Yahoo Inc.", industry: "Information Technology", sub_industry: "Internet Software & Services"},
{ticker: "YUM", company: "Yum! Brands Inc", industry: "Consumer Discretionary", sub_industry: "Restaurants"},
{ticker: "ZMH", company: "Zimmer Holdings", industry: "Health Care", sub_industry: "Health Care Equipment & Services"},
{ticker: "ZION", company: "Zions Bancorp", industry: "Financials", sub_industry: "Banks"},
{ticker: "ZTS", company: "Zoetis", industry: "Health Care", sub_industry: "Pharmaceuticals"}];

//this filters through all of SP500 and will separate them by industry
var filter = function(industry){
	var array = [];
	allSp.forEach(function(each){
	if(each.industry === industry){
		array.push(each)
	}
	})
		return array
}

//these are the the filtered categories
var financials = filter("Financials");
var health_care = filter("Health Care");
var consumer_dis = filter("Consumer Discretionary");
var info_tech = filter("Information Technology");
var industrials = filter("Industrials")
var utilities = filter("Utilities");
var tele_comp = filter("Telecommunications Services");
var energy = filter("Energy");
var consumer_staples = filter("Consumer Staples");
var materials = filter("Materials")







//END
//BEGIN THE SERVER
//!!!!!!!!!!!

var express = require ('express');
var bodyParser = require ('body-parser');
var request = require ('request');
var app = express();

app.use(express.static(__dirname + '/Public'));
app.use(bodyParser.urlencoded({ extended: false }));



	//THIS IS THE API FROM MARKIT.COM TO EXTRACT INFORMATION
	// this extracts all the data as soon as the server loads
	var allData = function(sector, push_array){
	var i = 0;
	while(i < sector.length){
	var url_two = "http://dev.markitondemand.com/Api/v2/Quote/json?symbol=" + sector[i].ticker;
	request(url_two, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    data = JSON.parse(body);
	    push_array.push(data);
	    console.log(data);
	  }
	})
	i++;
	}
	}


	var financials_data = [];
	allData(financials, financials_data);

	var health_data = [];
	allData(health_care, health_data);

	var consumer_dis_data = [];
	allData(consumer_dis, consumer_dis_data);

	var info_tech_data = [];
	allData(info_tech, info_tech_data);

	var industrials_data = [];
	allData(industrials, industrials_data);

	var utilities_data = [];
	allData(utilities, utilities_data);

	var tele_comp_data = [];
	allData(tele_comp, tele_comp_data);

	var energy_data = [];
	allData(energy, energy_data);

	var consumer_staples_data = [];
	allData(consumer_staples, consumer_staples_data);

	var materials_data = [];
	allData(materials, materials_data);


//!!!!!!! redo this
//I NEED TO MAKE A LOOP THAT WILL KEEP TRYING TO GET DATA UNTIL EACH HAS AT LEAST 10
//i need to loop through all of them now
//"if(info_tech_data.length <= 10){redo allData}"
//!!!!!!! redo this


// var url = "http://dev.markitondemand.com/Api/v2/Quote/json?symbol=AAPL"

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/Project.html');
});

//THIS SENDS THE DATA
app.get('/financials', function(req, res){
res.send(financials_data);
allData(financials, financials_data);
});

app.get('/health_care', function(req, res){
res.send(health_data);
allData(health_care, health_data);
});

app.get('/consumer_dis', function(req, res){
res.send(consumer_dis_data);
allData(consumer_dis, consumer_dis_data);
});

app.get('/info_tech', function(req, res){
res.send(info_tech_data);
allData(info_tech, info_tech_data);
});

app.get('/industrials', function(req, res){
res.send(industrials_data);
allData(industrials, industrials_data);
});

app.get('/utilities', function(req, res){
res.send(utilities_data);
allData(utilities, utilities_data);
});

app.get('/tele_comp', function(req, res){
res.send(tele_comp_data);
allData(tele_comp, tele_comp_data);
});

app.get('/energy', function(req, res){
res.send(energy_data);
allData(energy, energy_data);
});

app.get('/consumer_staples', function(req, res){
res.send(consumer_staples_data);
allData(consumer_staples, consumer_staples_data);
});

app.get('/materials', function(req, res){
res.send(materials_data);
allData(materials, materials_data);
});


//EVERYTHING BELOW IS FOR MY API FOR .JSON
app.get('/api', function(req, res){
  res.send(allSp);
})

app.get('/api/financials', function(req, res){
	res.send(financials);
})

app.get('/api/health_care', function(req, res){
	res.send(health_care);
})

app.get('/api/consumer_dis', function(req, res){
	res.send(consumer_dis);
})

app.get('/api/info_tech', function(req, res){
	res.send(info_tech);
})

app.get('/api/industrials', function(req, res){
	res.send(industrials);
})

app.get('/api/utilities', function(req, res){
	res.send(utilities);
})

app.get('/api/tele_comp', function(req, res){
	res.send(tele_comp);
})

app.get('/api/energy', function(req, res){
	res.send(energy);
})

app.get('/api/consumer_staples', function(req, res){
	res.send(consumer_staples);
})

app.get('/api/materials', function(req, res){
	res.send(materials);
})



app.listen(3000)






