import styled from 'styled-components';
import './App.css';
import { Header } from './layout/header/Header';
import { SectionSkill } from './layout/secction/sectionSkills/SectionSkills';
import { OfferSection } from './layout/secction/sectionOffer/SectionOffer';
import { SectionPortfolio } from './layout/secction/sectionPortfolio/SectionPortfolio';
import { SectionWork } from './layout/secction/sectionWork/SectionWork';
import { EmmaSection } from './layout/secction/sectionEmma/SectionEmma';
import { BlogPostSection } from './layout/secction/sectionBlogPost/SectionBlogPost';
import { SectionNumber } from './layout/secction/sectionNumber/SectionNumber';
import { Footer } from './layout/footer/Footer';

function App() {
    return (
        <div className="App">
            <StyilContainer>
                <Header/>
                <SectionSkill/>
                <OfferSection/>
                <SectionPortfolio/>
                <SectionWork/>
                <EmmaSection/>
                <BlogPostSection/>
                <SectionNumber/>
                <Footer/>
            </StyilContainer>
        </div>
    );
}

export default App;

const StyilContainer = styled.div`
    max-width: 1920px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`