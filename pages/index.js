import styles from "../styles/Home.module.css";
//this is the landing page of my project.
export default function Home() {
  return (
   <>
   
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/Rectangle2.png" className="bd-placeholder-img" width="100%" height="100%" alt="" />
              <div className="row">
                <div className="col-md-8">
                  <div className="container">
                    <div className="carousel-caption text-start">
                      <h1>Protecting your assets, protecting your future.</h1>
                      <p>Collide with our website which runs on <b>XRPL</b> which will be benefitail for 
                      farmers as well as you as a consumer</p>
                      <p><a className="btn btn-lg btn-primary" href="login/Login">Log In</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4" />
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/Rectangle3.png" className="bd-placeholder-img" width="100%" height="100%" alt="" />
              <div className="row">
                <div className="col-md-8">
                  <div className="container">
                    <div className="carousel-caption text-start">
                      <h1>Join our community.</h1>
                      <p><a className="btn btn-lg btn-primary" href="login/Login">Log In</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4" />
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/Rectangle4.png" className="bd-placeholder-img" width="100%" height="100%" alt="" />
              <div className="row">
                <div className="col-md-8">
                  <div className="container">
                    <div className="carousel-caption text-start">
                      <h1>Secure your crop details</h1>
                      <p>Register to gain some exciting knowledge about how our website works with XRPL</p>
                      <p><a className="btn btn-lg btn-primary" href="login/Login">Login</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4" />
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
        <section className="statistick_section">
          <div className="container">
            <div className="row">
              <div className="col-md-3 text-center">
                <div className="statistick">
                  <div className="statistick_icon">
                    <img src="/images/Group74.png" alt="" />
                  </div>
                  <div className="statistick_content">
                    <h3>1000+</h3>
                    <p className="card-title">Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="statistick">
                  <div className="statistick_icon">
                    <img src="/images/Group64.png" alt="" />
                  </div>
                  <div className="statistick_content">
                    <h3>1000+</h3>
                    <p className="card-title">Beneficiary</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="statistick">
                  <div className="statistick_icon">
                    <img src="/images/Group63.png" alt="" />
                  </div>
                  <div className="statistick_content">
                    <h3>1000+</h3>
                    <p className="card-title">Branches</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="statistick">
                  <div className="statistick_icon">
                    <img src="/images/Group62.png" alt="" />
                  </div>
                  <div className="statistick_content">
                    <h3>1000+</h3>
                    <p className="card-title">Enrollments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end Statistick Section */}
        {/* Service Section */}
        <section className="service_section">
          <div className="container">
            <h3 className="text-center">Our Available Services</h3>
            {/* devider */}
            <div className="row devider">
              <div className="col-md-4" />
              <div className="col-md-4 text-center">
                <div className="devider text-center">
                  <div className="devider_line" />
                  <div className="devider_line2" />
                </div>
              </div>
              <div className="col-md-4" />
            </div>
            <div className="row py-4">
              <div className="col-md-1 col-sm-1" />
              <div className="col-md-5 col-sm-6 text-center">
                <div className="card">
                  <div className="text-center">
                    <img src="/images/abroad1.png" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h6 >Farmer can register their crops</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-6 text-center">
                <div className="card ">
                  <div className="text-center">
                    <img src="/images/cow1.png" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h6 >Check  for crops details</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-1 col-sm-1" />
            </div>
          </div>
        </section>
        {/* End Service Section */}
        <section className="why_online_ins">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Why Agro-Chain on XRPL?</h2>
                {/* devider */}
                <div className="row devider">
                  <div className="col-md-6 text-center">
                    <div className="devider text-center">
                      <div className="devider_line" />
                      <div className="devider_line2" />
                    </div>
                  </div>
                  <div className="col-md-6" />
                </div>
                {/* end Devider */}
                <p>
                An agro chain on the XRP Ledger (XRPL) revolutionizes the agricultural industry with transparency,
               traceability, and security. XRPL's blockchain ensures real-time product tracking, reduces fraud, 
               and automates payments, benefiting all stakeholders from farmers to consumers. This innovation has
                the potential to transform the agro industry.
                </p>
                <ul>
                  <li><span className="list_text"><b>Your Faithful XRPL Partner</b></span></li>
                  <li><span className="list_text" /> <b>Transparency</b>: XRPL ensures real-time product tracking</li>
                  <li><span className="list_text" /><b>Trust Building</b>: Builds trust through traceability</li>
                  <li><span className="list_text" /><b>Sustainability</b>: Promotes sustainability in agriculture.</li>

                </ul>
                <a className="btn btn-lg btn-primary" href="login/Login">Know More</a>
              </div>
              <div className="col-md-6">
                <div className="why_online_img">
                  <img src="/images/Rectangle75.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* why ins section */}
        {/* Ins Step */}
        <section className="ins_step">
          <div className="container">
            <div className="row">
              <h2 className="text-center">Want to know how XRPL works? <br></br>03 Easy Steps To Go</h2>
              {/* devider */}
              <div className="row devider">
                <div className="col-md-4" />
                <div className="col-md-4 text-center">
                  <div className="devider text-center">
                    <div className="devider_line" />
                    <div className="devider_line2" />
                  </div>
                </div>
                <div className="col-md-4" />
              </div>
              {/* end Devider */}
              {/* step design */}
              <div className="row easy_step">
                <div >
                  <div className="row text-center">
                    {/* <div class="col-md-4"><span class="step1 step_circle_count">01</span></div>
            <div class="col-md-4"> <span class="step2 step_circle_count">02</span></div>
            <div class="col-md-4"> <span class="step3 step_circle_count">03</span></div> */}
                    <div className="col-md-4"> <img src="/images/step1.png" alt="" className="step_img" /> </div>
                    <div className="col-md-4"> <img src="/images/step2.png" alt="" className="step_img" /> </div>
                    <div className="col-md-4"> <img src="/images/step3.png" alt="" className="step_img" /> </div>
                  </div>
                </div>
              </div>
              <div className="row easy_step">
                <div className="step_design">
                  <div className="row text-center">
                    <div className="col-md-4"><span className=" step_circle" /></div>
                    <div className="col-md-4"> <span className=" step_circle" /></div>
                    <div className="col-md-4"> <span className=" step_circle" /></div>

                  </div>
                </div>
              </div>
              {/* step design */}
              <div className="col-md-4">
                <div className="card text-left">
                  {/* <img class="card-img-top" src="holder.js/100px180/" alt=""> */}
                  <div className="card-body">
                    <h4 className="card-title">Login to view working pages</h4>
                    <p className="card-text">When you scroll up you will see a person's icon on top right corner,
                    tab there to transit to login page. From there you can register or login if you have registered.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-left">
                  {/* <img class="card-img-top" src="holder.js/100px180/" alt=""> */}
                  <div className="card-body">
                    <h4 className="card-title">Go to Crop detail page</h4>
                    <p className="card-text">After logging into our website go the crop detail page and from there 
                    you will be able to view the form in which you can add your crop details in the from</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-left">
                  {/* <img class="card-img-top" src="holder.js/100px180/" alt=""> */}
                  <div className="card-body">
                    <h4 className="card-title">Check your crop details</h4>
                    <p className="card-text">After finish filling up the form without leaving any blank entries, 
                    you are good to go. You will be able to view your crop detail in view details section</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Ins Step */}
        {/* review */}
        <section className="review_section">
          <div className="container">
            <div className="row">
              <h2 className="text-center">What People Says About Us</h2>
              {/* devider */}
              <div className="row devider">
                <div className="col-md-4" />
                <div className="col-md-4 text-center">
                  <div className="devider text-center">
                    <div className="devider_line" />
                    <div className="devider_line2" />
                  </div>
                </div>
                <div className="col-md-4" />
              </div>
              {/* end Devider */}
            </div>
            {/* multi step carosel */}
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                  <div className="row text-">
                    <div className="col-md-6">
                      <div className="card review_card text-left">
                        <div className="text-">
                          <img src="/images/user.jpg" className="card-img-review" alt="..." />
                          <div className="my-2">
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                          </div>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Drukden Wangchuk Dorji</h4>
                          <p className="card-text">The Agro Chain on XRPL is a game-changer. It boosts
                           trust with transparency, reduces waste, and promotes sustainability. This
                          innovation sets new industry standards, creating a more sustainable,
                            fair, and consumer-friendly agricultural ecosystem. It's transformed my
                            food choices and the industry itself.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card review_card text-left">
                        <div className="text-">
                          <img src="/images/user1.jpg" className="card-img-review" alt="..." />
                          <div className="my-2">
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                          </div>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Pema Wangmo</h4>
                          <p className="card-text">The Agro Chain on XRPL is impressive.
                          Transparency and traceability enhance trust.Additionally, 
                          the system's efficiency in logistics has not only reduced waste 
                          but also promoted sustainability.  The fair 
                          marketplace benefits producers and consumers, reshaping the 
                          agricultural industry for the better.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <div className="row text-">
                    <div className="col-md-6">
                      <div className="card review_card text-left">
                        <div className="text-">
                          <img src="/images/user2.jpg" className="card-img-review" alt="..." />
                          <div className="my-2">
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                          </div>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Jigme Dema</h4>
                          <p className="card-text">The Agro Chain on XRPL is a game-changer
                          for consumers like me. Its transparency and traceability enhance
                          confidence in the products I buy, while the reduction in waste 
                          through improved logistics and sustainability practices leads to fresher, 
                          higher-quality produce. The fair marketplace benefits both farmers and consumers, 
                          setting new standards in the industry and improving the overall food experience.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card review_card text-left">
                        <div className="text-">
                          <img src="/images/user3.jpg" className="card-img-review" alt="..." />
                          <div className="my-2">
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                          </div>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Tenzin Drukdra</h4>
                          <p className="card-text">The Agro Chain on XRPL has made a significant 
                          impact on the agricultural industry from a consumer's perspective. 
                          Its transparency and traceability features provide a strong sense of trust, 
                          allowing me to easily trace the origins of the products I purchase. Moreover, 
                          the streamlined logistics promote sustainability, resulting in 
                          fresher and higher-quality produce.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row text-">
                    <div className="col-md-6">
                      <div className="card review_card text-left">
                        <div className="text-">
                          <img src="/images/user4.jpg" className="card-img-review" alt="..." />
                          <div className="my-2">
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                          </div>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Madam Sumchoe</h4>
                          <p className="card-text">Your website provides a comprehensive 
                          and informative overview of Agrochain on XRPL, showcasing its 
                          potential in the agricultural industry.The design is simple and 
                          easy to navigate, with a focus on task orientation and website functionality</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card review_card text-left">
                        <div className="text-">
                          <img src="/images/user5.jpg" className="card-img-review" alt="..." />
                          <div className="my-2">
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                          </div>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Dasho Tenzin</h4>
                          <p className="card-text">website offers a comprehensive and well-structured 
                          overview of Agrochain on XRPL, providing valuable insights into its potential 
                          applications in the agricultural industry.the web communicates
                          benefits and potential of Agrochain on XRPL to its target audience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
        {/* End review */}
        {/* Faq Section */}
        <section className="faq_section">
          <div className="container">
            <div className="row">
              <h2 className="text-center">Frequently Asked Questions</h2>
              {/* devider */}
              <div className="row devider">
                <div className="col-md-4" />
                <div className="col-md-4 text-center">
                  <div className="devider text-center">
                    <div className="devider_line" />
                    <div className="devider_line2" />
                  </div>
                </div>
                <div className="col-md-4" />
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      How to Register?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    When you scroll up you will see a person's icon on top right corner,
                    tab there to transit to login page. From there you can register or login if you have registered.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How to Fill-up The Information?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    After logging into our website go the crop detail page and from there 
                    you will be able to view the form in which you can add your crop details in the from
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      What’s The Benefits Of using this website?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    The Agro Chain on XRPL offers enhanced transparency, reduced fraud, and streamlined logistics in 
                    the agricultural industry. This results in cost savings, waste reduction, and fair compensation 
                    for stakeholders. Trust and authenticity are bolstered, creating a more equitable marketplace that 
                    benefits both producers and consumers, making it a transformative solution for the agricultural sector.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      How can we know if our crop is being registered or not?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    After finish filling up the form without leaving any blank entries, 
                    you are good to go. You will be able to view your crop detail in view details section. 
                    You can view and check if there is anything mis-written about your crop details.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Faq Section */}
        {/* brand logo  */}
        <section className="brand_logo_section">
          <div className="container">
            <div className="brands">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="lc-block">
                      <div id="carouselLogos" className="carousel slide pb-4" data-bs-ride="carousel">
                        <div className="carousel-inner px-5">
                          <div className="carousel-item">
                            <div className="row">
                              <div className=" col-sm-6 col-lg-2 align-self-center">
                                <img className="d-block w-100 px-3 mb-3" src="https://cdn.livecanvas.com/media/logos/11.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/2.png" alt="" />
                              </div>
                              <div className="  col-sm-6 col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/3.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/12.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/5.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/6.png" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item active">
                            <div className="row">
                              <div className=" col-sm-6 col-lg-2 align-self-center">
                                <img className="d-block w-100 px-3 mb-3" src="https://cdn.livecanvas.com/media/logos/11.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/2.png" alt="" />
                              </div>
                              <div className="  col-sm-6 col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/3.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/12.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/5.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/6.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*
                  <ol class="carousel-indicators position-relative mt-3">
                    <li data-bs-target="#carouselLogos" data-bs-slide-to="0" class="active bg-dark carousel-control-prev-icon"></li>
                    <li data-bs-target="#carouselLogos" data-bs-slide-to="1" class="bg-dark"></li>
                  </ol>
                  */}
                        <div className="w-100 px-3 text-center mt-4">
                          <a className="carousel-control-prev position-relative d-inline me-4" href="#carouselLogos" data-bs-slide="prev">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                              </path>
                            </svg>
                            <span className="visually-hidden">Previous</span>
                          </a>
                          <a className="carousel-control-next position-relative d-inline" href="#carouselLogos" data-bs-slide="next">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                              </path>
                            </svg>
                            <span className="visually-hidden">Next</span>
                          </a>
                        </div>
                      </div>
                    </div>{/* /lc-block */}
                  </div>{/* /col */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End brand logo  */}
   </>
  );
}
