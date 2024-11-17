import {motion} from 'framer-motion'

export default function Lesson() {
  return (
    <div
      style={{
        width: "100vw",
        height: "70vh",
        backgroundColor:'#5FC6CD',
        display: "flex",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          margin: "auto",
          backgroundImage: "url('/Home/heroImage.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          display:'flex',
          alignItems:'flex-end',
          justifyContent:'center',
          backgroundPosition:'center'
        }}
      >
        <motion.a href="/type/browselessons" style={{backgroundColor:'#E67500',padding:'8px 8px 8px 8px',cursor:'pointer',color:'white',fontWeight:'700',borderRadius:'5px',marginBottom:'4%',marginRight:'1rem',width:'10rem',textAlign:'center',boxShadow:'2px 2px 2px 2px rgba(0,0,0,0.5)'}} whileHover={{scale:1.1,boxShadow:'2px 2px 2px 2px rgba(255,255,255,0.3)'}} whileTap={{scale:0.8}} >Browse Lessons</motion.a>
      </div>
    </div>
  );
}
