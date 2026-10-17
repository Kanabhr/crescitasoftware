// import SmartLink from "@/components/common/SmartLink";
// import Image from "next/image";

// type BrandLogoProps = {
//     logo1Width?: number;
//     logo2Width?: number;
//     logo1Height?: number;
//     logo2Height?: number;
// };

// const BrandLogo = ({
//     logo1Width = 140,
//     logo2Width = 140,
//     logo1Height = 29,
//     logo2Height = 34,
// }: BrandLogoProps) => {
//     return (
//         <SmartLink href="/">
//             <Image
//                 className="logo-1"
//                 src="/assets/img/logo/logo.png"
//                 alt="logo"
//                 width={logo1Width}
//                 height={logo1Height}
//                 priority
//             />

//             <Image
//                 className="logo-2"
//                 src="/assets/img/logo/logo-white.png"
//                 alt="logo white"
//                 width={logo2Width}
//                 height={logo2Height}
//                 priority
//             />
//         </SmartLink>
//     );
// };

// export default BrandLogo;
import SmartLink from "@/components/common/SmartLink";
import Image from "next/image";

type BrandLogoProps = {
    logo1Width?: number;
    logo2Width?: number;
    logo1Height?: number;
    logo2Height?: number;
};

// New logo ratio is 630:189 (3.33:1), so height = width / 3.33
const BrandLogo = ({
    logo1Width = 140,
    logo2Width = 140,
    logo1Height = 42,
    logo2Height = 42,
}: BrandLogoProps) => {
    return (
        <SmartLink href="/">
            <Image
                className="logo-1"
                src="/assets/img/logo/logo.png"
                alt="Crescita Software LLP"
                width={logo1Width}
                height={logo1Height}
                priority
            />

            <Image
                className="logo-2"
                src="/assets/img/logo/logo-white.png"
                alt="Crescita Software LLP"
                width={logo2Width}
                height={logo2Height}
                priority
            />
        </SmartLink>
    );
};

export default BrandLogo;