import {motion ,AnimatePresence} from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import
{
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/config/motion';
const Home = () => {
  
  const snap =useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src="./public/threejs.png" 
            alt="logo" 
            className='w-8 h-8 object-contain'/>
          </motion.header>
          <motion.div className='home-content'{...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
           <h1 className='head-text'> 
           LET'S <br className='xl-block hidden' /> DO IT.
           </h1> 
          </motion.div>
          <motion-div>
            <p>
              Create your own Unique and exclusive shirt with our 
              brand new 3D Customization Tool. <strong> Unleash your Imagination

              </strong>{""} and define in your own style.
            </p>
          </motion-div>
          </motion.div>
        </motion.section>

      )}
    </AnimatePresence>
  )
}

export default Home