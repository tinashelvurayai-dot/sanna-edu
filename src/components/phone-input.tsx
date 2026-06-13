import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface Country {
  name: string;
  code: string; // ISO 3166-1 alpha-2
  dial: string; // dial code with +
  flag: string; // emoji
}

// Convert an ISO 3166-1 alpha-2 code into its flag emoji.
const flagOf = (code: string) =>
  code
    .toUpperCase()
    .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));

// Full world list. African and major global markets are surfaced first,
// the rest follow alphabetically.
const RAW: [string, string, string][] = [
  ["Nigeria", "NG", "+234"],
  ["Ghana", "GH", "+233"],
  ["Kenya", "KE", "+254"],
  ["South Africa", "ZA", "+27"],
  ["Zimbabwe", "ZW", "+263"],
  ["Zambia", "ZM", "+260"],
  ["Tanzania", "TZ", "+255"],
  ["Uganda", "UG", "+256"],
  ["Rwanda", "RW", "+250"],
  ["Ethiopia", "ET", "+251"],
  ["Egypt", "EG", "+20"],
  ["United States", "US", "+1"],
  ["United Kingdom", "GB", "+44"],
  ["Canada", "CA", "+1"],
  ["India", "IN", "+91"],
  ["United Arab Emirates", "AE", "+971"],
  ["Afghanistan", "AF", "+93"],
  ["Albania", "AL", "+355"],
  ["Algeria", "DZ", "+213"],
  ["Andorra", "AD", "+376"],
  ["Angola", "AO", "+244"],
  ["Antigua and Barbuda", "AG", "+1268"],
  ["Argentina", "AR", "+54"],
  ["Armenia", "AM", "+374"],
  ["Australia", "AU", "+61"],
  ["Austria", "AT", "+43"],
  ["Azerbaijan", "AZ", "+994"],
  ["Bahamas", "BS", "+1242"],
  ["Bahrain", "BH", "+973"],
  ["Bangladesh", "BD", "+880"],
  ["Barbados", "BB", "+1246"],
  ["Belarus", "BY", "+375"],
  ["Belgium", "BE", "+32"],
  ["Belize", "BZ", "+501"],
  ["Benin", "BJ", "+229"],
  ["Bhutan", "BT", "+975"],
  ["Bolivia", "BO", "+591"],
  ["Bosnia and Herzegovina", "BA", "+387"],
  ["Botswana", "BW", "+267"],
  ["Brazil", "BR", "+55"],
  ["Brunei", "BN", "+673"],
  ["Bulgaria", "BG", "+359"],
  ["Burkina Faso", "BF", "+226"],
  ["Burundi", "BI", "+257"],
  ["Cambodia", "KH", "+855"],
  ["Cameroon", "CM", "+237"],
  ["Cape Verde", "CV", "+238"],
  ["Central African Republic", "CF", "+236"],
  ["Chad", "TD", "+235"],
  ["Chile", "CL", "+56"],
  ["China", "CN", "+86"],
  ["Colombia", "CO", "+57"],
  ["Comoros", "KM", "+269"],
  ["Congo", "CG", "+242"],
  ["Costa Rica", "CR", "+506"],
  ["Croatia", "HR", "+385"],
  ["Cuba", "CU", "+53"],
  ["Cyprus", "CY", "+357"],
  ["Czech Republic", "CZ", "+420"],
  ["Democratic Republic of the Congo", "CD", "+243"],
  ["Denmark", "DK", "+45"],
  ["Djibouti", "DJ", "+253"],
  ["Dominica", "DM", "+1767"],
  ["Dominican Republic", "DO", "+1809"],
  ["Ecuador", "EC", "+593"],
  ["El Salvador", "SV", "+503"],
  ["Equatorial Guinea", "GQ", "+240"],
  ["Eritrea", "ER", "+291"],
  ["Estonia", "EE", "+372"],
  ["Eswatini", "SZ", "+268"],
  ["Fiji", "FJ", "+679"],
  ["Finland", "FI", "+358"],
  ["France", "FR", "+33"],
  ["Gabon", "GA", "+241"],
  ["Gambia", "GM", "+220"],
  ["Georgia", "GE", "+995"],
  ["Germany", "DE", "+49"],
  ["Greece", "GR", "+30"],
  ["Grenada", "GD", "+1473"],
  ["Guatemala", "GT", "+502"],
  ["Guinea", "GN", "+224"],
  ["Guinea-Bissau", "GW", "+245"],
  ["Guyana", "GY", "+592"],
  ["Haiti", "HT", "+509"],
  ["Honduras", "HN", "+504"],
  ["Hong Kong", "HK", "+852"],
  ["Hungary", "HU", "+36"],
  ["Iceland", "IS", "+354"],
  ["Indonesia", "ID", "+62"],
  ["Iran", "IR", "+98"],
  ["Iraq", "IQ", "+964"],
  ["Ireland", "IE", "+353"],
  ["Israel", "IL", "+972"],
  ["Italy", "IT", "+39"],
  ["Ivory Coast", "CI", "+225"],
  ["Jamaica", "JM", "+1876"],
  ["Japan", "JP", "+81"],
  ["Jordan", "JO", "+962"],
  ["Kazakhstan", "KZ", "+7"],
  ["Kiribati", "KI", "+686"],
  ["Kuwait", "KW", "+965"],
  ["Kyrgyzstan", "KG", "+996"],
  ["Laos", "LA", "+856"],
  ["Latvia", "LV", "+371"],
  ["Lebanon", "LB", "+961"],
  ["Lesotho", "LS", "+266"],
  ["Liberia", "LR", "+231"],
  ["Libya", "LY", "+218"],
  ["Liechtenstein", "LI", "+423"],
  ["Lithuania", "LT", "+370"],
  ["Luxembourg", "LU", "+352"],
  ["Macau", "MO", "+853"],
  ["Madagascar", "MG", "+261"],
  ["Malawi", "MW", "+265"],
  ["Malaysia", "MY", "+60"],
  ["Maldives", "MV", "+960"],
  ["Mali", "ML", "+223"],
  ["Malta", "MT", "+356"],
  ["Marshall Islands", "MH", "+692"],
  ["Mauritania", "MR", "+222"],
  ["Mauritius", "MU", "+230"],
  ["Mexico", "MX", "+52"],
  ["Micronesia", "FM", "+691"],
  ["Moldova", "MD", "+373"],
  ["Monaco", "MC", "+377"],
  ["Mongolia", "MN", "+976"],
  ["Montenegro", "ME", "+382"],
  ["Morocco", "MA", "+212"],
  ["Mozambique", "MZ", "+258"],
  ["Myanmar", "MM", "+95"],
  ["Namibia", "NA", "+264"],
  ["Nauru", "NR", "+674"],
  ["Nepal", "NP", "+977"],
  ["Netherlands", "NL", "+31"],
  ["New Zealand", "NZ", "+64"],
  ["Nicaragua", "NI", "+505"],
  ["Niger", "NE", "+227"],
  ["North Korea", "KP", "+850"],
  ["North Macedonia", "MK", "+389"],
  ["Norway", "NO", "+47"],
  ["Oman", "OM", "+968"],
  ["Pakistan", "PK", "+92"],
  ["Palau", "PW", "+680"],
  ["Palestine", "PS", "+970"],
  ["Panama", "PA", "+507"],
  ["Papua New Guinea", "PG", "+675"],
  ["Paraguay", "PY", "+595"],
  ["Peru", "PE", "+51"],
  ["Philippines", "PH", "+63"],
  ["Poland", "PL", "+48"],
  ["Portugal", "PT", "+351"],
  ["Qatar", "QA", "+974"],
  ["Romania", "RO", "+40"],
  ["Russia", "RU", "+7"],
  ["Saint Kitts and Nevis", "KN", "+1869"],
  ["Saint Lucia", "LC", "+1758"],
  ["Saint Vincent and the Grenadines", "VC", "+1784"],
  ["Samoa", "WS", "+685"],
  ["San Marino", "SM", "+378"],
  ["Sao Tome and Principe", "ST", "+239"],
  ["Saudi Arabia", "SA", "+966"],
  ["Senegal", "SN", "+221"],
  ["Serbia", "RS", "+381"],
  ["Seychelles", "SC", "+248"],
  ["Sierra Leone", "SL", "+232"],
  ["Singapore", "SG", "+65"],
  ["Slovakia", "SK", "+421"],
  ["Slovenia", "SI", "+386"],
  ["Solomon Islands", "SB", "+677"],
  ["Somalia", "SO", "+252"],
  ["South Korea", "KR", "+82"],
  ["South Sudan", "SS", "+211"],
  ["Spain", "ES", "+34"],
  ["Sri Lanka", "LK", "+94"],
  ["Sudan", "SD", "+249"],
  ["Suriname", "SR", "+597"],
  ["Sweden", "SE", "+46"],
  ["Switzerland", "CH", "+41"],
  ["Syria", "SY", "+963"],
  ["Taiwan", "TW", "+886"],
  ["Tajikistan", "TJ", "+992"],
  ["Thailand", "TH", "+66"],
  ["Timor-Leste", "TL", "+670"],
  ["Togo", "TG", "+228"],
  ["Tonga", "TO", "+676"],
  ["Trinidad and Tobago", "TT", "+1868"],
  ["Tunisia", "TN", "+216"],
  ["Turkey", "TR", "+90"],
  ["Turkmenistan", "TM", "+993"],
  ["Tuvalu", "TV", "+688"],
  ["Ukraine", "UA", "+380"],
  ["Uruguay", "UY", "+598"],
  ["Uzbekistan", "UZ", "+998"],
  ["Vanuatu", "VU", "+678"],
  ["Vatican City", "VA", "+379"],
  ["Venezuela", "VE", "+58"],
  ["Vietnam", "VN", "+84"],
  ["Yemen", "YE", "+967"],
];

export const COUNTRIES: Country[] = RAW.map(([name, code, dial]) => ({
  name,
  code,
  dial,
  flag: flagOf(code),
}));

interface PhoneInputProps {
  country: Country;
  number: string;
  onCountryChange: (c: Country) => void;
  onNumberChange: (n: string) => void;
}

export function PhoneInput({ country, number, onCountryChange, onNumberChange }: PhoneInputProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = COUNTRIES.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.dial.includes(search),
  );

  return (
    <div className="relative">
      <div className="flex">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-1 px-3 rounded-l-md border border-r-0 border-input bg-blue-50 text-sm font-medium text-blue-900 hover:bg-blue-100 transition"
        >
          <span className="text-base">{country.flag}</span>
          <span>{country.dial}</span>
          <ChevronDown className="w-3.5 h-3.5 text-blue-500" />
        </button>
        <input
          type="tel"
          value={number}
          onChange={(e) => onNumberChange(e.target.value.replace(/[^0-9]/g, ""))}
          placeholder="700 000 000"
          className="flex h-10 w-full rounded-r-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm"
        />
      </div>

      {open && (
        <div className="absolute z-50 mt-1 w-full max-h-64 overflow-y-auto rounded-md border border-blue-100 bg-white shadow-lg">
          <div className="sticky top-0 bg-white p-2 border-b border-blue-50">
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country..."
              className="w-full h-9 rounded-md border border-input px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          {filtered.map((c) => (
            <button
              key={c.code + c.dial}
              type="button"
              onClick={() => {
                onCountryChange(c);
                setOpen(false);
                setSearch("");
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-left hover:bg-blue-50 transition"
            >
              <span className="text-base">{c.flag}</span>
              <span className="flex-1 text-blue-900 truncate">{c.name}</span>
              <span className="text-blue-500">{c.dial}</span>
              {c.code === country.code && c.dial === country.dial && <Check className="w-4 h-4 text-blue-600" />}
            </button>
          ))}
          {filtered.length === 0 && <p className="px-3 py-4 text-sm text-blue-400 text-center">No match</p>}
        </div>
      )}
    </div>
  );
}
