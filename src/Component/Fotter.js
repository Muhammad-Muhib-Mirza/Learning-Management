import style from "../Style/Fotter.module.css";

const Fotter = () => {
    return ( 
        <>
        <div className={ style.footer }>
            <div className={ style.footText }>
                Early Age Development
                <div className={ style.footSmall }>
                    The Place to Learn
                </div>
            </div>
        {/* <div className={ style.social }>
            <a href="http://">
            <img src="/insta.svg" alt="insta" className={` ${style.socialPic} ${ style.ipic } `} />
            </a>
            <a href="http://">
            <img src="/facebook.svg" alt="facebook" className={ style.socialPic } />
            </a>
            <a href="">
                <img src="/twitter.svg" alt="twitter" className={ style.socialPic } />
            </a>
        </div> */}
        <div className={ style.copyRight }>
        Copyright ©2024 All rights reserved by Early Age Development
        </div>
        </div>
        </>
     );
}
 
export default Fotter;