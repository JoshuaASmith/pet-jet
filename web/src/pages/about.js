const React = require('react')
const {Link} = require('react-router')
const PageTitle = require('../components/page-title')
const Footer = require('../components/footer')
const QuoteCarousel = require('../components/carousel')

const About = React.createClass({
    render() {
        return (
            <div className="center tc">
                <div>
                    <PageTitle title="About Pet Duet"/>
                </div>
                <div className="mb4">
                    <hr className="w-90 tl b--dark-blue"/>
                </div>
                <article data-name="article-full-bleed-background" className="mb4">
                    <div className="cf" style={{
                        background: 'url(https://i.imgsafe.org/eb938b2152.jpg) no-repeat',
                        backgroundSize: 'contain',
                        marginLeft: 200
                    }}>
                        <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times fr" style={{
                            marginRight: 200
                        }}>
                            <header className="">
                                <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir pv4 tc">Pet Duet</h3>
                                <h4 className="f3 fw4 i lh-title mt0 tc">Join in harmony with owners
                                    <br></br>over their pet's health.</h4>
                            </header>
                            <hr className="w-80 tl b--dark-blue"/>
                            <section className="pt3 pb4">
                                <p className="times lh-copy measure f4 mt0">
                                    Pet Duet is designed to help veterinarians make keeping track of the pets they help take care of easier and more efficient. Vets and their staff can login to Pet Duet and see information on the pets that come to their office and the procedures and vaccinations they have recently had. Vets will have a centralized place to upload information about client's pets to make record keeping more seamless. Help take the stress out of managing your office by using Pet Duet!
                                </p>
                            </section>
                        </div>
                    </div>
                </article>
                <div style={{
                    height: 200
                }}>
                    <QuoteCarousel/>
                </div>
                <section className="mw7 center avenir mv4">
                    <article className="mt4">
                        <div className="flex flex-column flex-row-ns">
                            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src="https://i.imgsafe.org/ec90a635b1.jpg" className="db" role="presentation"/>
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 avenir mt0 lh-title">Why Choose Pet Duet</h1>
                                <p className="f6 f5-l lh-copy">
                                    With Pet Duet, Veterinarians will be able to keep better track of the health record of the pets they care for. Upload a pet's information, a picture, and their owner's information and add medicine and procedures right to that pet's page.
                                </p>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="ph3 ph5-ns pt4 pb4 bg-dark-blue">
                    <article className="mw8 center br2 ba b--light-gray bg-dark-gray">
                        <div className="dt-ns dt--fixed-ns w-100">
                            <div className="pa3 pa4-ns dtc-ns v-mid">
                                <div>
                                    <h2 className="avenir fw4 blue mt0 mb3 tc">Try Pet Duet Today!
                                    </h2>
                                    <p className=" avenir white-80 measure lh-copy mv0 tc">
                                        See how Pet Duet can help you keep up-to-date
                                        <br></br>
                                        with your pet's health!
                                    </p>
                                </div>
                            </div>
                            <div className="pa3 pa4-ns dtc-ns v-mid">
                                <Link to="/" className="no-underline f6 tc db w-100 pv3 bg-animate bg-light-silver hover-bg-dark-blue white br2 avenir">Sign Up!</Link>
                            </div>
                        </div>
                    </article>
                </section>
                <Footer/>
            </div>
        )
    }
})

module.exports = About
