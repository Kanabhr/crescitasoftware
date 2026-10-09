
import FooterMainContent from "./subComponents/FooterMainContent";

interface footerPropsDt {
    footerBgImg?: string;
    sectionBgColor?: string
}
const PersonalPortfolioFooter: React.FC<footerPropsDt> = () => {
    return (
        <footer>
            <div className="tp-footer-area mp-footer-style pt-145 bg-position" style={{ backgroundImage: `url(/assets/img/footer/bg.jpg)` }}>
                <FooterMainContent />
            </div>
        </footer>
    );
};

export default PersonalPortfolioFooter;