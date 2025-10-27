import React from 'react';

const LOGOS = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/6849d88f755388cc2c74ecff_salontopper-2.svg", alt: "Salontopper" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/6849d880bed5996600cbc586_seesing-flex-3.svg", alt: "Seesing Flex" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/6849d86cd6ba384af3c14e58_graafschap-college-4.svg", alt: "Graafschap College" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/6849d85341bf0d7476e56a8c_fides-5.svg", alt: "Fides" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/6849d838fc5735f090bd9843_SRHK-6.svg", alt: "SRHK" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/6849d81e72e08110e3fd1a17_knltb-7.svg", alt: "KNLTB" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/684b062ebc242028ca4b3ea1_tho-8.svg", alt: "THO" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/684c05642bf8f5cea7384403_de-talententuin-9.svg", alt: "De Talententuin" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/68c1952f22281ee50d3620b5_zclv-10.svg", alt: "ZCLV" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1b2e0205-1fa2-45bd-8c45-4d4c1200c30e-gethyped-nl/assets/svgs/68c194e6d1b186563459b107_morssinkhof-1.svg", alt: "Morssinkhof" },
];

const LogoTrack = () => (
  <div className="flex flex-none items-center gap-8 pl-8">
    {LOGOS.map((logo, index) => (
      <div
        key={index}
        className="w-[264px] shrink-0 h-[160px] bg-card border border-border rounded-sm flex items-center justify-center p-12 transition-transform duration-300 ease-in-out hover:scale-[1.02]"
      >
        <img
          src={logo.src}
          alt={logo.alt}
          className="max-h-[56px] w-auto object-contain"
        />
      </div>
    ))}
  </div>
);

const BrandsMarquee = () => {
    return (
        <section className="bg-background py-24 overflow-x-hidden">
            <style>
                {`
                    @keyframes marquee {
                      0% { transform: translateX(0%); }
                      100% { transform: translateX(-100%); }
                    }
                    .animate-marquee {
                      animation: marquee 40s linear infinite;
                    }
                `}
            </style>
            <div className="container">
                <h2 className="text-[56px] font-medium tracking-[-0.06em] leading-none mb-24 font-display">
                    These brands got hyped.
                </h2>
            </div>
            
            <div className="flex animate-marquee">
                <LogoTrack />
                <LogoTrack />
            </div>
        </section>
    );
};

export default BrandsMarquee;