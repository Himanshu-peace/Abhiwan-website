import { CERTIFICATIONS } from "../../constants/hero_secConst";
import CertificationSwiper from "./certificationswiper";

export function TrustedSection() {
    const certificationLogos = CERTIFICATIONS.map(cert => cert.image);

    return (
        <section className="w-full bg-[var(--header-curve)] py-20 border-b border-white/10">
            {/* Heading stays centered */}


            <div className="max-w-[1400px] mx-auto px-6 mb-16 text-center">
                <h2 className="text-white font-[var(--font-futura)] font-bold 
      text-[1.35rem] sm:text-4xl  md:text-5xl lg:text-6xl 
      tracking-tighter 
      flex justify-center items-center gap-3 whitespace-nowrap">

                    <span>CERTIFIED.</span>

                    <span className="inline-flex items-center shrink-0">
                        <img
                            src="/Recognized.png"
                            alt="recognized"
                            /* Reduced from 1em to 0.8em to match the optical height of the text.
                               We use 'object-contain' to ensure it doesn't stretch.
                            */
                            className="h-[0.6em] md:h-[0.75em] w-auto block object-contain translate-y-[0.05em]"
                        />
                    </span>

                    <span>.TRUSTED.</span>
                </h2>
            </div>



            {/* Full-width carousel */}
            <div className="w-full overflow-hidden bg-[var(--service-background)]">
                <CertificationSwiper logos={certificationLogos} />
            </div>
        </section>
    );
}
