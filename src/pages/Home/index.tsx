import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import {
    Container,
    Content,
    ContentFirstSection,
    ContentSecondSection,
    ContentThirdSection,
} from './styles'

const Home:React.FC = () => {
    return (
        <Container>
            <Header />

            <Content>
                <section className={'first-section'}>
                    <ContentFirstSection>
                        <div className={'firstSection-first-block'}>
                            <h1>Designed for the future</h1>
                        </div>

                        <div className={'firstSection-second-block'}>
                            <h1>Introducing an extensible editor</h1>
                            <p>
                                Blogr features an exceedingly intuitive interface which 
                                lets you focus on one thing: creating content. The 
                                editor supports management of multiple blogs and 
                                allows easy manipulation of embeds such as images, videos, 
                                and Markdown. Extensibility with plugins and themes 
                                provide easy ways to add functionality or change the 
                                looks of a blog.
                            </p>
                        </div>

                        <div className={'firstSection-third-block'}>
                            <h1>Robust content management</h1>
                            <p>
                                Flexible content management enables users to easily move through 
                                posts. Increase the usability of your blog by adding customized 
                                categories, sections, format, or flow. With this functionality, you’re 
                                in full control.
                            </p>
                        </div>
                    </ContentFirstSection>     
                </section>

                <section>
                    <ContentSecondSection>
                        <div>
                            <div className='bg-phone-second-section' />
                            <h1>State of the Art Infrastructure</h1>
                            <p>
                                With reliability and speed in mind, worldwide data centers provide the 
                                backbone for ultra-fast connectivity. This ensures your site will load 
                                instantly, no matter where your readers are, keeping your site competitive.    
                            </p>
                        </div>
                    </ContentSecondSection>
                </section>


                <section>
                    <ContentThirdSection>
                        <div className='bg-computer-third-section' />
                        <div>
                            <h1>Free, open, simple</h1>
                            <p>
                                Blogr is a free and open source application backed by a large community of 
                                helpful developers. It supports features such as code syntax highlighting, 
                                RSS feeds, social media integration, third-party commenting tools, and works 
                                seamlessly with Google Analytics. The architecture is clean and is relatively 
                                easy to learn.    
                            </p>
                        </div>
                        <div>
                            <h1>Powerful tooling</h1>
                            <p>
                            Batteries included. We built a simple and straightforward CLI tool that makes customization 
                            and deployment a breeze, but capable of producing even the most complicated sites.    
                            </p>
                        </div>
                    </ContentThirdSection>
                </section>


            </Content>
            <Footer />
        </Container>
    )
}

export default Home