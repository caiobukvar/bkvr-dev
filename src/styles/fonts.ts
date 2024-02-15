import { Inter, Unbounded, Jura, Source_Sans_3 } from "next/font/google";
import localFont from "next/font/local";

// define your variable fonts
const inter = Inter({ subsets: ["latin"] });
const unbounded = Unbounded({ subsets: ["latin"] });
const jura = Jura({ subsets: ["latin"] });
// define 2 weights of a non-variable font
const sourceCodePro400 = Source_Sans_3({ weight: "400", subsets: ["latin"] });
const sourceCodePro700 = Source_Sans_3({ weight: "700", subsets: ["latin"] });

export { inter, unbounded, jura, sourceCodePro400, sourceCodePro700 };
