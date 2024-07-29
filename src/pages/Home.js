import NewsArea from '../components/News/newsArea';
import SocialArea from '../components/Social/socialArea';

import Banner from '../components/layout/banner';

function Home() {

  return (
    <div className="container">

      < Banner />

      <div className='gridContainer'>
        < NewsArea />

        < SocialArea />
      </div>
    </div>
  )
}

export default Home