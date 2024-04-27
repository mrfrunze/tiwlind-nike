import {footerLogo} from "../assets/images"
import {copyrightSign} from "../assets/icons"
import {footerLinks, socialMedia} from "../constants"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex flex-wrap justify-between items-start gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={460} alt="logo" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {
              socialMedia.map(icon => {
                const {src, alt} = icon
                return (
                  <div key={icon.alt} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                     <img src={src} alt={alt} width={24} height={24} />
                  </div>
                 
                )
              })
            }
          </div>
        </div>
        <div className="flex flex-1 justify-between flex-wrap gap-20 lg:gap-10">
          {
            footerLinks.map(item => {
              const {links, title} = item
              return (
                <div key={title}>
                  <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                    {title}
                  </h4>
                  <ul>
                    {links.map(item => {
                        const {link, name} = item
                        return (
                          <li key={name} className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                            <a href={link}>{name}</a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyright sign" width={20} height={20} className="rounded-full m-0" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer