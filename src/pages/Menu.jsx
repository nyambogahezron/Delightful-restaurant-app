import { FaBraille } from 'react-icons/fa';
import HeroImg from '../assets/images/hero-img.png';
const Menu = () => {
  return (
    <>
      <div id='menu' className='menu section-bg'>
        <div className='container-fluid'>
          <div className='title-container '>
            <div className='section-title'>Menu</div>
            <span>
              <FaBraille />
            </span>
          </div>
          {/* <Menu2 /> */}
          <p className='menu-min-title pt-3'>Check Our Tasty Menu</p>

          <div className='row mt-4 mb-4'>
            <div className='col-lg-12 d-flex justify-content-center'>
              <ul id='menu-filters'>
                <li className='filter-active'> All </li>
                <li> All </li>
                <li> All </li>
              </ul>
            </div>
          </div>

          <div className='row menu-container'>
            <div className='col-lg-6 menu-item'>
              <img src={HeroImg} className='menu-img' />
              <div className='menu-content'>
                <a href='#'>Lobster Bisque</a>
                <span>$5.95</span>
              </div>
              <div className='menu-ingredients '>
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======= Specials Section ======= */}
      <div id='specials' className='specials'>
        <div className='container'>
          <div className='title-container '>
            <div className='section-title'>Our Specials</div>
            <span>
              <FaBraille />
            </span>
          </div>
          <div className='row'>
            <div className='col-lg-3'>
              <ul className='nav nav-tabs flex-column'>
                <li className='nav-item'>
                  <a
                    className='nav-link active show'
                    data-bs-toggle='tab'
                    href='#tab-1'
                  >
                    Modi sit est
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' data-bs-toggle='tab' href='#tab-2'>
                    Unde praesentium sed
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' data-bs-toggle='tab' href='#tab-3'>
                    Pariatur explicabo vel
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' data-bs-toggle='tab' href='#tab-4'>
                    Nostrum qui quasi
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' data-bs-toggle='tab' href='#tab-5'>
                    Iusto ut expedita aut
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-lg-9 mt-4 mt-lg-0'>
              <div className='tab-content'>
                <div className='tab-pane active show' id='tab-1'>
                  <div className='row'>
                    <div className='col-lg-8 details order-2 order-lg-1'>
                      <h3>Architecto ut aperiam autem id</h3>
                      <p className='fst-italic'>
                        Qui laudantium consequatur laborum sit qui ad sapiente
                        dila parde sonata raqer a videna mareta paulona marka
                      </p>
                      <p>
                        Et nobis maiores eius. Voluptatibus ut enim blanditiis
                        atque harum sint. Laborum eos ipsum ipsa odit magni.
                        Incidunt hic ut molestiae aut qui. Est repellat minima
                        eveniet eius et quis magni nihil. Consequatur dolorem
                        quaerat quos qui similique accusamus nostrum rem vero
                      </p>
                    </div>
                    <div className='col-lg-4 text-center order-1 order-lg-2'>
                      <img
                        src='assets/img/specials-1.jpg'
                        alt=''
                        className='img-fluid'
                      />
                    </div>
                  </div>
                </div>
                <div className='tab-pane' id='tab-2'>
                  <div className='row'>
                    <div className='col-lg-8 details order-2 order-lg-1'>
                      <h3>Et blanditiis nemo veritatis excepturi</h3>
                      <p className='fst-italic'>
                        Qui laudantium consequatur laborum sit qui ad sapiente
                        dila parde sonata raqer a videna mareta paulona marka
                      </p>
                      <p>
                        Ea ipsum voluptatem consequatur quis est. Illum error
                        ullam omnis quia et reiciendis sunt sunt est. Non
                        aliquid repellendus itaque accusamus eius et velit ipsa
                        voluptates. Optio nesciunt eaque beatae accusamus lerode
                        pakto madirna desera vafle de nideran pal
                      </p>
                    </div>
                    <div className='col-lg-4 text-center order-1 order-lg-2'>
                      <img
                        src='assets/img/specials-2.jpg'
                        alt=''
                        className='img-fluid'
                      />
                    </div>
                  </div>
                </div>
                <div className='tab-pane' id='tab-3'>
                  <div className='row'>
                    <div className='col-lg-8 details order-2 order-lg-1'>
                      <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                      <p className='fst-italic'>
                        Eos voluptatibus quo. Odio similique illum id quidem non
                        enim fuga. Qui natus non sunt dicta dolor et. In
                        asperiores velit quaerat perferendis aut
                      </p>
                      <p>
                        Iure officiis odit rerum. Harum sequi eum illum corrupti
                        culpa veritatis quisquam. Neque necessitatibus illo
                        rerum eum ut. Commodi ipsam minima molestiae sed
                        laboriosam a iste odio. Earum odit nesciunt fugiat sit
                        ullam. Soluta et harum voluptatem optio quae
                      </p>
                    </div>
                    <div className='col-lg-4 text-center order-1 order-lg-2'>
                      <img
                        src='assets/img/specials-3.jpg'
                        alt=''
                        className='img-fluid'
                      />
                    </div>
                  </div>
                </div>
                <div className='tab-pane' id='tab-4'>
                  <div className='row'>
                    <div className='col-lg-8 details order-2 order-lg-1'>
                      <h3>
                        Fuga dolores inventore laboriosam ut est accusamus
                        laboriosam dolore
                      </h3>
                      <p className='fst-italic'>
                        Totam aperiam accusamus. Repellat consequuntur iure
                        voluptas iure porro quis delectus
                      </p>
                      <p>
                        Eaque consequuntur consequuntur libero expedita in
                        voluptas. Nostrum ipsam necessitatibus aliquam fugiat
                        debitis quis velit. Eum ex maxime error in consequatur
                        corporis atque. Eligendi asperiores sed qui veritatis
                        aperiam quia a laborum inventore
                      </p>
                    </div>
                    <div className='col-lg-4 text-center order-1 order-lg-2'>
                      <img
                        src='assets/img/specials-4.jpg'
                        alt=''
                        className='img-fluid'
                      />
                    </div>
                  </div>
                </div>
                <div className='tab-pane' id='tab-5'>
                  <div className='row'>
                    <div className='col-lg-8 details order-2 order-lg-1'>
                      <h3>
                        Est eveniet ipsam sindera pad rone matrelat sando reda
                      </h3>
                      <p className='fst-italic'>
                        Omnis blanditiis saepe eos autem qui sunt debitis porro
                        quia.
                      </p>
                      <p>
                        Exercitationem nostrum omnis. Ut reiciendis repudiandae
                        minus. Omnis recusandae ut non quam ut quod eius qui.
                        Ipsum quia odit vero atque qui quibusdam amet. Occaecati
                        sed est sint aut vitae molestiae voluptate vel
                      </p>
                    </div>
                    <div className='col-lg-4 text-center order-1 order-lg-2'>
                      <img
                        src='assets/img/specials-5.jpg'
                        alt=''
                        className='img-fluid'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
